if [ "$rofi" = "false" ]; then
	echo "skipping rofi"
	return 1;
fi

# before colors

sed -i "" $HOME/.config/wal/templates/rofi.rasi
sed -i "s|url(\"/[^\"]*\", width);|url(\"$selected_path\", width);|g" $HOME/.config/wal/templates/rofi.rasi

