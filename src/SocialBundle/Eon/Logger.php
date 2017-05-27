<?php

namespace SocialBundle\Eon;

class Logger 
{
    public static function writeLine($file, $tag, $text) {
    	$dirname = dirname("../var/logs/".$file);
		if (!is_dir($dirname)) mkdir($dirname, 0755, true);
		$file_handler = fopen("../var/logs/".$file, 'a');
    	$line = ($tag===null?"":($tag." : ")).$text."\n";
    	fwrite($file_handler, $line);
    	fclose($file_handler);
    }
}

?>
