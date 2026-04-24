# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTest.spec.ts >> User login test @master @sanity @regression
- Location: tests\LoginTest.spec.ts:20:5

# Error details

```
Error: browserContext.close: Test ended.
Browser logs:

<launching> C:\Users\Admin\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,BoundaryEventDispatchTracksNodeRemoval,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --enable-automation --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --no-sandbox --user-data-dir=C:\Users\Admin\AppData\Local\Temp\playwright_chromiumdev_profile-bp5gmO --remote-debugging-pipe --no-startup-window
<launched> pid=27112
[pid=27112][err] [27112:26600:0416/185917.732:ERROR:google_apis\gcm\engine\registration_request.cc:291] Registration response error message: PHONE_REGISTRATION_ERROR
[pid=27112][err] [27112:26600:0416/185917.742:ERROR:google_apis\gcm\engine\registration_request.cc:291] Registration response error message: PHONE_REGISTRATION_ERROR
[pid=27112][err] [27112:26600:0416/185917.752:ERROR:google_apis\gcm\engine\registration_request.cc:291] Registration response error message: PHONE_REGISTRATION_ERROR
[pid=27112][err] [27112:26600:0416/185943.240:ERROR:google_apis\gcm\engine\registration_request.cc:291] Registration response error message: DEPRECATED_ENDPOINT
[pid=27112][err] [27112:26600:0416/190029.629:ERROR:google_apis\gcm\engine\registration_request.cc:291] Registration response error message: DEPRECATED_ENDPOINT
[pid=27112][err] [27112:26600:0416/190208.053:ERROR:google_apis\gcm\engine\registration_request.cc:291] Registration response error message: DEPRECATED_ENDPOINT
[pid=27112] <gracefully close start>
```