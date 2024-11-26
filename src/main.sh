#!/bin/bash

script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source $script_dir/../settings.sh

directory="$wallpaper_directory"


# The path to the selected Wallpaper (given as an argument)
selected_path="$1"

filename=$(basename "$selected_path")
filetitle="${filename%.*}"

# convert all webp to png images (to work with the rofi theme)
$script_dir/webp-to-png.sh "$directory"

sleep 1.5 # wait for wallpaper animation
source $script_dir/themeswitcher/rofi_pre_col_gen.sh

source $script_dir/themeswitcher/pywal.sh # generate colors and set color vars

source $script_dir/themeswitcher/gtk.sh
source $script_dir/themeswitcher/rofi_post_col_gen.sh
source $script_dir/themeswitcher/hyprland.sh
source $script_dir/themeswitcher/hyprlock.sh
source $script_dir/themeswitcher/nwg-menu.sh
source $script_dir/themeswitcher/swaync.sh
source $script_dir/themeswitcher/spicetify.sh

pywalfox update

# notification
source $script_dir/themeswitcher/notification.sh
