---
title: Governance Guide to Shimmer Firefly
description: A step-by-step guide to the Governance functionality in Shimmer Firefly
image: /img/learn/governance/shimmer-gov.png
keywords:
  - guide
  - Firefly
  - Shimmer
  - Governance
---

With the newest release, Shimmer Firefly enables decentralized voting with SMR tokens directly in the Wallet.

**Here is a step-by-step guide on how you use this new feature.**

### 1. Access the Governance Dashboard in the side menu

- From every Wallet overview, you have access to the new Governance dashboard

![FIrefly-wallet-overview](/img/learn/governance/Firefly-gov1.png)

### 2. The Governance Dashboard

**- Your Voting Power**

- Derived directly from your SMR tokens, every SMR token gives you 1 Voting Power

**- Governance Details**

- Total proposals: All proposals known to the node you are connected to
- Active proposals: All proposals that are currently in the "counting" phase
- Proposals you are voting on
- Total proposals you voted on
- Add Proposal: Here, you can add your custom proposals.

**- Proposal overview**

- Displays all proposals the node has in its database
  - default sorted by phases: Starting with "announcement", then "voting open", then "counting," then "closed". You can filter and sort proposals by type, phase, participation and order or search for proposals by name.

![Firefly-governance-overview](/img/learn/governance/Firefly-gov2.png)

### 3. Manage your Voting Power

To vote on a proposal, you must tell the Wallet how many SMR tokens you want to use in governance.

- Click on "Manage Voting Power"
- Type in the amount, or use the slider to decide how much of your SMR tokens you want to use in Governance votes. You can change this amount at any time later on.

![manage-voting-power](/img/learn/governance/Firefly-gov3.png)

- Confirm your decision

![confirm-voting-power](/img/learn/governance/Firefly-gov4.png)

The amount of SMR tokens you choose for governance are now transferred to a separate output and can only be used for governance now. If you want to send them out of your Wallet, or use them for anything else you will have to remove them from the governance output by reducing your voting power.

### 4. Vote on a proposal

- You can only vote on proposals in the "voting open" or "counting" phase.
- A Proposal can consist of several questions, and every question can have up to 10 answers. Answers can have additional information shown in a tooltip accessible by clicking on the little "**I**" at the end of the bar.

![select-proposal](/img/learn/governance/Firefly-gov5.png)

- You are free to participate in all or only a subset of the questions of a proposal. Not participating will automatically count as "Abstain".
- Click on the answer you want to choose and then use the "vote" button.
- Confirm your decision

![vote-on-proposal](/img/learn/governance/Firefly-gov6.png)

Voting on proposlas as long as they are only in the "voting open" phase does not yet lead to counting of votes. In this phase, you can always change your opinion without any outcome on the final amount of votes counted for you.
Once a proposal has reached the "counting" phase, the Tokens you have allocated for governance are counted and accumulated for the answers you choose every 5 seconds. This means the counted votes for you increase every 5 seconds by the amount of voting power you have allocated.

![show-voted](/img/learn/governance/Firefly-gov7.png)

Once you have voted on proposals, the Governance Dashboard will indicate in which ones you are actively participating:

![show-active-voting](/img/learn/governance/Firefly-gov8.png)

### 5. Change / reduce voting power

Once you are actively voting on proposals but wish to either free some tokens to use ot for something else. or add more tokens to your voting power, you can easily do this by using the "Manage voting power function" again.

- Reduce your Voting power using the slider or type it in the field

![reduce-voting-power](/img/learn/governance/Firefly-gov9.png)

- Confirm

![confirm-reduce](/img/learn/governance/Firefly-gov10.png)

- And because reducing the voting power stopps your current votes, revote with one click on all proposals with the new voting power.

![revote-voting-power](/img/learn/governance/Firefly-gov11.png)

### 6. Adding custom community proposals to Firefly

To enable decentralized governance, you can also use Firefly to vote on proposlas that are not added to the official IOTA Foundation nodes to which the Firefly Wallet connects by default.
Every community can theoretically use the Firefly Wallet and ask SMR token holders to decide on proposals. Therefore those proposals need to be added to a Hornet node (via the hornet dashboard), and then the user can tell Firefly to display this proposal to enable voting on it.

- Click on "Add Proposals"

![add-custom-proposla](/img/learn/governance/Firefly-gov12.png)

Add the URL of the node you want Firefly to connect to and the proposal ID of the proposal you wish to add.

![add-cusom-event](/img/learn/governance/Firefly-gov13.png)

- Click confirm. Firefly will now connect to this custom node, load the proposal information and add the proposal to the dashboard.
