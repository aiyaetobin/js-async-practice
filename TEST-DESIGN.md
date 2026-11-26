# Sequential vs. Promise.all
## Original Timing Predictions
200 sequential and 100 ms parallel

## Actual Measurements
209 ms sequential 103 ms parallel

## Why promise.all was faster
Promise.all was faster because instead of having to wait for the first to finish to being the other it runs them asynchronously and they can start at the same time. So the time it took for both was the time of the slower function call.

# why assert.equal(elapsed, 100) is flaky
because of a multitude of differing factors when you call the functions their time can vary slightly. checking return order is more reliable than execution time because we when promise.all is called there is a proper expected execution order so we can test that against what was actually returned