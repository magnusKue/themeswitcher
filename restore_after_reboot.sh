wal -R

selected_path=$(cat $HOME/.cache/wal/wal)

sudo python $HOME/code/system/rofi-wallpath-changer.py /home/Magnus/.cache/wal/style-5.rasi $selected_path

sudo python $HOME/code/system/hyprlock-wallpath-changer.py /home/Magnus/.config/hypr/hyprlock.conf $selected_path
