if [ "$notifications" = "false" ]; then 
	echo "notifications disabled"
	return 1;
fi

## Notification
if [ "$generated" = "true" ]; then
	notify-send "GTK-Theme generated"
else
	notify-send "GTK-Theme loaded from cache"
fi

notify-send "Theme updated"
