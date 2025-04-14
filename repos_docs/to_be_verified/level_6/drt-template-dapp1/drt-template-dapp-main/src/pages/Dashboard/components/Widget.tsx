import { Card } from 'components/Card';
import { getCallbackRoute } from 'utils/getCallbackRoute';
import { WidgetType } from 'types/widget.types';
import { useIsWebProvider } from 'hooks';

export const Widget = ({
  title,
  description,
  reference,
  anchor,
  widget: DrtWidget,
  props = {}
}: WidgetType) => {
  const { isWebProvider } = useIsWebProvider();
  const callbackRoute = anchor
    ? getCallbackRoute({ anchor, isWebProvider })
    : '';

  return (
    <Card
      title={title}
      description={description}
      reference={reference}
      anchor={anchor}
    >
      <DrtWidget callbackRoute={callbackRoute} {...props} />
    </Card>
  );
};
