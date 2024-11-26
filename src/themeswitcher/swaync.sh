if [ "$swaync" = "false" ]; then
	echo "skipping swaync"
	return 1;
fi

## reload swaync css
swaync-client -rs
echo "SwayNC reloaded"