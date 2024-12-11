if [ "$hyprlock" = "false" ]; then
	echo "skipping hyprlock"
	return 1;
fi

pywal-discord -t default
