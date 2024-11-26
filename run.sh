#!/bin/bash

# If no args are passed, the restore script will be executed. This is for when you reboot your computer.
# If the path to a wallpaper is passed as the first arg, themeswitcher will be executed.
script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ -z "$1" ]; then
    echo "No argument given. Restoring"
    "$script_dir/restore_after_reboot.sh"
else
    echo "Argument provided: $1"
    # Code to execute if an argument is provided
fi
