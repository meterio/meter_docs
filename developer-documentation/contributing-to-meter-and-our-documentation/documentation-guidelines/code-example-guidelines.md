# Code Example Guidelines

Code examples are generally succinct but fully functional applications. All development tutorials involving code should have a matching example that is available for reference or download. Smaller snippets of the example code are then used in the tutorial to guide a developer through the steps to complete the application.

More fully-featured and less succinct examples may be alternatively called a demo. The purpose of a demo may be as more of a showcase for what can be achieved, or accompany an article, and a corresponding tutorial might not be a necessity. However, the code can still provide value as a reference tool for developers, even without any article or tutorial that references it.

As with API documentation, examples should be written with `meterify` in mind, such as naming conventions. This may primarily come up with variables. To maintain consistency, all examples should use the following for including the necessary dependencies:

**Right way:**

```javascript
const meter = require("meterify").meterify;
const Web3 = require("web3");
const meterify = meter(new Web3(), "http://test.meter.io:8669");
```

**Wrong way:**

```javascript
const meterify = require("meterify").meterify;
const Web3 = require("web3");
const web3 = meterify(new Web3(), "http://test.meter.io:8669");
```

