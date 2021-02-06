## Data processing and visualization task

Hello!
This folder contains 3 JSON files:

`data.json` - includes timestamped `ask`/`bid` quotes for two assets.

```json
  "1577836984218": {
    "assetA": { "ask": 7177.9, "bid": 7177.77 },
    "assetB": { "ask": 7158, "bid": 7157.75 }
  }
```
The above data point means that at timestamp `1577836984218`, it was possible to buy `assetA` for 7177.9 and `assetB` for 7158, and to sell `assetA` for 7177.77 and `assetB` for 7157.75

`tradesAO.json` and `tradesAS.json` - which represent the actions of two different traders - include timestamped `buy` and `sell` actions for the two assets.

```json
 {
    "time": 1577836984218,
    "actions": ["sellA", "buyB"]
  }
```
The above data point from `tradesAS.json` means that at timestamp `1577836984218`, trader `AS` sold one unit of `assetA` and bought one unit of `assetB`.

Together, these two data points mean that at timestamp `1577836984218`, trader AS sold 1 unit of `assetA` for 7177.77 and bought 1 unit of `assetB` for 7158.
This means that the trader then had 1 less unit of `assetB`, 1 more unit of `assetA`, and 19.77 more cash.
Notice that a trader can have a negative amount of asset units, or negative amount of cash.

---

Below is a list of tasks. Please complete tasks 1 and 2, and one, of your choice, out of 3, 4, and 5.
Choose whatever Languages and technologies you want, as long as they can be used to present the results in a web browser.
Output should include the visuals described below, the code required to generate them, and any instructions needed for doing so.

Tasks:
1 - Plot the change in value over time of the two assets. The value of an asset at a certain point in time can be defined as the average of the `ask` and `bid` quotes.
2 - Plot the amount of each asset and cash a trader has over time. Remember that the trader can have a negative amount of an asset or cash.
3 - Plot the PnL of a trader over time. PnL is defined as the cash the trader holds, plus the value they'll get for selling all of their assets at that moment, minus the value they'll have to pay to buy any asset they owe (have negative amount of).
4 - Plot the trades themselves over time. Distinguish `buy` and `sell` trades, and `assetA` and `assetB` trades.
5 - Implement a different task/feature you think is important or interesting considering the data and it's visualization.

Please answer shortly:
* Why did you pick your languages/technologies for the tasks?
* Can you say anything about the behaviour or results of the two traders?
* Can you say anything about the relation between the two assets?
* Is there anything else you'd want to implement given more time?

Feel free to add any thoughts or ideas you have about the data, its meaning, or the visualization of it.

Thanks!

