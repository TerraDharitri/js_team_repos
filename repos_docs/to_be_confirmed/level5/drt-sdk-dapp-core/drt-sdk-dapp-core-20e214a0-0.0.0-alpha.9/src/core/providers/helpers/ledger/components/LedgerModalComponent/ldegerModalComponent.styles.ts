import { css } from 'lit';

export const ledgerStyles = css`
  .modal {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .modal-content {
    background-color: #ffffff;
    margin: 5% auto;
    padding: 20px;
    border-radius: 12px;
    width: 90%;
    max-width: 600px;
  }
  .modal-header {
    text-align: center;
    margin-bottom: 20px;
  }
  .close {
    float: right;
    cursor: pointer;
    padding: 5px;
  }
  .account-list {
    width: 100%;
    min-height: 300px;
    position: relative;
  }
  .account-row {
    display: flex;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 8px;
    cursor: pointer;
  }
  .account-row:hover {
    background-color: #f5f5f5;
  }
  .address {
    flex: 2;
    font-family: monospace;
  }
  .balance {
    flex: 1;
    text-align: right;
  }
  .index {
    flex: 0 0 30px;
    text-align: right;
  }
  .navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .access-button {
    display: block;
    width: 200px;
    margin: 20px auto;
    padding: 12px;
    background-color: #1a56db;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  .access-button:disabled {
    background-color: #a1a1a1; /* Muted gray */
    color: #e0e0e0; /* Lighter text color */
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none;
    transform: none;
  }
  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .spinner::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
