# Documentation Guidelines

Meter maintains a set of standard guidelines for our technical documentation. The objective is to maintain quality and consistency in delivering important and useful information for persons in need of technical guidance. These include, among other things, the style, tone, formatting procedures for the documentation as a whole, and the unique requirements of specific kinds of content.

## Overview

Gitbook can accept many forms of documentation input, including markdown, Word, HTML, and more. 

Each documentation file resides in the `source` sub-directory, with the format `filename.html.md`.

### File Naming

The naming convention for each of these files should correspond as closely to the title of the document as possible. It should be all lowercase \(except in special circumstances\), use hyphens for spaces, and include no special other characters. No greater than 24 characters should be used for the filename, not including the `.html.md` file extension and hyphens.

### Navigation and Structure

The file structure should remain as flat as possible, with no more than one sub-directory representing an important high level topic or documentation section. Examples of this include `api`, `tutorials`, and `contributing`. The top level `source` directory, and all sub-directories underneath it, should include an `index.html.md` file that provides a general overview of that section.

### Publishing

It will often be useful for contributors to build the documentation locally, to see if their modifications have no errors, and conform to the standards. This is a relatively straightforward procedure by running the following command:

```text
$ bundle exec middleman build --clean
```

Middleman will take the name conforming Markdown files located in the `source` sub-directory, and then generate static documentation in the `build` sub-directory. Those static HTML files can be opened in a browser without any need for a server.

## Use of Markdown

