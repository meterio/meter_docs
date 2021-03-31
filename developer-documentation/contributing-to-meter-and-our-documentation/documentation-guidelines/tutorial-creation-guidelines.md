# Tutorial Creation Guidelines

The value of tutorials as an instructional tool cannot be underestimated. Tutorials help guide a reader through a sequence of instructional steps, including relevant and informative explanations, in a way that other types of content are not designed for.

Writing attention-grabbing tutorials that provide a solution to a clearly identified problem or challenge is important for Meter technical documentation. The objective is to explain how to accomplish a set of tasks that works towards developing the solution, and also why each step or instruction is important. Explanations should be brief, informative, and focused on the main topic.

This guide is provided to ensure writers are equipped to create clear and interesting Meter specific tutorials, for both [development](../../meter-dapp-tutorials.md) and non-development purposes such as [mining](../../../mining/meter-mining-guide.md). It will outline some important features of tutorials, and include best practices, but is a work in progress. There is a lot that goes into tutorial writing, and as this guide further develops, this will become a more robust tutorial in itself.

* [Audience](https://docs.meter.io/contributing/tutorials-guidelines.html#audience)
* [Structure](https://docs.meter.io/contributing/tutorials-guidelines.html#structure)
* [Use of Examples](https://docs.meter.io/contributing/tutorials-guidelines.html#use-of-examples)

## Audience

Avoid promoting generic third-party tools that don't add much value in the context of Meter. 

For example, you may safely assume that the reader is already a developer familiar with code editors and syntax highlighting, so there is no need to mention these topics. However, something that is blockchain-centric and can make the reader's job easier when it comes to the specifics of the Meter blockchain may be worthwhile suggesting. It might even be worth writing a full tutorial about how to use it in a Meter context. 

An example of this could be an IDE that is focused on `web3`, which would likely then be relevant for `meterify` as well.

## Structure

Tutorials have three main sections: an introduction, a body, and a conclusion. 

The introduction should begin with a problem statement or an objective and describe a proposed solution. It should be 2 or 3 paragraphs long. This does not include any table of contents, which should also be included in the same section, just before the tutorial body.

The body is where to include sub-headings representing the sequential steps of the tutorial. It might also include other sub-headings, such as those that provide links to further reading. These sub-headings should be arranged in sequence, starting off small, and then building up the knowledge necessary to understand the final product.

A concluding statement at the end should be one paragraph long. It should be a review of the tutorial to help consolidate what the reader has learned, and insight into how the solution solves the original problem. The conclusion can also provide one or more links for further reading.

## Use of Examples

Tutorials address the need for better context than is typically possible with the API documentation alone. Building an example, showing each sequential modification, and explaining each step, is a great tutorial strategy. It helps to organize the overall flow of the tutorial, delivers the necessary context, and is an opportunity to provide insight into how each step fits into the overall objective.

Tutorials for developers will almost always focus on the use of `meterify`, and therefore should almost always correspond to a working [code example](code-example-guidelines.md). There may however be topics of interest to a developer that are less code related, or perhaps not specific to `meterify`, and therefore will not require any code example. 

One example might be a tutorial for using a development tool or framework that is compatible with `meterify` development. Relevant code snippets within the tutorial itself may suffice in that type of scenario, rather than including a corresponding example as well.

Keep the code blocks short, representing only the portions of code relevant to that step. Put a link to the full working example code somewhere at the start of the tutorial. This is convenient for the reader to see what the end result is going to look like before they start any further reading. And above all, make sure the example works.

