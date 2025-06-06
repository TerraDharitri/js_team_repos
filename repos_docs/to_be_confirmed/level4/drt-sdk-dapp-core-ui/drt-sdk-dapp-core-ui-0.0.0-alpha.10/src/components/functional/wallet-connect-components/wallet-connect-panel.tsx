import { Component, Element, forceUpdate, h, Method, Prop, State, Watch } from '@stencil/core';
import { SidePanelSideEnum } from 'components/visual/side-panel/side-panel.types';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';
import type { IEventBus } from 'utils/EventBus';

import type { IWalletConnectPanelData } from './wallet-connect-panel.types';
import { WalletConnectEventsEnum } from './wallet-connect-panel.types';
import { WalletConnectBase } from './WalletConnectBase';

@Component({
  tag: 'drt-wallet-connect-panel',
  styleUrl: 'wallet-connect-panel.css',
  shadow: true,
})
export class WalletConnectPanel {
  @Element() hostElement: HTMLElement;

  @Prop() data: IWalletConnectPanelData = {
    wcURI: '',
  };

  @State() qrCodeSvg: string = '';
  @State() isOpen: boolean = false;

  private walletConnectBase: WalletConnectBase = new WalletConnectBase(this.data);

  componentDidLoad() {
    this.walletConnectBase.subscribeEventBus(this.getEventBusSubscription());
    this.walletConnectBase.eventBus.subscribe(WalletConnectEventsEnum.OPEN_WALLET_CONNECT_PANEL, this.handleOpen.bind(this));
    this.walletConnectBase.eventBus.subscribe(WalletConnectEventsEnum.CLOSE_WALLET_CONNECT_PANEL, this.onClose.bind(this, { isUserClick: false }));
  }

  disconnectedCallback() {
    this.walletConnectBase.unsubscribeEventBus(this.getEventBusSubscription());
    this.walletConnectBase.eventBus.unsubscribe(WalletConnectEventsEnum.OPEN_WALLET_CONNECT_PANEL, this.handleOpen.bind(this));
    this.walletConnectBase.eventBus.unsubscribe(WalletConnectEventsEnum.CLOSE_WALLET_CONNECT_PANEL, this.onClose.bind(this, { isUserClick: false }));
  }

  handleOpen() {
    this.isOpen = true;
  }

  handleClose() {
    this.isOpen = false;
    this.onClose({ isUserClick: true });
  }

  onClose(props = { isUserClick: true }) {
    this.isOpen = false;

    if (props.isUserClick) {
      this.walletConnectBase.eventBus.publish(WalletConnectEventsEnum.CLOSE_WALLET_CONNECT_PANEL);
    }
  }

  @Method() async getEventBus(): Promise<IEventBus> {
    return this.walletConnectBase.getEventBus();
  }

  private getEventBusSubscription() {
    return {
      closeFn: () => this.onClose({ isUserClick: false }),
      forceUpdateFn: () => {
        this.data = this.walletConnectBase.data;
        forceUpdate(this);
      },
    };
  }

  @Watch('data')
  async onDataChange(data: IWalletConnectPanelData) {
    if (data.wcURI) {
      this.qrCodeSvg = await this.walletConnectBase.generateSVG(data.wcURI);
    }
  }

  render() {
    return (
      <drt-side-panel isOpen={this.isOpen} side={SidePanelSideEnum.RIGHT} panelClassName="wallet-connect-side-panel" onClose={this.handleClose.bind(this)}>
        <div class="wallet-connect-container">
          <div class="wallet-connect-header">
            <h2 data-testid={DataTestIdsEnum.walletConnetModalTitle}>xPortal Mobile Wallet</h2>
            <h4 data-testid={DataTestIdsEnum.walletConnetModalSubtitle}>Scan this QR code with your app</h4>
          </div>
          <drt-wallet-connect-body qrCodeSvg={this.qrCodeSvg} />
        </div>
      </drt-side-panel>
    );
  }
}
