var _0x4e6a=['animate','trim','.message-input\x20input','toggleClass','slow','<span>You:\x20</span>','.messages','html','data','expanded','keydown','.expand-button','POST','val','appendTo','</p></li>','active','click','.contact.active\x20.preview','<li\x20class=\x22replies\x22><img\x20src=\x22https://img.icons8.com/dusk/64/000000/change-user-male.png\x22\x20alt=\x22\x22\x20/><p>','#profile-img','#status-options','focus','height','#contacts','#profile','.messages\x20ul','<li\x20class=\x22sent\x22><img\x20src=\x22https://thumbs-prod.si-cdn.com/mGzVOiub9nq8OQFc0Q_q90D1JWw=/fit-in/1600x0/https://public-media.si-cdn.com/filer/79/4a/794a7e74-8c99-4fde-abcd-a303bc302ba1/sars-cov-19.jpg\x22\x20alt=\x22\x22\x20/><p>'];(function(_0x16e6ad,_0x4e6ad6){var _0x35f7de=function(_0x202af2){while(--_0x202af2){_0x16e6ad['push'](_0x16e6ad['shift']());}};_0x35f7de(++_0x4e6ad6);}(_0x4e6a,0xc4));var _0x35f7=function(_0x16e6ad,_0x4e6ad6){_0x16e6ad=_0x16e6ad-0x0;var _0x35f7de=_0x4e6a[_0x16e6ad];return _0x35f7de;};$(_0x35f7('0x6'))[_0x35f7('0x0')]({'scrollTop':$(document)[_0x35f7('0x17')]()+$(window)[_0x35f7('0x17')]()},_0x35f7('0x4')),$(_0x35f7('0x14'))[_0x35f7('0x11')](function(){$(_0x35f7('0x15'))[_0x35f7('0x3')](_0x35f7('0x10'));}),$(_0x35f7('0xb'))[_0x35f7('0x11')](function(){$(_0x35f7('0x19'))[_0x35f7('0x3')](_0x35f7('0x9')),$(_0x35f7('0x18'))[_0x35f7('0x3')](_0x35f7('0x9'));});function newMessage(){var _0x9a5d64=$(_0x35f7('0x2'));message=$(_0x9a5d64)[_0x35f7('0xd')]();if($[_0x35f7('0x1')](message)=='')return![];$(_0x35f7('0x13')+message+_0x35f7('0xf'))[_0x35f7('0xe')]($(_0x35f7('0x1a'))),$(_0x35f7('0x2'))[_0x35f7('0xd')](null),$(_0x35f7('0x12'))[_0x35f7('0x7')](_0x35f7('0x5')+message),$(_0x35f7('0x6'))[_0x35f7('0x0')]({'scrollTop':$(document)[_0x35f7('0x17')]()+$(window)[_0x35f7('0x17')]()},_0x35f7('0x4')),$(window)['scrollTop'](),$(_0x9a5d64)[_0x35f7('0x16')]();var _0x5d12ae={'message':message['toLowerCase']()};$['ajax']({'url':'/getResponse/','type':_0x35f7('0xc'),'data':_0x5d12ae,'success':function(_0x347eff){newReply(_0x347eff[_0x35f7('0x8')]);},'error':function(_0x1a0140){alert('App\x20Crashed');}});};function newReply(_0x17e481){$(_0x35f7('0x1b')+_0x17e481+_0x35f7('0xf'))[_0x35f7('0xe')]($(_0x35f7('0x1a'))),$(_0x35f7('0x2'))['val'](null),$(_0x35f7('0x12'))['html'](_0x35f7('0x5')+_0x17e481),$('.messages')[_0x35f7('0x0')]({'scrollTop':$(document)[_0x35f7('0x17')]()+$(window)[_0x35f7('0x17')]()},_0x35f7('0x4')),$(window)['scrollTop'](),$(input)[_0x35f7('0x16')]();};$('.submit')[_0x35f7('0x11')](function(){newMessage();}),$(window)['on'](_0x35f7('0xa'),function(_0x4939d9){if(_0x4939d9['which']==0xd)return newMessage(),![];});