# On-Chain Auctions

One of the most important uses of the MTR token is to obtain MTRG to participate in safeguarding, governance, and growth of the Meter system. 

This is done via on-chain auctions that are automatically generated by the Meter system every 24 epochs \(roughly 24 hours\), as shown below. The only way to participate in these auctions is to use MTR as the bidding currency.   


![Meter&#x2019;s On-Chain Auction](https://lh6.googleusercontent.com/xdpa7KQAPyugvHA8QFDHRpyUjNoZUPr4oaW2NzZAKKkTy5RVNw19yT4r8CdKxtX0av_mQaggqZuO2e6xLSw8IgwLMcZevePdAo--aovUCdDdDfpbSUQTEugk_KYMDUNn2J70gOyT)

Participants bid MTR to acquire MTRG with no specific bidding price. However the Meter wallet provides an interface to show how many MTRs are received and the amount of MTRG offered for the current auctions. At the end of the 24th epoch, all participants acquire MTRG at the same price and the next auction begins. The majority of the MTR tokens from the proceeds of the auction will be put into the Meter reserve pool \(see below section for more information about the reserve\). The rest of the MTR tokens will be distributed to the validators as block rewards.  

The auction settlement price will be equal to Total MTR received / Total MTRG offered for auction. The total number of MTRG offered for auction is capped by the supply curve and then further reduced by the weighted average of the settlement price for the past 30 on-chain auctions.  If the average price is higher, more MTRG will be offered in the auction \(but can not exceed the cap\) and vice versa. 

There will also be a reserve price of 0.5 MTR / MTRG at launch. If the calculated auction settlement price is lower than the reserve price, the auction will settle at the reserve price. Any unsold MTRG tokens will be saved in a special foundation reserve account for future protocol and ecosystem development. The community can decide how to use these tokens, choose to change or remove the reserve price, and adjust the amount of MTRG distributed through auction via the governance process. 

