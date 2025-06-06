export interface DappModalConfig {
  customModalFooter?: JSX.Element;
  customModalHeader?: JSX.Element;
  footerText?: string;
  headerText?: string;
  modalBodyClassName?: string;
  modalCloseButtonClassName?: string;
  modalContentClassName?: string;
  modalDialogClassName?: string;
  modalFooterClassName?: string;
  modalHeaderClassName?: string;
  modalHeaderTextClassName?: string;
  showFooter?: boolean;
  showHeader?: boolean;
}

export interface DappModalInteractionConfig {
  openOnMount?: boolean;
  visible?: boolean;
}
