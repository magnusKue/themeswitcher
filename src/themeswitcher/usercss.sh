if [ "$css" = "false" ]; then
	echo "skipping css"
	return 1;
fi

mv $HOME/.cache/wal/userContent.css $HOME/.mozilla/firefox/dmty9zsw.default-release/chrome/
