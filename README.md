# Problem 1

Created project with `yarn init` and `bit init`.

Add components with commands:
```
bit add src/components/SignIn --id components/sign-in
bit add src/components/SignUp --id components/sign-up
bit add src/utils/logging --id utils/logging
```

Build with:
```
bit build
```

**Problem**

All files are output to the root `dist` directory, instead of in their own source code folder.

The compiler has a `FIXED_OUT_DIR` value, what's the reason for this?  Is this causing the problem?

https://bit.dev/bit/envs/compilers/react-typescript/~code?version=3.1.38#src/tsconfig.ts