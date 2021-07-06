function goBack() {
	  window.history.back();
  }
  function allowDrop(ev) {
	  ev.preventDefault();
  }
  function drag(ev) {
	  ev.dataTransfer.setData("text", ev.target.id);
  }
  function closeBox(boxid, id){
	console.log("CLOSE: "+id);
	for (i = 0; i < document.getElementById(boxid).children.length; i++) {
	  if(document.getElementById(boxid).children[i].id === id)
		var element = document.getElementById(boxid).children[i];
		element.parentNode.removeChild(element);
	}
  }
  function drop(ev, el) {

	  ev.preventDefault();

	  var data = ev.dataTransfer.getData("text");

	  if(el.children && el.children.length > 0){
		for (i = 0; i < el.children.length; i++) {
		  if(el.children[i].id === data)
			return;
		  }
	  }

	  var nodeCopy = document.getElementById(data).cloneNode(true);
	  nodeCopy.children[0].setAttribute("class", "close");
	  nodeCopy.children[0].setAttribute("style", "display:block");
	  nodeCopy.children[0].setAttribute("onclick", "closeBox('"+ev.currentTarget.id+"','"+data+"')");
	  nodeCopy.children[2].children[0].style = "display:none";
	  el.appendChild(nodeCopy);
	  ev.stopPropagation();

	  return true;

  }
  function setDraggable(dragId) {
	var isChecked = document.getElementById(dragId+"Check").checked;
	var doc = document.getElementById(dragId);
	if(isChecked){
	  doc.setAttribute("draggable", "true");
	}else{
	  doc.setAttribute("draggable", "false");
	}
  }
  function insRow() {
	  console.log( 'hi');
	  var x=document.getElementById('JobTable');
	  var new_row = x.rows[1].cloneNode(true);
	  var len = x.rows.length;
	  new_row.cells[0].innerHTML = len;
	  var txt1 = new_row.cells[1].getElementsByTagName('text')[0];
	  var txt2 = new_row.cells[2].getElementsByTagName('text')[0];
	  x.appendChild( new_row );
  }
  
  $(function() {
        $('.multiselect-ui').multiselect({
            includeSelectAllOption: true
        });
    });
  
  $('#Jschedule').on('change', function() {
        if (this.value == 1) {
          $('#now').show();
          $('#later').hide();
        } else if (this.value == 2) {
          $('#now').hide();
          $('#later').show();
        } else {
          $('#now, #later').hide();
        }
    });
	
  $('#Prolist, #Prodetails, #central, #hierarchy').hide();
        $('#Programs').on('change', function() {
			if (this.value == 1) {
			  $('#Prolist').show();
			  $('#Prodetails').hide();
			} else if (this.value == 2) {
			  $('#Prolist').hide();
			  $('#Prodetails').show();
			} else {
			  $('#Prolist, #Prodetails').hide();
			}
        });
		
		$('#TeamInput').on('change', function() {
			if (this.value == 1) {
			  $('#central').show();
			  $('#hierarchy').hide();
			} else if (this.value == 2) {
			  $('#central').hide();
			  $('#hierarchy').show();
			} else {
			  $('#central, #hierarchy').hide();
			}
        });
		 $('.opt1, .opt2, .opt3, .opt4').show();
        $('.other').on('change', function() {
			if (this.value == 1) {
			  $('.opt1').show();
			  $('.opt2').hide();
			  $('.opt3').hide();
			  $('.opt4').hide();
			} else if (this.value == 2) {
			  $('.opt1').show();
			  $('.opt2').show();
			  $('.opt3').hide();
			  $('.opt4').hide();
			}
			else if (this.value == 3) {
			  $('.opt1').hide();
			  $('.opt2').hide();
			  $('.opt3').show();
			  $('.opt4').hide();
			}
			else if (this.value == 4) {
			  $('.opt1').hide();
			  $('.opt2').hide();
			  $('.opt3').hide();
			  $('.opt4').show();
			}
			else if (this.value == 'multiselect-all') {
			  $('.opt1').show();
			  $('.opt2').show();
			  $('.opt3').show();
			  $('.opt4').show();
			}
        });
		 $('#SrchResult').dataTable();
		  $('.ETable').dataTable({
            "bPaginate": false,
            "bFilter": false,
            "order": [[ 0, "asc" ]],
			});
		$('input[type="radio"]').click(function(){
            var inputValue = $(this).attr("value");
            var targetBox = $("." + inputValue);
            $(".login").not(targetBox).hide();
            $(targetBox).show();
        });		
		$(".toggle-accordion").on("click", function() {
		alert("ramma");
		  var accordionId = $(this).attr("accordion-id"),
			numPanelOpen = $(accordionId + ' .collapse.in').length;
		  $(this).toggleClass("active");
		  if (numPanelOpen == 0) {
			openAllPanels(accordionId);
		  } else {
			closeAllPanels(accordionId);
		  }
		})
		openAllPanels = function(aId) {
		  console.log("setAllPanelOpen");
		  $(aId + ' .panel-collapse:not(".in")').collapse('show');
		}
		closeAllPanels = function(aId) {
		  console.log("setAllPanelclose");
		  $(aId + ' .panel-collapse.in').collapse('hide');
		}
		$('.adddev').click(function () {
		  $('.dev:last').after('<form class="form-inline brder dev"><div class="pull-right remove"><i class="fa fa-times-circle-o" aria-hidden="true">&nbsp;</i></div><div class="form-group"><label>Server Name2</label><input type="text" class="form-control" placeholder="Enter Password" value="idriveDev"></div><div class="form-group"><label for="email">  <strong>IP</strong></label><input type="text" class="form-control" placeholder="Enter IP" value="192.168.2.12"></div><div class="form-group"><label for="email">Port</label><input type="text" class="form-control" placeholder="Enter Port" value="8080"></div><div class="form-group"><label for="email">Account name</label><input type="text" class="form-control" placeholder="Enter Account name" value="admin"></div><div class="form-group"><label for="email">Password</label><input type="password" class="form-control" placeholder="Enter Password" value="abcd1234"></div></div></form>');
		  });
		  $('div').on('click', '.remove', function () {
			  $(this).parent('.dev').remove();
		  });

		  $('.addtest').click(function () {
			$('.test:last').before('<form class="form-inline brder test"><div class="pull-right remove"><i class="fa fa-times-circle-o" aria-hidden="true">&nbsp;</i></div><div class="form-group"><label>Server Name2</label><input type="text" class="form-control" placeholder="Enter Password" value="idriveDev"></div><div class="form-group"><label for="email">  <strong>IP</strong></label><input type="text" class="form-control" placeholder="Enter IP" value="192.168.2.12"></div><div class="form-group"><label for="email">Port</label><input type="text" class="form-control" placeholder="Enter Port" value="8080"></div><div class="form-group"><label for="email">Account name</label><input type="text" class="form-control" placeholder="Enter Account name" value="admin"></div><div class="form-group"><label for="email">Password</label><input type="password" class="form-control" placeholder="Enter Password" value="abcd1234"></div></div></form>');
			});
			$('div').on('click', '.remove', function () {
				$(this).parent('.test').remove();
			});
			 $('#other1').on('change', function() {
				if (this.value == 0) {
				  $('.opt0').show();
				  $('.opt1').hide();
				  $('.opt2').hide();
				} else if (this.value == 1) {
				  $('.opt0').hide();
				  $('.opt1').show();
				  $('.opt2').hide();
				}
				else if (this.value == 2) {
				  $('.opt0').hide();
				  $('.opt1').hide();
				  $('.opt2').show();
				}
			});
			$('#other2').on('change', function() {
				if (this.value == 0) {
				  $('.f0').show();
				  $('.f1').hide();
				  $('.f2').hide();
				} else if (this.value == 1) {
				  $('.f0').hide();
				  $('.f1').show();
				  $('.f2').hide();
				}
				else if (this.value == 2) {
				  $('.f0').hide();
				  $('.f1').hide();
				  $('.f2').show();
				}
			});
			$('#other3').on('change', function() {
				if (this.value == 0) {
				  $('.a0').show();
				  $('.a1').hide();
				  $('.a2').hide();
				} else if (this.value == 1) {
				  $('.a0').hide();
				  $('.a1').show();
				  $('.a2').hide();
				}
				else if (this.value == 2) {
				  $('.a0').hide();
				  $('.a1').hide();
				  $('.a2').show();
				}
			});
		$('#return-to-top').click(function() {      // When arrow is clicked
			  $('body,html').animate({
				  scrollTop : 0                       // Scroll to top of body
			  }, 500);
		});
		
		
	
