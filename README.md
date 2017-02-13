# Functional Playground #

## Resources ##
  - Read this [gitbook](https://basarat.gitbooks.io/typescript/content/docs/getting-started.html) on typescript first
  - Then refer to the [typescript handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)
  - Front-end masters, hardcore functional programming (find video series online, or ask Ben)
  - The [ramda](http://ramdajs.com/) utility library and the links on the home screen

## FAQ ##
1. How can I type a combination of two objects?
  - see *src/typescript_examples/intersection_type.ts*
2. How can I type a function that has a parameter that can be of multiple types? 
  - see *src/typescript_examples/union_type.ts*
3. How can I know whether an object is a member of a class?
  - see *src/typescript_examples/checking_class_member_types.ts*, but basically with `instanceof` operator 
4. Where can I play around with the `noImplicitThis` tsc option?
  - see *src/typescript_examples/checking_class_member_types.ts* 
5. Why do I see `can't re-declare block scoped variable` in my file? 
  - likely because that variable name is being used in the global space by another file. If you import or export anything in your file, it will create a module scope which should fix the issue
  - [see this for more info](https://basarat.gitbooks.io/typescript/content/docs/project/modules.html) 
