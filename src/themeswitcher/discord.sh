if [ "$discord" = "false" ]; then
	echo "skipping discord"
	return 1;
fi

pywal-discord -t default
