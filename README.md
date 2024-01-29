# Browser-Rendering-Behaviors

1. We cannot have `script` tag with inline content and `async` at the same time, the result is `async` will be ignored (aka the script will be executed immediately)
<img width="1186" alt="image" src="https://github.com/loia5tqd001/Browser-Rendering-Behaviors/assets/31364664/20fb58ea-cb78-4b62-a705-6490a66bb61d">

2. When we run the code above, the browser will be stalled for 2 seconds before anything is rendered on the screen, even tho the `script` is below the `h1` (`h1` is already parsed), so it means `script` is render-blocking.

3. If we change the script to `<script src="./index.js" async></script>` instead, we can see `Some Text` on the screen before the browser is stalled for 2 seconds. So `script` with `async` is non-blocking.

4. `async` vs `defer`

Usually, I see this image

<img width="500" alt="image" src="https://github.com/loia5tqd001/Browser-Rendering-Behaviors/assets/31364664/de4ea8c6-b921-41c2-85e6-250df4fa870f">

It creates me a sense that `defer` scripts will be run later than `async` scripts:
- `async` scripts will be executed immediately when they're ready
- `defer` scripts will be executed as the last things to be executed

But when I tried the below script, <img width="290" alt="image" src="https://github.com/loia5tqd001/Browser-Rendering-Behaviors/assets/31364664/5750ab67-df65-4456-aa3f-c901f65c7550">
that's not the case

- With `async`, 100% of the time the text `Some Text` is visible before being stalled for 2 seconds (script is executed), so looks like `async` doesn't initial render 100% of the time
- With `defer`, 80% of the time the text `Some Text` is blocked, meaning the script is executed before the initial render.

So from what I understand:
- `async` is like `setTimeout 0`, execute the script later when ready, but always only after initial render (next batch)
- whereas with `defer`, it can be run in the initial render if ready, not next batch

Either way, one thing for sure is `async ` and `defer` are for resources that are not critical in the initial render.

