if [ "$nwg_menu" = "false" ]; then
	echo "skipping NWG-menu"
	return 1;
fi

## NWG-Menu
cp $HOME/.cache/wal/menu-start.css $HOME/.config/nwg-panel/menu-start.css
