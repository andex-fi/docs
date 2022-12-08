---
id: integration-issues
title: Token Integration Issues
sidebar_position: 4
---

Fee-on-transfer and rebasing tokens may not function correctly on Andex. Sui Network and the Move language generally are still new and evolving technologies so it may take longer time before there are generally accepted standards for implementation of unique type of coins.

## Fee-on-transfer Tokens

Fee-on-transfer tokens may not function with our router contracts. As a workaround, the token creators may create a token wrapper or a customized router.

## Rebasing Tokens

Rebasing tokens will succeed in pool creation and swapping, but liquidity providers will bear the loss of a negative rebase, with no way to recover the loss.
