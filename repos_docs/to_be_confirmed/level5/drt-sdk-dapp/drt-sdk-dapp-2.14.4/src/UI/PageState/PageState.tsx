import React, { ReactNode } from 'react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { WithClassnameType } from '../types';

import styles from './pageState.styles.scss';

// TODO: Rename to "PageStatePropsType" when sdk-dapp@3.0.0
export interface PageStateProps extends WithClassnameType {
  title?: ReactNode;
  icon?: IconProp | IconDefinition | null;
  iconClass?: string;
  dataTestId?: string;
  iconSize?: SizeProp;
  iconBgClass?: string;
  action?: ReactNode;
  description?: string | ReactNode;
}

export const PageState = ({
  icon,
  title,
  action,
  iconClass,
  dataTestId,
  description,
  iconBgClass,
  iconSize = '5x',
  className = 'dapp-page-state'
}: PageStateProps) => {
  const classes = {
    wrapper: classNames(
      styles.state,
      globalStyles.mAuto,
      globalStyles.p4,
      globalStyles.textCenter,
      className
    ),
    iconContainer: classNames(globalStyles.iconState, globalStyles.mxAuto, {
      [iconBgClass ?? '']: Boolean(iconBgClass)
    }),
    iconClass: classNames(iconClass != null && iconClass),
    title: classNames(globalStyles.h4, globalStyles.my4),
    description: globalStyles.mb3
  };

  return (
    <div className={classes.wrapper} data-testid={dataTestId}>
      {icon && (
        <span className={classes.iconContainer}>
          <FontAwesomeIcon
            icon={icon}
            className={classes.iconClass}
            size={iconSize}
          />
        </span>
      )}

      {title && <p className={classes.title}>{title}</p>}

      {description && <div className={classes.description}>{description}</div>}

      {action}
    </div>
  );
};
