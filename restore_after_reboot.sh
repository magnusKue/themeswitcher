wal -R

selected_path=$(cat $HOME/.cache/wal/wal)
script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

sudo python $script_dir/src/themeswitcher/rofi-wallpath-changer.py $HOME/.cache/wal/rofi.rasi $selected_path

sudo python $script_dir/src/themeswitcher/hyprlock-wallpath-changer.py $HOME/.config/hypr/hyprlock.conf $selected_path
