
$('.shiftSelect2').select2({
  width: '75%'
});

$('.shiftSelectF').select2({
  width: '50%'
});

$('.shiftSelectF2').select2({
  width: '50%',
  disabled: 'True'
});

$('.locationSelector').select2({
  width: '75%'
});

$('.shiftDate').datepicker();

  // $(document).ready(function() {
  //   $(".payrollDate").datepicker();
  //   $(".shiftDate").datepicker();

    // $('#addJob tbody tr').formset({
    //   addText: 'add',
    //   deleteText: 'remove',
    //   prefix:'jobs_in_shift',
    // });
    //
    // $('.link-formset').formset({
    //   addText: 'add',
    //   deleteText: 'remove',
    //   prefix:'jobs_in_shift',
    // });

    $('#jQUIAccordion').accordion({
      collapsible: true,
      heightStyle: "content"
    });

    $('#jQUIAccordion2').accordion({
      collapsible: true,
      active: 1,
      heightStyle: "content"
    });

	$(".driverStart").focusout(function(){
    update1();
	});

	function update1() {
	  $(".helperStart").val($('.driverStart').val());
	}

	$(".driverEnd").focusout(function(){
    update2();
	});

	function update2() {
	  $(".helperEnd").val($('.driverEnd').val());
	}
