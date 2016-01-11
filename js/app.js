/**
* Copyright (c) 2014, Facebook, Inc.
* All rights reserved.
*
* This source code is licensed under the BSD-style license found in the
* LICENSE file in the root directory of this source tree. An additional grant
* of patent rights can be found in the PATENTS file in the same directory.
*/

const React = require('react');

const Main = require('./components/Main.react');
const DispatchedActions = require('./actions/DispatchedActions');
const $ = require('jquery');
require("../node_modules/bootstrap/js/dropdown.js");

function getURLParameter(name) {
	return decodeURIComponent(
		(new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)')
			.exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}


function run() {
	React.render(
		<Main />,
		document.getElementById('Main')
		);

	$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

      var $target = $( event.currentTarget );

      $target.closest( '.btn-group' )
         .find( '[data-bind="label"]' ).text( $target.text() )
            .end()
         .children( '.dropdown-toggle' ).dropdown( 'toggle' );

      return false;

   });
}

const loadedStates = ['complete', 'loaded', 'interactive'];
if (loadedStates.indexOf(document.readyState)!==-1 && document.body) {
	run();
} else {
	window.addEventListener('DOMContentLoaded', run, false);
}