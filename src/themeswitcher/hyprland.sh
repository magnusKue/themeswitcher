if [ "$hyprland" = "false" ]; then
	echo "skipping hyprland"
	return 1;
fi

### Hyprland
sed -i "s/^    col.active_border =.*/    col.active_border = rgba(${color7:1}ff) rgba(${color4:1}ff) 90deg/" $HOME/.config/hypr/hyprland.conf
sed -i "s/^    col.inactive_border =.*/    col.inactive_border = rgba(${color2:1}aa)" $HOME/.config/hypr/hyprland.conf
