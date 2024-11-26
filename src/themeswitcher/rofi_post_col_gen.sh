if [ "$rofi" = "false" ]; then
	echo "skipping rofi"
	return 1;
fi

# after colors


downscale_path="$HOME/.cache/wallpapers/rofi-downscales/$filename"

if [ ! -e "$downscale_path" ]; then
	if [ "$notifications" = "true" ]; then
		notify-send "Generated downscale"	
	fi
	magick $selected_path -resize 30% -blur 0x3 "$downscale_path"
else
	if [ "$notifications" = "true" ]; then
		echo "$notifications"
		notify-send "Downscale loaded from cache"
	fi
fi

sudo python $script_dir/themeswitcher/rofi-wallpath-changer.py $HOME/.cache/wal/rofi.rasi $downscale_path