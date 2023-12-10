# MacOS Volume Limiter

Limits the system volume on MacOS. Code taken from https://medium.com/trabe/limiting-your-macs-volume-in-2019-f314e20408ab.

## Installing

To install:
1. Open Script Editor.
2. Paste in the code from `limiter.rs`.
3. Change the Script Editor languge to Javascript.
4. Save the script to the Applications folder as an Application making sure to check the box labelled `Stay open after run handler`.
5. Run the Application.
6. Optional: You might also want to [start the app on login](https://support.apple.com/en-ca/guide/mac-help/mh15189/mac).

Once installed, the app limit ensure your system volume does not exceed the configured limit. You can change the limit by editing [this line](https://github.com/bfbachmann/mac-volume-limiter/blob/main/limiter.js#L30).
