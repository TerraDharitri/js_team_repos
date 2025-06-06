import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import { Component, h, Prop, State } from '@stencil/core';
import { copyToClipboard } from 'utils/copyToClipboard';

@Component({
  tag: 'drt-copy-button',
  styleUrl: 'copy-button.css',
})
export class CopyButton {
  @Prop() class?: string = 'copy-button';
  @Prop() iconClass?: string = 'copy-button-icon';
  @Prop() copyIcon?: IconDefinition;
  @Prop() successIcon?: IconDefinition;
  @Prop() text: string;

  @State() isSuccess: boolean = false;

  private timeoutId: number | undefined;

  private handleClick = async (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const trimmedText = this.text ? this.text.trim() : this.text;
    const success = await copyToClipboard(trimmedText);

    this.isSuccess = success;

    if (success) {
      this.timeoutId = window.setTimeout(() => {
        this.isSuccess = false;
      }, 1000);
    }
  };

  disconnectedCallback() {
    // Clear the timeout if the component is unmounted
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined; // Reset the timeout ID
    }
  }

  render() {
    const copyIcon = this.copyIcon ?? faCopy;
    const successIcon = this.successIcon ?? faCheck;

    return (
      <a href="/#" class={this.class} onClick={this.handleClick}>
        <drt-fa-icon icon={this.isSuccess ? successIcon : copyIcon} class={this.iconClass}></drt-fa-icon>
      </a>
    );
  }
}
