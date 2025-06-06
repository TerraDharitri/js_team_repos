import React from 'react';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { CopyButton } from '@terradharitri/sdk-dapp/dist/UI/CopyButton';
import BigNumber from 'bignumber.js';
import classNames from 'classnames';

import { EndpointDefinitionList, Code } from 'components';
import { useSCExplorerContext } from 'contexts';
import { withStyles } from 'hocs/withStyles';
import { EndpointOutputUIType } from 'types';

export const EndpointOutputComponent = (props: EndpointOutputUIType) => {
  const { output, result, globalStyles, styles } = props;
  const { icons } = useSCExplorerContext();
  const { copyIcon = faCopy } = icons ?? {};

  if (!output || output.length === 0) {
    return null;
  }

  return (
    <div className={classNames(styles?.endpointOutput, globalStyles?.panel)}>
      <div className={classNames(globalStyles?.panelMode)}>Output</div>
      <div className={classNames(globalStyles?.panelContentWrapper)}>
        <div className={classNames(globalStyles?.panelContentWrapperRow)}>
          <div className={classNames(globalStyles?.panelContent)}>
            <EndpointDefinitionList definitions={output} />

            {result?.parsedResponse?.values &&
              result.parsedResponse.values.length > 0 && (
                <div className={classNames(styles?.endpointOutputResults)}>
                  <span
                    className={classNames(styles?.endpointOutputResultsTitle)}
                  >
                    Query Result:{' '}
                  </span>
                  {result.parsedResponse?.values.map((value, index) => {
                    const displayValue = value?.valueOf();
                    if (
                      displayValue !== null &&
                      (typeof displayValue === 'object' ||
                        Array.isArray(displayValue))
                    ) {
                      const code = JSON.stringify(
                        displayValue,
                        (key, val) => {
                          try {
                            if (
                              typeof val === 'number' ||
                              !isNaN(Number(val)) ||
                              BigNumber.isBigNumber(val)
                            ) {
                              return new BigNumber(val).toFixed();
                            }

                            return val;
                          } catch (error) {
                            return val;
                          }
                        },
                        2
                      );

                      return (
                        <div
                          className={classNames(globalStyles?.codeBlock)}
                          key={index}
                        >
                          <div
                            className={classNames(globalStyles?.buttonHolder)}
                          >
                            <CopyButton
                              text={code}
                              className={classNames(globalStyles?.copyButton)}
                              copyIcon={copyIcon}
                            />
                          </div>
                          <Code
                            className={classNames(
                              globalStyles?.endpointOutputResultsCode
                            )}
                            code={code}
                            showLineNumbers={false}
                            language='properties'
                          />
                        </div>
                      );
                    } else {
                      return (
                        <code
                          key={index}
                          className={classNames(
                            styles?.endpointOutputResultsString
                          )}
                        >
                          {displayValue === ''
                            ? '<empty string>'
                            : String(displayValue)}
                        </code>
                      );
                    }
                  })}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const EndpointOutput = withStyles(EndpointOutputComponent, {
  ssrStyles: () => import('components/Forms/EndpointForm/styles.module.scss'),
  clientStyles: () =>
    require('components/Forms/EndpointForm/styles.module.scss').default
});
