/*******************************************************************************
 *      	jquery-bootstrap-rtl (version 3.3.1)
 *      Author: FzPying (http://github.com/fzpying)
 *  Created on: April 24,2017
 *     Project: jquery-bootstrap-rtl
 *   Copyright: The ownership of the author
 *******************************************************************************/
if ($("html").attr("dir")=="rtl") {
    var linkTag = $('<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.3.1/css/bootstrap-rtl.min.css" />');
	$($('head')).append(linkTag);
} else{
}
