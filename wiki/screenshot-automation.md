# Screenshot Automation

This document specifies the configuration for screenshot automation.

## UE5 CLI Arguments

The automation uses the following Unreal Engine 5 command-line arguments.

```
UE5-Cmd.exe -run=resave -buildmachine -project=<uproject> -targetplatform=Win64 -build=Shipping
```

## Pixel-diff Tolerance

The pixel-difference tolerance is set to 1 percent.
This is calculated using ImageMagick's `compare -metric ae` command.
