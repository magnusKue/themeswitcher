wal -R

selected_path=$(cat $HOME/.cache/wal/wal)

script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

sudo python $script_dir/src/themeswitcher/rofi-wallpath-changer.py /home/Magnus/.cache/wal/style-5.rasi $selected_path

sudo python $script_dir/src/themeswitcher/hyprlock-wallpath-changer.py /home/Magnus/.config/hypr/hyprlock.conf $selected_path
