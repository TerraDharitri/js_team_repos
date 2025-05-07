Here's a clear step-by-step guide for documenting how to **set up the `.env` file** with a **mnemonic** and an **Infura API key** for running the `drt-bridge-eth-sc-sol` (based on `hardhat` and `ethers`):

---

## 🛠️ Setup: Running `drt-bridge-eth-sc-sol` With Hardhat

### 1. ✅ Prerequisites

Ensure you have:

* Node.js & npm installed
* `hardhat` installed (`npm install --save-dev hardhat`)
* `.env` support (`dotenv` or use `process.env`)
* Internet connection (for Infura)

---

### 2. 🧠 Step-by-Step: Creating Your `.env` File

#### 📦 Inside `drt-bridge-eth-sc-sol/` root directory, create a `.env` file:

```bash
touch .env
```

#### ✍️ Populate `.env` with:

```env
MNEMONIC="moral volcano peasant pass circle pen over picture an film husband gravity behind test tiger improve"
INFURA_API_KEY=YOUR_INFURA_API_KEY
```

Replace `YOUR_INFURA_API_KEY` with your actual key from the next step.

---

### 3. 🌐 Getting Your Infura API Key

Infura provides Ethereum RPC endpoints used by Hardhat for forking, deploying, or reading from Ethereum networks.

#### 🔧 Steps:

1. Go to [https://infura.io/](https://infura.io/)
2. Sign up or log in.
3. Create a new project (e.g., name it "drt-bridge").
4. Inside the project:

   * Go to **Settings** or **Keys**
   * Copy the **API key (Project ID)**.
   * (Optional: If using Rinkeby, Goerli, or Sepolia, ensure it's enabled)

---


