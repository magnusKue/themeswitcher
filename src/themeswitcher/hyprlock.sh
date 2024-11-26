if [ "$hyprlock" = "false" ]; then
	echo "skipping hyprlock"
	return 1;
fi

### Hyprlock
sudo python $script_dir/themeswitcher/hyprlock-wallpath-changer.py $HOME/.config/hypr/hyprlock.conf $selected_path