There is nothing specifically unique about Gitbook's use of Markdown, other than to make note about the ordering of code blocks and sections. The [Outline of a Page](./#outline-of-a-page) section that follows should contain sufficient examples for how to use Markdown for Meter docs. If additional guidance is required, check out Gitbook's [markdown documentation.](https://docs.gitbook.com/editing-content/markdown)

## Outline of a Page

Every page will include the following:

1. A [meta-data section](https://docs.meter.io/contributing/documentation-guidelines.html#meta-data-section) at the very top of the source document.
2. A [page title](https://docs.meter.io/contributing/documentation-guidelines.html#page-title).
3. A [summary overview](https://docs.meter.io/contributing/documentation-guidelines.html#summary-overview).
4. A [body section](https://docs.meter.io/contributing/documentation-guidelines.html#body-section).
5. [Code blocks and command line examples](https://docs.meter.io/contributing/documentation-guidelines.html#code-and%20command-line) \(where relevant\)

### Meta-Data Section

The meta-data section includes details such as title, language tabs \(e.g. for code samples\), links to other documents, and whether to include search on the page or not. 

This section is written in Yaml as follows:

```text
---
title: Name of the document

language_tabs:
  - javascript

toc_footers:
- <a href='./index.html'>Documentation Home</a>
- A Top Level Topic
- <a href='./another-doc.html'>Another Document</a>
- <a href='./yet-another.html'>Yet Another</a>
- <a href='./and-yet-another.html'>And Yet Another</a>
- <hr>
- A Different Top Level Topic
- <a href='./different-top-level-topic/index.html'>Topic Overview</a>
- <a href='./different-top-level-topic/more-on-topic.html'>More on the Topic</a>
- <hr>  
- <a href='https://www.meter.io/external-link/'>An Important External Link</a>
- <a href='https://www.meter.io'>Meter.io</a>

search: true
---
```

#### Title

See [Page Title](./#page-title)

#### **Navigation**

While just about any HTML can be used in the `toc_footers` meta data, for Meter this should only ever include relative links, external links, links to anchors within a page, text for section titles, and section dividers \(hr tags\). The table of contents can be adjusted for each page individually, but should follow some convention.

The navigation should always include all top level topics within the documentation. Therefore, at the very least a link to that topic's main index page should be included within the `toc_footers`. When the current document belongs to a particular topic \(e.g. `API Documentation`\), the topic is considered to be the active one. That document and all other documents that belong to that topic should also be included in `toc_footers`. Inactive topics might also include noteworthy links, as well as its index page.

```text
toc_footers:
- <a href='./index.html'>Documentation Home</a>
- First Topic
- <a href='./first-topic/index.html'>First Topic</a>
- <a href='./first-topic/the-active-document.html'>The Active Document</a>
- <a href='./first-topic/one-same-topic-doc.html'>One Same Topic Doc</a>
- <a href='./first-topic/another-same-topic-doc.html'>Another Same Topic Doc</a>
- <hr>
- Second Topic
- <a href='./second-topic/index.html'>Second Topic</a>
- <a href='./second-topic/a-noteworthy-doc.html'>A Noteworthy Doc</a>
- <hr>  
- Third Topic
- <a href='./third-topic/index.html'>Third Topic</a>
- <a href='./third-topic/a-noteworthy-doc.html'>A Noteworthy Doc</a>
- <hr>
- <a href='https://www.meter.io/external-link/'>An Important External Link</a>
- <a href='https://www.meter.io'>Meter.io</a>
```

#### **Language Tabs**

In general the language tab meta-data must be in one of the languages listed here: [https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers](https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers). 

However, depending on the document, for Meter this will generally always be either `javascript` or `bash` \(but never both\). Most developer documents will use `javascript`, while documents that are primarily concerned with using the command line will use `bash`. This use of a single tab does not affect the use of Markdown code blocks in any way, but makes it easier for the reader to not need to switch back and forth between tabs unnecessarily.

#### **Search**

The search mechanism is limited to only searching within the current, but it is advisable to always set this to true, for convenience.

```text
search: true
```

### Page Title

Readers should have a good sense what the document is about in a reasonable amount of words. Make all document titles as intuitive as possible, and avoid making them too long or too short. Less than 30 characters long, and preferably no more than 24, is ideal. One of the purposes for this is that titles that are too long may get cut off in the side navigation.

### Summary Overview

Write a brief intro on the main topic, in two or three sentences. In one paragraph, give the reader a short and direct summary of what to expect in the document. Convince them to continue reading.

### Body Section

The body section of the document will contain all the topic sub-headings. It does not require a title or any summary overview of its own. However, if there are four or more sub-headings a table of contents before any sub-headings may be useful to help navigate the page. Even child topics within sub-headings may be desirable in some situations.

**Example:**

```text
* First Sub-Heading
* Second Sub-Heading
* Third Sub-Heading
  * Child Topic One
  * Child Topic Two
  * Child Topic Three
  * Child Topic Four

* Fourth Sub-Heading
Sub-HeadingsSub-headings will represent a logical section that breaks up the document into something more readable and easier to follow. Such as step by step procedures in a how to guide.  A top level sub-heading will depend on its relevant importance to the document topic, and may be further broken down into child sub-heading sections of their own. Use the first sub-heading to provide any additional details that could not fit in the space of the summary section. All additional top level sub-heading sections must be tightly-related to the main topic and arranged in a logical flow.In Markdown, the hierarchy of sub-heading sections will be marked by between two and four hash marks before the title. Again these should be related to their parent heading and arranged logically.Example:## An Important Topic### A Sub-Topic#### A Child of the Sub-TopicThese sections will contain topical textual information (preferably in paragraphs), code blocks, command line examples, tables or media (e.g. images). There is an important order to which these must be arranged within the sub-heading, due to how Slate determines layout. It might be necessary to move text and code blocks around to get things to look correct. Generally something along the lines of the following will be a standard approach:## Sub-Title```javascript    // Some codeThis comment shows up above the example code below.    // some example codeThis will be the first paragraph. It will show up just under the sub-title, and just beside the first code snippet. It should provide a quick summary of what the sub-section is all about.This comment shows up above the bash section below.    // Possibly some return value or console outputAnother paragraph, this time demonstrating the use of a table. This will show up just below the first paragraph. These should go into more detail about the relevant topic.TypeDescriptiontableThis is a table.<a name="code-and command-line"/>### Code Blocks and Command Line ExamplesAll code and command line examples should be as realistic as possible, relate directly to the topic they accompany, and be simple and concise. Avoid over complicating things as much as possible. An exception to this may be when you want to show the summary end product of a series of previous steps and code snippets that the reader has already gone through._Incorrect_:~~~markdown# Step 1: Include Dependencies```jsconst mtr = require("meterify").meterify;const Web3 = require("web3");const meterify = meterify(new Web3(), "http://test.meter.io:8669");/* * The code below has nothing to do with the immediate topic. * Either change the text to include it in the same step, * or omit the snippet, and include it in the next step. */var accounts = {  "alice":web3.eth.accounts.create(),  "bob":web3.eth.accounts.create()};The application will require the metrify and web3 libraries. Include them as dependencies at the beginning of the index.js file. Then initiate an instance of meterify._Correct_:~~~markdown# Step 1: Include Dependencies```jsconst mtr = require("meterify").meterify;const Web3 = require("web3");const meterify = meterify(new Web3(), "http://test.meter.io:8669");The application will require the metrify and web3 libraries. Include them as dependencies at the beginning of the index.js file. Then initiate an instance of meterify.Step 2: Create Some Accountsvar accounts = {  "alice":web3.eth.accounts.create(),  "bob":web3.eth.accounts.create()};Create some accounts for Bob and Alice. An account contains the public and private keys for blockchain transactions. These accounts need to be added to the local wallet before they can be used.<a name="writing-style"/>## Writing StyleBear in mind that not everyone reading the documentation will always have a strong command of English. Attempt to write for an international audience by using everyday vocabulary. Avoid the use of slang and difficult to understand words, with the exception of technical terminology. Spell words using American English, for consistency.### ParagraphsMake paragraphs three or four sentences long as much as possible. This is not a strict rule, but it is a good guideline and practice to follow. There may be certain regular cases where this is not always going to the the case, particularly when there is not enough information available. If there is too much information to contain in four or less sentences, splitting the paragraph into two may be an option.### Sentences Be clear, concise, and consistent, keeping sentences short and imperative where possible. While there is no hard rule on sentence length, using 25 words or less is recommended. Start sentences with simple form verbs when providing instructions.## Style GuidesFollow the appropriate style guide for the type of document you are preparing or modifying. These guides extend the standard guidelines, to account for the requirements and objectives of different document types. These include:* [API Documentation](api-doc-guidelines.html)* [Tutorials](tutorial-guidelines.html)* [Articles](article-guidelines.html)* [Code Examples](code-example-guidelines.html)<a name="regarding-git"/>## Regarding GitAs with titles, keep branch names intuitive and short. For example, align the branch name with a particular document or group of related documents.Long commit messages may be hard to follow and might sometimes be overkill, while short messages might not provide enough information. Depending on the situation, following the [Git 50/72 rule](https://www.midori-global.com/blog/2018/04/02/git-50-72-rule) may be applicable in the case of significant changes, whereas a commit that corrects a single spelling error would probably only require no more than a few words at the most.
```

