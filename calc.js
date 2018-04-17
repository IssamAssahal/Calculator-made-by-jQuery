/*
 * Implement all your JavaScript in this file!
 */
 var buttonVal=false;
 var checkEqualSing=true;
 var clickEqualaAfterOperator;
 var oprationSign=0;
 var displayVal;
 var result;
 
 function buttonValue(buttonNumber){
   if (oprationSign!=0 && buttonVal==true){
	  $('#display').val('');
	  $('#display').val($('#display').val()+$(buttonNumber).val());
	   buttonVal= false; 
	   clickEqualaAfterOperator=true;
	 }
	 else{
	  $('#display').val($('#display').val()+$(buttonNumber).val()); 
	 }
 }
   
 function operationSign(operator){
	 displayVal= $('#display').val();
	 oprationSign= operator; // this means operator sign
     buttonVal=true;
	 clickEqualaAfterOperator=false;
	 
	}
 
  $('#button0').click(function(){buttonValue('#button0')});
 
  $('#button1').click(function(){buttonValue('#button1')});
	   
  $('#button2').click(function(){buttonValue('#button2')});

  $('#button3').click(function(){buttonValue('#button3')});
 
  $('#button4').click(function(){buttonValue('#button4')});
 
  $('#button5').click(function(){buttonValue('#button5')});
 
  $('#button6').click(function(){buttonValue('#button6')});
 
  $('#button7').click(function(){buttonValue('#button7')});
 
  $('#button8').click(function(){buttonValue('#button8')});
 
  $('#button9').click(function(){buttonValue('#button9')});
 
 
 	$('#addButton').click(function(){operationSign(1)});
	
	$('#multiplyButton').click(function(){operationSign(2)});
	
	$('#subtractButton').click(function(){operationSign(3)});
	
	$('#divideButton').click(function(){operationSign(4)});
	
	
	
	function operationExecutor(operatorSymbol){
		var holdingDisplayVal;
	if (checkEqualSing==true){
			holdingDisplayVal=$('#display').val();
			checkEqualSing=false;
		   }else {
			   holdingDisplayVal=displayVal;
		   }
		   if (operatorSymbol == 1){
		result = Number($('#display').val())+Number(displayVal);
		   }
		    if (operatorSymbol == 2){
		result = Number($('#display').val())*Number(displayVal);
		   }
		    if (operatorSymbol == 3){
		result = Number(displayVal)-Number($('#display').val());
		   }
		    if (operatorSymbol == 4){
		result = Number(displayVal)/Number($('#display').val());
		   }
		displayVal=holdingDisplayVal;
	    $('#display').val(result);
	   buttonVal=true;
	}
	
 
  $('#equalsButton').click(function(){
	  
	   if (oprationSign == 0){
	    $('#display').val($('#display').val()); 
	  }
	  
	
	   if (oprationSign == 1 && clickEqualaAfterOperator==true ){
		   operationExecutor(1)
		   
	  }
	  
	   if (oprationSign == 2 && clickEqualaAfterOperator==true ){
		   operationExecutor(2)
		   
	  }
	  
	   if (oprationSign == 3 && clickEqualaAfterOperator==true ){
		   operationExecutor(3)
		   
	  }
	  
	   if (oprationSign == 4 && clickEqualaAfterOperator==true ){
		   operationExecutor(4)
		   
	  }
 });
	  
	  	$('#clearButton').click(function(){
	   $('#display').val('');
	   result =0;
	   oprationSign= 0;
	   buttonVal=false;
	   checkEqualSing=true;
	   clickEqualaAfterOperator=true;
	   
 });
	  