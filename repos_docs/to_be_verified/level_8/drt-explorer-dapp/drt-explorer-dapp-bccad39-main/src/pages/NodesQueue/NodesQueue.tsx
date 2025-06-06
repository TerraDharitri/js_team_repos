import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Loader,
  Pager,
  PageSize,
  PageState,
  NodesTable,
  TableSearch
} from 'components';
import {
  useAdapter,
  useGetNodeFilters,
  useGetPage,
  useGetSearch,
  useGetSort
} from 'hooks';
import { faCogs } from 'icons/regular';
import { NodesTabs } from 'layouts/NodesLayout/NodesTabs';
import { NodeType, SortOrderEnum } from 'types';

export const NodesQueue = () => {
  const ref = useRef(null);
  const { search: searchLocation } = useLocation();
  const { getNodes, getNodesCount } = useAdapter();
  const { search } = useGetSearch();
  const { page, size } = useGetPage();
  const nodeFilters = useGetNodeFilters();
  const sort = useGetSort();
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [totalNodes, setTotalNodes] = useState<number | '...'>('...');
  const [dataReady, setDataReady] = useState<boolean | undefined>();

  if (!sort.sort) {
    sort.sort = 'position';
    sort.order = SortOrderEnum.asc;
  }

  const fetchNodes = () => {
    const queryObject = {
      ...nodeFilters,
      ...sort,
      search,
      type: 'validator',
      status: 'queued'
    };
    setDataReady(undefined);

    Promise.all([
      getNodes({ ...queryObject, page, size }),
      getNodesCount(queryObject)
    ]).then(([nodesData, count]) => {
      setNodes(nodesData.data);
      setTotalNodes(count.data);

      if (ref.current !== null) {
        setDataReady(nodesData.success && count.success);
      }
    });
  };

  useEffect(fetchNodes, [searchLocation]);

  return (
    <div className='card position-unset' ref={ref}>
      <div className='card-header position-unset'>
        <NodesTabs />

        <div className='card-header-item table-card-header d-flex justify-content-between align-items-center flex-wrap gap-3'>
          <TableSearch
            className='input-group-search'
            searchValue={totalNodes}
            placeholderText='node'
          />
          {dataReady === true && (
            <Pager
              total={totalNodes}
              className='d-flex ms-auto me-auto me-sm-0'
              show
            />
          )}
        </div>
      </div>

      {dataReady === undefined && <Loader />}
      {dataReady === false && (
        <PageState icon={faCogs} title='Unable to load Nodes' isError />
      )}

      {dataReady === true && (
        <>
          <div className='card-body'>
            <NodesTable queue>
              <NodesTable.Body nodes={nodes} queue />
            </NodesTable>
          </div>
          <div className='card-footer table-footer'>
            <PageSize />
            <Pager total={totalNodes} show />
          </div>
        </>
      )}
    </div>
  );
};
