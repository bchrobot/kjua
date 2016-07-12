// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by kjua.js.
import { name as packageName } from "meteor/bchrobot:kjua";

// Write your tests here!
// Here is an example.
Tinytest.add('kjua - example', function (test) {
  test.equal(packageName, "kjua");
});
