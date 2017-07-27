Module["asm"] =  (function(global, env, buffer) {
'almost asm';


  var Int8View = global.Int8Array;
  var HEAP8 = new Int8View(buffer);
  var Int16View = global.Int16Array;
  var HEAP16 = new Int16View(buffer);
  var Int32View = global.Int32Array;
  var HEAP32 = new Int32View(buffer);
  var Uint8View = global.Uint8Array;
  var HEAPU8 = new Uint8View(buffer);
  var Uint16View = global.Uint16Array;
  var HEAPU16 = new Uint16View(buffer);
  var Uint32View = global.Uint32Array;
  var HEAPU32 = new Uint32View(buffer);
  var Float32View = global.Float32Array;
  var HEAPF32 = new Float32View(buffer);
  var Float64View = global.Float64Array;
  var HEAPF64 = new Float64View(buffer);
  var byteLength = global.byteLength;

  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntS = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var Math_fround=global.Math.fround;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_i=env.invoke_i;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiiiiiii=env.invoke_iiiiiiiii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var floatReadValueFromPointer=env.floatReadValueFromPointer;
  var simpleReadValueFromPointer=env.simpleReadValueFromPointer;
  var throwInternalError=env.throwInternalError;
  var get_first_emval=env.get_first_emval;
  var getLiveInheritedInstances=env.getLiveInheritedInstances;
  var ___assert_fail=env.___assert_fail;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var ClassHandle=env.ClassHandle;
  var _emscripten_asm_const_ii=env._emscripten_asm_const_ii;
  var getShiftFromSize=env.getShiftFromSize;
  var ___cxa_begin_catch=env.___cxa_begin_catch;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var runDestructor=env.runDestructor;
  var throwInstanceAlreadyDeleted=env.throwInstanceAlreadyDeleted;
  var __embind_register_std_string=env.__embind_register_std_string;
  var init_RegisteredPointer=env.init_RegisteredPointer;
  var __embind_register_class_function=env.__embind_register_class_function;
  var flushPendingDeletes=env.flushPendingDeletes;
  var makeClassHandle=env.makeClassHandle;
  var whenDependentTypesAreResolved=env.whenDependentTypesAreResolved;
  var __embind_register_class_constructor=env.__embind_register_class_constructor;
  var init_ClassHandle=env.init_ClassHandle;
  var ___syscall140=env.___syscall140;
  var ClassHandle_clone=env.ClassHandle_clone;
  var ___syscall146=env.___syscall146;
  var RegisteredClass=env.RegisteredClass;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var embind_init_charCodes=env.embind_init_charCodes;
  var ___setErrNo=env.___setErrNo;
  var __embind_register_bool=env.__embind_register_bool;
  var ___resumeException=env.___resumeException;
  var createNamedFunction=env.createNamedFunction;
  var ___syscall91=env.___syscall91;
  var __emval_take_value=env.__emval_take_value;
  var __emval_decref=env.__emval_decref;
  var _pthread_once=env._pthread_once;
  var __embind_register_class=env.__embind_register_class;
  var constNoSmartPtrRawPointerToWireType=env.constNoSmartPtrRawPointerToWireType;
  var heap32VectorToArray=env.heap32VectorToArray;
  var ClassHandle_delete=env.ClassHandle_delete;
  var RegisteredPointer_destructor=env.RegisteredPointer_destructor;
  var ___syscall6=env.___syscall6;
  var ensureOverloadTable=env.ensureOverloadTable;
  var __embind_register_emval=env.__embind_register_emval;
  var new_=env.new_;
  var downcastPointer=env.downcastPointer;
  var replacePublicSymbol=env.replacePublicSymbol;
  var init_embind=env.init_embind;
  var ClassHandle_deleteLater=env.ClassHandle_deleteLater;
  var RegisteredPointer_deleteObject=env.RegisteredPointer_deleteObject;
  var ClassHandle_isDeleted=env.ClassHandle_isDeleted;
  var __embind_register_integer=env.__embind_register_integer;
  var ___cxa_allocate_exception=env.___cxa_allocate_exception;
  var ___buildEnvironment=env.___buildEnvironment;
  var _embind_repr=env._embind_repr;
  var _pthread_getspecific=env._pthread_getspecific;
  var throwUnboundTypeError=env.throwUnboundTypeError;
  var craftInvokerFunction=env.craftInvokerFunction;
  var _getenv=env._getenv;
  var runDestructors=env.runDestructors;
  var requireRegisteredType=env.requireRegisteredType;
  var makeLegalFunctionName=env.makeLegalFunctionName;
  var _pthread_key_create=env._pthread_key_create;
  var upcastPointer=env.upcastPointer;
  var init_emval=env.init_emval;
  var shallowCopyInternalPointer=env.shallowCopyInternalPointer;
  var _emscripten_asm_const_iii=env._emscripten_asm_const_iii;
  var nonConstNoSmartPtrRawPointerToWireType=env.nonConstNoSmartPtrRawPointerToWireType;
  var genericPointerToWireType=env.genericPointerToWireType;
  var _abort=env._abort;
  var throwBindingError=env.throwBindingError;
  var getTypeName=env.getTypeName;
  var exposePublicSymbol=env.exposePublicSymbol;
  var RegisteredPointer_fromWireType=env.RegisteredPointer_fromWireType;
  var ___lock=env.___lock;
  var __embind_register_memory_view=env.__embind_register_memory_view;
  var getInheritedInstance=env.getInheritedInstance;
  var setDelayFunction=env.setDelayFunction;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var extendError=env.extendError;
  var __embind_register_void=env.__embind_register_void;
  var __embind_register_function=env.__embind_register_function;
  var RegisteredPointer_getPointee=env.RegisteredPointer_getPointee;
  var __emval_register=env.__emval_register;
  var __embind_register_std_wstring=env.__embind_register_std_wstring;
  var ClassHandle_isAliasOf=env.ClassHandle_isAliasOf;
  var __emval_incref=env.__emval_incref;
  var RegisteredPointer=env.RegisteredPointer;
  var readLatin1String=env.readLatin1String;
  var getBasestPointer=env.getBasestPointer;
  var getInheritedInstanceCount=env.getInheritedInstanceCount;
  var __embind_register_float=env.__embind_register_float;
  var integerReadValueFromPointer=env.integerReadValueFromPointer;
  var ___unlock=env.___unlock;
  var _pthread_setspecific=env._pthread_setspecific;
  var _emscripten_asm_const_iiii=env._emscripten_asm_const_iiii;
  var registerType=env.registerType;
  var ___cxa_throw=env.___cxa_throw;
  var count_emval_handles=env.count_emval_handles;
  var requireFunction=env.requireFunction;
  var ___map_file=env.___map_file;
  var tempFloat = Math_fround(0);
  const f0 = Math_fround(0);

function _emscripten_replace_memory(newBuffer) {
  if ((byteLength(newBuffer) & 0xffffff || byteLength(newBuffer) <= 0xffffff) || byteLength(newBuffer) > 0x80000000) return false;
  HEAP8 = new Int8View(newBuffer);
  HEAP16 = new Int16View(newBuffer);
  HEAP32 = new Int32View(newBuffer);
  HEAPU8 = new Uint8View(newBuffer);
  HEAPU16 = new Uint16View(newBuffer);
  HEAPU32 = new Uint32View(newBuffer);
  HEAPF32 = new Float32View(newBuffer);
  HEAPF64 = new Float64View(newBuffer);
  buffer = newBuffer;
  return true;
}

// EMSCRIPTEN_START_FUNCS

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}
function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase|0;
  stackMax = stackMax|0;
  STACKTOP = stackBase;
  STACK_MAX = stackMax;
}

function setThrew(threw, value) {
  threw = threw|0;
  value = value|0;
  if ((__THREW__|0) == 0) {
    __THREW__ = threw;
    threwValue = value;
  }
}

function setTempRet0(value) {
  value = value|0;
  tempRet0 = value;
}
function getTempRet0() {
  return tempRet0|0;
}

function __GLOBAL__sub_I_asm_dom_cpp() {
 var $__begin_$i$i$i$i = 0, $__end_$i$i$i$i = 0, $__end_cap_$i$i$i$i = 0, $call$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __embind_register_function((2868|0),4,(1768|0),(2885|0),(1|0),(4|0));
 $call$i = (__Znwj(56)|0);
 $__begin_$i$i$i$i = ((($call$i)) + 44|0);
 store4($__begin_$i$i$i$i,0);
 $__end_$i$i$i$i = ((($call$i)) + 48|0);
 store4($__end_$i$i$i$i,0);
 $__end_cap_$i$i$i$i = ((($call$i)) + 52|0);
 store4($__end_cap_$i$i$i$i,0);
 ; store8($call$i,i64_const(0,0),4); store8($call$i+8|0,i64_const(0,0),4); store8($call$i+16|0,i64_const(0,0),4); store8($call$i+24|0,i64_const(0,0),4); store8($call$i+32|0,i64_const(0,0),4);
 store4(10700,$call$i);
 return;
}
function __ZN10emscripten8internal7InvokerINS_3valEJRKjRKNSt3__212basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEES2_EE6invokeEPFS2_S4_SD_S2_EjPNS0_11BindingTypeISB_EUt_EPNS0_7_EM_VALE($fn,$args,$args1,$args3) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 $args3 = $args3|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $agg$tmp = 0, $arraydecay$i = 0, $ref$tmp = 0, $ref$tmp5 = 0, $ref$tmp6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $ref$tmp = sp + 20|0;
 $ref$tmp5 = sp + 16|0;
 $ref$tmp6 = sp + 4|0;
 $agg$tmp = sp;
 store4($ref$tmp5,$args);
 $arraydecay$i = ((($args1)) + 4|0);
 $0 = load4($args1);
 ; store8($ref$tmp6,i64_const(0,0),4); store4($ref$tmp6+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp6,$arraydecay$i,$0);
 store4($agg$tmp,$args3);
 FUNCTION_TABLE_viiii[$fn & 7]($ref$tmp,$ref$tmp5,$ref$tmp6,$agg$tmp);
 $1 = load4($ref$tmp);
 __emval_incref(($1|0));
 $2 = load4($ref$tmp);
 __emval_decref(($2|0));
 $3 = load4($agg$tmp);
 __emval_decref(($3|0));
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp6);
 STACKTOP = sp;return ($2|0);
}
function __ZN6asmdom16functionCallbackERKjRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEN10emscripten3valE($agg$result,$vnode,$callback,$event) {
 $agg$result = $agg$result|0;
 $vnode = $vnode|0;
 $callback = $callback|0;
 $event = $event|0;
 var $$sink$i = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i30$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $__f_$i = 0, $__first_$i$i$i$i$i = 0, $__nd$0$i = 0, $__nd$0$i$sink = 0, $__size_$i$i$i$i$i18$i = 0, $__size_$i$i5$i$i$i24$i = 0, $__size_$i3$i$i$i$i20$i = 0, $__size_$i3$i7$i$i$i26$i = 0, $agg$tmp = 0, $argv$i = 0, $call$i$i$i$i$i = 0, $call$i$i$i$i38$i = 0, $call3$i4 = 0, $call4$i6 = 0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0;
 var $cmp$i$i$i$i$i$i29$i = 0, $cmp$i$i$i$i31$i = 0, $cmp$i$i$i39$i = 0, $cmp$i$i46$i = 0, $cmp$i1 = 0, $cmp$i2 = 0, $cmp20$i = 0, $cmp7$i = 0, $cmp8$i$i$i41$i = 0, $cond$i$i$i$i$i$i = 0, $cond$i$i$i$i22$i = 0, $cond$i$i22$i$i$i$i = 0, $cond$i$i22$i$i$i37$i = 0, $cond$i11$i$i$i28$i = 0, $conv$i$i$i$i$i21$i = 0, $conv$i$i9$i$i$i27$i = 0, $data = 0, $exception$i = 0, $exception$i2 = 0, $first$i = 0;
 var $tobool$i$i$i$i$i19$i = 0, $tobool$i$i6$i$i$i25$i = 0, $vfn$i = 0, $vtable$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $argv$i = sp;
 $agg$tmp = sp + 8|0;
 $0 = load4($vnode);
 $data = ((($0)) + 36|0);
 $1 = load4($data);
 $__first_$i$i$i$i$i = ((($1)) + 28|0);
 $2 = load4($__first_$i$i$i$i$i);
 $cmp$i2 = ($2|0)==(0|0);
 L1: do {
  if ($cmp$i2) {
   $__nd$0$i$sink = $2;
  } else {
   $__size_$i$i$i$i$i18$i = ((($callback)) + 11|0);
   $3 = load1($__size_$i$i$i$i$i18$i);
   $tobool$i$i$i$i$i19$i = ($3<<24>>24)<(0);
   $__size_$i3$i$i$i$i20$i = ((($callback)) + 4|0);
   $4 = load4($__size_$i3$i$i$i$i20$i);
   $conv$i$i$i$i$i21$i = $3&255;
   $cond$i$i$i$i22$i = $tobool$i$i$i$i$i19$i ? $4 : $conv$i$i$i$i$i21$i;
   $5 = load4($callback);
   $cond$i$i22$i$i$i$i = $tobool$i$i$i$i$i19$i ? $5 : $callback;
   $__nd$0$i = $2;
   while(1) {
    $first$i = ((($__nd$0$i)) + 16|0);
    $__size_$i$i5$i$i$i24$i = ((($first$i)) + 11|0);
    $6 = load1($__size_$i$i5$i$i$i24$i);
    $tobool$i$i6$i$i$i25$i = ($6<<24>>24)<(0);
    $__size_$i3$i7$i$i$i26$i = ((($__nd$0$i)) + 20|0);
    $7 = load4($__size_$i3$i7$i$i$i26$i);
    $conv$i$i9$i$i$i27$i = $6&255;
    $cond$i11$i$i$i28$i = $tobool$i$i6$i$i$i25$i ? $7 : $conv$i$i9$i$i$i27$i;
    $cmp$i$i$i$i$i$i29$i = ($cond$i11$i$i$i28$i>>>0)<($cond$i$i$i$i22$i>>>0);
    $$sroa$speculated$i$i$i30$i = $cmp$i$i$i$i$i$i29$i ? $cond$i11$i$i$i28$i : $cond$i$i$i$i22$i;
    $cmp$i$i$i$i31$i = ($$sroa$speculated$i$i$i30$i|0)==(0);
    if ($cmp$i$i$i$i31$i) {
     label = 5;
    } else {
     $8 = load4($first$i);
     $cond$i$i22$i$i$i37$i = $tobool$i$i6$i$i$i25$i ? $8 : $first$i;
     $call$i$i$i$i38$i = (_memcmp($cond$i$i22$i$i$i$i,$cond$i$i22$i$i$i37$i,$$sroa$speculated$i$i$i30$i)|0);
     $cmp$i$i$i39$i = ($call$i$i$i$i38$i|0)==(0);
     if ($cmp$i$i$i39$i) {
      label = 5;
     } else {
      $cmp$i$i46$i = ($call$i$i$i$i38$i|0)<(0);
      if ($cmp$i$i46$i) {
       label = 7;
      } else {
       label = 8;
      }
     }
    }
    if ((label|0) == 5) {
     label = 0;
     $cmp8$i$i$i41$i = ($cond$i$i$i$i22$i>>>0)<($cond$i11$i$i$i28$i>>>0);
     if ($cmp8$i$i$i41$i) {
      label = 7;
     } else {
      label = 8;
     }
    }
    if ((label|0) == 7) {
     label = 0;
     $9 = load4($__nd$0$i);
     $cmp7$i = ($9|0)==(0|0);
     if ($cmp7$i) {
      label = 15;
      break;
     } else {
      $$sink$i = $9;
     }
    }
    else if ((label|0) == 8) {
     label = 0;
     $cmp$i$i$i$i$i$i$i = ($cond$i$i$i$i22$i>>>0)<($cond$i11$i$i$i28$i>>>0);
     $$sroa$speculated$i$i$i$i = $cmp$i$i$i$i$i$i$i ? $cond$i$i$i$i22$i : $cond$i11$i$i$i28$i;
     $cmp$i$i$i$i$i = ($$sroa$speculated$i$i$i$i|0)==(0);
     if ($cmp$i$i$i$i$i) {
      label = 10;
     } else {
      $10 = load4($first$i);
      $cond$i$i$i$i$i$i = $tobool$i$i6$i$i$i25$i ? $10 : $first$i;
      $call$i$i$i$i$i = (_memcmp($cond$i$i$i$i$i$i,$cond$i$i22$i$i$i$i,$$sroa$speculated$i$i$i$i)|0);
      $cmp$i$i$i$i = ($call$i$i$i$i$i|0)==(0);
      if ($cmp$i$i$i$i) {
       label = 10;
      } else {
       $cmp$i$i$i = ($call$i$i$i$i$i|0)<(0);
       if (!($cmp$i$i$i)) {
        $__nd$0$i$sink = $__nd$0$i;
        break L1;
       }
      }
     }
     if ((label|0) == 10) {
      label = 0;
      if (!($cmp$i$i$i$i$i$i29$i)) {
       $__nd$0$i$sink = $__nd$0$i;
       break L1;
      }
     }
     $11 = ((($__nd$0$i)) + 4|0);
     $12 = load4($11);
     $cmp20$i = ($12|0)==(0|0);
     if ($cmp20$i) {
      label = 15;
      break;
     } else {
      $$sink$i = $12;
     }
    }
    $__nd$0$i = $$sink$i;
   }
   if ((label|0) == 15) {
    $exception$i = (___cxa_allocate_exception(8)|0);
    __ZNSt11logic_errorC2EPKc($exception$i);
    store4($exception$i,(2736));
    ___cxa_throw(($exception$i|0),(1560|0),(14|0));
    // unreachable;
   }
  }
 } while(0);
 $cmp$i = ($__nd$0$i$sink|0)==(0|0);
 if ($cmp$i) {
  $exception$i = (___cxa_allocate_exception(8)|0);
  __ZNSt11logic_errorC2EPKc($exception$i);
  store4($exception$i,(2736));
  ___cxa_throw(($exception$i|0),(1560|0),(14|0));
  // unreachable;
 }
 $13 = load4($event);
 store4($agg$tmp,$13);
 __emval_incref(($13|0));
 $__f_$i = ((($__nd$0$i$sink)) + 48|0);
 $14 = load4($__f_$i);
 $cmp$i1 = ($14|0)==(0|0);
 if ($cmp$i1) {
  $exception$i2 = (___cxa_allocate_exception(4)|0);
  store4($exception$i2,(1792));
  ___cxa_throw(($exception$i2|0),(1024|0),(1|0));
  // unreachable;
 } else {
  $vtable$i = load4($14);
  $vfn$i = ((($vtable$i)) + 24|0);
  $15 = load4($vfn$i);
  $call3$i4 = (FUNCTION_TABLE_iii[$15 & 15]($14,$agg$tmp)|0);
  $16 = $call3$i4&1;
  store4($argv$i,$16);
  $call4$i6 = (__emval_take_value((1656|0),($argv$i|0))|0);
  store4($agg$result,$call4$i6);
  $17 = load4($agg$tmp);
  __emval_decref(($17|0));
  STACKTOP = sp;return;
 }
}
function ___clang_call_terminate($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 (___cxa_begin_catch(($0|0))|0);
 __ZSt9terminatev();
 // unreachable;
}
function __ZNSt3__217bad_function_callD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZN6asmdom5addNSEPNS_5VNodeE($vnode) {
 $vnode = $vnode|0;
 var $$pre$i$i = 0, $$sink$i$i = 0, $$sroa$speculated$i$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i30$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__cc$i$i$i = 0, $__end_$i11 = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i$i = 0;
 var $__first_$i$i$i$i2$i = 0, $__first_$i$i$i$i5$i = 0, $__first_$i$i$i$i6$i = 0, $__left_$i$i$i$i$i$i = 0, $__left_$i$i$i$i$i1$i = 0, $__left_$i$i$i$i$i4$i = 0, $__left_7$i$i = 0, $__nd$0$i$i = 0, $__parent$i$sroa$0 = 0, $__parent$i$sroa$0$0$__parent$i$sroa$0$0$ = 0, $__parent_$i$i = 0, $__right_$i$i = 0, $__size_$i$i5$i$i$i$i24$i$i = 0, $__size_$i3$i$i$i$i$i20$i$i = 0, $__size_$i3$i7$i$i$i$i26$i$i = 0, $__value_$i$i = 0, $arrayidx$i = 0, $call = 0, $call$i$i$i$i$i = 0, $call$i$i$i$i$i$i$i = 0;
 var $call$i$i$i$i$i38$i$i = 0, $call3 = 0, $callbacks$i = 0, $children = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i29$i$i = 0, $cmp$i$i$i$i$i31$i$i = 0, $cmp$i$i$i$i39$i$i = 0, $cmp$i$i$i46$i$i = 0, $cmp$i1 = 0, $cmp$i1$i = 0, $cmp10 = 0, $cmp14$i$i = 0, $cmp4 = 0;
 var $cmp5$i$i = 0, $cmp8$i$i$i$i41$i$i = 0, $cond$i$i$i$i$i$i$i$i = 0, $cond$i$i$i$i$i22$i$i = 0, $cond$i$i22$i$i$i$i$i$i = 0, $cond$i$i22$i$i$i$i37$i$i = 0, $cond$i11$i$i$i$i28$i$i = 0, $conv$i$i$i$i$i$i21$i$i = 0, $conv$i$i9$i$i$i$i27$i$i = 0, $data = 0, $first$i$i$i$i$i$i$i = 0, $i$018 = 0, $inc = 0, $inc$i$i = 0, $props$i = 0, $retval$0$i$i = 0, $second$i$i$i$i$i$i = 0, $second$i$i$i$i$i$i$i = 0, $sub$ptr$div$i = 0, $sub$ptr$sub$i = 0;
 var $tobool$i$i$i = 0, $tobool$i$i$i$i$i$i19$i$i = 0, $tobool$i$i6$i$i$i$i25$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $__parent$i$sroa$0 = sp;
 $data = ((($vnode)) + 36|0);
 $0 = load4($data);
 $cmp = ($0|0)==(0|0);
 if ($cmp) {
  $call = (__Znwj(36)|0);
  $__left_$i$i$i$i$i$i = ((($call)) + 4|0);
  store4($__left_$i$i$i$i$i$i,0);
  $__first_$i$i$i$i$i = ((($call)) + 8|0);
  store4($__first_$i$i$i$i$i,0);
  store4($call,$__left_$i$i$i$i$i$i);
  $props$i = ((($call)) + 12|0);
  $__left_$i$i$i$i$i4$i = ((($call)) + 16|0);
  store4($__left_$i$i$i$i$i4$i,0);
  $__first_$i$i$i$i5$i = ((($call)) + 20|0);
  store4($__first_$i$i$i$i5$i,0);
  store4($props$i,$__left_$i$i$i$i$i4$i);
  $callbacks$i = ((($call)) + 24|0);
  $__left_$i$i$i$i$i1$i = ((($call)) + 28|0);
  store4($__left_$i$i$i$i$i1$i,0);
  $__first_$i$i$i$i2$i = ((($call)) + 32|0);
  store4($__first_$i$i$i$i2$i,0);
  store4($callbacks$i,$__left_$i$i$i$i$i1$i);
  store4($data,$call);
  $1 = $call;
 } else {
  $1 = $0;
 }
 $call$i$i$i$i$i = (__Znwj(40)|0);
 $__cc$i$i$i = ((($call$i$i$i$i$i)) + 16|0);
 ; store8($__cc$i$i$i,i64_const(0,0),4); store4($__cc$i$i$i+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($__cc$i$i$i,3063,2);
 $second$i$i$i$i$i$i = ((($call$i$i$i$i$i)) + 28|0);
 ; store8($second$i$i$i$i$i$i,i64_const(0,0),4); store4($second$i$i$i$i$i$i+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($second$i$i$i$i$i$i,3066,26);
 $__first_$i$i$i$i$i$i = ((($1)) + 4|0);
 $2 = load4($__first_$i$i$i$i$i$i);
 $cmp$i1$i = ($2|0)==(0|0);
 do {
  if ($cmp$i1$i) {
   $17 = $__first_$i$i$i$i$i$i;
   store4($__parent$i$sroa$0,$17);
   $__parent$i$sroa$0$0$__parent$i$sroa$0$0$ = $17;$retval$0$i$i = $__first_$i$i$i$i$i$i;
  } else {
   $3 = ((($call$i$i$i$i$i)) + 27|0);
   $4 = load1($3);
   $tobool$i$i$i$i$i$i19$i$i = ($4<<24>>24)<(0);
   $__size_$i3$i$i$i$i$i20$i$i = ((($call$i$i$i$i$i)) + 20|0);
   $5 = load4($__size_$i3$i$i$i$i$i20$i$i);
   $conv$i$i$i$i$i$i21$i$i = $4&255;
   $cond$i$i$i$i$i22$i$i = $tobool$i$i$i$i$i$i19$i$i ? $5 : $conv$i$i$i$i$i$i21$i$i;
   $6 = load4($__cc$i$i$i);
   $cond$i$i22$i$i$i$i$i$i = $tobool$i$i$i$i$i$i19$i$i ? $6 : $__cc$i$i$i;
   $__nd$0$i$i = $2;
   while(1) {
    $__value_$i$i = ((($__nd$0$i$i)) + 16|0);
    $__size_$i$i5$i$i$i$i24$i$i = ((($__value_$i$i)) + 11|0);
    $7 = load1($__size_$i$i5$i$i$i$i24$i$i);
    $tobool$i$i6$i$i$i$i25$i$i = ($7<<24>>24)<(0);
    $__size_$i3$i7$i$i$i$i26$i$i = ((($__nd$0$i$i)) + 20|0);
    $8 = load4($__size_$i3$i7$i$i$i$i26$i$i);
    $conv$i$i9$i$i$i$i27$i$i = $7&255;
    $cond$i11$i$i$i$i28$i$i = $tobool$i$i6$i$i$i$i25$i$i ? $8 : $conv$i$i9$i$i$i$i27$i$i;
    $cmp$i$i$i$i$i$i$i29$i$i = ($cond$i11$i$i$i$i28$i$i>>>0)<($cond$i$i$i$i$i22$i$i>>>0);
    $$sroa$speculated$i$i$i$i30$i$i = $cmp$i$i$i$i$i$i$i29$i$i ? $cond$i11$i$i$i$i28$i$i : $cond$i$i$i$i$i22$i$i;
    $cmp$i$i$i$i$i31$i$i = ($$sroa$speculated$i$i$i$i30$i$i|0)==(0);
    if ($cmp$i$i$i$i$i31$i$i) {
     label = 7;
    } else {
     $9 = load4($__value_$i$i);
     $cond$i$i22$i$i$i$i37$i$i = $tobool$i$i6$i$i$i$i25$i$i ? $9 : $__value_$i$i;
     $call$i$i$i$i$i38$i$i = (_memcmp($cond$i$i22$i$i$i$i$i$i,$cond$i$i22$i$i$i$i37$i$i,$$sroa$speculated$i$i$i$i30$i$i)|0);
     $cmp$i$i$i$i39$i$i = ($call$i$i$i$i$i38$i$i|0)==(0);
     if ($cmp$i$i$i$i39$i$i) {
      label = 7;
     } else {
      $cmp$i$i$i46$i$i = ($call$i$i$i$i$i38$i$i|0)<(0);
      if ($cmp$i$i$i46$i$i) {
       label = 9;
      } else {
       label = 11;
      }
     }
    }
    if ((label|0) == 7) {
     label = 0;
     $cmp8$i$i$i$i41$i$i = ($cond$i$i$i$i$i22$i$i>>>0)<($cond$i11$i$i$i$i28$i$i>>>0);
     if ($cmp8$i$i$i$i41$i$i) {
      label = 9;
     } else {
      label = 11;
     }
    }
    if ((label|0) == 9) {
     label = 0;
     $10 = load4($__nd$0$i$i);
     $cmp5$i$i = ($10|0)==(0|0);
     if ($cmp5$i$i) {
      label = 10;
      break;
     } else {
      $$sink$i$i = $10;
     }
    }
    else if ((label|0) == 11) {
     label = 0;
     $cmp$i$i$i$i$i$i$i$i$i = ($cond$i$i$i$i$i22$i$i>>>0)<($cond$i11$i$i$i$i28$i$i>>>0);
     $$sroa$speculated$i$i$i$i$i$i = $cmp$i$i$i$i$i$i$i$i$i ? $cond$i$i$i$i$i22$i$i : $cond$i11$i$i$i$i28$i$i;
     $cmp$i$i$i$i$i$i$i = ($$sroa$speculated$i$i$i$i$i$i|0)==(0);
     if ($cmp$i$i$i$i$i$i$i) {
      label = 13;
     } else {
      $12 = load4($__value_$i$i);
      $cond$i$i$i$i$i$i$i$i = $tobool$i$i6$i$i$i$i25$i$i ? $12 : $__value_$i$i;
      $call$i$i$i$i$i$i$i = (_memcmp($cond$i$i$i$i$i$i$i$i,$cond$i$i22$i$i$i$i$i$i,$$sroa$speculated$i$i$i$i$i$i)|0);
      $cmp$i$i$i$i$i$i = ($call$i$i$i$i$i$i$i|0)==(0);
      if ($cmp$i$i$i$i$i$i) {
       label = 13;
      } else {
       $cmp$i$i$i$i$i = ($call$i$i$i$i$i$i$i|0)<(0);
       if (!($cmp$i$i$i$i$i)) {
        label = 18;
        break;
       }
      }
     }
     if ((label|0) == 13) {
      label = 0;
      if (!($cmp$i$i$i$i$i$i$i29$i$i)) {
       label = 18;
       break;
      }
     }
     $13 = ((($__nd$0$i$i)) + 4|0);
     $14 = load4($13);
     $cmp14$i$i = ($14|0)==(0|0);
     if ($cmp14$i$i) {
      label = 17;
      break;
     } else {
      $$sink$i$i = $14;
     }
    }
    $__nd$0$i$i = $$sink$i$i;
   }
   if ((label|0) == 10) {
    $11 = $__nd$0$i$i;
    store4($__parent$i$sroa$0,$11);
    $__parent$i$sroa$0$0$__parent$i$sroa$0$0$ = $11;$retval$0$i$i = $__nd$0$i$i;
    break;
   }
   else if ((label|0) == 17) {
    $15 = $__nd$0$i$i;
    store4($__parent$i$sroa$0,$15);
    $__parent$i$sroa$0$0$__parent$i$sroa$0$0$ = $15;$retval$0$i$i = $13;
    break;
   }
   else if ((label|0) == 18) {
    $16 = $__nd$0$i$i;
    store4($__parent$i$sroa$0,$16);
    $__parent$i$sroa$0$0$__parent$i$sroa$0$0$ = $16;$retval$0$i$i = $__parent$i$sroa$0;
    break;
   }
  }
 } while(0);
 $18 = load4($retval$0$i$i);
 $cmp$i1 = ($18|0)==(0|0);
 if ($cmp$i1) {
  store4($call$i$i$i$i$i,0);
  $__right_$i$i = ((($call$i$i$i$i$i)) + 4|0);
  store4($__right_$i$i,0);
  $__parent_$i$i = ((($call$i$i$i$i$i)) + 8|0);
  store4($__parent_$i$i,$__parent$i$sroa$0$0$__parent$i$sroa$0$0$);
  store4($retval$0$i$i,$call$i$i$i$i$i);
  $19 = load4($1);
  $20 = load4($19);
  $cmp$i$i = ($20|0)==(0|0);
  if ($cmp$i$i) {
   $23 = $call$i$i$i$i$i;
  } else {
   $21 = $20;
   store4($1,$21);
   $$pre$i$i = load4($retval$0$i$i);
   $23 = $$pre$i$i;
  }
  $__left_7$i$i = ((($1)) + 4|0);
  $22 = load4($__left_7$i$i);
  __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($22,$23);
  $__first_$i$i$i$i6$i = ((($1)) + 8|0);
  $24 = load4($__first_$i$i$i$i6$i);
  $inc$i$i = (($24) + 1)|0;
  store4($__first_$i$i$i$i6$i,$inc$i$i);
 } else {
  $tobool$i$i$i = ($call$i$i$i$i$i|0)==(0|0);
  if (!($tobool$i$i$i)) {
   $second$i$i$i$i$i$i$i = ((($call$i$i$i$i$i)) + 28|0);
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($second$i$i$i$i$i$i$i);
   $first$i$i$i$i$i$i$i = ((($call$i$i$i$i$i)) + 16|0);
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($first$i$i$i$i$i$i$i);
   __ZdlPv($call$i$i$i$i$i);
  }
 }
 $call3 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc($vnode,3093)|0);
 $cmp4 = ($call3|0)==(0);
 if ($cmp4) {
  STACKTOP = sp;return;
 }
 $children = ((($vnode)) + 44|0);
 $25 = load4($children);
 $__end_$i11 = ((($vnode)) + 48|0);
 $26 = load4($__end_$i11);
 $cmp$i = ($25|0)==($26|0);
 if ($cmp$i) {
  STACKTOP = sp;return;
 }
 $27 = $25;$i$018 = 0;
 while(1) {
  $arrayidx$i = (($27) + ($i$018<<2)|0);
  $28 = load4($arrayidx$i);
  __ZN6asmdom5addNSEPNS_5VNodeE($28);
  $inc = (($i$018) + 1)|0;
  $29 = load4($__end_$i11);
  $30 = load4($children);
  $sub$ptr$sub$i = (($29) - ($30))|0;
  $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
  $cmp10 = ($inc|0)==($sub$ptr$div$i|0);
  $31 = $30;
  if ($cmp10) {
   break;
  } else {
   $27 = $31;$i$018 = $inc;
  }
 }
 STACKTOP = sp;return;
}
function __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($__root,$__x) {
 $__root = $__root|0;
 $__x = $__x|0;
 var $$pre = 0, $$pre94 = 0, $$pre96 = 0, $$pre97 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $__is_black_ = 0, $__is_black_14 = 0, $__is_black_2 = 0, $__is_black_21 = 0, $__is_black_23 = 0, $__is_black_31 = 0, $__is_black_47 = 0, $__is_black_49 = 0, $__is_black_7 = 0, $__is_black_7$sink = 0, $__parent_ = 0, $__parent_$i = 0, $__parent_$i46 = 0, $__parent_$i50 = 0, $__parent_$i63 = 0, $__parent_$i74 = 0, $__parent_4$i = 0;
 var $__parent_4$i65 = 0, $__parent_5$i = 0, $__parent_5$i66 = 0, $__parent_5$i77 = 0, $__right_$i = 0, $__right_$i48 = 0, $__right_$i61 = 0, $__right_$i71 = 0, $__right_10$sink$i = 0, $__right_10$sink$i56 = 0, $__right_10$sink$i69 = 0, $__right_10$sink$i80 = 0, $__x$addr$089 = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i55 = 0, $cmp$i$i68 = 0, $cmp$i$i79 = 0, $cmp$i45 = 0;
 var $cmp$i49 = 0, $cmp$i59 = 0, $cmp$i62 = 0, $cmp$i73 = 0, $cmp$i84 = 0, $cmp13 = 0, $cmp29 = 0, $cmp6 = 0, $frombool = 0, $frombool15 = 0, $lnot = 0, $tobool32 = 0, $tobool8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__x|0)==($__root|0);
 $__is_black_ = ((($__x)) + 12|0);
 $frombool = $cmp&1;
 store1($__is_black_,$frombool);
 if ($cmp) {
  return;
 } else {
  $__x$addr$089 = $__x;
 }
 while(1) {
  $__parent_ = ((($__x$addr$089)) + 8|0);
  $0 = load4($__parent_);
  $__is_black_2 = ((($0)) + 12|0);
  $1 = load1($__is_black_2);
  $lnot = ($1<<24>>24)==(0);
  if (!($lnot)) {
   label = 23;
   break;
  }
  $__parent_$i = ((($0)) + 8|0);
  $2 = load4($__parent_$i);
  $3 = load4($2);
  $cmp$i = ($3|0)==($0|0);
  if ($cmp$i) {
   $4 = ((($2)) + 4|0);
   $5 = load4($4);
   $cmp6 = ($5|0)==(0|0);
   if ($cmp6) {
    label = 7;
    break;
   }
   $__is_black_7 = ((($5)) + 12|0);
   $6 = load1($__is_black_7);
   $tobool8 = ($6<<24>>24)==(0);
   if ($tobool8) {
    $__is_black_7$sink = $__is_black_7;
   } else {
    label = 7;
    break;
   }
  } else {
   $cmp29 = ($3|0)==(0|0);
   if ($cmp29) {
    label = 16;
    break;
   }
   $__is_black_31 = ((($3)) + 12|0);
   $23 = load1($__is_black_31);
   $tobool32 = ($23<<24>>24)==(0);
   if ($tobool32) {
    $__is_black_7$sink = $__is_black_31;
   } else {
    label = 16;
    break;
   }
  }
  store1($__is_black_2,1);
  $cmp13 = ($2|0)==($__root|0);
  $__is_black_14 = ((($2)) + 12|0);
  $frombool15 = $cmp13&1;
  store1($__is_black_14,$frombool15);
  store1($__is_black_7$sink,1);
  if ($cmp13) {
   label = 23;
   break;
  } else {
   $__x$addr$089 = $2;
  }
 }
 if ((label|0) == 7) {
  $7 = load4($0);
  $cmp$i84 = ($7|0)==($__x$addr$089|0);
  if ($cmp$i84) {
   $15 = $0;$16 = $2;
  } else {
   $8 = $2;
   $__right_$i71 = ((($0)) + 4|0);
   $9 = load4($__right_$i71);
   $10 = load4($9);
   store4($__right_$i71,$10);
   $cmp$i73 = ($10|0)==(0|0);
   if ($cmp$i73) {
    $11 = $8;
   } else {
    $__parent_$i74 = ((($10)) + 8|0);
    store4($__parent_$i74,$0);
    $$pre96 = load4($__parent_$i);
    $11 = $$pre96;
   }
   $__parent_5$i77 = ((($9)) + 8|0);
   store4($__parent_5$i77,$11);
   $12 = load4($__parent_$i);
   $13 = load4($12);
   $cmp$i$i79 = ($13|0)==($0|0);
   $14 = ((($12)) + 4|0);
   $__right_10$sink$i80 = $cmp$i$i79 ? $12 : $14;
   store4($__right_10$sink$i80,$9);
   store4($9,$0);
   store4($__parent_$i,$9);
   $$pre97 = load4($__parent_5$i77);
   $15 = $9;$16 = $$pre97;
  }
  $__is_black_21 = ((($15)) + 12|0);
  store1($__is_black_21,1);
  $__is_black_23 = ((($16)) + 12|0);
  store1($__is_black_23,0);
  $17 = load4($16);
  $__right_$i61 = ((($17)) + 4|0);
  $18 = load4($__right_$i61);
  store4($16,$18);
  $cmp$i62 = ($18|0)==(0|0);
  if (!($cmp$i62)) {
   $__parent_$i63 = ((($18)) + 8|0);
   store4($__parent_$i63,$16);
  }
  $__parent_4$i65 = ((($16)) + 8|0);
  $19 = load4($__parent_4$i65);
  $__parent_5$i66 = ((($17)) + 8|0);
  store4($__parent_5$i66,$19);
  $20 = load4($__parent_4$i65);
  $21 = load4($20);
  $cmp$i$i68 = ($21|0)==($16|0);
  $22 = ((($20)) + 4|0);
  $__right_10$sink$i69 = $cmp$i$i68 ? $20 : $22;
  store4($__right_10$sink$i69,$17);
  store4($__right_$i61,$16);
  store4($__parent_4$i65,$17);
  return;
 }
 else if ((label|0) == 16) {
  $24 = load4($0);
  $cmp$i59 = ($24|0)==($__x$addr$089|0);
  if ($cmp$i59) {
   $25 = $2;
   $__right_$i48 = ((($__x$addr$089)) + 4|0);
   $26 = load4($__right_$i48);
   store4($0,$26);
   $cmp$i49 = ($26|0)==(0|0);
   if ($cmp$i49) {
    $27 = $25;
   } else {
    $__parent_$i50 = ((($26)) + 8|0);
    store4($__parent_$i50,$0);
    $$pre = load4($__parent_$i);
    $27 = $$pre;
   }
   store4($__parent_,$27);
   $28 = load4($__parent_$i);
   $29 = load4($28);
   $cmp$i$i55 = ($29|0)==($0|0);
   $30 = ((($28)) + 4|0);
   $__right_10$sink$i56 = $cmp$i$i55 ? $28 : $30;
   store4($__right_10$sink$i56,$__x$addr$089);
   store4($__right_$i48,$0);
   store4($__parent_$i,$__x$addr$089);
   $$pre94 = load4($__parent_);
   $31 = $__x$addr$089;$32 = $$pre94;
  } else {
   $31 = $0;$32 = $2;
  }
  $__is_black_47 = ((($31)) + 12|0);
  store1($__is_black_47,1);
  $__is_black_49 = ((($32)) + 12|0);
  store1($__is_black_49,0);
  $__right_$i = ((($32)) + 4|0);
  $33 = load4($__right_$i);
  $34 = load4($33);
  store4($__right_$i,$34);
  $cmp$i45 = ($34|0)==(0|0);
  if (!($cmp$i45)) {
   $__parent_$i46 = ((($34)) + 8|0);
   store4($__parent_$i46,$32);
  }
  $__parent_4$i = ((($32)) + 8|0);
  $35 = load4($__parent_4$i);
  $__parent_5$i = ((($33)) + 8|0);
  store4($__parent_5$i,$35);
  $36 = load4($__parent_4$i);
  $37 = load4($36);
  $cmp$i$i = ($37|0)==($32|0);
  $38 = ((($36)) + 4|0);
  $__right_10$sink$i = $cmp$i$i ? $36 : $38;
  store4($__right_10$sink$i,$33);
  store4($33,$32);
  store4($__parent_4$i,$33);
  return;
 }
 else if ((label|0) == 23) {
  return;
 }
}
function __ZN6asmdom5VNode11adjustVNodeEv($this) {
 $this = $this|0;
 var $$in = 0, $$in$i = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin_$i = 0, $__end_$i = 0, $__new_last3$i$i$i = 0, $__parent$i = 0, $__size_$i$i$i = 0, $add$ptr$i = 0, $add$ptr$i21 = 0, $call$i$i3 = 0, $call$i1 = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i26 = 0, $cmp23 = 0;
 var $cmp27 = 0, $cmp32 = 0, $cmp4 = 0, $cond$i$i = 0, $cond$i$i11 = 0, $cond$i$i20 = 0, $data = 0, $exception$i = 0, $incdec$ptr$i$i$i = 0, $incdec$ptr$i19$i = 0, $incdec$ptr$i9$i = 0, $incdec$ptr$i920$i = 0, $key = 0, $lnot$i$i = 0, $lnot$i$i$i = 0, $lnot$i$i31 = 0, $lnot$i12$i = 0, $lnot$i2$i$i = 0, $lnot$i21$i = 0, $ref$tmp16 = 0;
 var $retval$sroa$0$0$copyload$i = 0, $retval$sroa$0$0$copyload23$i = 0, $retval$sroa$0$0$copyload24$i = 0, $scevgep$i$i$i = 0, $scevgep5$i$i$i = 0, $second$i = 0, $tobool$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $__parent$i = sp + 12|0;
 $ref$tmp16 = sp;
 $data = ((($this)) + 36|0);
 $0 = load4($data);
 $cmp = ($0|0)==(0|0);
 do {
  if (!($cmp)) {
   ; store8($__parent$i,i64_const(0,0),4); store4($__parent$i+8|0,0,4);
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($__parent$i,3107,3);
   $call$i1 = (__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_($0,$__parent$i)|0);
   $cmp4 = ($call$i1|0)==(0);
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($__parent$i);
   if (!($cmp4)) {
    $1 = load4($data);
    ; store8($ref$tmp16,i64_const(0,0),4); store4($ref$tmp16+8|0,0,4);
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp16,3107,3);
    $call$i$i3 = (__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_($1,$__parent$i,$ref$tmp16)|0);
    $2 = load4($call$i$i3);
    $cmp$i = ($2|0)==(0|0);
    if ($cmp$i) {
     $exception$i = (___cxa_allocate_exception(8)|0);
     __ZNSt11logic_errorC2EPKc($exception$i);
     store4($exception$i,(2736));
     ___cxa_throw(($exception$i|0),(1560|0),(14|0));
     // unreachable;
    } else {
     $second$i = ((($2)) + 28|0);
     $key = ((($this)) + 12|0);
     (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($key,$second$i)|0);
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp16);
     break;
    }
   }
  }
 } while(0);
 $__size_$i$i$i = ((($this)) + 11|0);
 $3 = load1($__size_$i$i$i);
 $tobool$i$i$i = ($3<<24>>24)<(0);
 if ($tobool$i$i$i) {
  $4 = load4($this);
  $cond$i$i = $4;
 } else {
  $cond$i$i = $this;
 }
 $5 = load1($cond$i$i);
 $cmp23 = ($5<<24>>24)==(115);
 if ($cmp23) {
  if ($tobool$i$i$i) {
   $6 = load4($this);
   $cond$i$i11 = $6;
  } else {
   $cond$i$i11 = $this;
  }
  $add$ptr$i = ((($cond$i$i11)) + 1|0);
  $7 = load1($add$ptr$i);
  $cmp27 = ($7<<24>>24)==(118);
  if ($cmp27) {
   if ($tobool$i$i$i) {
    $8 = load4($this);
    $cond$i$i20 = $8;
   } else {
    $cond$i$i20 = $this;
   }
   $add$ptr$i21 = ((($cond$i$i20)) + 2|0);
   $9 = load1($add$ptr$i21);
   $cmp32 = ($9<<24>>24)==(103);
   if ($cmp32) {
    __ZN6asmdom5addNSEPNS_5VNodeE($this);
   }
  }
 }
 $__begin_$i = ((($this)) + 44|0);
 $10 = load4($__begin_$i);
 $__end_$i = ((($this)) + 48|0);
 $11 = load4($__end_$i);
 $lnot$i2$i$i = ($10|0)==($11|0);
 L25: do {
  if ($lnot$i2$i$i) {
   $14 = $10;
  } else {
   $13 = $10;
   while(1) {
    $12 = load4($13);
    $cmp$i$i = ($12|0)==(0|0);
    if ($cmp$i$i) {
     $14 = $13;
     break L25;
    }
    $incdec$ptr$i$i$i = ((($13)) + 4|0);
    $lnot$i$i$i = ($incdec$ptr$i$i$i|0)==($11|0);
    if ($lnot$i$i$i) {
     break;
    } else {
     $13 = $incdec$ptr$i$i$i;
    }
   }
   STACKTOP = sp;return;
  }
 } while(0);
 $lnot$i12$i = ($14|0)==($11|0);
 if ($lnot$i12$i) {
  STACKTOP = sp;return;
 }
 $incdec$ptr$i920$i = ((($14)) + 4|0);
 $lnot$i21$i = ($incdec$ptr$i920$i|0)==($11|0);
 if ($lnot$i21$i) {
  $$in = $11;$retval$sroa$0$0$copyload$i = $14;
 } else {
  $$in$i = $incdec$ptr$i920$i;$17 = $14;$retval$sroa$0$0$copyload24$i = $14;
  while(1) {
   $15 = load4($$in$i);
   $cmp$i26 = ($15|0)==(0|0);
   if ($cmp$i26) {
    $22 = $17;$retval$sroa$0$0$copyload23$i = $retval$sroa$0$0$copyload24$i;
   } else {
    $16 = $15;
    store4($17,$16);
    $incdec$ptr$i19$i = ((($17)) + 4|0);
    $22 = $incdec$ptr$i19$i;$retval$sroa$0$0$copyload23$i = $incdec$ptr$i19$i;
   }
   $incdec$ptr$i9$i = ((($$in$i)) + 4|0);
   $lnot$i$i = ($incdec$ptr$i9$i|0)==($11|0);
   if ($lnot$i$i) {
    break;
   } else {
    $$in$i = $incdec$ptr$i9$i;$17 = $22;$retval$sroa$0$0$copyload24$i = $retval$sroa$0$0$copyload23$i;
   }
  }
  $$pre = load4($__end_$i);
  $$in = $$pre;$retval$sroa$0$0$copyload$i = $retval$sroa$0$0$copyload23$i;
 }
 $lnot$i$i31 = ($retval$sroa$0$0$copyload$i|0)==($$in|0);
 if ($lnot$i$i31) {
  STACKTOP = sp;return;
 }
 $scevgep$i$i$i = ((($$in)) + -4|0);
 $18 = $scevgep$i$i$i;
 $__new_last3$i$i$i = $retval$sroa$0$0$copyload$i;
 $19 = (($18) - ($__new_last3$i$i$i))|0;
 $20 = $19 >>> 2;
 $21 = $20 ^ -1;
 $scevgep5$i$i$i = (($$in) + ($21<<2)|0);
 store4($__end_$i,$scevgep5$i$i$i);
 STACKTOP = sp;return;
}
function __ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_($this,$__k) {
 $this = $this|0;
 $__k = $__k|0;
 var $$sink$be = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i$i22 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__first_$i$i$i = 0, $__size_$i$i$i$i$i$i10 = 0, $__size_$i$i5$i$i$i$i16 = 0, $__size_$i3$i$i$i$i$i12 = 0, $__size_$i3$i7$i$i$i$i18 = 0, $__value_ = 0;
 var $call$i$i$i$i$i = 0, $call$i$i$i$i$i30 = 0, $cmp = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i21 = 0, $cmp$i$i$i$i$i23 = 0, $cmp$i$i$i$i31 = 0, $cmp$i$i$i38 = 0, $cmp47 = 0, $cmp8$i$i$i$i33 = 0, $cond$i$i$i$i$i$i = 0, $cond$i$i$i$i$i14 = 0, $cond$i$i22$i$i$i$i = 0, $cond$i$i22$i$i$i$i29 = 0, $cond$i11$i$i$i$i20 = 0, $conv$i$i$i$i$i$i13 = 0, $conv$i$i9$i$i$i$i19 = 0;
 var $retval$0 = 0, $tobool$i$i$i$i$i$i11 = 0, $tobool$i$i6$i$i$i$i17 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__first_$i$i$i = ((($this)) + 4|0);
 $0 = load4($__first_$i$i$i);
 $cmp47 = ($0|0)==(0|0);
 if ($cmp47) {
  $retval$0 = 0;
  return ($retval$0|0);
 }
 $__size_$i$i$i$i$i$i10 = ((($__k)) + 11|0);
 $1 = load1($__size_$i$i$i$i$i$i10);
 $tobool$i$i$i$i$i$i11 = ($1<<24>>24)<(0);
 $__size_$i3$i$i$i$i$i12 = ((($__k)) + 4|0);
 $2 = load4($__size_$i3$i$i$i$i$i12);
 $conv$i$i$i$i$i$i13 = $1&255;
 $cond$i$i$i$i$i14 = $tobool$i$i$i$i$i$i11 ? $2 : $conv$i$i$i$i$i$i13;
 $3 = load4($__k);
 $cond$i$i22$i$i$i$i = $tobool$i$i$i$i$i$i11 ? $3 : $__k;
 $4 = $0;
 while(1) {
  $__value_ = ((($4)) + 16|0);
  $__size_$i$i5$i$i$i$i16 = ((($__value_)) + 11|0);
  $5 = load1($__size_$i$i5$i$i$i$i16);
  $tobool$i$i6$i$i$i$i17 = ($5<<24>>24)<(0);
  $__size_$i3$i7$i$i$i$i18 = ((($4)) + 20|0);
  $6 = load4($__size_$i3$i7$i$i$i$i18);
  $conv$i$i9$i$i$i$i19 = $5&255;
  $cond$i11$i$i$i$i20 = $tobool$i$i6$i$i$i$i17 ? $6 : $conv$i$i9$i$i$i$i19;
  $cmp$i$i$i$i$i$i$i21 = ($cond$i11$i$i$i$i20>>>0)<($cond$i$i$i$i$i14>>>0);
  $$sroa$speculated$i$i$i$i22 = $cmp$i$i$i$i$i$i$i21 ? $cond$i11$i$i$i$i20 : $cond$i$i$i$i$i14;
  $cmp$i$i$i$i$i23 = ($$sroa$speculated$i$i$i$i22|0)==(0);
  if ($cmp$i$i$i$i$i23) {
   label = 5;
  } else {
   $7 = load4($__value_);
   $cond$i$i22$i$i$i$i29 = $tobool$i$i6$i$i$i$i17 ? $7 : $__value_;
   $call$i$i$i$i$i30 = (_memcmp($cond$i$i22$i$i$i$i,$cond$i$i22$i$i$i$i29,$$sroa$speculated$i$i$i$i22)|0);
   $cmp$i$i$i$i31 = ($call$i$i$i$i$i30|0)==(0);
   if ($cmp$i$i$i$i31) {
    label = 5;
   } else {
    $cmp$i$i$i38 = ($call$i$i$i$i$i30|0)<(0);
    if ($cmp$i$i$i38) {
     label = 7;
    } else {
     label = 8;
    }
   }
  }
  if ((label|0) == 5) {
   label = 0;
   $cmp8$i$i$i$i33 = ($cond$i$i$i$i$i14>>>0)<($cond$i11$i$i$i$i20>>>0);
   if ($cmp8$i$i$i$i33) {
    label = 7;
   } else {
    label = 8;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $$sink$be = $4;
  }
  else if ((label|0) == 8) {
   label = 0;
   $cmp$i$i$i$i$i$i$i = ($cond$i$i$i$i$i14>>>0)<($cond$i11$i$i$i$i20>>>0);
   $$sroa$speculated$i$i$i$i = $cmp$i$i$i$i$i$i$i ? $cond$i$i$i$i$i14 : $cond$i11$i$i$i$i20;
   $cmp$i$i$i$i$i = ($$sroa$speculated$i$i$i$i|0)==(0);
   if ($cmp$i$i$i$i$i) {
    label = 10;
   } else {
    $8 = load4($__value_);
    $cond$i$i$i$i$i$i = $tobool$i$i6$i$i$i$i17 ? $8 : $__value_;
    $call$i$i$i$i$i = (_memcmp($cond$i$i$i$i$i$i,$cond$i$i22$i$i$i$i,$$sroa$speculated$i$i$i$i)|0);
    $cmp$i$i$i$i = ($call$i$i$i$i$i|0)==(0);
    if ($cmp$i$i$i$i) {
     label = 10;
    } else {
     $cmp$i$i$i = ($call$i$i$i$i$i|0)<(0);
     if (!($cmp$i$i$i)) {
      $retval$0 = 1;
      label = 14;
      break;
     }
    }
   }
   if ((label|0) == 10) {
    label = 0;
    if (!($cmp$i$i$i$i$i$i$i21)) {
     $retval$0 = 1;
     label = 14;
     break;
    }
   }
   $9 = ((($4)) + 4|0);
   $$sink$be = $9;
  }
  $10 = load4($$sink$be);
  $cmp = ($10|0)==(0|0);
  if ($cmp) {
   $retval$0 = 0;
   label = 14;
   break;
  } else {
   $4 = $10;
  }
 }
 if ((label|0) == 14) {
  return ($retval$0|0);
 }
 return (0)|0;
}
function __ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_($this,$__parent,$__k) {
 $this = $this|0;
 $__parent = $__parent|0;
 $__k = $__k|0;
 var $$sink = 0, $$sroa$speculated$i$i$i = 0, $$sroa$speculated$i$i$i30 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__first_$i$i$i$i = 0, $__nd$0 = 0, $__size_$i$i$i$i$i18 = 0, $__size_$i$i5$i$i$i24 = 0, $__size_$i3$i$i$i$i20 = 0, $__size_$i3$i7$i$i$i26 = 0;
 var $call$i$i$i$i = 0, $call$i$i$i$i38 = 0, $cmp = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i29 = 0, $cmp$i$i$i$i31 = 0, $cmp$i$i$i39 = 0, $cmp$i$i46 = 0, $cmp20 = 0, $cmp7 = 0, $cmp8$i$i$i41 = 0, $cond$i$i$i$i$i = 0, $cond$i$i$i$i22 = 0, $cond$i$i22$i$i$i = 0, $cond$i$i22$i$i$i37 = 0, $cond$i11$i$i$i28 = 0, $conv$i$i$i$i$i21 = 0;
 var $conv$i$i9$i$i$i27 = 0, $first = 0, $retval$0 = 0, $tobool$i$i$i$i$i19 = 0, $tobool$i$i6$i$i$i25 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__first_$i$i$i$i = ((($this)) + 4|0);
 $0 = load4($__first_$i$i$i$i);
 $cmp = ($0|0)==(0|0);
 if ($cmp) {
  store4($__parent,$__first_$i$i$i$i);
  $retval$0 = $__first_$i$i$i$i;
  return ($retval$0|0);
 }
 $__size_$i$i$i$i$i18 = ((($__k)) + 11|0);
 $1 = load1($__size_$i$i$i$i$i18);
 $tobool$i$i$i$i$i19 = ($1<<24>>24)<(0);
 $__size_$i3$i$i$i$i20 = ((($__k)) + 4|0);
 $2 = load4($__size_$i3$i$i$i$i20);
 $conv$i$i$i$i$i21 = $1&255;
 $cond$i$i$i$i22 = $tobool$i$i$i$i$i19 ? $2 : $conv$i$i$i$i$i21;
 $3 = load4($__k);
 $cond$i$i22$i$i$i = $tobool$i$i$i$i$i19 ? $3 : $__k;
 $__nd$0 = $0;
 while(1) {
  $first = ((($__nd$0)) + 16|0);
  $__size_$i$i5$i$i$i24 = ((($first)) + 11|0);
  $4 = load1($__size_$i$i5$i$i$i24);
  $tobool$i$i6$i$i$i25 = ($4<<24>>24)<(0);
  $__size_$i3$i7$i$i$i26 = ((($__nd$0)) + 20|0);
  $5 = load4($__size_$i3$i7$i$i$i26);
  $conv$i$i9$i$i$i27 = $4&255;
  $cond$i11$i$i$i28 = $tobool$i$i6$i$i$i25 ? $5 : $conv$i$i9$i$i$i27;
  $cmp$i$i$i$i$i$i29 = ($cond$i11$i$i$i28>>>0)<($cond$i$i$i$i22>>>0);
  $$sroa$speculated$i$i$i30 = $cmp$i$i$i$i$i$i29 ? $cond$i11$i$i$i28 : $cond$i$i$i$i22;
  $cmp$i$i$i$i31 = ($$sroa$speculated$i$i$i30|0)==(0);
  if ($cmp$i$i$i$i31) {
   label = 5;
  } else {
   $6 = load4($first);
   $cond$i$i22$i$i$i37 = $tobool$i$i6$i$i$i25 ? $6 : $first;
   $call$i$i$i$i38 = (_memcmp($cond$i$i22$i$i$i,$cond$i$i22$i$i$i37,$$sroa$speculated$i$i$i30)|0);
   $cmp$i$i$i39 = ($call$i$i$i$i38|0)==(0);
   if ($cmp$i$i$i39) {
    label = 5;
   } else {
    $cmp$i$i46 = ($call$i$i$i$i38|0)<(0);
    if ($cmp$i$i46) {
     label = 7;
    } else {
     label = 9;
    }
   }
  }
  if ((label|0) == 5) {
   label = 0;
   $cmp8$i$i$i41 = ($cond$i$i$i$i22>>>0)<($cond$i11$i$i$i28>>>0);
   if ($cmp8$i$i$i41) {
    label = 7;
   } else {
    label = 9;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $7 = load4($__nd$0);
   $cmp7 = ($7|0)==(0|0);
   if ($cmp7) {
    label = 8;
    break;
   } else {
    $$sink = $7;
   }
  }
  else if ((label|0) == 9) {
   label = 0;
   $cmp$i$i$i$i$i$i = ($cond$i$i$i$i22>>>0)<($cond$i11$i$i$i28>>>0);
   $$sroa$speculated$i$i$i = $cmp$i$i$i$i$i$i ? $cond$i$i$i$i22 : $cond$i11$i$i$i28;
   $cmp$i$i$i$i = ($$sroa$speculated$i$i$i|0)==(0);
   if ($cmp$i$i$i$i) {
    label = 11;
   } else {
    $8 = load4($first);
    $cond$i$i$i$i$i = $tobool$i$i6$i$i$i25 ? $8 : $first;
    $call$i$i$i$i = (_memcmp($cond$i$i$i$i$i,$cond$i$i22$i$i$i,$$sroa$speculated$i$i$i)|0);
    $cmp$i$i$i = ($call$i$i$i$i|0)==(0);
    if ($cmp$i$i$i) {
     label = 11;
    } else {
     $cmp$i$i = ($call$i$i$i$i|0)<(0);
     if (!($cmp$i$i)) {
      label = 16;
      break;
     }
    }
   }
   if ((label|0) == 11) {
    label = 0;
    if (!($cmp$i$i$i$i$i$i29)) {
     label = 16;
     break;
    }
   }
   $9 = ((($__nd$0)) + 4|0);
   $10 = load4($9);
   $cmp20 = ($10|0)==(0|0);
   if ($cmp20) {
    label = 15;
    break;
   } else {
    $$sink = $10;
   }
  }
  $__nd$0 = $$sink;
 }
 if ((label|0) == 8) {
  store4($__parent,$__nd$0);
  $retval$0 = $__nd$0;
  return ($retval$0|0);
 }
 else if ((label|0) == 15) {
  store4($__parent,$__nd$0);
  $retval$0 = $9;
  return ($retval$0|0);
 }
 else if ((label|0) == 16) {
  store4($__parent,$__nd$0);
  $retval$0 = $__parent;
  return ($retval$0|0);
 }
 return (0)|0;
}
function __ZN6asmdom11deleteVNodeEPNS_5VNodeE($vnode) {
 $vnode = $vnode|0;
 var $$pre = 0, $$pre9 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin_$i$i$phi$trans$insert = 0, $__end_$i = 0;
 var $__first_$i$i$i$i$i$i$i = 0, $__first_$i$i$i$i$i$i2$i = 0, $__first_$i$i$i$i$i$i4$i = 0, $arrayidx$i = 0, $arrayidx$i12 = 0, $children = 0, $cmp$i$i = 0, $cmp1$i$i$i$i = 0, $data = 0, $dec8 = 0, $dec811 = 0, $dec814 = 0, $isnull = 0, $key$i = 0, $scevgep$i$i$i$i = 0, $scevgep5$i$i$i$i = 0, $sub$ptr$div$i = 0, $sub$ptr$sub$i = 0, $text$i = 0, $tobool = 0;
 var $tobool13 = 0, $tobool7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $data = ((($vnode)) + 36|0);
 $0 = load4($data);
 $isnull = ($0|0)==(0|0);
 if (!($isnull)) {
  $__first_$i$i$i$i$i$i$i = ((($0)) + 28|0);
  $1 = load4($__first_$i$i$i$i$i$i$i);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_19__map_value_compareIS7_SD_NS_4lessIS7_EELb1EEENS5_ISD_EEE7destroyEPNS_11__tree_nodeISD_PvEE($1);
  $__first_$i$i$i$i$i$i2$i = ((($0)) + 16|0);
  $2 = load4($__first_$i$i$i$i$i$i2$i);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS5_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE($2);
  $__first_$i$i$i$i$i$i4$i = ((($0)) + 4|0);
  $3 = load4($__first_$i$i$i$i$i$i4$i);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($3);
  __ZdlPv($0);
 }
 store4($data,0);
 $children = ((($vnode)) + 44|0);
 $__end_$i = ((($vnode)) + 48|0);
 $4 = load4($__end_$i);
 $5 = load4($children);
 $sub$ptr$sub$i = (($4) - ($5))|0;
 $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
 $tobool7 = ($sub$ptr$div$i|0)==(0);
 $6 = $5;
 if ($tobool7) {
  $9 = $6;
 } else {
  $dec811 = (($sub$ptr$div$i) + -1)|0;
  $arrayidx$i12 = (($6) + ($dec811<<2)|0);
  $7 = load4($arrayidx$i12);
  __ZN6asmdom11deleteVNodeEPNS_5VNodeE($7);
  $tobool13 = ($dec811|0)==(0);
  if (!($tobool13)) {
   $dec814 = $dec811;
   while(1) {
    $$pre = load4($children);
    $dec8 = (($dec814) + -1)|0;
    $arrayidx$i = (($$pre) + ($dec8<<2)|0);
    $8 = load4($arrayidx$i);
    __ZN6asmdom11deleteVNodeEPNS_5VNodeE($8);
    $tobool = ($dec8|0)==(0);
    if ($tobool) {
     break;
    } else {
     $dec814 = $dec8;
    }
   }
  }
  $__begin_$i$i$phi$trans$insert = ((($vnode)) + 44|0);
  $$pre9 = load4($__begin_$i$i$phi$trans$insert);
  $9 = $$pre9;
 }
 $cmp$i$i = ($9|0)==(0|0);
 if ($cmp$i$i) {
  $text$i = ((($vnode)) + 24|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($text$i);
  $key$i = ((($vnode)) + 12|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($key$i);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($vnode);
  __ZdlPv($vnode);
  return;
 }
 $10 = load4($__end_$i);
 $cmp1$i$i$i$i = ($10|0)==($9|0);
 if (!($cmp1$i$i$i$i)) {
  $scevgep$i$i$i$i = ((($10)) + -4|0);
  $11 = $scevgep$i$i$i$i;
  $12 = $9;
  $13 = (($11) - ($12))|0;
  $14 = $13 >>> 2;
  $15 = $14 ^ -1;
  $scevgep5$i$i$i$i = (($10) + ($15<<2)|0);
  store4($__end_$i,$scevgep5$i$i$i$i);
 }
 __ZdlPv($9);
 $text$i = ((($vnode)) + 24|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($text$i);
 $key$i = ((($vnode)) + 12|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($key$i);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($vnode);
 __ZdlPv($vnode);
 return;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_19__map_value_compareIS7_SD_NS_4lessIS7_EELb1EEENS5_ISD_EEE7destroyEPNS_11__tree_nodeISD_PvEE($__nd) {
 $__nd = $__nd|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $__f_$i$i$i$i = 0, $cmp = 0, $cmp$i$i$i$i = 0, $first$i$i$i = 0, $tobool$i$i$i$i = 0, $vfn$i$i$i$i = 0, $vfn7$i$i$i$i = 0, $vtable$i$i$i$i = 0, $vtable6$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__nd|0)==(0|0);
 if ($cmp) {
  return;
 }
 $0 = load4($__nd);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_19__map_value_compareIS7_SD_NS_4lessIS7_EELb1EEENS5_ISD_EEE7destroyEPNS_11__tree_nodeISD_PvEE($0);
 $1 = ((($__nd)) + 4|0);
 $2 = load4($1);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_19__map_value_compareIS7_SD_NS_4lessIS7_EELb1EEENS5_ISD_EEE7destroyEPNS_11__tree_nodeISD_PvEE($2);
 $__f_$i$i$i$i = ((($__nd)) + 48|0);
 $3 = load4($__f_$i$i$i$i);
 $4 = ((($__nd)) + 32|0);
 $cmp$i$i$i$i = ($3|0)==($4|0);
 if ($cmp$i$i$i$i) {
  $vtable$i$i$i$i = load4($3);
  $vfn$i$i$i$i = ((($vtable$i$i$i$i)) + 16|0);
  $5 = load4($vfn$i$i$i$i);
  FUNCTION_TABLE_vi[$5 & 31]($3);
 } else {
  $tobool$i$i$i$i = ($3|0)==(0|0);
  if (!($tobool$i$i$i$i)) {
   $vtable6$i$i$i$i = load4($3);
   $vfn7$i$i$i$i = ((($vtable6$i$i$i$i)) + 20|0);
   $6 = load4($vfn7$i$i$i$i);
   FUNCTION_TABLE_vi[$6 & 31]($3);
  }
 }
 $first$i$i$i = ((($__nd)) + 16|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($first$i$i$i);
 __ZdlPv($__nd);
 return;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS5_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE($__nd) {
 $__nd = $__nd|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $cmp = 0, $first$i$i$i = 0, $handle$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__nd|0)==(0|0);
 if ($cmp) {
  return;
 }
 $0 = load4($__nd);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS5_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE($0);
 $1 = ((($__nd)) + 4|0);
 $2 = load4($1);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS5_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE($2);
 $handle$i$i$i$i = ((($__nd)) + 28|0);
 $3 = load4($handle$i$i$i$i);
 __emval_decref(($3|0));
 $first$i$i$i = ((($__nd)) + 16|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($first$i$i$i);
 __ZdlPv($__nd);
 return;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($__nd) {
 $__nd = $__nd|0;
 var $0 = 0, $1 = 0, $2 = 0, $cmp = 0, $first$i$i$i = 0, $second$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__nd|0)==(0|0);
 if ($cmp) {
  return;
 } else {
  $0 = load4($__nd);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0);
  $1 = ((($__nd)) + 4|0);
  $2 = load4($1);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($2);
  $second$i$i$i = ((($__nd)) + 28|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($second$i$i$i);
  $first$i$i$i = ((($__nd)) + 16|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($first$i$i$i);
  __ZdlPv($__nd);
  return;
 }
}
function __ZN6asmdom9diffAttrsEPNS_5VNodeES1_($oldVnode$0$3$val,$vnode) {
 $oldVnode$0$3$val = $oldVnode$0$3$val|0;
 $vnode = $vnode|0;
 var $$pre = 0, $$pre105 = 0, $$pre106 = 0, $$sroa$speculated$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__cc$i24 = 0, $__cc$i24$us = 0, $__first_$i$i$i$i$i7592 = 0, $__first_$i$i$i$i$i96 = 0, $__parent$i = 0, $__parent_$i$i$i$i = 0, $__parent_$i$i$i$i$us = 0, $__parent_$i$i$i$i58 = 0, $__parent_$i$i$i$i58$us = 0, $__right_$i$i$i = 0;
 var $__right_$i$i$i$us = 0, $__right_$i$i$i51 = 0, $__right_$i$i$i51$us = 0, $__size_$i$i$i$i = 0, $__size_$i$i$i$i$us = 0, $__size_$i$i$i$i15 = 0, $__size_$i$i$i$i15$us = 0, $__size_$i$i$i$i42 = 0, $__size_$i$i$i$i42$us = 0, $__size_$i$i5$i = 0, $__size_$i3$i$i = 0, $__size_$i3$i7$i = 0, $__x$addr$0$i$i$i = 0, $__x$addr$0$i$i$i$i = 0, $__x$addr$0$i$i$i$i$us = 0, $__x$addr$0$i$i$i$i53 = 0, $__x$addr$0$i$i$i$i53$us = 0, $__x$addr$0$i$i$i$us = 0, $__x$addr$0$i$i$i57 = 0, $__x$addr$0$i$i$i57$us = 0;
 var $call$i = 0, $call$i$i = 0, $call$i$i34 = 0, $call$i68 = 0, $call21 = 0, $call21$us = 0, $call74 = 0, $call74$us = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$us = 0, $cmp$i$i$i$i30 = 0, $cmp$i$i$i$i55 = 0, $cmp$i$i$i$i55$us = 0, $cmp$i$i$i$us = 0, $cmp$i$i$i52 = 0, $cmp$i$i$i52$us = 0;
 var $cmp$i35 = 0, $cmp$i5$i$i$i = 0, $cmp$i5$i$i$i$us = 0, $cmp$i5$i$i$i60 = 0, $cmp$i5$i$i$i60$us = 0, $cmp16 = 0, $cmp25 = 0, $cmp4 = 0, $cmp52 = 0, $cmp65 = 0, $cmp8$i = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i$i$i$us = 0, $cond$i$i$i21 = 0, $cond$i$i$i21$us = 0, $cond$i$i$i29 = 0, $cond$i$i$i48 = 0, $cond$i$i$i48$us = 0, $cond$i$i22$i = 0;
 var $cond$i11$i = 0, $conv$i$i$i = 0, $conv$i$i9$i = 0, $data24$pre$phiZ2D = 0, $data3 = 0, $elm = 0, $elm67 = 0, $exception$i = 0, $first = 0, $first19$us = 0, $first50 = 0, $it$sroa$0$098 = 0, $it$sroa$0$098$us = 0, $it27$sroa$0$094 = 0, $it27$sroa$0$094$us = 0, $lnot$i$i = 0, $lnot$i$i$us = 0, $lnot$i$i74 = 0, $lnot$i$i74$us = 0, $lnot$i$i7493 = 0;
 var $lnot$i$i97 = 0, $or$cond = 0, $retval$0$i$i$i = 0, $retval$0$i$i$i$us = 0, $retval$0$i$i$i63 = 0, $retval$0$i$i$i63$us = 0, $second = 0, $second$i = 0, $second72 = 0, $second72$us = 0, $tobool$i$i$i = 0, $tobool$i$i$i$i = 0, $tobool$i$i$i$i$us = 0, $tobool$i$i$i$i16 = 0, $tobool$i$i$i$i16$us = 0, $tobool$i$i$i$i43 = 0, $tobool$i$i$i$i43$us = 0, $tobool$i$i6$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $__parent$i = sp;
 $cmp = ($oldVnode$0$3$val|0)==(0|0);
 L1: do {
  if ($cmp) {
   $$pre106 = ((($vnode)) + 36|0);
   $data24$pre$phiZ2D = $$pre106;
  } else {
   $0 = load4($oldVnode$0$3$val);
   $data3 = ((($vnode)) + 36|0);
   $__first_$i$i$i$i$i96 = ((($oldVnode$0$3$val)) + 4|0);
   $lnot$i$i97 = ($0|0)==($__first_$i$i$i$i$i96|0);
   if ($lnot$i$i97) {
    $data24$pre$phiZ2D = $data3;
   } else {
    $1 = load4($data3);
    $cmp4 = ($1|0)==(0|0);
    $elm = ((($vnode)) + 40|0);
    if ($cmp4) {
     $$pre = load4($elm);
     $4 = $0;$it$sroa$0$098$us = $0;
     while(1) {
      $first19$us = ((($it$sroa$0$098$us)) + 16|0);
      $__size_$i$i$i$i42$us = ((($first19$us)) + 11|0);
      $2 = load1($__size_$i$i$i$i42$us);
      $tobool$i$i$i$i43$us = ($2<<24>>24)<(0);
      if ($tobool$i$i$i$i43$us) {
       $3 = load4($first19$us);
       $cond$i$i$i48$us = $3;
      } else {
       $cond$i$i$i48$us = $first19$us;
      }
      $call21$us = _emscripten_asm_const_iii(0, ($$pre|0), ($cond$i$i$i48$us|0))|0;
      $__right_$i$i$i51$us = ((($4)) + 4|0);
      $5 = load4($__right_$i$i$i51$us);
      $cmp$i$i$i52$us = ($5|0)==(0|0);
      if ($cmp$i$i$i52$us) {
       $__x$addr$0$i$i$i57$us = $4;
       while(1) {
        $__parent_$i$i$i$i58$us = ((($__x$addr$0$i$i$i57$us)) + 8|0);
        $7 = load4($__parent_$i$i$i$i58$us);
        $8 = load4($7);
        $cmp$i5$i$i$i60$us = ($8|0)==($__x$addr$0$i$i$i57$us|0);
        if ($cmp$i5$i$i$i60$us) {
         $retval$0$i$i$i63$us = $7;
         break;
        } else {
         $__x$addr$0$i$i$i57$us = $7;
        }
       }
      } else {
       $__x$addr$0$i$i$i$i53$us = $5;
       while(1) {
        $6 = load4($__x$addr$0$i$i$i$i53$us);
        $cmp$i$i$i$i55$us = ($6|0)==(0|0);
        if ($cmp$i$i$i$i55$us) {
         $retval$0$i$i$i63$us = $__x$addr$0$i$i$i$i53$us;
         break;
        } else {
         $__x$addr$0$i$i$i$i53$us = $6;
        }
       }
      }
      $lnot$i$i$us = ($retval$0$i$i$i63$us|0)==($__first_$i$i$i$i$i96|0);
      if ($lnot$i$i$us) {
       $data24$pre$phiZ2D = $data3;
       break L1;
      } else {
       $4 = $retval$0$i$i$i63$us;$it$sroa$0$098$us = $retval$0$i$i$i63$us;
      }
     }
    }
    $12 = $0;$it$sroa$0$098 = $0;
    while(1) {
     $first = ((($it$sroa$0$098)) + 16|0);
     $call$i = (__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_($1,$first)|0);
     $cmp16 = ($call$i|0)==(0);
     if ($cmp16) {
      $9 = load4($elm);
      $__size_$i$i$i$i42 = ((($first)) + 11|0);
      $10 = load1($__size_$i$i$i$i42);
      $tobool$i$i$i$i43 = ($10<<24>>24)<(0);
      if ($tobool$i$i$i$i43) {
       $11 = load4($first);
       $cond$i$i$i48 = $11;
      } else {
       $cond$i$i$i48 = $first;
      }
      $call21 = _emscripten_asm_const_iii(0, ($9|0), ($cond$i$i$i48|0))|0;
     }
     $__right_$i$i$i51 = ((($12)) + 4|0);
     $13 = load4($__right_$i$i$i51);
     $cmp$i$i$i52 = ($13|0)==(0|0);
     if ($cmp$i$i$i52) {
      $__x$addr$0$i$i$i57 = $12;
      while(1) {
       $__parent_$i$i$i$i58 = ((($__x$addr$0$i$i$i57)) + 8|0);
       $15 = load4($__parent_$i$i$i$i58);
       $16 = load4($15);
       $cmp$i5$i$i$i60 = ($16|0)==($__x$addr$0$i$i$i57|0);
       if ($cmp$i5$i$i$i60) {
        $retval$0$i$i$i63 = $15;
        break;
       } else {
        $__x$addr$0$i$i$i57 = $15;
       }
      }
     } else {
      $__x$addr$0$i$i$i$i53 = $13;
      while(1) {
       $14 = load4($__x$addr$0$i$i$i$i53);
       $cmp$i$i$i$i55 = ($14|0)==(0|0);
       if ($cmp$i$i$i$i55) {
        $retval$0$i$i$i63 = $__x$addr$0$i$i$i$i53;
        break;
       } else {
        $__x$addr$0$i$i$i$i53 = $14;
       }
      }
     }
     $lnot$i$i = ($retval$0$i$i$i63|0)==($__first_$i$i$i$i$i96|0);
     if ($lnot$i$i) {
      $data24$pre$phiZ2D = $data3;
      break;
     } else {
      $12 = $retval$0$i$i$i63;$it$sroa$0$098 = $retval$0$i$i$i63;
     }
    }
   }
  }
 } while(0);
 $17 = load4($data24$pre$phiZ2D);
 $cmp25 = ($17|0)==(0|0);
 if ($cmp25) {
  STACKTOP = sp;return;
 }
 $18 = load4($17);
 $__first_$i$i$i$i$i7592 = ((($17)) + 4|0);
 $lnot$i$i7493 = ($18|0)==($__first_$i$i$i$i$i7592|0);
 if ($lnot$i$i7493) {
  STACKTOP = sp;return;
 }
 $elm67 = ((($vnode)) + 40|0);
 if ($cmp) {
  $$pre105 = load4($elm67);
  $23 = $18;$it27$sroa$0$094$us = $18;
  while(1) {
   $__cc$i24$us = ((($it27$sroa$0$094$us)) + 16|0);
   $__size_$i$i$i$i15$us = ((($__cc$i24$us)) + 11|0);
   $19 = load1($__size_$i$i$i$i15$us);
   $tobool$i$i$i$i16$us = ($19<<24>>24)<(0);
   if ($tobool$i$i$i$i16$us) {
    $20 = load4($__cc$i24$us);
    $cond$i$i$i21$us = $20;
   } else {
    $cond$i$i$i21$us = $__cc$i24$us;
   }
   $second72$us = ((($it27$sroa$0$094$us)) + 28|0);
   $__size_$i$i$i$i$us = ((($second72$us)) + 11|0);
   $21 = load1($__size_$i$i$i$i$us);
   $tobool$i$i$i$i$us = ($21<<24>>24)<(0);
   if ($tobool$i$i$i$i$us) {
    $22 = load4($second72$us);
    $cond$i$i$i$us = $22;
   } else {
    $cond$i$i$i$us = $second72$us;
   }
   $call74$us = _emscripten_asm_const_iiii(1, ($$pre105|0), ($cond$i$i$i21$us|0), ($cond$i$i$i$us|0))|0;
   $__right_$i$i$i$us = ((($23)) + 4|0);
   $24 = load4($__right_$i$i$i$us);
   $cmp$i$i$i$us = ($24|0)==(0|0);
   if ($cmp$i$i$i$us) {
    $__x$addr$0$i$i$i$us = $23;
    while(1) {
     $__parent_$i$i$i$i$us = ((($__x$addr$0$i$i$i$us)) + 8|0);
     $26 = load4($__parent_$i$i$i$i$us);
     $27 = load4($26);
     $cmp$i5$i$i$i$us = ($27|0)==($__x$addr$0$i$i$i$us|0);
     if ($cmp$i5$i$i$i$us) {
      $retval$0$i$i$i$us = $26;
      break;
     } else {
      $__x$addr$0$i$i$i$us = $26;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$us = $24;
    while(1) {
     $25 = load4($__x$addr$0$i$i$i$i$us);
     $cmp$i$i$i$i$us = ($25|0)==(0|0);
     if ($cmp$i$i$i$i$us) {
      $retval$0$i$i$i$us = $__x$addr$0$i$i$i$i$us;
      break;
     } else {
      $__x$addr$0$i$i$i$i$us = $25;
     }
    }
   }
   $lnot$i$i74$us = ($retval$0$i$i$i$us|0)==($__first_$i$i$i$i$i7592|0);
   if ($lnot$i$i74$us) {
    break;
   } else {
    $23 = $retval$0$i$i$i$us;$it27$sroa$0$094$us = $retval$0$i$i$i$us;
   }
  }
  STACKTOP = sp;return;
 }
 $41 = $18;$it27$sroa$0$094 = $18;
 L62: while(1) {
  $first50 = ((($it27$sroa$0$094)) + 16|0);
  $call$i68 = (__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_($oldVnode$0$3$val,$first50)|0);
  $cmp52 = ($call$i68|0)==(0);
  do {
   if ($cmp52) {
    label = 49;
   } else {
    $call$i$i34 = (__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_($oldVnode$0$3$val,$__parent$i,$first50)|0);
    $28 = load4($call$i$i34);
    $cmp$i35 = ($28|0)==(0|0);
    if ($cmp$i35) {
     label = 40;
     break L62;
    }
    $second$i = ((($28)) + 28|0);
    $second = ((($it27$sroa$0$094)) + 28|0);
    $29 = ((($second$i)) + 11|0);
    $30 = load1($29);
    $tobool$i$i$i = ($30<<24>>24)<(0);
    if ($tobool$i$i$i) {
     $__size_$i3$i$i = ((($second$i)) + 4|0);
     $31 = load4($__size_$i3$i$i);
     $cond$i$i = $31;
    } else {
     $conv$i$i$i = $30&255;
     $cond$i$i = $conv$i$i$i;
    }
    $__size_$i$i5$i = ((($second)) + 11|0);
    $32 = load1($__size_$i$i5$i);
    $tobool$i$i6$i = ($32<<24>>24)<(0);
    $__size_$i3$i7$i = ((($it27$sroa$0$094)) + 32|0);
    $33 = load4($__size_$i3$i7$i);
    $conv$i$i9$i = $32&255;
    $cond$i11$i = $tobool$i$i6$i ? $33 : $conv$i$i9$i;
    if ($tobool$i$i$i) {
     $34 = load4($second$i);
     $cond$i$i$i29 = $34;
    } else {
     $cond$i$i$i29 = $second$i;
    }
    $cmp$i$i$i$i30 = ($cond$i11$i>>>0)<($cond$i$i>>>0);
    $$sroa$speculated$i = $cmp$i$i$i$i30 ? $cond$i11$i : $cond$i$i;
    $cmp$i$i = ($$sroa$speculated$i|0)==(0);
    if (!($cmp$i$i)) {
     $35 = load4($second);
     $cond$i$i22$i = $tobool$i$i6$i ? $35 : $second;
     $call$i$i = (_memcmp($cond$i$i$i29,$cond$i$i22$i,$$sroa$speculated$i)|0);
     $cmp$i = ($call$i$i|0)==(0);
     if (!($cmp$i)) {
      label = 49;
      break;
     }
    }
    $cmp8$i = ($cond$i$i>>>0)>=($cond$i11$i>>>0);
    $cmp65 = $cmp$i$i$i$i30 ^ 1;
    $or$cond = $cmp8$i & $cmp65;
    if (!($or$cond)) {
     label = 49;
    }
   }
  } while(0);
  if ((label|0) == 49) {
   label = 0;
   $36 = load4($elm67);
   $__cc$i24 = ((($it27$sroa$0$094)) + 16|0);
   $__size_$i$i$i$i15 = ((($__cc$i24)) + 11|0);
   $37 = load1($__size_$i$i$i$i15);
   $tobool$i$i$i$i16 = ($37<<24>>24)<(0);
   if ($tobool$i$i$i$i16) {
    $38 = load4($__cc$i24);
    $cond$i$i$i21 = $38;
   } else {
    $cond$i$i$i21 = $__cc$i24;
   }
   $second72 = ((($it27$sroa$0$094)) + 28|0);
   $__size_$i$i$i$i = ((($second72)) + 11|0);
   $39 = load1($__size_$i$i$i$i);
   $tobool$i$i$i$i = ($39<<24>>24)<(0);
   if ($tobool$i$i$i$i) {
    $40 = load4($second72);
    $cond$i$i$i = $40;
   } else {
    $cond$i$i$i = $second72;
   }
   $call74 = _emscripten_asm_const_iiii(1, ($36|0), ($cond$i$i$i21|0), ($cond$i$i$i|0))|0;
  }
  $__right_$i$i$i = ((($41)) + 4|0);
  $42 = load4($__right_$i$i$i);
  $cmp$i$i$i = ($42|0)==(0|0);
  if ($cmp$i$i$i) {
   $__x$addr$0$i$i$i = $41;
   while(1) {
    $__parent_$i$i$i$i = ((($__x$addr$0$i$i$i)) + 8|0);
    $44 = load4($__parent_$i$i$i$i);
    $45 = load4($44);
    $cmp$i5$i$i$i = ($45|0)==($__x$addr$0$i$i$i|0);
    if ($cmp$i5$i$i$i) {
     $retval$0$i$i$i = $44;
     break;
    } else {
     $__x$addr$0$i$i$i = $44;
    }
   }
  } else {
   $__x$addr$0$i$i$i$i = $42;
   while(1) {
    $43 = load4($__x$addr$0$i$i$i$i);
    $cmp$i$i$i$i = ($43|0)==(0|0);
    if ($cmp$i$i$i$i) {
     $retval$0$i$i$i = $__x$addr$0$i$i$i$i;
     break;
    } else {
     $__x$addr$0$i$i$i$i = $43;
    }
   }
  }
  $lnot$i$i74 = ($retval$0$i$i$i|0)==($__first_$i$i$i$i$i7592|0);
  if ($lnot$i$i74) {
   label = 60;
   break;
  } else {
   $41 = $retval$0$i$i$i;$it27$sroa$0$094 = $retval$0$i$i$i;
  }
 }
 if ((label|0) == 40) {
  $exception$i = (___cxa_allocate_exception(8)|0);
  __ZNSt11logic_errorC2EPKc($exception$i);
  store4($exception$i,(2736));
  ___cxa_throw(($exception$i|0),(1560|0),(14|0));
  // unreachable;
 }
 else if ((label|0) == 60) {
  STACKTOP = sp;return;
 }
}
function __ZN6asmdom9sameVNodeEPKNS_5VNodeES2_($vnode1,$vnode2) {
 $vnode1 = $vnode1|0;
 $vnode2 = $vnode2|0;
 var $$$$i37 = 0, $$$i36 = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i26 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__size_$i$i$i = 0, $__size_$i$i$i6 = 0, $__size_$i$i5$i = 0;
 var $__size_$i$i5$i14 = 0, $__size_$i3$i$i = 0, $__size_$i3$i$i8 = 0, $__size_$i3$i7$i = 0, $__size_$i3$i7$i16 = 0, $call$i$i = 0, $call$i$i32 = 0, $call341 = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i25 = 0, $cmp$i$i27 = 0, $cmp$i33 = 0, $cmp4 = 0, $cmp8$i = 0, $cmp8$i35 = 0, $cond$i$i = 0, $cond$i$i$i = 0;
 var $cond$i$i$i24 = 0, $cond$i$i12 = 0, $cond$i$i22$i = 0, $cond$i$i22$i31 = 0, $cond$i11$i = 0, $cond$i11$i18 = 0, $conv$i$i$i = 0, $conv$i$i$i10 = 0, $conv$i$i9$i = 0, $conv$i$i9$i17 = 0, $key = 0, $key1 = 0, $or$cond = 0, $tobool$i$i$i = 0, $tobool$i$i$i7 = 0, $tobool$i$i6$i = 0, $tobool$i$i6$i15 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $key = ((($vnode1)) + 12|0);
 $key1 = ((($vnode2)) + 12|0);
 $__size_$i$i$i = ((($key)) + 11|0);
 $0 = load1($__size_$i$i$i);
 $tobool$i$i$i = ($0<<24>>24)<(0);
 if ($tobool$i$i$i) {
  $__size_$i3$i$i = ((($vnode1)) + 16|0);
  $1 = load4($__size_$i3$i$i);
  $cond$i$i = $1;
 } else {
  $conv$i$i$i = $0&255;
  $cond$i$i = $conv$i$i$i;
 }
 $__size_$i$i5$i = ((($key1)) + 11|0);
 $2 = load1($__size_$i$i5$i);
 $tobool$i$i6$i = ($2<<24>>24)<(0);
 $__size_$i3$i7$i = ((($vnode2)) + 16|0);
 $3 = load4($__size_$i3$i7$i);
 $conv$i$i9$i = $2&255;
 $cond$i11$i = $tobool$i$i6$i ? $3 : $conv$i$i9$i;
 if ($tobool$i$i$i) {
  $4 = load4($key);
  $cond$i$i$i = $4;
 } else {
  $cond$i$i$i = $key;
 }
 $cmp$i$i$i$i = ($cond$i11$i>>>0)<($cond$i$i>>>0);
 $$sroa$speculated$i = $cmp$i$i$i$i ? $cond$i11$i : $cond$i$i;
 $cmp$i$i = ($$sroa$speculated$i|0)==(0);
 if (!($cmp$i$i)) {
  $5 = load4($key1);
  $cond$i$i22$i = $tobool$i$i6$i ? $5 : $key1;
  $call$i$i = (_memcmp($cond$i$i$i,$cond$i$i22$i,$$sroa$speculated$i)|0);
  $cmp$i = ($call$i$i|0)==(0);
  if (!($cmp$i)) {
   $12 = 0;
   return ($12|0);
  }
 }
 $cmp8$i = ($cond$i$i>>>0)>=($cond$i11$i>>>0);
 $cmp = $cmp$i$i$i$i ^ 1;
 $or$cond = $cmp8$i & $cmp;
 if (!($or$cond)) {
  $12 = 0;
  return ($12|0);
 }
 $__size_$i$i$i6 = ((($vnode1)) + 11|0);
 $6 = load1($__size_$i$i$i6);
 $tobool$i$i$i7 = ($6<<24>>24)<(0);
 if ($tobool$i$i$i7) {
  $__size_$i3$i$i8 = ((($vnode1)) + 4|0);
  $7 = load4($__size_$i3$i$i8);
  $cond$i$i12 = $7;
 } else {
  $conv$i$i$i10 = $6&255;
  $cond$i$i12 = $conv$i$i$i10;
 }
 $__size_$i$i5$i14 = ((($vnode2)) + 11|0);
 $8 = load1($__size_$i$i5$i14);
 $tobool$i$i6$i15 = ($8<<24>>24)<(0);
 $__size_$i3$i7$i16 = ((($vnode2)) + 4|0);
 $9 = load4($__size_$i3$i7$i16);
 $conv$i$i9$i17 = $8&255;
 $cond$i11$i18 = $tobool$i$i6$i15 ? $9 : $conv$i$i9$i17;
 if ($tobool$i$i$i7) {
  $10 = load4($vnode1);
  $cond$i$i$i24 = $10;
 } else {
  $cond$i$i$i24 = $vnode1;
 }
 $cmp$i$i$i$i25 = ($cond$i11$i18>>>0)<($cond$i$i12>>>0);
 $$sroa$speculated$i26 = $cmp$i$i$i$i25 ? $cond$i11$i18 : $cond$i$i12;
 $cmp$i$i27 = ($$sroa$speculated$i26|0)==(0);
 if ($cmp$i$i27) {
  label = 18;
 } else {
  $11 = load4($vnode2);
  $cond$i$i22$i31 = $tobool$i$i6$i15 ? $11 : $vnode2;
  $call$i$i32 = (_memcmp($cond$i$i$i24,$cond$i$i22$i31,$$sroa$speculated$i26)|0);
  $cmp$i33 = ($call$i$i32|0)==(0);
  if ($cmp$i33) {
   label = 18;
  } else {
   $call341 = $call$i$i32;
  }
 }
 if ((label|0) == 18) {
  $cmp8$i35 = ($cond$i$i12>>>0)<($cond$i11$i18>>>0);
  $$$i36 = $cmp$i$i$i$i25&1;
  $$$$i37 = $cmp8$i35 ? -1 : $$$i36;
  $call341 = $$$$i37;
 }
 $cmp4 = ($call341|0)==(0);
 $12 = $cmp4;
 return ($12|0);
}
function __ZN6asmdom9createElmEPNS_5VNodeE($vnode) {
 $vnode = $vnode|0;
 var $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__end_$i42 = 0, $__parent$i = 0, $__size_$i$i$i = 0, $__size_$i$i$i$i = 0;
 var $__size_$i$i$i$i46 = 0, $__size_$i$i$i23 = 0, $__size_$i3$i$i = 0, $__size_$i3$i$i25 = 0, $arrayidx$i = 0, $call$i = 0, $call$i$i57 = 0, $call$i5455 = 0, $call2 = 0, $call36 = 0, $call4 = 0, $call41 = 0, $call51 = 0, $call52 = 0, $call60 = 0, $call8 = 0, $children = 0, $cmp = 0, $cmp$i = 0, $cmp$i30 = 0;
 var $cmp$i43 = 0, $cmp$i44 = 0, $cmp$i58 = 0, $cmp11 = 0, $cmp15 = 0, $cmp2$i = 0, $cmp47 = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i$i$i39 = 0, $cond$i$i$i52 = 0, $cond$i$i$i66 = 0, $cond$i$i$i75 = 0, $cond$i$i$i84 = 0, $cond$i$i29 = 0, $conv$i$i$i = 0, $conv$i$i$i27 = 0, $data = 0, $data$i = 0, $elm = 0;
 var $elm$i$pre$phiZZ2D = 0, $elm37 = 0, $elm42 = 0, $elm65$pre$phiZ2D = 0, $elm9 = 0, $exception$i = 0, $i$089 = 0, $inc = 0, $ref$tmp28 = 0, $second$i = 0, $sub$ptr$div$i = 0, $sub$ptr$sub$i = 0, $text = 0, $text54 = 0, $text6 = 0, $tobool$i$i$i = 0, $tobool$i$i$i$i = 0, $tobool$i$i$i$i47 = 0, $tobool$i$i$i$i62 = 0, $tobool$i$i$i$i70 = 0;
 var $tobool$i$i$i$i79 = 0, $tobool$i$i$i24 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $__parent$i = sp + 12|0;
 $ref$tmp28 = sp;
 $__size_$i$i$i = ((($vnode)) + 11|0);
 $0 = load1($__size_$i$i$i);
 $tobool$i$i$i = ($0<<24>>24)<(0);
 if ($tobool$i$i$i) {
  $__size_$i3$i$i = ((($vnode)) + 4|0);
  $1 = load4($__size_$i3$i$i);
  $cond$i$i = $1;
 } else {
  $conv$i$i$i = $0&255;
  $cond$i$i = $conv$i$i$i;
 }
 $cmp$i = ($cond$i$i|0)==(0);
 if ($cmp$i) {
  $text = ((($vnode)) + 24|0);
  $__size_$i$i$i$i = ((($text)) + 11|0);
  $2 = load1($__size_$i$i$i$i);
  $tobool$i$i$i$i = ($2<<24>>24)<(0);
  if ($tobool$i$i$i$i) {
   $3 = load4($text);
   $cond$i$i$i = $3;
  } else {
   $cond$i$i$i = $text;
  }
  $call2 = _emscripten_asm_const_ii(2, ($cond$i$i$i|0))|0;
  $elm = ((($vnode)) + 40|0);
  store4($elm,$call2);
  $elm65$pre$phiZ2D = $elm;
  $34 = load4($elm65$pre$phiZ2D);
  STACKTOP = sp;return ($34|0);
 }
 $call4 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc($vnode,10559)|0);
 $cmp = ($call4|0)==(0);
 if ($cmp) {
  $text6 = ((($vnode)) + 24|0);
  $__size_$i$i$i$i46 = ((($text6)) + 11|0);
  $4 = load1($__size_$i$i$i$i46);
  $tobool$i$i$i$i47 = ($4<<24>>24)<(0);
  if ($tobool$i$i$i$i47) {
   $5 = load4($text6);
   $cond$i$i$i52 = $5;
  } else {
   $cond$i$i$i52 = $text6;
  }
  $call8 = _emscripten_asm_const_ii(3, ($cond$i$i$i52|0))|0;
  $elm9 = ((($vnode)) + 40|0);
  store4($elm9,$call8);
  $elm65$pre$phiZ2D = $elm9;
  $34 = load4($elm65$pre$phiZ2D);
  STACKTOP = sp;return ($34|0);
 }
 $data = ((($vnode)) + 36|0);
 $6 = load4($data);
 $cmp11 = ($6|0)==(0|0);
 if ($cmp11) {
  label = 24;
 } else {
  ; store8($__parent$i,i64_const(0,0),4); store4($__parent$i+8|0,0,4);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($__parent$i,3063,2);
  $call$i5455 = (__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE14__count_uniqueIS7_EEjRKT_($6,$__parent$i)|0);
  $cmp15 = ($call$i5455|0)==(0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($__parent$i);
  if ($cmp15) {
   label = 24;
  } else {
   $7 = load4($data);
   ; store8($ref$tmp28,i64_const(0,0),4); store4($ref$tmp28+8|0,0,4);
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp28,3063,2);
   $call$i$i57 = (__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_($7,$__parent$i,$ref$tmp28)|0);
   $8 = load4($call$i$i57);
   $cmp$i58 = ($8|0)==(0|0);
   if ($cmp$i58) {
    $exception$i = (___cxa_allocate_exception(8)|0);
    __ZNSt11logic_errorC2EPKc($exception$i);
    store4($exception$i,(2736));
    ___cxa_throw(($exception$i|0),(1560|0),(14|0));
    // unreachable;
   }
   $second$i = ((($8)) + 28|0);
   $9 = ((($second$i)) + 11|0);
   $10 = load1($9);
   $tobool$i$i$i$i62 = ($10<<24>>24)<(0);
   if ($tobool$i$i$i$i62) {
    $11 = load4($second$i);
    $cond$i$i$i66 = $11;
   } else {
    $cond$i$i$i66 = $second$i;
   }
   $12 = load1($__size_$i$i$i);
   $tobool$i$i$i$i70 = ($12<<24>>24)<(0);
   if ($tobool$i$i$i$i70) {
    $13 = load4($vnode);
    $cond$i$i$i75 = $13;
   } else {
    $cond$i$i$i75 = $vnode;
   }
   $call36 = _emscripten_asm_const_iii(4, ($cond$i$i$i66|0), ($cond$i$i$i75|0))|0;
   $elm37 = ((($vnode)) + 40|0);
   store4($elm37,$call36);
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp28);
   $$pre = load4($elm37);
   $19 = $$pre;$elm$i$pre$phiZZ2D = $elm37;
  }
 }
 if ((label|0) == 24) {
  $14 = load1($__size_$i$i$i);
  $tobool$i$i$i$i79 = ($14<<24>>24)<(0);
  if ($tobool$i$i$i$i79) {
   $15 = load4($vnode);
   $cond$i$i$i84 = $15;
  } else {
   $cond$i$i$i84 = $vnode;
  }
  $call41 = _emscripten_asm_const_ii(5, ($cond$i$i$i84|0))|0;
  $elm42 = ((($vnode)) + 40|0);
  store4($elm42,$call41);
  $19 = $call41;$elm$i$pre$phiZZ2D = $elm42;
 }
 $16 = load4(10700);
 $17 = $16;
 $18 = $vnode;
 $call$i = _emscripten_asm_const_iiii(6, ($17|0), ($18|0), ($19|0))|0;
 $data$i = ((($16)) + 36|0);
 $20 = load4($data$i);
 $cmp$i44 = ($20|0)==(0|0);
 if ($cmp$i44) {
  $21 = load4($data);
  $cmp2$i = ($21|0)==(0|0);
  if (!($cmp2$i)) {
   label = 30;
  }
 } else {
  label = 30;
 }
 if ((label|0) == 30) {
  __ZN6asmdom9diffAttrsEPNS_5VNodeES1_($20,$vnode);
 }
 $children = ((($vnode)) + 44|0);
 $22 = load4($children);
 $__end_$i42 = ((($vnode)) + 48|0);
 $23 = load4($__end_$i42);
 $cmp$i43 = ($22|0)==($23|0);
 if (!($cmp$i43)) {
  $25 = $22;$i$089 = 0;
  while(1) {
   $24 = load4($elm$i$pre$phiZZ2D);
   $arrayidx$i = (($25) + ($i$089<<2)|0);
   $26 = load4($arrayidx$i);
   $call51 = (__ZN6asmdom9createElmEPNS_5VNodeE($26)|0);
   $call52 = _emscripten_asm_const_iii(7, ($24|0), ($call51|0))|0;
   $inc = (($i$089) + 1)|0;
   $27 = load4($__end_$i42);
   $28 = load4($children);
   $sub$ptr$sub$i = (($27) - ($28))|0;
   $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
   $cmp47 = ($inc|0)==($sub$ptr$div$i|0);
   $29 = $28;
   if ($cmp47) {
    $elm65$pre$phiZ2D = $elm$i$pre$phiZZ2D;
    break;
   } else {
    $25 = $29;$i$089 = $inc;
   }
  }
  $34 = load4($elm65$pre$phiZ2D);
  STACKTOP = sp;return ($34|0);
 }
 $text54 = ((($vnode)) + 24|0);
 $__size_$i$i$i23 = ((($text54)) + 11|0);
 $30 = load1($__size_$i$i$i23);
 $tobool$i$i$i24 = ($30<<24>>24)<(0);
 if ($tobool$i$i$i24) {
  $__size_$i3$i$i25 = ((($vnode)) + 28|0);
  $31 = load4($__size_$i3$i$i25);
  $cond$i$i29 = $31;
 } else {
  $conv$i$i$i27 = $30&255;
  $cond$i$i29 = $conv$i$i$i27;
 }
 $cmp$i30 = ($cond$i$i29|0)==(0);
 if ($cmp$i30) {
  $elm65$pre$phiZ2D = $elm$i$pre$phiZZ2D;
  $34 = load4($elm65$pre$phiZ2D);
  STACKTOP = sp;return ($34|0);
 }
 $32 = load4($elm$i$pre$phiZZ2D);
 if ($tobool$i$i$i24) {
  $33 = load4($text54);
  $cond$i$i$i39 = $33;
 } else {
  $cond$i$i$i39 = $text54;
 }
 $call60 = _emscripten_asm_const_iii(8, ($32|0), ($cond$i$i$i39|0))|0;
 $elm65$pre$phiZ2D = $elm$i$pre$phiZZ2D;
 $34 = load4($elm65$pre$phiZ2D);
 STACKTOP = sp;return ($34|0);
}
function __ZN6asmdom10patchVNodeEPNS_5VNodeES1_($oldVnode,$vnode) {
 $oldVnode = $oldVnode|0;
 $vnode = $vnode|0;
 var $$pre = 0, $$pre$i$i$i$i$i$i$i$i = 0, $$pre86 = 0, $$pre87 = 0, $$pre88 = 0, $$sink$be$i$i = 0, $$sink$i$i$i = 0, $$sroa$speculated$i = 0, $$sroa$speculated$i$i = 0, $$sroa$speculated$i$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i22$i$i = 0, $$sroa$speculated$i$i$i$i30$i$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0;
 var $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0;
 var $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0;
 var $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0;
 var $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $__begin_$i41 = 0;
 var $__cc$i$i$i$i$i$i$i$i$i = 0, $__end_$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i$i$i = 0, $__first_$i$i$i$i$i28$i = 0, $__left_$i$i$i$i$i$i$i = 0, $__nd$0$i$i$i = 0, $__parent$i$i$i$i$i$i$i$sroa$0 = 0, $__parent$i$i$i$i$i$i$i$sroa$0$0$__parent$i$i$i$i$i$i$i$sroa$0$0$ = 0, $__parent_$i$i$i$i$i$i$i$i = 0, $__right_$i$i$i$i$i$i$i$i = 0, $__size_$i$i$i = 0, $__size_$i$i$i$i = 0, $__size_$i$i$i$i$i = 0, $__size_$i$i$i$i$i$i10$i$i = 0, $__size_$i$i$i$i$i$i18$i$i$i = 0, $__size_$i$i$i30 = 0, $__size_$i$i$i56 = 0, $__size_$i$i5$i = 0, $__size_$i$i5$i$i = 0;
 var $__size_$i$i5$i$i$i$i16$i$i = 0, $__size_$i$i5$i$i$i$i24$i$i$i = 0, $__size_$i3$i$i = 0, $__size_$i3$i$i$i = 0, $__size_$i3$i$i$i$i = 0, $__size_$i3$i$i$i$i$i12$i$i = 0, $__size_$i3$i$i$i$i$i20$i$i$i = 0, $__size_$i3$i$i32 = 0, $__size_$i3$i$i58 = 0, $__size_$i3$i$i68 = 0, $__size_$i3$i7$i = 0, $__size_$i3$i7$i$i = 0, $__size_$i3$i7$i$i$i$i18$i$i = 0, $__size_$i3$i7$i$i$i$i26$i$i$i = 0, $__value_$i$i = 0, $__value_$i$i$i = 0, $add$i = 0, $add$ptr$i$i$i$i = 0, $add$ptr$i$i$i23$i = 0, $arrayidx$i$i = 0;
 var $arrayidx$i$i$i = 0, $arrayidx$i$i170$i = 0, $arrayidx$i$i2 = 0, $arrayidx$i$i203$i = 0, $arrayidx$i$i29$i = 0, $arrayidx$i$i49 = 0, $arrayidx$i101$i = 0, $arrayidx$i113$i = 0, $arrayidx$i115$i = 0, $arrayidx$i117$i = 0, $arrayidx$i129$i = 0, $arrayidx$i131$i = 0, $arrayidx$i143$i = 0, $arrayidx$i145$i = 0, $arrayidx$i147$i = 0, $arrayidx$i149$i = 0, $arrayidx$i153$i = 0, $arrayidx$i155$i = 0, $arrayidx$i158$i = 0, $arrayidx$i162$i = 0;
 var $arrayidx$i191$i = 0, $arrayidx$i193$i = 0, $arrayidx$i198$i = 0, $arrayidx$i99$i = 0, $call$i = 0, $call$i$i = 0, $call$i$i$i = 0, $call$i$i$i$i$i$i$i = 0, $call$i$i$i$i$i$i$i$i = 0, $call$i$i$i$i$i$i$i$i$i7$i$i = 0, $call$i$i$i$i$i30$i$i = 0, $call$i$i$i$i$i38$i$i$i = 0, $call$i$i$i$i11$i$i = 0, $call$i$i$i$i11$i14$i = 0, $call$i$i163$i = 0, $call$i$i178$i = 0, $call$i27$i = 0, $call1$i = 0, $call1$i151$i = 0, $call1$i175$i = 0;
 var $call1$i208$i = 0, $call1$i51 = 0, $call1$i5196 = 0, $call1$i99 = 0, $call114$i = 0, $call117$i = 0, $call128$i = 0, $call16 = 0, $call2$i = 0, $call2$i100 = 0, $call2$i176$i = 0, $call2$i210$i = 0, $call34 = 0, $call38$i = 0, $call47 = 0, $call49$i = 0, $call60$i = 0, $call65$i = 0, $call74$i = 0, $call80$i = 0;
 var $call96$i = 0, $call99$i = 0, $children = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i21$i$i = 0, $cmp$i$i$i$i$i$i$i29$i$i$i = 0, $cmp$i$i$i$i$i$i2$i$i = 0, $cmp$i$i$i$i$i$i40$i = 0, $cmp$i$i$i$i$i23$i$i = 0, $cmp$i$i$i$i$i3$i$i = 0;
 var $cmp$i$i$i$i$i31$i$i$i = 0, $cmp$i$i$i$i$i41$i = 0, $cmp$i$i$i$i1 = 0, $cmp$i$i$i$i31$i$i = 0, $cmp$i$i$i$i39$i$i$i = 0, $cmp$i$i$i$i42$i = 0, $cmp$i$i$i20$i = 0, $cmp$i$i$i38$i$i = 0, $cmp$i$i$i46$i$i$i = 0, $cmp$i$i34$i = 0, $cmp$i1$i = 0, $cmp$i1$i$i = 0, $cmp$i10$i = 0, $cmp$i119$i = 0, $cmp$i133$i = 0, $cmp$i150$i = 0, $cmp$i159$i = 0, $cmp$i164$i = 0, $cmp$i172$i = 0, $cmp$i179$i = 0;
 var $cmp$i205$i = 0, $cmp$i21 = 0, $cmp$i22 = 0, $cmp$i37 = 0, $cmp$i38$i = 0, $cmp$i4 = 0, $cmp$i40 = 0, $cmp$i40101 = 0, $cmp$i43 = 0, $cmp$i43$i = 0, $cmp$i53 = 0, $cmp$i5397 = 0, $cmp$i63 = 0, $cmp$i73 = 0, $cmp$i8$i$i = 0, $cmp$i8$i11$i = 0, $cmp$lcssa$i = 0, $cmp111$i = 0, $cmp14$i$i$i = 0, $cmp146$i = 0;
 var $cmp15$i = 0, $cmp15$lcssa$i = 0, $cmp15$not$i = 0, $cmp15249$i = 0, $cmp16$i = 0, $cmp17$i$i = 0, $cmp2$i = 0, $cmp20$i = 0, $cmp248$i = 0, $cmp25$i = 0, $cmp3$i$i = 0, $cmp3$i166$i = 0, $cmp31$i = 0, $cmp47$i$i = 0, $cmp5$i$i$i = 0, $cmp8$i = 0, $cmp8$i$i = 0, $cmp8$i$i$i$i33$i$i = 0, $cmp8$i$i$i$i41$i$i$i = 0, $cond$i$i = 0;
 var $cond$i$i$i = 0, $cond$i$i$i$i = 0, $cond$i$i$i$i$i$i$i$i = 0, $cond$i$i$i$i$i$i$i$i$i = 0, $cond$i$i$i$i$i14$i$i = 0, $cond$i$i$i$i$i22$i$i$i = 0, $cond$i$i$i33$i = 0, $cond$i$i$i7 = 0, $cond$i$i$i80 = 0, $cond$i$i22$i = 0, $cond$i$i22$i$i = 0, $cond$i$i22$i$i$i$i$i$i = 0, $cond$i$i22$i$i$i$i$i$i$i = 0, $cond$i$i22$i$i$i$i29$i$i = 0, $cond$i$i22$i$i$i$i37$i$i$i = 0, $cond$i$i36 = 0, $cond$i$i62 = 0, $cond$i$i72 = 0, $cond$i11$i = 0, $cond$i11$i$i = 0;
 var $cond$i11$i$i$i$i20$i$i = 0, $cond$i11$i$i$i$i28$i$i$i = 0, $conv$i$i$i = 0, $conv$i$i$i$i = 0, $conv$i$i$i$i$i = 0, $conv$i$i$i$i$i$i13$i$i = 0, $conv$i$i$i$i$i$i21$i$i$i = 0, $conv$i$i$i34 = 0, $conv$i$i$i60 = 0, $conv$i$i$i70 = 0, $conv$i$i9$i = 0, $conv$i$i9$i$i = 0, $conv$i$i9$i$i$i$i19$i$i = 0, $conv$i$i9$i$i$i$i27$i$i$i = 0, $data$i = 0, $data1$i = 0, $dec$i = 0, $dec33$i = 0, $dec52$i = 0, $dec55$i = 0;
 var $dec69$i = 0, $dec81$i = 0, $elm = 0, $elm$i = 0, $elm$i$i = 0, $elm$i50 = 0, $elm$i5095 = 0, $elm1 = 0, $elm115$i = 0, $elm125$i = 0, $elm126$i = 0, $elm151$i = 0, $elm63$i = 0, $elm77$i = 0, $elm78$i = 0, $elm97$i = 0, $exception$i$i = 0, $exception$i180$i = 0, $inc$i = 0, $inc$i$i = 0;
 var $inc$i$i$i$i$i$i$i$i = 0, $inc$i102 = 0, $inc$i171$i = 0, $inc$i204$i = 0, $inc$i3 = 0, $inc$i37$i = 0, $inc$i52 = 0, $inc$i5298 = 0, $inc100$i = 0, $inc130$i = 0, $inc27$i = 0, $inc41$i = 0, $inc44$i = 0, $inc66$i = 0, $inc84$i = 0, $isnull$i = 0, $key$i = 0, $key$i$i = 0, $newCh$i$sroa$0$0 = 0, $newCh$i$sroa$16$0 = 0;
 var $newEndIdx$0$be$i = 0, $newEndIdx$0$lcssa$i = 0, $newEndIdx$0254$i = 0, $newEndVnode$0$be$i = 0, $newEndVnode$0259$i = 0, $newStartIdx$0$be$i = 0, $newStartIdx$0$lcssa$i = 0, $newStartIdx$0252$i = 0, $newStartVnode$0$be$i = 0, $newStartVnode$0257$i = 0, $oldCh$i$sroa$0$0 = 0, $oldCh$i$sroa$18$0 = 0, $oldEndIdx$0$be$i = 0, $oldEndIdx$0$lcssa$i = 0, $oldEndIdx$0253$i = 0, $oldEndVnode$0$be$i = 0, $oldEndVnode$0256$i = 0, $oldKeyToIdx$0$be$i = 0, $oldKeyToIdx$0$lcssa$i = 0, $oldKeyToIdx$0260$i = 0;
 var $oldKeyToIdx$1$i = 0, $oldStartIdx$0$be$i = 0, $oldStartIdx$0$lcssa$i = 0, $oldStartIdx$0251$i = 0, $oldStartVnode$0$be$i = 0, $oldStartVnode$0255$i = 0, $or$cond = 0, $or$cond$i = 0, $or$cond213$i = 0, $or$cond214$i = 0, $or$cond250$i = 0, $ref$tmp$i$i = 0, $retval$0$i$i$i = 0, $second$i$i = 0, $second$i$i$i$i$i$i$i$i$i$i$i$i = 0, $second$i$i10$i$i = 0, $second$i184$i = 0, $startIdx$addr$04$i$i = 0, $startIdx$addr$04$i169$i = 0, $startIdx$addr$04$i202$i = 0;
 var $storemerge18$i$i = 0, $sub = 0, $sub$i = 0, $sub$ptr$div$i = 0, $sub$ptr$div$i$i = 0, $sub$ptr$div$i$i$i = 0, $sub$ptr$div$i$i9$i = 0, $sub$ptr$div$i196$i = 0, $sub$ptr$div$i46 = 0, $sub$ptr$div$i94$i = 0, $sub$ptr$div6$i$i$i$i = 0, $sub$ptr$div6$i$i$i22$i = 0, $sub$ptr$rhs$cast$i$i$i$i = 0, $sub$ptr$rhs$cast$i$i$i18$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i$i$i = 0, $sub$ptr$sub$i$i$i$i = 0, $sub$ptr$sub$i$i$i19$i = 0, $sub$ptr$sub$i$i8$i = 0;
 var $sub$ptr$sub$i195$i = 0, $sub$ptr$sub$i45 = 0, $sub$ptr$sub$i93$i = 0, $sub145$i = 0, $sub2$i = 0, $sub28 = 0, $text = 0, $text12 = 0, $text30 = 0, $text41 = 0, $tobool$i = 0, $tobool$i$i$i = 0, $tobool$i$i$i$i = 0, $tobool$i$i$i$i$i = 0, $tobool$i$i$i$i$i$i11$i$i = 0, $tobool$i$i$i$i$i$i19$i$i$i = 0, $tobool$i$i$i31 = 0, $tobool$i$i$i57 = 0, $tobool$i$i6$i = 0, $tobool$i$i6$i$i = 0;
 var $tobool$i$i6$i$i$i$i17$i$i = 0, $tobool$i$i6$i$i$i$i25$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $__parent$i$i$i$i$i$i$i$sroa$0 = sp + 16|0;
 $ref$tmp$i$i = sp;
 $elm = ((($oldVnode)) + 40|0);
 $0 = load4($elm);
 $elm1 = ((($vnode)) + 40|0);
 store4($elm1,$0);
 $1 = $oldVnode;
 $2 = $vnode;
 $call$i = _emscripten_asm_const_iiii(6, ($1|0), ($2|0), ($0|0))|0;
 $data$i = ((($oldVnode)) + 36|0);
 $3 = load4($data$i);
 $cmp$i = ($3|0)==(0|0);
 if ($cmp$i) {
  $data1$i = ((($vnode)) + 36|0);
  $4 = load4($data1$i);
  $cmp2$i = ($4|0)==(0|0);
  if (!($cmp2$i)) {
   label = 3;
  }
 } else {
  label = 3;
 }
 if ((label|0) == 3) {
  __ZN6asmdom9diffAttrsEPNS_5VNodeES1_($3,$vnode);
 }
 $text = ((($vnode)) + 24|0);
 $__size_$i$i$i = ((($text)) + 11|0);
 $5 = load1($__size_$i$i$i);
 $tobool$i$i$i = ($5<<24>>24)<(0);
 if ($tobool$i$i$i) {
  $__size_$i3$i$i = ((($vnode)) + 28|0);
  $6 = load4($__size_$i3$i$i);
  $cond$i$i = $6;
 } else {
  $conv$i$i$i = $5&255;
  $cond$i$i = $conv$i$i$i;
 }
 $cmp$i21 = ($cond$i$i|0)==(0);
 if (!($cmp$i21)) {
  $text41 = ((($oldVnode)) + 24|0);
  if ($tobool$i$i$i) {
   $__size_$i3$i$i68 = ((($vnode)) + 28|0);
   $133 = load4($__size_$i3$i$i68);
   $cond$i$i72 = $133;
  } else {
   $conv$i$i$i70 = $5&255;
   $cond$i$i72 = $conv$i$i$i70;
  }
  $__size_$i$i5$i = ((($text41)) + 11|0);
  $134 = load1($__size_$i$i5$i);
  $tobool$i$i6$i = ($134<<24>>24)<(0);
  $__size_$i3$i7$i = ((($oldVnode)) + 28|0);
  $135 = load4($__size_$i3$i7$i);
  $conv$i$i9$i = $134&255;
  $cond$i11$i = $tobool$i$i6$i ? $135 : $conv$i$i9$i;
  if ($tobool$i$i$i) {
   $136 = load4($text);
   $cond$i$i$i = $136;
  } else {
   $cond$i$i$i = $text;
  }
  $cmp$i$i$i$i = ($cond$i11$i>>>0)<($cond$i$i72>>>0);
  $$sroa$speculated$i = $cmp$i$i$i$i ? $cond$i11$i : $cond$i$i72;
  $cmp$i$i = ($$sroa$speculated$i|0)==(0);
  if ($cmp$i$i) {
   label = 136;
  } else {
   $137 = load4($text41);
   $cond$i$i22$i = $tobool$i$i6$i ? $137 : $text41;
   $call$i$i = (_memcmp($cond$i$i$i,$cond$i$i22$i,$$sroa$speculated$i)|0);
   $cmp$i73 = ($call$i$i|0)==(0);
   if ($cmp$i73) {
    label = 136;
   }
  }
  if ((label|0) == 136) {
   $cmp8$i = ($cond$i$i72>>>0)>=($cond$i11$i>>>0);
   $cmp = $cmp$i$i$i$i ^ 1;
   $or$cond = $cmp8$i & $cmp;
   if ($or$cond) {
    STACKTOP = sp;return;
   }
  }
  $138 = load4($elm1);
  if ($tobool$i$i$i) {
   $139 = load4($text);
   $cond$i$i$i80 = $139;
  } else {
   $cond$i$i$i80 = $text;
  }
  $call47 = _emscripten_asm_const_iii(14, ($138|0), ($cond$i$i$i80|0))|0;
  STACKTOP = sp;return;
 }
 $children = ((($vnode)) + 44|0);
 $7 = load4($children);
 $__end_$i = ((($vnode)) + 48|0);
 $8 = load4($__end_$i);
 $cmp$i22 = ($7|0)==($8|0);
 $9 = $8;
 $10 = $7;
 $11 = ((($oldVnode)) + 48|0);
 $12 = load4($11);
 $13 = $12;
 $__begin_$i41 = ((($oldVnode)) + 44|0);
 $14 = load4($__begin_$i41);
 $cmp$i43 = ($14|0)==($12|0);
 if ($cmp$i22) {
  if (!($cmp$i43)) {
   $125 = $14;
   $sub$ptr$sub$i45 = (($13) - ($125))|0;
   $sub$ptr$div$i46 = $sub$ptr$sub$i45 >> 2;
   $sub28 = (($sub$ptr$div$i46) + -1)|0;
   $126 = load4($14);
   $elm$i5095 = ((($126)) + 40|0);
   $127 = load4($elm$i5095);
   $call1$i5196 = _emscripten_asm_const_ii(12, ($127|0))|0;
   $cmp$i5397 = ($sub28|0)==(0);
   if ($cmp$i5397) {
    STACKTOP = sp;return;
   } else {
    $inc$i5298 = 1;
   }
   while(1) {
    $$pre88 = load4($__begin_$i41);
    $arrayidx$i$i49 = (($$pre88) + ($inc$i5298<<2)|0);
    $128 = load4($arrayidx$i$i49);
    $elm$i50 = ((($128)) + 40|0);
    $129 = load4($elm$i50);
    $call1$i51 = _emscripten_asm_const_ii(12, ($129|0))|0;
    $inc$i52 = (($inc$i5298) + 1)|0;
    $cmp$i53 = ($inc$i52>>>0)>($sub28>>>0);
    if ($cmp$i53) {
     break;
    } else {
     $inc$i5298 = $inc$i52;
    }
   }
   STACKTOP = sp;return;
  }
  $text30 = ((($oldVnode)) + 24|0);
  $__size_$i$i$i56 = ((($text30)) + 11|0);
  $130 = load1($__size_$i$i$i56);
  $tobool$i$i$i57 = ($130<<24>>24)<(0);
  if ($tobool$i$i$i57) {
   $__size_$i3$i$i58 = ((($oldVnode)) + 28|0);
   $131 = load4($__size_$i3$i$i58);
   $cond$i$i62 = $131;
  } else {
   $conv$i$i$i60 = $130&255;
   $cond$i$i62 = $conv$i$i$i60;
  }
  $cmp$i63 = ($cond$i$i62|0)==(0);
  if ($cmp$i63) {
   STACKTOP = sp;return;
  }
  $132 = load4($elm1);
  $call34 = _emscripten_asm_const_ii(13, ($132|0))|0;
  STACKTOP = sp;return;
 }
 if ($cmp$i43) {
  $text12 = ((($oldVnode)) + 24|0);
  $__size_$i$i$i30 = ((($text12)) + 11|0);
  $115 = load1($__size_$i$i$i30);
  $tobool$i$i$i31 = ($115<<24>>24)<(0);
  if ($tobool$i$i$i31) {
   $__size_$i3$i$i32 = ((($oldVnode)) + 28|0);
   $116 = load4($__size_$i3$i$i32);
   $cond$i$i36 = $116;
  } else {
   $conv$i$i$i34 = $115&255;
   $cond$i$i36 = $conv$i$i$i34;
  }
  $cmp$i37 = ($cond$i$i36|0)==(0);
  if ($cmp$i37) {
   $120 = $9;$121 = $10;$123 = $7;
  } else {
   $117 = load4($elm1);
   $call16 = _emscripten_asm_const_ii(13, ($117|0))|0;
   $$pre = load4($__end_$i);
   $$pre86 = load4($children);
   $118 = $$pre86;
   $120 = $$pre;$121 = $$pre86;$123 = $118;
  }
  $119 = load4($elm1);
  $sub$ptr$sub$i = (($120) - ($121))|0;
  $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
  $sub = (($sub$ptr$div$i) + -1)|0;
  $122 = load4($123);
  $call1$i99 = (__ZN6asmdom9createElmEPNS_5VNodeE($122)|0);
  $call2$i100 = _emscripten_asm_const_iiii(11, ($119|0), ($call1$i99|0), 0)|0;
  $cmp$i40101 = ($sub|0)==(0);
  if ($cmp$i40101) {
   STACKTOP = sp;return;
  } else {
   $inc$i102 = 1;
  }
  while(1) {
   $$pre87 = load4($children);
   $arrayidx$i$i = (($$pre87) + ($inc$i102<<2)|0);
   $124 = load4($arrayidx$i$i);
   $call1$i = (__ZN6asmdom9createElmEPNS_5VNodeE($124)|0);
   $call2$i = _emscripten_asm_const_iiii(11, ($119|0), ($call1$i|0), 0)|0;
   $inc$i = (($inc$i102) + 1)|0;
   $cmp$i40 = ($inc$i>>>0)>($sub>>>0);
   if ($cmp$i40) {
    break;
   } else {
    $inc$i102 = $inc$i;
   }
  }
  STACKTOP = sp;return;
 }
 $15 = $14;
 $16 = load4($elm1);
 $sub$ptr$sub$i$i$i = (($13) - ($15))|0;
 $sub$ptr$div$i$i$i = $sub$ptr$sub$i$i$i >> 2;
 $cmp$i1$i = ($sub$ptr$div$i$i$i|0)==(0);
 if ($cmp$i1$i) {
  $oldCh$i$sroa$0$0 = 0;$oldCh$i$sroa$18$0 = 0;
 } else {
  $cmp$i8$i$i = ($sub$ptr$div$i$i$i>>>0)>(1073741823);
  if ($cmp$i8$i$i) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $call$i$i$i$i11$i$i = (__Znwj($sub$ptr$sub$i$i$i)|0);
  $17 = $call$i$i$i$i11$i$i;
  $18 = load4($__begin_$i41);
  $19 = load4($11);
  $sub$ptr$rhs$cast$i$i$i$i = $18;
  $sub$ptr$sub$i$i$i$i = (($19) - ($sub$ptr$rhs$cast$i$i$i$i))|0;
  $cmp$i$i$i$i1 = ($sub$ptr$sub$i$i$i$i|0)>(0);
  if ($cmp$i$i$i$i1) {
   $sub$ptr$div6$i$i$i$i = $sub$ptr$sub$i$i$i$i >>> 2;
   $add$ptr$i$i$i$i = (($call$i$i$i$i11$i$i) + ($sub$ptr$div6$i$i$i$i<<2)|0);
   _memcpy(($call$i$i$i$i11$i$i|0),($18|0),($sub$ptr$sub$i$i$i$i|0))|0;
   $20 = $add$ptr$i$i$i$i;
   $oldCh$i$sroa$0$0 = $17;$oldCh$i$sroa$18$0 = $20;
  } else {
   $oldCh$i$sroa$0$0 = $17;$oldCh$i$sroa$18$0 = $17;
  }
 }
 $21 = load4($__end_$i);
 $22 = load4($children);
 $sub$ptr$sub$i$i8$i = (($21) - ($22))|0;
 $sub$ptr$div$i$i9$i = $sub$ptr$sub$i$i8$i >> 2;
 $cmp$i10$i = ($sub$ptr$div$i$i9$i|0)==(0);
 if ($cmp$i10$i) {
  $newCh$i$sroa$0$0 = 0;$newCh$i$sroa$16$0 = 0;
 } else {
  $cmp$i8$i11$i = ($sub$ptr$div$i$i9$i>>>0)>(1073741823);
  if ($cmp$i8$i11$i) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $call$i$i$i$i11$i14$i = (__Znwj($sub$ptr$sub$i$i8$i)|0);
  $23 = $call$i$i$i$i11$i14$i;
  $24 = load4($children);
  $25 = load4($__end_$i);
  $sub$ptr$rhs$cast$i$i$i18$i = $24;
  $sub$ptr$sub$i$i$i19$i = (($25) - ($sub$ptr$rhs$cast$i$i$i18$i))|0;
  $cmp$i$i$i20$i = ($sub$ptr$sub$i$i$i19$i|0)>(0);
  if ($cmp$i$i$i20$i) {
   $sub$ptr$div6$i$i$i22$i = $sub$ptr$sub$i$i$i19$i >>> 2;
   $add$ptr$i$i$i23$i = (($call$i$i$i$i11$i14$i) + ($sub$ptr$div6$i$i$i22$i<<2)|0);
   _memcpy(($call$i$i$i$i11$i14$i|0),($24|0),($sub$ptr$sub$i$i$i19$i|0))|0;
   $26 = $add$ptr$i$i$i23$i;
   $newCh$i$sroa$0$0 = $23;$newCh$i$sroa$16$0 = $26;
  } else {
   $newCh$i$sroa$0$0 = $23;$newCh$i$sroa$16$0 = $23;
  }
 }
 $sub$ptr$sub$i$i = (($oldCh$i$sroa$18$0) - ($oldCh$i$sroa$0$0))|0;
 $sub$ptr$div$i$i = $sub$ptr$sub$i$i >> 2;
 $sub$i = (($sub$ptr$div$i$i) + -1)|0;
 $sub$ptr$sub$i93$i = (($newCh$i$sroa$16$0) - ($newCh$i$sroa$0$0))|0;
 $sub$ptr$div$i94$i = $sub$ptr$sub$i93$i >> 2;
 $sub2$i = (($sub$ptr$div$i94$i) + -1)|0;
 $27 = $oldCh$i$sroa$0$0;
 $28 = $newCh$i$sroa$0$0;
 $cmp248$i = ($sub$ptr$sub$i$i|0)<(4);
 $cmp15249$i = ($sub$ptr$sub$i93$i|0)<(4);
 $or$cond250$i = $cmp248$i | $cmp15249$i;
 L80: do {
  if ($or$cond250$i) {
   $104 = $newCh$i$sroa$0$0;$112 = 0;$cmp$lcssa$i = $cmp248$i;$cmp15$lcssa$i = $cmp15249$i;$newEndIdx$0$lcssa$i = $sub2$i;$newStartIdx$0$lcssa$i = 0;$oldEndIdx$0$lcssa$i = $sub$i;$oldKeyToIdx$0$lcssa$i = 0;$oldStartIdx$0$lcssa$i = 0;
  } else {
   $arrayidx$i99$i = (($28) + ($sub2$i<<2)|0);
   $29 = load4($arrayidx$i99$i);
   $30 = load4($28);
   $arrayidx$i$i2 = (($27) + ($sub$i<<2)|0);
   $31 = load4($arrayidx$i$i2);
   $32 = load4($27);
   $second$i$i10$i$i = ((($ref$tmp$i$i)) + 12|0);
   $__size_$i$i$i$i$i$i18$i$i$i = ((($ref$tmp$i$i)) + 11|0);
   $__size_$i3$i$i$i$i$i20$i$i$i = ((($ref$tmp$i$i)) + 4|0);
   $140 = $newCh$i$sroa$0$0;$141 = 0;$93 = $30;$newEndIdx$0254$i = $sub2$i;$newEndVnode$0259$i = $29;$newStartIdx$0252$i = 0;$newStartVnode$0257$i = $30;$oldEndIdx$0253$i = $sub$i;$oldEndVnode$0256$i = $31;$oldKeyToIdx$0260$i = 0;$oldStartIdx$0251$i = 0;$oldStartVnode$0255$i = $32;
   L82: while(1) {
    $cmp16$i = ($oldStartVnode$0255$i|0)==(0|0);
    L84: do {
     if ($cmp16$i) {
      $inc$i3 = (($oldStartIdx$0251$i) + 1)|0;
      $arrayidx$i101$i = (($27) + ($inc$i3<<2)|0);
      $33 = load4($arrayidx$i101$i);
      $142 = $140;$143 = $93;$144 = $141;$newEndIdx$0$be$i = $newEndIdx$0254$i;$newEndVnode$0$be$i = $newEndVnode$0259$i;$newStartIdx$0$be$i = $newStartIdx$0252$i;$newStartVnode$0$be$i = $newStartVnode$0257$i;$oldEndIdx$0$be$i = $oldEndIdx$0253$i;$oldEndVnode$0$be$i = $oldEndVnode$0256$i;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0260$i;$oldStartIdx$0$be$i = $inc$i3;$oldStartVnode$0$be$i = $33;
     } else {
      $cmp20$i = ($oldEndVnode$0256$i|0)==(0|0);
      if ($cmp20$i) {
       $dec$i = (($oldEndIdx$0253$i) + -1)|0;
       $arrayidx$i113$i = (($27) + ($dec$i<<2)|0);
       $34 = load4($arrayidx$i113$i);
       $142 = $140;$143 = $93;$144 = $141;$newEndIdx$0$be$i = $newEndIdx$0254$i;$newEndVnode$0$be$i = $newEndVnode$0259$i;$newStartIdx$0$be$i = $newStartIdx$0252$i;$newStartVnode$0$be$i = $newStartVnode$0257$i;$oldEndIdx$0$be$i = $dec$i;$oldEndVnode$0$be$i = $34;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0260$i;$oldStartIdx$0$be$i = $oldStartIdx$0251$i;$oldStartVnode$0$be$i = $oldStartVnode$0255$i;
       break;
      }
      $cmp25$i = ($newStartVnode$0257$i|0)==(0|0);
      if ($cmp25$i) {
       $inc27$i = (($newStartIdx$0252$i) + 1)|0;
       $arrayidx$i115$i = (($28) + ($inc27$i<<2)|0);
       $35 = load4($arrayidx$i115$i);
       $142 = $140;$143 = $35;$144 = $141;$newEndIdx$0$be$i = $newEndIdx$0254$i;$newEndVnode$0$be$i = $newEndVnode$0259$i;$newStartIdx$0$be$i = $inc27$i;$newStartVnode$0$be$i = $35;$oldEndIdx$0$be$i = $oldEndIdx$0253$i;$oldEndVnode$0$be$i = $oldEndVnode$0256$i;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0260$i;$oldStartIdx$0$be$i = $oldStartIdx$0251$i;$oldStartVnode$0$be$i = $oldStartVnode$0255$i;
       break;
      }
      $cmp31$i = ($newEndVnode$0259$i|0)==(0|0);
      if ($cmp31$i) {
       $dec33$i = (($newEndIdx$0254$i) + -1)|0;
       $arrayidx$i117$i = (($28) + ($dec33$i<<2)|0);
       $36 = load4($arrayidx$i117$i);
       $142 = $140;$143 = $93;$144 = $141;$newEndIdx$0$be$i = $dec33$i;$newEndVnode$0$be$i = $36;$newStartIdx$0$be$i = $newStartIdx$0252$i;$newStartVnode$0$be$i = $newStartVnode$0257$i;$oldEndIdx$0$be$i = $oldEndIdx$0253$i;$oldEndVnode$0$be$i = $oldEndVnode$0256$i;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0260$i;$oldStartIdx$0$be$i = $oldStartIdx$0251$i;$oldStartVnode$0$be$i = $oldStartVnode$0255$i;
       break;
      }
      $call38$i = (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_($oldStartVnode$0255$i,$newStartVnode$0257$i)|0);
      if ($call38$i) {
       __ZN6asmdom10patchVNodeEPNS_5VNodeES1_($oldStartVnode$0255$i,$newStartVnode$0257$i);
       $inc41$i = (($oldStartIdx$0251$i) + 1)|0;
       $arrayidx$i129$i = (($27) + ($inc41$i<<2)|0);
       $37 = load4($arrayidx$i129$i);
       $inc44$i = (($newStartIdx$0252$i) + 1)|0;
       $arrayidx$i131$i = (($28) + ($inc44$i<<2)|0);
       $38 = load4($arrayidx$i131$i);
       $142 = $newCh$i$sroa$0$0;$143 = $38;$144 = $141;$newEndIdx$0$be$i = $newEndIdx$0254$i;$newEndVnode$0$be$i = $newEndVnode$0259$i;$newStartIdx$0$be$i = $inc44$i;$newStartVnode$0$be$i = $38;$oldEndIdx$0$be$i = $oldEndIdx$0253$i;$oldEndVnode$0$be$i = $oldEndVnode$0256$i;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0260$i;$oldStartIdx$0$be$i = $inc41$i;$oldStartVnode$0$be$i = $37;
       break;
      }
      $call49$i = (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_($oldEndVnode$0256$i,$newEndVnode$0259$i)|0);
      if ($call49$i) {
       __ZN6asmdom10patchVNodeEPNS_5VNodeES1_($oldEndVnode$0256$i,$newEndVnode$0259$i);
       $dec52$i = (($oldEndIdx$0253$i) + -1)|0;
       $arrayidx$i143$i = (($27) + ($dec52$i<<2)|0);
       $39 = load4($arrayidx$i143$i);
       $dec55$i = (($newEndIdx$0254$i) + -1)|0;
       $arrayidx$i145$i = (($28) + ($dec55$i<<2)|0);
       $40 = load4($arrayidx$i145$i);
       $142 = $newCh$i$sroa$0$0;$143 = $93;$144 = $141;$newEndIdx$0$be$i = $dec55$i;$newEndVnode$0$be$i = $40;$newStartIdx$0$be$i = $newStartIdx$0252$i;$newStartVnode$0$be$i = $newStartVnode$0257$i;$oldEndIdx$0$be$i = $dec52$i;$oldEndVnode$0$be$i = $39;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0260$i;$oldStartIdx$0$be$i = $oldStartIdx$0251$i;$oldStartVnode$0$be$i = $oldStartVnode$0255$i;
       break;
      }
      $call60$i = (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_($oldStartVnode$0255$i,$newEndVnode$0259$i)|0);
      if ($call60$i) {
       __ZN6asmdom10patchVNodeEPNS_5VNodeES1_($oldStartVnode$0255$i,$newEndVnode$0259$i);
       $elm$i = ((($oldStartVnode$0255$i)) + 40|0);
       $41 = load4($elm$i);
       $elm63$i = ((($oldEndVnode$0256$i)) + 40|0);
       $42 = load4($elm63$i);
       $call65$i = _emscripten_asm_const_iiii(9, ($16|0), ($41|0), ($42|0))|0;
       $inc66$i = (($oldStartIdx$0251$i) + 1)|0;
       $arrayidx$i147$i = (($27) + ($inc66$i<<2)|0);
       $43 = load4($arrayidx$i147$i);
       $dec69$i = (($newEndIdx$0254$i) + -1)|0;
       $arrayidx$i149$i = (($28) + ($dec69$i<<2)|0);
       $44 = load4($arrayidx$i149$i);
       $142 = $newCh$i$sroa$0$0;$143 = $93;$144 = $141;$newEndIdx$0$be$i = $dec69$i;$newEndVnode$0$be$i = $44;$newStartIdx$0$be$i = $newStartIdx$0252$i;$newStartVnode$0$be$i = $newStartVnode$0257$i;$oldEndIdx$0$be$i = $oldEndIdx$0253$i;$oldEndVnode$0$be$i = $oldEndVnode$0256$i;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0260$i;$oldStartIdx$0$be$i = $inc66$i;$oldStartVnode$0$be$i = $43;
       break;
      }
      $call74$i = (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_($oldEndVnode$0256$i,$newStartVnode$0257$i)|0);
      if ($call74$i) {
       __ZN6asmdom10patchVNodeEPNS_5VNodeES1_($oldEndVnode$0256$i,$newStartVnode$0257$i);
       $elm77$i = ((($oldEndVnode$0256$i)) + 40|0);
       $45 = load4($elm77$i);
       $elm78$i = ((($oldStartVnode$0255$i)) + 40|0);
       $46 = load4($elm78$i);
       $call80$i = _emscripten_asm_const_iiii(10, ($16|0), ($45|0), ($46|0))|0;
       $dec81$i = (($oldEndIdx$0253$i) + -1)|0;
       $arrayidx$i153$i = (($27) + ($dec81$i<<2)|0);
       $47 = load4($arrayidx$i153$i);
       $inc84$i = (($newStartIdx$0252$i) + 1)|0;
       $arrayidx$i155$i = (($28) + ($inc84$i<<2)|0);
       $48 = load4($arrayidx$i155$i);
       $142 = $newCh$i$sroa$0$0;$143 = $48;$144 = $141;$newEndIdx$0$be$i = $newEndIdx$0254$i;$newEndVnode$0$be$i = $newEndVnode$0259$i;$newStartIdx$0$be$i = $inc84$i;$newStartVnode$0$be$i = $48;$oldEndIdx$0$be$i = $dec81$i;$oldEndVnode$0$be$i = $47;$oldKeyToIdx$0$be$i = $oldKeyToIdx$0260$i;$oldStartIdx$0$be$i = $oldStartIdx$0251$i;$oldStartVnode$0$be$i = $oldStartVnode$0255$i;
       break;
      }
      $tobool$i = ($oldKeyToIdx$0260$i|0)==(0|0);
      do {
       if ($tobool$i) {
        $call$i27$i = (__Znwj(12)|0);
        $__left_$i$i$i$i$i$i$i = ((($call$i27$i)) + 4|0);
        store4($__left_$i$i$i$i$i$i$i,0);
        $__first_$i$i$i$i$i28$i = ((($call$i27$i)) + 8|0);
        store4($__first_$i$i$i$i$i28$i,0);
        store4($call$i27$i,$__left_$i$i$i$i$i$i$i);
        $cmp17$i$i = ($oldStartIdx$0251$i|0)>($oldEndIdx$0253$i|0);
        if ($cmp17$i$i) {
         $145 = $call$i27$i;$oldKeyToIdx$1$i = $call$i27$i;
         break;
        }
        $49 = $__left_$i$i$i$i$i$i$i;
        $storemerge18$i$i = $oldStartIdx$0251$i;
        while(1) {
         $arrayidx$i$i29$i = (($27) + ($storemerge18$i$i<<2)|0);
         $50 = load4($arrayidx$i$i29$i);
         $key$i$i = ((($50)) + 12|0);
         $__size_$i$i$i$i$i = ((($key$i$i)) + 11|0);
         $51 = load1($__size_$i$i$i$i$i);
         $tobool$i$i$i$i$i = ($51<<24>>24)<(0);
         if ($tobool$i$i$i$i$i) {
          $__size_$i3$i$i$i$i = ((($50)) + 16|0);
          $52 = load4($__size_$i3$i$i$i$i);
          $cond$i$i$i33$i = $52;
         } else {
          $conv$i$i$i$i$i = $51&255;
          $cond$i$i$i33$i = $conv$i$i$i$i$i;
         }
         $cmp$i$i34$i = ($cond$i$i$i33$i|0)==(0);
         if (!($cmp$i$i34$i)) {
          __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($ref$tmp$i$i,$key$i$i);
          store4($second$i$i10$i$i,$storemerge18$i$i);
          $53 = load4($__left_$i$i$i$i$i$i$i);
          $cmp$i1$i$i = ($53|0)==(0|0);
          do {
           if ($cmp$i1$i$i) {
            store4($__parent$i$i$i$i$i$i$i$sroa$0,$49);
            $__parent$i$i$i$i$i$i$i$sroa$0$0$__parent$i$i$i$i$i$i$i$sroa$0$0$ = $49;$retval$0$i$i$i = $__left_$i$i$i$i$i$i$i;
           } else {
            $54 = load1($__size_$i$i$i$i$i$i18$i$i$i);
            $tobool$i$i$i$i$i$i19$i$i$i = ($54<<24>>24)<(0);
            $55 = load4($__size_$i3$i$i$i$i$i20$i$i$i);
            $conv$i$i$i$i$i$i21$i$i$i = $54&255;
            $cond$i$i$i$i$i22$i$i$i = $tobool$i$i$i$i$i$i19$i$i$i ? $55 : $conv$i$i$i$i$i$i21$i$i$i;
            $56 = load4($ref$tmp$i$i);
            $cond$i$i22$i$i$i$i$i$i$i = $tobool$i$i$i$i$i$i19$i$i$i ? $56 : $ref$tmp$i$i;
            $__nd$0$i$i$i = $53;
            L122: while(1) {
             $__value_$i$i$i = ((($__nd$0$i$i$i)) + 16|0);
             $__size_$i$i5$i$i$i$i24$i$i$i = ((($__value_$i$i$i)) + 11|0);
             $57 = load1($__size_$i$i5$i$i$i$i24$i$i$i);
             $tobool$i$i6$i$i$i$i25$i$i$i = ($57<<24>>24)<(0);
             $__size_$i3$i7$i$i$i$i26$i$i$i = ((($__nd$0$i$i$i)) + 20|0);
             $58 = load4($__size_$i3$i7$i$i$i$i26$i$i$i);
             $conv$i$i9$i$i$i$i27$i$i$i = $57&255;
             $cond$i11$i$i$i$i28$i$i$i = $tobool$i$i6$i$i$i$i25$i$i$i ? $58 : $conv$i$i9$i$i$i$i27$i$i$i;
             $cmp$i$i$i$i$i$i$i29$i$i$i = ($cond$i11$i$i$i$i28$i$i$i>>>0)<($cond$i$i$i$i$i22$i$i$i>>>0);
             $$sroa$speculated$i$i$i$i30$i$i$i = $cmp$i$i$i$i$i$i$i29$i$i$i ? $cond$i11$i$i$i$i28$i$i$i : $cond$i$i$i$i$i22$i$i$i;
             $cmp$i$i$i$i$i31$i$i$i = ($$sroa$speculated$i$i$i$i30$i$i$i|0)==(0);
             do {
              if ($cmp$i$i$i$i$i31$i$i$i) {
               label = 50;
              } else {
               $59 = load4($__value_$i$i$i);
               $cond$i$i22$i$i$i$i37$i$i$i = $tobool$i$i6$i$i$i$i25$i$i$i ? $59 : $__value_$i$i$i;
               $call$i$i$i$i$i38$i$i$i = (_memcmp($cond$i$i22$i$i$i$i$i$i$i,$cond$i$i22$i$i$i$i37$i$i$i,$$sroa$speculated$i$i$i$i30$i$i$i)|0);
               $cmp$i$i$i$i39$i$i$i = ($call$i$i$i$i$i38$i$i$i|0)==(0);
               if ($cmp$i$i$i$i39$i$i$i) {
                label = 50;
                break;
               }
               $cmp$i$i$i46$i$i$i = ($call$i$i$i$i$i38$i$i$i|0)<(0);
               if ($cmp$i$i$i46$i$i$i) {
                label = 52;
               } else {
                label = 54;
               }
              }
             } while(0);
             if ((label|0) == 50) {
              label = 0;
              $cmp8$i$i$i$i41$i$i$i = ($cond$i$i$i$i$i22$i$i$i>>>0)<($cond$i11$i$i$i$i28$i$i$i>>>0);
              if ($cmp8$i$i$i$i41$i$i$i) {
               label = 52;
              } else {
               label = 54;
              }
             }
             if ((label|0) == 52) {
              label = 0;
              $60 = load4($__nd$0$i$i$i);
              $cmp5$i$i$i = ($60|0)==(0|0);
              if ($cmp5$i$i$i) {
               label = 53;
               break;
              } else {
               $$sink$i$i$i = $60;
              }
             }
             else if ((label|0) == 54) {
              label = 0;
              $cmp$i$i$i$i$i$i$i$i$i$i = ($cond$i$i$i$i$i22$i$i$i>>>0)<($cond$i11$i$i$i$i28$i$i$i>>>0);
              $$sroa$speculated$i$i$i$i$i$i$i = $cmp$i$i$i$i$i$i$i$i$i$i ? $cond$i$i$i$i$i22$i$i$i : $cond$i11$i$i$i$i28$i$i$i;
              $cmp$i$i$i$i$i$i2$i$i = ($$sroa$speculated$i$i$i$i$i$i$i|0)==(0);
              do {
               if ($cmp$i$i$i$i$i$i2$i$i) {
                label = 56;
               } else {
                $62 = load4($__value_$i$i$i);
                $cond$i$i$i$i$i$i$i$i$i = $tobool$i$i6$i$i$i$i25$i$i$i ? $62 : $__value_$i$i$i;
                $call$i$i$i$i$i$i$i$i = (_memcmp($cond$i$i$i$i$i$i$i$i$i,$cond$i$i22$i$i$i$i$i$i$i,$$sroa$speculated$i$i$i$i$i$i$i)|0);
                $cmp$i$i$i$i$i3$i$i = ($call$i$i$i$i$i$i$i$i|0)==(0);
                if ($cmp$i$i$i$i$i3$i$i) {
                 label = 56;
                 break;
                }
                $cmp$i$i$i$i$i$i = ($call$i$i$i$i$i$i$i$i|0)<(0);
                if (!($cmp$i$i$i$i$i$i)) {
                 label = 61;
                 break L122;
                }
               }
              } while(0);
              if ((label|0) == 56) {
               label = 0;
               if (!($cmp$i$i$i$i$i$i$i29$i$i$i)) {
                label = 61;
                break;
               }
              }
              $63 = ((($__nd$0$i$i$i)) + 4|0);
              $64 = load4($63);
              $cmp14$i$i$i = ($64|0)==(0|0);
              if ($cmp14$i$i$i) {
               label = 60;
               break;
              } else {
               $$sink$i$i$i = $64;
              }
             }
             $__nd$0$i$i$i = $$sink$i$i$i;
            }
            if ((label|0) == 53) {
             label = 0;
             $61 = $__nd$0$i$i$i;
             store4($__parent$i$i$i$i$i$i$i$sroa$0,$61);
             $__parent$i$i$i$i$i$i$i$sroa$0$0$__parent$i$i$i$i$i$i$i$sroa$0$0$ = $61;$retval$0$i$i$i = $__nd$0$i$i$i;
             break;
            }
            else if ((label|0) == 60) {
             label = 0;
             $65 = $__nd$0$i$i$i;
             store4($__parent$i$i$i$i$i$i$i$sroa$0,$65);
             $__parent$i$i$i$i$i$i$i$sroa$0$0$__parent$i$i$i$i$i$i$i$sroa$0$0$ = $65;$retval$0$i$i$i = $63;
             break;
            }
            else if ((label|0) == 61) {
             label = 0;
             $66 = $__nd$0$i$i$i;
             store4($__parent$i$i$i$i$i$i$i$sroa$0,$66);
             $__parent$i$i$i$i$i$i$i$sroa$0$0$__parent$i$i$i$i$i$i$i$sroa$0$0$ = $66;$retval$0$i$i$i = $__parent$i$i$i$i$i$i$i$sroa$0;
             break;
            }
           }
          } while(0);
          $67 = load4($retval$0$i$i$i);
          $cmp$i$i$i$i$i$i$i = ($67|0)==(0|0);
          if ($cmp$i$i$i$i$i$i$i) {
           $call$i$i$i$i$i$i$i$i$i7$i$i = (__Znwj(32)|0);
           $__cc$i$i$i$i$i$i$i$i$i = ((($call$i$i$i$i$i$i$i$i$i7$i$i)) + 16|0);
           ; store8($__cc$i$i$i$i$i$i$i$i$i,load8($ref$tmp$i$i,4),4); store4($__cc$i$i$i$i$i$i$i$i$i+8 | 0,load4($ref$tmp$i$i+8 | 0,4),4);
           ; store8($ref$tmp$i$i,i64_const(0,0),4); store4($ref$tmp$i$i+8|0,0,4);
           $second$i$i$i$i$i$i$i$i$i$i$i$i = ((($call$i$i$i$i$i$i$i$i$i7$i$i)) + 28|0);
           $68 = load4($second$i$i10$i$i);
           store4($second$i$i$i$i$i$i$i$i$i$i$i$i,$68);
           store4($call$i$i$i$i$i$i$i$i$i7$i$i,0);
           $__right_$i$i$i$i$i$i$i$i = ((($call$i$i$i$i$i$i$i$i$i7$i$i)) + 4|0);
           store4($__right_$i$i$i$i$i$i$i$i,0);
           $__parent_$i$i$i$i$i$i$i$i = ((($call$i$i$i$i$i$i$i$i$i7$i$i)) + 8|0);
           store4($__parent_$i$i$i$i$i$i$i$i,$__parent$i$i$i$i$i$i$i$sroa$0$0$__parent$i$i$i$i$i$i$i$sroa$0$0$);
           store4($retval$0$i$i$i,$call$i$i$i$i$i$i$i$i$i7$i$i);
           $69 = load4($call$i27$i);
           $70 = load4($69);
           $cmp$i$i$i$i$i$i$i$i = ($70|0)==(0|0);
           if ($cmp$i$i$i$i$i$i$i$i) {
            $73 = $call$i$i$i$i$i$i$i$i$i7$i$i;
           } else {
            $71 = $70;
            store4($call$i27$i,$71);
            $$pre$i$i$i$i$i$i$i$i = load4($retval$0$i$i$i);
            $73 = $$pre$i$i$i$i$i$i$i$i;
           }
           $72 = load4($__left_$i$i$i$i$i$i$i);
           __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($72,$73);
           $74 = load4($__first_$i$i$i$i$i28$i);
           $inc$i$i$i$i$i$i$i$i = (($74) + 1)|0;
           store4($__first_$i$i$i$i$i28$i,$inc$i$i$i$i$i$i$i$i);
          }
          __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp$i$i);
         }
         $inc$i37$i = (($storemerge18$i$i) + 1)|0;
         $cmp$i38$i = ($storemerge18$i$i|0)<($oldEndIdx$0253$i|0);
         if ($cmp$i38$i) {
          $storemerge18$i$i = $inc$i37$i;
         } else {
          $145 = $call$i27$i;$oldKeyToIdx$1$i = $call$i27$i;
          break;
         }
        }
       } else {
        $145 = $141;$oldKeyToIdx$1$i = $oldKeyToIdx$0260$i;
       }
      } while(0);
      $key$i = ((($newStartVnode$0257$i)) + 12|0);
      $__first_$i$i$i$i$i = ((($oldKeyToIdx$1$i)) + 4|0);
      $75 = load4($__first_$i$i$i$i$i);
      $cmp47$i$i = ($75|0)==(0|0);
      L152: do {
       if (!($cmp47$i$i)) {
        $__size_$i$i$i$i$i$i10$i$i = ((($key$i)) + 11|0);
        $76 = load1($__size_$i$i$i$i$i$i10$i$i);
        $tobool$i$i$i$i$i$i11$i$i = ($76<<24>>24)<(0);
        $__size_$i3$i$i$i$i$i12$i$i = ((($newStartVnode$0257$i)) + 16|0);
        $77 = load4($__size_$i3$i$i$i$i$i12$i$i);
        $conv$i$i$i$i$i$i13$i$i = $76&255;
        $cond$i$i$i$i$i14$i$i = $tobool$i$i$i$i$i$i11$i$i ? $77 : $conv$i$i$i$i$i$i13$i$i;
        $78 = load4($key$i);
        $cond$i$i22$i$i$i$i$i$i = $tobool$i$i$i$i$i$i11$i$i ? $78 : $key$i;
        $79 = $75;
        L154: while(1) {
         $__value_$i$i = ((($79)) + 16|0);
         $__size_$i$i5$i$i$i$i16$i$i = ((($__value_$i$i)) + 11|0);
         $80 = load1($__size_$i$i5$i$i$i$i16$i$i);
         $tobool$i$i6$i$i$i$i17$i$i = ($80<<24>>24)<(0);
         $__size_$i3$i7$i$i$i$i18$i$i = ((($79)) + 20|0);
         $81 = load4($__size_$i3$i7$i$i$i$i18$i$i);
         $conv$i$i9$i$i$i$i19$i$i = $80&255;
         $cond$i11$i$i$i$i20$i$i = $tobool$i$i6$i$i$i$i17$i$i ? $81 : $conv$i$i9$i$i$i$i19$i$i;
         $cmp$i$i$i$i$i$i$i21$i$i = ($cond$i11$i$i$i$i20$i$i>>>0)<($cond$i$i$i$i$i14$i$i>>>0);
         $$sroa$speculated$i$i$i$i22$i$i = $cmp$i$i$i$i$i$i$i21$i$i ? $cond$i11$i$i$i$i20$i$i : $cond$i$i$i$i$i14$i$i;
         $cmp$i$i$i$i$i23$i$i = ($$sroa$speculated$i$i$i$i22$i$i|0)==(0);
         do {
          if ($cmp$i$i$i$i$i23$i$i) {
           label = 73;
          } else {
           $82 = load4($__value_$i$i);
           $cond$i$i22$i$i$i$i29$i$i = $tobool$i$i6$i$i$i$i17$i$i ? $82 : $__value_$i$i;
           $call$i$i$i$i$i30$i$i = (_memcmp($cond$i$i22$i$i$i$i$i$i,$cond$i$i22$i$i$i$i29$i$i,$$sroa$speculated$i$i$i$i22$i$i)|0);
           $cmp$i$i$i$i31$i$i = ($call$i$i$i$i$i30$i$i|0)==(0);
           if ($cmp$i$i$i$i31$i$i) {
            label = 73;
            break;
           }
           $cmp$i$i$i38$i$i = ($call$i$i$i$i$i30$i$i|0)<(0);
           if ($cmp$i$i$i38$i$i) {
            label = 75;
           } else {
            label = 76;
           }
          }
         } while(0);
         if ((label|0) == 73) {
          label = 0;
          $cmp8$i$i$i$i33$i$i = ($cond$i$i$i$i$i14$i$i>>>0)<($cond$i11$i$i$i$i20$i$i>>>0);
          if ($cmp8$i$i$i$i33$i$i) {
           label = 75;
          } else {
           label = 76;
          }
         }
         if ((label|0) == 75) {
          label = 0;
          $$sink$be$i$i = $79;
         }
         else if ((label|0) == 76) {
          label = 0;
          $cmp$i$i$i$i$i$i$i$i$i = ($cond$i$i$i$i$i14$i$i>>>0)<($cond$i11$i$i$i$i20$i$i>>>0);
          $$sroa$speculated$i$i$i$i$i$i = $cmp$i$i$i$i$i$i$i$i$i ? $cond$i$i$i$i$i14$i$i : $cond$i11$i$i$i$i20$i$i;
          $cmp$i$i$i$i$i$i40$i = ($$sroa$speculated$i$i$i$i$i$i|0)==(0);
          do {
           if ($cmp$i$i$i$i$i$i40$i) {
            label = 78;
           } else {
            $83 = load4($__value_$i$i);
            $cond$i$i$i$i$i$i$i$i = $tobool$i$i6$i$i$i$i17$i$i ? $83 : $__value_$i$i;
            $call$i$i$i$i$i$i$i = (_memcmp($cond$i$i$i$i$i$i$i$i,$cond$i$i22$i$i$i$i$i$i,$$sroa$speculated$i$i$i$i$i$i)|0);
            $cmp$i$i$i$i$i41$i = ($call$i$i$i$i$i$i$i|0)==(0);
            if ($cmp$i$i$i$i$i41$i) {
             label = 78;
             break;
            }
            $cmp$i$i$i$i42$i = ($call$i$i$i$i$i$i$i|0)<(0);
            if (!($cmp$i$i$i$i42$i)) {
             break L154;
            }
           }
          } while(0);
          if ((label|0) == 78) {
           label = 0;
           if (!($cmp$i$i$i$i$i$i$i21$i$i)) {
            break;
           }
          }
          $84 = ((($79)) + 4|0);
          $$sink$be$i$i = $84;
         }
         $85 = load4($$sink$be$i$i);
         $cmp$i43$i = ($85|0)==(0|0);
         if ($cmp$i43$i) {
          break L152;
         } else {
          $79 = $85;
         }
        }
        $call$i$i$i = (__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiNS_4lessIS6_EENS4_INS_4pairIKS6_iEEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_($oldKeyToIdx$1$i,$__parent$i$i$i$i$i$i$i$sroa$0,$key$i)|0);
        $88 = load4($call$i$i$i);
        $cmp$i159$i = ($88|0)==(0|0);
        if ($cmp$i159$i) {
         label = 84;
         break L82;
        }
        $second$i$i = ((($88)) + 28|0);
        $89 = load4($second$i$i);
        $arrayidx$i162$i = (($27) + ($89<<2)|0);
        $90 = load4($arrayidx$i162$i);
        $__size_$i$i$i$i = ((($90)) + 11|0);
        $91 = load1($__size_$i$i$i$i);
        $tobool$i$i$i$i = ($91<<24>>24)<(0);
        if ($tobool$i$i$i$i) {
         $__size_$i3$i$i$i = ((($90)) + 4|0);
         $92 = load4($__size_$i3$i$i$i);
         $cond$i$i$i7 = $92;
        } else {
         $conv$i$i$i$i = $91&255;
         $cond$i$i$i7 = $conv$i$i$i$i;
        }
        $__size_$i$i5$i$i = ((($93)) + 11|0);
        $94 = load1($__size_$i$i5$i$i);
        $tobool$i$i6$i$i = ($94<<24>>24)<(0);
        $__size_$i3$i7$i$i = ((($newStartVnode$0257$i)) + 4|0);
        $95 = load4($__size_$i3$i7$i$i);
        $conv$i$i9$i$i = $94&255;
        $cond$i11$i$i = $tobool$i$i6$i$i ? $95 : $conv$i$i9$i$i;
        if ($tobool$i$i$i$i) {
         $96 = load4($90);
         $cond$i$i$i$i = $96;
        } else {
         $cond$i$i$i$i = $90;
        }
        $cmp$i$i$i$i$i = ($cond$i11$i$i>>>0)<($cond$i$i$i7>>>0);
        $$sroa$speculated$i$i = $cmp$i$i$i$i$i ? $cond$i11$i$i : $cond$i$i$i7;
        $cmp$i$i$i = ($$sroa$speculated$i$i|0)==(0);
        if ($cmp$i$i$i) {
         label = 93;
        } else {
         $97 = load4($newStartVnode$0257$i);
         $cond$i$i22$i$i = $tobool$i$i6$i$i ? $97 : $newStartVnode$0257$i;
         $call$i$i163$i = (_memcmp($cond$i$i$i$i,$cond$i$i22$i$i,$$sroa$speculated$i$i)|0);
         $cmp$i164$i = ($call$i$i163$i|0)==(0);
         if ($cmp$i164$i) {
          label = 93;
         } else {
          label = 94;
         }
        }
        do {
         if ((label|0) == 93) {
          label = 0;
          $cmp8$i$i = ($cond$i$i$i7>>>0)>=($cond$i11$i$i>>>0);
          $cmp111$i = $cmp$i$i$i$i$i ^ 1;
          $or$cond213$i = $cmp8$i$i & $cmp111$i;
          if (!($or$cond213$i)) {
           label = 94;
           break;
          }
          __ZN6asmdom10patchVNodeEPNS_5VNodeES1_($90,$newStartVnode$0257$i);
          $call$i$i178$i = (__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiNS_4lessIS6_EENS4_INS_4pairIKS6_iEEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_($oldKeyToIdx$1$i,$__parent$i$i$i$i$i$i$i$sroa$0,$key$i)|0);
          $99 = load4($call$i$i178$i);
          $cmp$i179$i = ($99|0)==(0|0);
          if ($cmp$i179$i) {
           label = 96;
           break L82;
          }
          $second$i184$i = ((($99)) + 28|0);
          $100 = load4($second$i184$i);
          $arrayidx$i191$i = (($27) + ($100<<2)|0);
          store4($arrayidx$i191$i,0);
          $elm125$i = ((($90)) + 40|0);
          $101 = load4($elm125$i);
          $elm126$i = ((($oldStartVnode$0255$i)) + 40|0);
          $102 = load4($elm126$i);
          $call128$i = _emscripten_asm_const_iiii(10, ($16|0), ($101|0), ($102|0))|0;
         }
        } while(0);
        if ((label|0) == 94) {
         label = 0;
         $call114$i = (__ZN6asmdom9createElmEPNS_5VNodeE($newStartVnode$0257$i)|0);
         $elm115$i = ((($oldStartVnode$0255$i)) + 40|0);
         $98 = load4($elm115$i);
         $call117$i = _emscripten_asm_const_iiii(10, ($16|0), ($call114$i|0), ($98|0))|0;
        }
        $inc130$i = (($newStartIdx$0252$i) + 1)|0;
        $arrayidx$i193$i = (($28) + ($inc130$i<<2)|0);
        $103 = load4($arrayidx$i193$i);
        $142 = $newCh$i$sroa$0$0;$143 = $103;$144 = $145;$newEndIdx$0$be$i = $newEndIdx$0254$i;$newEndVnode$0$be$i = $newEndVnode$0259$i;$newStartIdx$0$be$i = $inc130$i;$newStartVnode$0$be$i = $103;$oldEndIdx$0$be$i = $oldEndIdx$0253$i;$oldEndVnode$0$be$i = $oldEndVnode$0256$i;$oldKeyToIdx$0$be$i = $oldKeyToIdx$1$i;$oldStartIdx$0$be$i = $oldStartIdx$0251$i;$oldStartVnode$0$be$i = $oldStartVnode$0255$i;
        break L84;
       }
      } while(0);
      $call96$i = (__ZN6asmdom9createElmEPNS_5VNodeE($newStartVnode$0257$i)|0);
      $elm97$i = ((($oldStartVnode$0255$i)) + 40|0);
      $86 = load4($elm97$i);
      $call99$i = _emscripten_asm_const_iiii(10, ($16|0), ($call96$i|0), ($86|0))|0;
      $inc100$i = (($newStartIdx$0252$i) + 1)|0;
      $arrayidx$i158$i = (($28) + ($inc100$i<<2)|0);
      $87 = load4($arrayidx$i158$i);
      $142 = $newCh$i$sroa$0$0;$143 = $87;$144 = $145;$newEndIdx$0$be$i = $newEndIdx$0254$i;$newEndVnode$0$be$i = $newEndVnode$0259$i;$newStartIdx$0$be$i = $inc100$i;$newStartVnode$0$be$i = $87;$oldEndIdx$0$be$i = $oldEndIdx$0253$i;$oldEndVnode$0$be$i = $oldEndVnode$0256$i;$oldKeyToIdx$0$be$i = $oldKeyToIdx$1$i;$oldStartIdx$0$be$i = $oldStartIdx$0251$i;$oldStartVnode$0$be$i = $oldStartVnode$0255$i;
     }
    } while(0);
    $cmp$i4 = ($oldStartIdx$0$be$i|0)>($oldEndIdx$0$be$i|0);
    $cmp15$i = ($newStartIdx$0$be$i|0)>($newEndIdx$0$be$i|0);
    $or$cond$i = $cmp$i4 | $cmp15$i;
    if ($or$cond$i) {
     $104 = $142;$112 = $144;$cmp$lcssa$i = $cmp$i4;$cmp15$lcssa$i = $cmp15$i;$newEndIdx$0$lcssa$i = $newEndIdx$0$be$i;$newStartIdx$0$lcssa$i = $newStartIdx$0$be$i;$oldEndIdx$0$lcssa$i = $oldEndIdx$0$be$i;$oldKeyToIdx$0$lcssa$i = $oldKeyToIdx$0$be$i;$oldStartIdx$0$lcssa$i = $oldStartIdx$0$be$i;
     break L80;
    } else {
     $140 = $142;$141 = $144;$93 = $143;$newEndIdx$0254$i = $newEndIdx$0$be$i;$newEndVnode$0259$i = $newEndVnode$0$be$i;$newStartIdx$0252$i = $newStartIdx$0$be$i;$newStartVnode$0257$i = $newStartVnode$0$be$i;$oldEndIdx$0253$i = $oldEndIdx$0$be$i;$oldEndVnode$0256$i = $oldEndVnode$0$be$i;$oldKeyToIdx$0260$i = $oldKeyToIdx$0$be$i;$oldStartIdx$0251$i = $oldStartIdx$0$be$i;$oldStartVnode$0255$i = $oldStartVnode$0$be$i;
    }
   }
   if ((label|0) == 84) {
    $exception$i$i = (___cxa_allocate_exception(8)|0);
    __ZNSt11logic_errorC2EPKc($exception$i$i);
    store4($exception$i$i,(2736));
    ___cxa_throw(($exception$i$i|0),(1560|0),(14|0));
    // unreachable;
   }
   else if ((label|0) == 96) {
    $exception$i180$i = (___cxa_allocate_exception(8)|0);
    __ZNSt11logic_errorC2EPKc($exception$i180$i);
    store4($exception$i180$i,(2736));
    ___cxa_throw(($exception$i180$i|0),(1560|0),(14|0));
    // unreachable;
   }
  }
 } while(0);
 do {
  if ($cmp$lcssa$i) {
   $add$i = (($newEndIdx$0$lcssa$i) + 1)|0;
   $sub$ptr$sub$i195$i = (($newCh$i$sroa$16$0) - ($104))|0;
   $sub$ptr$div$i196$i = $sub$ptr$sub$i195$i >> 2;
   $sub145$i = (($sub$ptr$div$i196$i) + -1)|0;
   $cmp146$i = ($add$i>>>0)>($sub145$i>>>0);
   $cmp3$i166$i = ($newStartIdx$0$lcssa$i>>>0)>($newEndIdx$0$lcssa$i>>>0);
   if ($cmp146$i) {
    if ($cmp3$i166$i) {
     break;
    } else {
     $startIdx$addr$04$i169$i = $newStartIdx$0$lcssa$i;
    }
    while(1) {
     $arrayidx$i$i170$i = (($28) + ($startIdx$addr$04$i169$i<<2)|0);
     $108 = load4($arrayidx$i$i170$i);
     $call1$i175$i = (__ZN6asmdom9createElmEPNS_5VNodeE($108)|0);
     $call2$i176$i = _emscripten_asm_const_iiii(11, ($16|0), ($call1$i175$i|0), 0)|0;
     $inc$i171$i = (($startIdx$addr$04$i169$i) + 1)|0;
     $cmp$i172$i = ($inc$i171$i>>>0)>($newEndIdx$0$lcssa$i>>>0);
     if ($cmp$i172$i) {
      break;
     } else {
      $startIdx$addr$04$i169$i = $inc$i171$i;
     }
    }
   } else {
    $arrayidx$i198$i = (($28) + ($add$i<<2)|0);
    $105 = load4($arrayidx$i198$i);
    $elm151$i = ((($105)) + 40|0);
    $106 = load4($elm151$i);
    if ($cmp3$i166$i) {
     break;
    } else {
     $startIdx$addr$04$i202$i = $newStartIdx$0$lcssa$i;
    }
    while(1) {
     $arrayidx$i$i203$i = (($28) + ($startIdx$addr$04$i202$i<<2)|0);
     $107 = load4($arrayidx$i$i203$i);
     $call1$i208$i = (__ZN6asmdom9createElmEPNS_5VNodeE($107)|0);
     $call2$i210$i = _emscripten_asm_const_iiii(11, ($16|0), ($call1$i208$i|0), ($106|0))|0;
     $inc$i204$i = (($startIdx$addr$04$i202$i) + 1)|0;
     $cmp$i205$i = ($inc$i204$i>>>0)>($newEndIdx$0$lcssa$i>>>0);
     if ($cmp$i205$i) {
      break;
     } else {
      $startIdx$addr$04$i202$i = $inc$i204$i;
     }
    }
   }
  } else {
   $cmp15$not$i = $cmp15$lcssa$i ^ 1;
   $cmp3$i$i = ($oldStartIdx$0$lcssa$i>>>0)>($oldEndIdx$0$lcssa$i>>>0);
   $or$cond214$i = $cmp3$i$i | $cmp15$not$i;
   if (!($or$cond214$i)) {
    $startIdx$addr$04$i$i = $oldStartIdx$0$lcssa$i;
    while(1) {
     $arrayidx$i$i$i = (($27) + ($startIdx$addr$04$i$i<<2)|0);
     $109 = load4($arrayidx$i$i$i);
     $elm$i$i = ((($109)) + 40|0);
     $110 = load4($elm$i$i);
     $call1$i151$i = _emscripten_asm_const_ii(12, ($110|0))|0;
     $inc$i$i = (($startIdx$addr$04$i$i) + 1)|0;
     $cmp$i150$i = ($inc$i$i>>>0)>($oldEndIdx$0$lcssa$i>>>0);
     if ($cmp$i150$i) {
      break;
     } else {
      $startIdx$addr$04$i$i = $inc$i$i;
     }
    }
   }
  }
 } while(0);
 $isnull$i = ($oldKeyToIdx$0$lcssa$i|0)==(0|0);
 if (!($isnull$i)) {
  $__first_$i$i$i$i$i$i$i = ((($oldKeyToIdx$0$lcssa$i)) + 4|0);
  $111 = load4($__first_$i$i$i$i$i$i$i);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($111);
  __ZdlPv($112);
 }
 $cmp$i133$i = ($newCh$i$sroa$0$0|0)==(0);
 if (!($cmp$i133$i)) {
  $113 = $newCh$i$sroa$0$0;
  __ZdlPv($113);
 }
 $cmp$i119$i = ($oldCh$i$sroa$0$0|0)==(0);
 if ($cmp$i119$i) {
  STACKTOP = sp;return;
 }
 $114 = $oldCh$i$sroa$0$0;
 __ZdlPv($114);
 STACKTOP = sp;return;
}
function __ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiNS_4lessIS6_EENS4_INS_4pairIKS6_iEEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA_($this,$__parent,$__k) {
 $this = $this|0;
 $__parent = $__parent|0;
 $__k = $__k|0;
 var $$sink = 0, $$sroa$speculated$i$i$i = 0, $$sroa$speculated$i$i$i30 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__first_$i$i$i$i = 0, $__nd$0 = 0, $__size_$i$i$i$i$i18 = 0, $__size_$i$i5$i$i$i24 = 0, $__size_$i3$i$i$i$i20 = 0, $__size_$i3$i7$i$i$i26 = 0;
 var $call$i$i$i$i = 0, $call$i$i$i$i38 = 0, $cmp = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i29 = 0, $cmp$i$i$i$i31 = 0, $cmp$i$i$i39 = 0, $cmp$i$i46 = 0, $cmp20 = 0, $cmp7 = 0, $cmp8$i$i$i41 = 0, $cond$i$i$i$i$i = 0, $cond$i$i$i$i22 = 0, $cond$i$i22$i$i$i = 0, $cond$i$i22$i$i$i37 = 0, $cond$i11$i$i$i28 = 0, $conv$i$i$i$i$i21 = 0;
 var $conv$i$i9$i$i$i27 = 0, $first = 0, $retval$0 = 0, $tobool$i$i$i$i$i19 = 0, $tobool$i$i6$i$i$i25 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__first_$i$i$i$i = ((($this)) + 4|0);
 $0 = load4($__first_$i$i$i$i);
 $cmp = ($0|0)==(0|0);
 if ($cmp) {
  store4($__parent,$__first_$i$i$i$i);
  $retval$0 = $__first_$i$i$i$i;
  return ($retval$0|0);
 }
 $__size_$i$i$i$i$i18 = ((($__k)) + 11|0);
 $1 = load1($__size_$i$i$i$i$i18);
 $tobool$i$i$i$i$i19 = ($1<<24>>24)<(0);
 $__size_$i3$i$i$i$i20 = ((($__k)) + 4|0);
 $2 = load4($__size_$i3$i$i$i$i20);
 $conv$i$i$i$i$i21 = $1&255;
 $cond$i$i$i$i22 = $tobool$i$i$i$i$i19 ? $2 : $conv$i$i$i$i$i21;
 $3 = load4($__k);
 $cond$i$i22$i$i$i = $tobool$i$i$i$i$i19 ? $3 : $__k;
 $__nd$0 = $0;
 while(1) {
  $first = ((($__nd$0)) + 16|0);
  $__size_$i$i5$i$i$i24 = ((($first)) + 11|0);
  $4 = load1($__size_$i$i5$i$i$i24);
  $tobool$i$i6$i$i$i25 = ($4<<24>>24)<(0);
  $__size_$i3$i7$i$i$i26 = ((($__nd$0)) + 20|0);
  $5 = load4($__size_$i3$i7$i$i$i26);
  $conv$i$i9$i$i$i27 = $4&255;
  $cond$i11$i$i$i28 = $tobool$i$i6$i$i$i25 ? $5 : $conv$i$i9$i$i$i27;
  $cmp$i$i$i$i$i$i29 = ($cond$i11$i$i$i28>>>0)<($cond$i$i$i$i22>>>0);
  $$sroa$speculated$i$i$i30 = $cmp$i$i$i$i$i$i29 ? $cond$i11$i$i$i28 : $cond$i$i$i$i22;
  $cmp$i$i$i$i31 = ($$sroa$speculated$i$i$i30|0)==(0);
  if ($cmp$i$i$i$i31) {
   label = 5;
  } else {
   $6 = load4($first);
   $cond$i$i22$i$i$i37 = $tobool$i$i6$i$i$i25 ? $6 : $first;
   $call$i$i$i$i38 = (_memcmp($cond$i$i22$i$i$i,$cond$i$i22$i$i$i37,$$sroa$speculated$i$i$i30)|0);
   $cmp$i$i$i39 = ($call$i$i$i$i38|0)==(0);
   if ($cmp$i$i$i39) {
    label = 5;
   } else {
    $cmp$i$i46 = ($call$i$i$i$i38|0)<(0);
    if ($cmp$i$i46) {
     label = 7;
    } else {
     label = 9;
    }
   }
  }
  if ((label|0) == 5) {
   label = 0;
   $cmp8$i$i$i41 = ($cond$i$i$i$i22>>>0)<($cond$i11$i$i$i28>>>0);
   if ($cmp8$i$i$i41) {
    label = 7;
   } else {
    label = 9;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $7 = load4($__nd$0);
   $cmp7 = ($7|0)==(0|0);
   if ($cmp7) {
    label = 8;
    break;
   } else {
    $$sink = $7;
   }
  }
  else if ((label|0) == 9) {
   label = 0;
   $cmp$i$i$i$i$i$i = ($cond$i$i$i$i22>>>0)<($cond$i11$i$i$i28>>>0);
   $$sroa$speculated$i$i$i = $cmp$i$i$i$i$i$i ? $cond$i$i$i$i22 : $cond$i11$i$i$i28;
   $cmp$i$i$i$i = ($$sroa$speculated$i$i$i|0)==(0);
   if ($cmp$i$i$i$i) {
    label = 11;
   } else {
    $8 = load4($first);
    $cond$i$i$i$i$i = $tobool$i$i6$i$i$i25 ? $8 : $first;
    $call$i$i$i$i = (_memcmp($cond$i$i$i$i$i,$cond$i$i22$i$i$i,$$sroa$speculated$i$i$i)|0);
    $cmp$i$i$i = ($call$i$i$i$i|0)==(0);
    if ($cmp$i$i$i) {
     label = 11;
    } else {
     $cmp$i$i = ($call$i$i$i$i|0)<(0);
     if (!($cmp$i$i)) {
      label = 16;
      break;
     }
    }
   }
   if ((label|0) == 11) {
    label = 0;
    if (!($cmp$i$i$i$i$i$i29)) {
     label = 16;
     break;
    }
   }
   $9 = ((($__nd$0)) + 4|0);
   $10 = load4($9);
   $cmp20 = ($10|0)==(0|0);
   if ($cmp20) {
    label = 15;
    break;
   } else {
    $$sink = $10;
   }
  }
  $__nd$0 = $$sink;
 }
 if ((label|0) == 8) {
  store4($__parent,$__nd$0);
  $retval$0 = $__nd$0;
  return ($retval$0|0);
 }
 else if ((label|0) == 15) {
  store4($__parent,$__nd$0);
  $retval$0 = $9;
  return ($retval$0|0);
 }
 else if ((label|0) == 16) {
  store4($__parent,$__nd$0);
  $retval$0 = $__parent;
  return ($retval$0|0);
 }
 return (0)|0;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($__nd) {
 $__nd = $__nd|0;
 var $0 = 0, $1 = 0, $2 = 0, $cmp = 0, $first$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__nd|0)==(0|0);
 if ($cmp) {
  return;
 } else {
  $0 = load4($__nd);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0);
  $1 = ((($__nd)) + 4|0);
  $2 = load4($1);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($2);
  $first$i$i$i = ((($__nd)) + 16|0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($first$i$i$i);
  __ZdlPv($__nd);
  return;
 }
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($this,$__p$0,$__k,$__args) {
 $this = $this|0;
 $__p$0 = $__p$0|0;
 $__k = $__k|0;
 $__args = $__args|0;
 var $$pre$i = 0, $$pre$i2 = 0, $$sroa$speculated$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i106$i = 0, $$sroa$speculated$i$i$i$i39$i = 0, $$sroa$speculated$i$i$i$i75$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i6 = 0, $__left_7$i = 0, $__parent = 0, $__parent_$i = 0, $__parent_$i$i$i$i = 0, $__parent_$i$i$i$i$i$i$i = 0, $__prior$sroa$0$0$i = 0, $__right_$i = 0, $__right_$i$i$i$i = 0, $__right_$i5 = 0, $__size_$i$i$i$i$i$i63$i = 0, $__size_$i$i$i$i$i$i94$i = 0, $__size_$i$i5$i$i$i$i$i = 0, $__size_$i$i5$i$i$i$i100$i = 0, $__size_$i$i5$i$i$i$i69$i = 0;
 var $__size_$i3$i$i$i$i$i65$i = 0, $__size_$i3$i$i$i$i$i96$i = 0, $__size_$i3$i7$i$i$i$i$i = 0, $__size_$i3$i7$i$i$i$i102$i = 0, $__size_$i3$i7$i$i$i$i71$i = 0, $__value_$i$i = 0, $__value_$i125$i = 0, $__value_$i61$i = 0, $__x$addr$0$i$i$i = 0, $__x$addr$0$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i$i = 0, $call$i$i$i$i = 0, $call$i$i$i$i$i$i = 0, $call$i$i$i$i$i114$i = 0, $call$i$i$i$i$i47$i = 0, $call$i$i$i$i$i83$i = 0, $call22$i = 0, $call52$i = 0, $cmp = 0;
 var $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i105$i = 0, $cmp$i$i$i$i$i$i$i38$i = 0, $cmp$i$i$i$i$i$i$i74$i = 0, $cmp$i$i$i$i$i107$i = 0, $cmp$i$i$i$i$i25$i = 0, $cmp$i$i$i$i$i40$i = 0, $cmp$i$i$i$i$i76$i = 0, $cmp$i$i$i$i115$i = 0, $cmp$i$i$i$i48$i = 0, $cmp$i$i$i$i84$i = 0, $cmp$i$i$i122$i = 0, $cmp$i$i$i126$i = 0;
 var $cmp$i$i$i55$i = 0, $cmp$i$i$i91$i = 0, $cmp$i130$i = 0, $cmp$i21$i = 0, $cmp$i4 = 0, $cmp$i4$i$i$i = 0, $cmp$i5$i$i$i$i$i$i = 0, $cmp8$i$i$i$i$i = 0, $cmp8$i$i$i$i117$i = 0, $cmp8$i$i$i$i86$i = 0, $cond$i$i$i$i$i$i$i = 0, $cond$i$i$i$i$i$i110$i = 0, $cond$i$i$i$i$i$i43$i = 0, $cond$i$i$i$i$i$i79$i = 0, $cond$i$i$i$i$i67$i = 0, $cond$i$i$i$i$i98$i = 0, $cond$i$i22$i$i$i$i$i = 0, $cond$i$i22$i$i$i$i113$i = 0, $cond$i$i22$i$i$i$i46$i = 0, $cond$i$i22$i$i$i$i82$i = 0;
 var $cond$i11$i$i$i$i$i = 0, $cond$i11$i$i$i$i104$i = 0, $cond$i11$i$i$i$i73$i = 0, $conv$i$i$i$i$i$i66$i = 0, $conv$i$i$i$i$i$i97$i = 0, $conv$i$i9$i$i$i$i$i = 0, $conv$i$i9$i$i$i$i103$i = 0, $conv$i$i9$i$i$i$i72$i = 0, $first$i$i$i$i$i = 0, $inc$i = 0, $retval$0$i$i$i = 0, $retval$0$i$i$i$i$i$i = 0, $retval$2$i = 0, $second$i$i$i$i$i = 0, $second3$i$i$i$i$i = 0, $tobool$i$i$i$i$i$i64$i = 0, $tobool$i$i$i$i$i$i95$i = 0, $tobool$i$i6$i$i$i$i$i = 0, $tobool$i$i6$i$i$i$i101$i = 0, $tobool$i$i6$i$i$i$i70$i = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $__parent = sp;
 $__first_$i$i$i$i$i = ((($this)) + 4|0);
 $cmp$i$i = ($__first_$i$i$i$i$i|0)==($__p$0|0);
 $0 = $__p$0;
 L1: do {
  if ($cmp$i$i) {
   label = 6;
  } else {
   $__value_$i61$i = ((($__p$0)) + 16|0);
   $__size_$i$i$i$i$i$i94$i = ((($__k)) + 11|0);
   $1 = load1($__size_$i$i$i$i$i$i94$i);
   $tobool$i$i$i$i$i$i95$i = ($1<<24>>24)<(0);
   $__size_$i3$i$i$i$i$i96$i = ((($__k)) + 4|0);
   $2 = load4($__size_$i3$i$i$i$i$i96$i);
   $conv$i$i$i$i$i$i97$i = $1&255;
   $cond$i$i$i$i$i98$i = $tobool$i$i$i$i$i$i95$i ? $2 : $conv$i$i$i$i$i$i97$i;
   $__size_$i$i5$i$i$i$i100$i = ((($__value_$i61$i)) + 11|0);
   $3 = load1($__size_$i$i5$i$i$i$i100$i);
   $tobool$i$i6$i$i$i$i101$i = ($3<<24>>24)<(0);
   $__size_$i3$i7$i$i$i$i102$i = ((($__p$0)) + 20|0);
   $4 = load4($__size_$i3$i7$i$i$i$i102$i);
   $conv$i$i9$i$i$i$i103$i = $3&255;
   $cond$i11$i$i$i$i104$i = $tobool$i$i6$i$i$i$i101$i ? $4 : $conv$i$i9$i$i$i$i103$i;
   $cmp$i$i$i$i$i$i$i105$i = ($cond$i11$i$i$i$i104$i>>>0)<($cond$i$i$i$i$i98$i>>>0);
   $$sroa$speculated$i$i$i$i106$i = $cmp$i$i$i$i$i$i$i105$i ? $cond$i11$i$i$i$i104$i : $cond$i$i$i$i$i98$i;
   $cmp$i$i$i$i$i107$i = ($$sroa$speculated$i$i$i$i106$i|0)==(0);
   if ($cmp$i$i$i$i$i107$i) {
    label = 4;
   } else {
    $5 = load4($__k);
    $cond$i$i$i$i$i$i110$i = $tobool$i$i$i$i$i$i95$i ? $5 : $__k;
    $6 = load4($__value_$i61$i);
    $cond$i$i22$i$i$i$i113$i = $tobool$i$i6$i$i$i$i101$i ? $6 : $__value_$i61$i;
    $call$i$i$i$i$i114$i = (_memcmp($cond$i$i$i$i$i$i110$i,$cond$i$i22$i$i$i$i113$i,$$sroa$speculated$i$i$i$i106$i)|0);
    $cmp$i$i$i$i115$i = ($call$i$i$i$i$i114$i|0)==(0);
    if ($cmp$i$i$i$i115$i) {
     label = 4;
    } else {
     $cmp$i$i$i122$i = ($call$i$i$i$i$i114$i|0)<(0);
     if ($cmp$i$i$i122$i) {
      label = 6;
      break;
     }
    }
   }
   if ((label|0) == 4) {
    $cmp8$i$i$i$i117$i = ($cond$i$i$i$i$i98$i>>>0)<($cond$i11$i$i$i$i104$i>>>0);
    if ($cmp8$i$i$i$i117$i) {
     label = 6;
     break;
    }
   }
   $cmp$i$i$i$i$i$i$i38$i = ($cond$i$i$i$i$i98$i>>>0)<($cond$i11$i$i$i$i104$i>>>0);
   $$sroa$speculated$i$i$i$i39$i = $cmp$i$i$i$i$i$i$i38$i ? $cond$i$i$i$i$i98$i : $cond$i11$i$i$i$i104$i;
   $cmp$i$i$i$i$i40$i = ($$sroa$speculated$i$i$i$i39$i|0)==(0);
   if ($cmp$i$i$i$i$i40$i) {
    label = 20;
   } else {
    $19 = load4($__value_$i61$i);
    $cond$i$i$i$i$i$i43$i = $tobool$i$i6$i$i$i$i101$i ? $19 : $__value_$i61$i;
    $20 = load4($__k);
    $cond$i$i22$i$i$i$i46$i = $tobool$i$i$i$i$i$i95$i ? $20 : $__k;
    $call$i$i$i$i$i47$i = (_memcmp($cond$i$i$i$i$i$i43$i,$cond$i$i22$i$i$i$i46$i,$$sroa$speculated$i$i$i$i39$i)|0);
    $cmp$i$i$i$i48$i = ($call$i$i$i$i$i47$i|0)==(0);
    if ($cmp$i$i$i$i48$i) {
     label = 20;
    } else {
     $cmp$i$i$i55$i = ($call$i$i$i$i$i47$i|0)<(0);
     if (!($cmp$i$i$i55$i)) {
      label = 34;
     }
    }
   }
   if ((label|0) == 20) {
    if (!($cmp$i$i$i$i$i$i$i105$i)) {
     label = 34;
    }
   }
   if ((label|0) == 34) {
    store4($__parent,$0);
    $retval$2$i = $__parent;
    break;
   }
   $21 = ((($__p$0)) + 4|0);
   $22 = load4($21);
   $cmp$i$i$i$i$i25$i = ($22|0)==(0|0);
   if ($cmp$i$i$i$i$i25$i) {
    $__x$addr$0$i$i$i$i$i$i = $__p$0;
    while(1) {
     $__parent_$i$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i$i)) + 8|0);
     $24 = load4($__parent_$i$i$i$i$i$i$i);
     $25 = load4($24);
     $cmp$i5$i$i$i$i$i$i = ($25|0)==($__x$addr$0$i$i$i$i$i$i|0);
     if ($cmp$i5$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i$i = $24;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i = $24;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i$i = $22;
    while(1) {
     $23 = load4($__x$addr$0$i$i$i$i$i$i$i);
     $cmp$i$i$i$i$i$i$i = ($23|0)==(0|0);
     if ($cmp$i$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i$i = $23;
     }
    }
   }
   $cmp$i21$i = ($retval$0$i$i$i$i$i$i|0)==($__first_$i$i$i$i$i|0);
   do {
    if (!($cmp$i21$i)) {
     $__value_$i$i = ((($retval$0$i$i$i$i$i$i)) + 16|0);
     $__size_$i$i5$i$i$i$i$i = ((($__value_$i$i)) + 11|0);
     $26 = load1($__size_$i$i5$i$i$i$i$i);
     $tobool$i$i6$i$i$i$i$i = ($26<<24>>24)<(0);
     $__size_$i3$i7$i$i$i$i$i = ((($retval$0$i$i$i$i$i$i)) + 20|0);
     $27 = load4($__size_$i3$i7$i$i$i$i$i);
     $conv$i$i9$i$i$i$i$i = $26&255;
     $cond$i11$i$i$i$i$i = $tobool$i$i6$i$i$i$i$i ? $27 : $conv$i$i9$i$i$i$i$i;
     $cmp$i$i$i$i$i$i$i$i = ($cond$i11$i$i$i$i$i>>>0)<($cond$i$i$i$i$i98$i>>>0);
     $$sroa$speculated$i$i$i$i$i = $cmp$i$i$i$i$i$i$i$i ? $cond$i11$i$i$i$i$i : $cond$i$i$i$i$i98$i;
     $cmp$i$i$i$i$i$i = ($$sroa$speculated$i$i$i$i$i|0)==(0);
     if ($cmp$i$i$i$i$i$i) {
      label = 28;
     } else {
      $28 = load4($__k);
      $cond$i$i$i$i$i$i$i = $tobool$i$i$i$i$i$i95$i ? $28 : $__k;
      $29 = load4($__value_$i$i);
      $cond$i$i22$i$i$i$i$i = $tobool$i$i6$i$i$i$i$i ? $29 : $__value_$i$i;
      $call$i$i$i$i$i$i = (_memcmp($cond$i$i$i$i$i$i$i,$cond$i$i22$i$i$i$i$i,$$sroa$speculated$i$i$i$i$i)|0);
      $cmp$i$i$i$i$i = ($call$i$i$i$i$i$i|0)==(0);
      if ($cmp$i$i$i$i$i) {
       label = 28;
      } else {
       $cmp$i$i$i$i = ($call$i$i$i$i$i$i|0)<(0);
       if ($cmp$i$i$i$i) {
        break;
       }
      }
     }
     if ((label|0) == 28) {
      $cmp8$i$i$i$i$i = ($cond$i$i$i$i$i98$i>>>0)<($cond$i11$i$i$i$i$i>>>0);
      if ($cmp8$i$i$i$i$i) {
       break;
      }
     }
     $call52$i = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($this,$__parent,$__k)|0);
     $retval$2$i = $call52$i;
     break L1;
    }
   } while(0);
   if ($cmp$i$i$i$i$i25$i) {
    store4($__parent,$__p$0);
    $retval$2$i = $21;
    break;
   } else {
    store4($__parent,$retval$0$i$i$i$i$i$i);
    $retval$2$i = $retval$0$i$i$i$i$i$i;
    break;
   }
  }
 } while(0);
 L35: do {
  if ((label|0) == 6) {
   $7 = load4($this);
   $cmp$i130$i = ($7|0)==($__p$0|0);
   $$pre$i2 = load4($__p$0);
   do {
    if ($cmp$i130$i) {
     $__prior$sroa$0$0$i = $0;
    } else {
     $cmp$i$i$i = ($$pre$i2|0)==(0|0);
     if ($cmp$i$i$i) {
      $__x$addr$0$i$i$i = $__p$0;
      while(1) {
       $__parent_$i$i$i$i = ((($__x$addr$0$i$i$i)) + 8|0);
       $9 = load4($__parent_$i$i$i$i);
       $10 = load4($9);
       $cmp$i4$i$i$i = ($10|0)==($__x$addr$0$i$i$i|0);
       if ($cmp$i4$i$i$i) {
        $__x$addr$0$i$i$i = $9;
       } else {
        $retval$0$i$i$i = $9;
        break;
       }
      }
     } else {
      $__x$addr$0$i$i$i$i = $$pre$i2;
      while(1) {
       $__right_$i$i$i$i = ((($__x$addr$0$i$i$i$i)) + 4|0);
       $8 = load4($__right_$i$i$i$i);
       $cmp$i$i$i126$i = ($8|0)==(0|0);
       if ($cmp$i$i$i126$i) {
        $retval$0$i$i$i = $__x$addr$0$i$i$i$i;
        break;
       } else {
        $__x$addr$0$i$i$i$i = $8;
       }
      }
     }
     $11 = $retval$0$i$i$i;
     $__value_$i125$i = ((($retval$0$i$i$i)) + 16|0);
     $__size_$i$i$i$i$i$i63$i = ((($__value_$i125$i)) + 11|0);
     $12 = load1($__size_$i$i$i$i$i$i63$i);
     $tobool$i$i$i$i$i$i64$i = ($12<<24>>24)<(0);
     $__size_$i3$i$i$i$i$i65$i = ((($retval$0$i$i$i)) + 20|0);
     $13 = load4($__size_$i3$i$i$i$i$i65$i);
     $conv$i$i$i$i$i$i66$i = $12&255;
     $cond$i$i$i$i$i67$i = $tobool$i$i$i$i$i$i64$i ? $13 : $conv$i$i$i$i$i$i66$i;
     $__size_$i$i5$i$i$i$i69$i = ((($__k)) + 11|0);
     $14 = load1($__size_$i$i5$i$i$i$i69$i);
     $tobool$i$i6$i$i$i$i70$i = ($14<<24>>24)<(0);
     $__size_$i3$i7$i$i$i$i71$i = ((($__k)) + 4|0);
     $15 = load4($__size_$i3$i7$i$i$i$i71$i);
     $conv$i$i9$i$i$i$i72$i = $14&255;
     $cond$i11$i$i$i$i73$i = $tobool$i$i6$i$i$i$i70$i ? $15 : $conv$i$i9$i$i$i$i72$i;
     $cmp$i$i$i$i$i$i$i74$i = ($cond$i11$i$i$i$i73$i>>>0)<($cond$i$i$i$i$i67$i>>>0);
     $$sroa$speculated$i$i$i$i75$i = $cmp$i$i$i$i$i$i$i74$i ? $cond$i11$i$i$i$i73$i : $cond$i$i$i$i$i67$i;
     $cmp$i$i$i$i$i76$i = ($$sroa$speculated$i$i$i$i75$i|0)==(0);
     if ($cmp$i$i$i$i$i76$i) {
      label = 12;
     } else {
      $16 = load4($__value_$i125$i);
      $cond$i$i$i$i$i$i79$i = $tobool$i$i$i$i$i$i64$i ? $16 : $__value_$i125$i;
      $17 = load4($__k);
      $cond$i$i22$i$i$i$i82$i = $tobool$i$i6$i$i$i$i70$i ? $17 : $__k;
      $call$i$i$i$i$i83$i = (_memcmp($cond$i$i$i$i$i$i79$i,$cond$i$i22$i$i$i$i82$i,$$sroa$speculated$i$i$i$i75$i)|0);
      $cmp$i$i$i$i84$i = ($call$i$i$i$i$i83$i|0)==(0);
      if ($cmp$i$i$i$i84$i) {
       label = 12;
      } else {
       $cmp$i$i$i91$i = ($call$i$i$i$i$i83$i|0)<(0);
       if ($cmp$i$i$i91$i) {
        $__prior$sroa$0$0$i = $11;
        break;
       }
      }
     }
     if ((label|0) == 12) {
      $cmp8$i$i$i$i86$i = ($cond$i$i$i$i$i67$i>>>0)<($cond$i11$i$i$i$i73$i>>>0);
      if ($cmp8$i$i$i$i86$i) {
       $__prior$sroa$0$0$i = $11;
       break;
      }
     }
     $call22$i = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($this,$__parent,$__k)|0);
     $retval$2$i = $call22$i;
     break L35;
    }
   } while(0);
   $cmp$i4 = ($$pre$i2|0)==(0|0);
   if ($cmp$i4) {
    store4($__parent,$__p$0);
    $retval$2$i = $__p$0;
    break;
   } else {
    $18 = $__prior$sroa$0$0$i;
    store4($__parent,$18);
    $__right_$i5 = ((($18)) + 4|0);
    $retval$2$i = $__right_$i5;
    break;
   }
  }
 } while(0);
 $30 = load4($retval$2$i);
 $cmp = ($30|0)==(0|0);
 if (!($cmp)) {
  STACKTOP = sp;return;
 }
 $call$i$i$i$i = (__Znwj(40)|0);
 $first$i$i$i$i$i = ((($call$i$i$i$i)) + 16|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($first$i$i$i$i$i,$__args);
 $second$i$i$i$i$i = ((($call$i$i$i$i)) + 28|0);
 $second3$i$i$i$i$i = ((($__args)) + 12|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($second$i$i$i$i$i,$second3$i$i$i$i$i);
 $31 = load4($__parent);
 store4($call$i$i$i$i,0);
 $__right_$i = ((($call$i$i$i$i)) + 4|0);
 store4($__right_$i,0);
 $__parent_$i = ((($call$i$i$i$i)) + 8|0);
 store4($__parent_$i,$31);
 store4($retval$2$i,$call$i$i$i$i);
 $32 = load4($this);
 $33 = load4($32);
 $cmp$i = ($33|0)==(0|0);
 if ($cmp$i) {
  $36 = $call$i$i$i$i;
 } else {
  $34 = $33;
  store4($this,$34);
  $$pre$i = load4($retval$2$i);
  $36 = $$pre$i;
 }
 $__left_7$i = ((($this)) + 4|0);
 $35 = load4($__left_7$i);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($35,$36);
 $__first_$i$i$i$i6 = ((($this)) + 8|0);
 $37 = load4($__first_$i$i$i$i6);
 $inc$i = (($37) + 1)|0;
 store4($__first_$i$i$i$i6,$inc$i);
 STACKTOP = sp;return;
}
function __ZN6asmdom5VNodeC2ENSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_9VNodeDataE($this,$nodeSel,$nodeData) {
 $this = $this|0;
 $nodeSel = $nodeSel|0;
 $nodeData = $nodeData|0;
 var $__begin_$i$i = 0, $__end_$i$i = 0, $__end_cap_$i$i = 0, $data = 0, $key = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($this,$nodeSel);
 $key = ((($this)) + 12|0);
 $data = ((($this)) + 36|0);
 ; store8($key,i64_const(0,0),4); store8($key+8|0,i64_const(0,0),4); store8($key+16|0,i64_const(0,0),4);
 store4($data,$nodeData);
 $__begin_$i$i = ((($this)) + 44|0);
 store4($__begin_$i$i,0);
 $__end_$i$i = ((($this)) + 48|0);
 store4($__end_$i$i,0);
 $__end_cap_$i$i = ((($this)) + 52|0);
 store4($__end_cap_$i$i,0);
 __ZN6asmdom5VNode11adjustVNodeEv($this);
 return;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($this,$__parent,$__v) {
 $this = $this|0;
 $__parent = $__parent|0;
 $__v = $__v|0;
 var $$sink = 0, $$sroa$speculated$i$i$i$i = 0, $$sroa$speculated$i$i$i$i30 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__first_$i$i$i$i = 0, $__nd$0 = 0, $__size_$i$i$i$i$i$i18 = 0, $__size_$i$i5$i$i$i$i24 = 0, $__size_$i3$i$i$i$i$i20 = 0, $__size_$i3$i7$i$i$i$i26 = 0;
 var $__value_ = 0, $call$i$i$i$i$i = 0, $call$i$i$i$i$i38 = 0, $cmp = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i29 = 0, $cmp$i$i$i$i$i31 = 0, $cmp$i$i$i$i39 = 0, $cmp$i$i$i46 = 0, $cmp14 = 0, $cmp5 = 0, $cmp8$i$i$i$i41 = 0, $cond$i$i$i$i$i$i = 0, $cond$i$i$i$i$i22 = 0, $cond$i$i22$i$i$i$i = 0, $cond$i$i22$i$i$i$i37 = 0, $cond$i11$i$i$i$i28 = 0;
 var $conv$i$i$i$i$i$i21 = 0, $conv$i$i9$i$i$i$i27 = 0, $retval$0 = 0, $tobool$i$i$i$i$i$i19 = 0, $tobool$i$i6$i$i$i$i25 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__first_$i$i$i$i = ((($this)) + 4|0);
 $0 = load4($__first_$i$i$i$i);
 $cmp = ($0|0)==(0|0);
 if ($cmp) {
  store4($__parent,$__first_$i$i$i$i);
  $retval$0 = $__first_$i$i$i$i;
  return ($retval$0|0);
 }
 $__size_$i$i$i$i$i$i18 = ((($__v)) + 11|0);
 $1 = load1($__size_$i$i$i$i$i$i18);
 $tobool$i$i$i$i$i$i19 = ($1<<24>>24)<(0);
 $__size_$i3$i$i$i$i$i20 = ((($__v)) + 4|0);
 $2 = load4($__size_$i3$i$i$i$i$i20);
 $conv$i$i$i$i$i$i21 = $1&255;
 $cond$i$i$i$i$i22 = $tobool$i$i$i$i$i$i19 ? $2 : $conv$i$i$i$i$i$i21;
 $3 = load4($__v);
 $cond$i$i22$i$i$i$i = $tobool$i$i$i$i$i$i19 ? $3 : $__v;
 $__nd$0 = $0;
 while(1) {
  $__value_ = ((($__nd$0)) + 16|0);
  $__size_$i$i5$i$i$i$i24 = ((($__value_)) + 11|0);
  $4 = load1($__size_$i$i5$i$i$i$i24);
  $tobool$i$i6$i$i$i$i25 = ($4<<24>>24)<(0);
  $__size_$i3$i7$i$i$i$i26 = ((($__nd$0)) + 20|0);
  $5 = load4($__size_$i3$i7$i$i$i$i26);
  $conv$i$i9$i$i$i$i27 = $4&255;
  $cond$i11$i$i$i$i28 = $tobool$i$i6$i$i$i$i25 ? $5 : $conv$i$i9$i$i$i$i27;
  $cmp$i$i$i$i$i$i$i29 = ($cond$i11$i$i$i$i28>>>0)<($cond$i$i$i$i$i22>>>0);
  $$sroa$speculated$i$i$i$i30 = $cmp$i$i$i$i$i$i$i29 ? $cond$i11$i$i$i$i28 : $cond$i$i$i$i$i22;
  $cmp$i$i$i$i$i31 = ($$sroa$speculated$i$i$i$i30|0)==(0);
  if ($cmp$i$i$i$i$i31) {
   label = 5;
  } else {
   $6 = load4($__value_);
   $cond$i$i22$i$i$i$i37 = $tobool$i$i6$i$i$i$i25 ? $6 : $__value_;
   $call$i$i$i$i$i38 = (_memcmp($cond$i$i22$i$i$i$i,$cond$i$i22$i$i$i$i37,$$sroa$speculated$i$i$i$i30)|0);
   $cmp$i$i$i$i39 = ($call$i$i$i$i$i38|0)==(0);
   if ($cmp$i$i$i$i39) {
    label = 5;
   } else {
    $cmp$i$i$i46 = ($call$i$i$i$i$i38|0)<(0);
    if ($cmp$i$i$i46) {
     label = 7;
    } else {
     label = 9;
    }
   }
  }
  if ((label|0) == 5) {
   label = 0;
   $cmp8$i$i$i$i41 = ($cond$i$i$i$i$i22>>>0)<($cond$i11$i$i$i$i28>>>0);
   if ($cmp8$i$i$i$i41) {
    label = 7;
   } else {
    label = 9;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $7 = load4($__nd$0);
   $cmp5 = ($7|0)==(0|0);
   if ($cmp5) {
    label = 8;
    break;
   } else {
    $$sink = $7;
   }
  }
  else if ((label|0) == 9) {
   label = 0;
   $cmp$i$i$i$i$i$i$i = ($cond$i$i$i$i$i22>>>0)<($cond$i11$i$i$i$i28>>>0);
   $$sroa$speculated$i$i$i$i = $cmp$i$i$i$i$i$i$i ? $cond$i$i$i$i$i22 : $cond$i11$i$i$i$i28;
   $cmp$i$i$i$i$i = ($$sroa$speculated$i$i$i$i|0)==(0);
   if ($cmp$i$i$i$i$i) {
    label = 11;
   } else {
    $8 = load4($__value_);
    $cond$i$i$i$i$i$i = $tobool$i$i6$i$i$i$i25 ? $8 : $__value_;
    $call$i$i$i$i$i = (_memcmp($cond$i$i$i$i$i$i,$cond$i$i22$i$i$i$i,$$sroa$speculated$i$i$i$i)|0);
    $cmp$i$i$i$i = ($call$i$i$i$i$i|0)==(0);
    if ($cmp$i$i$i$i) {
     label = 11;
    } else {
     $cmp$i$i$i = ($call$i$i$i$i$i|0)<(0);
     if (!($cmp$i$i$i)) {
      label = 16;
      break;
     }
    }
   }
   if ((label|0) == 11) {
    label = 0;
    if (!($cmp$i$i$i$i$i$i$i29)) {
     label = 16;
     break;
    }
   }
   $9 = ((($__nd$0)) + 4|0);
   $10 = load4($9);
   $cmp14 = ($10|0)==(0|0);
   if ($cmp14) {
    label = 15;
    break;
   } else {
    $$sink = $10;
   }
  }
  $__nd$0 = $$sink;
 }
 if ((label|0) == 8) {
  store4($__parent,$__nd$0);
  $retval$0 = $__nd$0;
  return ($retval$0|0);
 }
 else if ((label|0) == 15) {
  store4($__parent,$__nd$0);
  $retval$0 = $9;
  return ($retval$0|0);
 }
 else if ((label|0) == 16) {
  store4($__parent,$__nd$0);
  $retval$0 = $__parent;
  return ($retval$0|0);
 }
 return (0)|0;
}
function __GLOBAL__sub_I_index_cpp() {
 var $$repack4$i$i$i = 0, $$repack4$i$i$i3 = 0, $$repack4$i$i29$i = 0, $$repack4$i$i37$i = 0, $call$i$i$i = 0, $call$i$i$i1 = 0, $call$i$i2$i = 0, $call$i$i27$i = 0, $call$i$i3$i = 0, $call$i$i35$i = 0, $call$i$i38$i = 0, $call$i$i39$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __embind_register_function((5352|0),2,(1956|0),(4758|0),(1|0),(12|0));
 __embind_register_function((5357|0),3,(1964|0),(4803|0),(6|0),(2|0));
 __embind_register_function((5363|0),3,(1976|0),(4803|0),(7|0),(3|0));
 __embind_register_function((5369|0),3,(1988|0),(4803|0),(8|0),(4|0));
 __embind_register_function((5375|0),3,(2000|0),(4803|0),(9|0),(5|0));
 __embind_register_function((5381|0),3,(2012|0),(4803|0),(10|0),(6|0));
 __embind_register_function((5387|0),4,(2024|0),(2885|0),(2|0),(11|0));
 __embind_register_function((5394|0),4,(2040|0),(2885|0),(3|0),(12|0));
 __embind_register_function((5401|0),4,(2056|0),(2885|0),(4|0),(13|0));
 __embind_register_function((5408|0),4,(2072|0),(2885|0),(5|0),(14|0));
 __embind_register_class((1168|0),(1176|0),(1192|0),(0|0),(4769|0),(13|0),(4772|0),(0|0),(4772|0),(0|0),(4665|0),(4774|0),(23|0));
 __embind_register_class_constructor((1168|0),1,(1916|0),(4769|0),(14|0),(1|0));
 $call$i$i$i = (__Znwj(8)|0);
 store4($call$i$i$i,(15));
 $$repack4$i$i$i = ((($call$i$i$i)) + 4|0);
 store4($$repack4$i$i$i,0);
 __embind_register_class_function((1168|0),(4794|0),2,(1920|0),(4758|0),(7|0),($call$i$i$i|0),0);
 $call$i$i2$i = (__Znwj(4)|0);
 store4($call$i$i2$i,(1));
 __embind_register_class_function((1168|0),(4799|0),3,(1928|0),(4803|0),(15|0),($call$i$i2$i|0),0);
 $call$i$i3$i = (__Znwj(4)|0);
 store4($call$i$i3$i,(2));
 __embind_register_class_function((1168|0),(4808|0),4,(1940|0),(4743|0),(5|0),($call$i$i3$i|0),0);
 __embind_register_class((1080|0),(1104|0),(1120|0),(0|0),(4769|0),(16|0),(4772|0),(0|0),(4772|0),(0|0),(4681|0),(4774|0),(24|0));
 __embind_register_class_constructor((1080|0),1,(1848|0),(4769|0),(17|0),(2|0));
 $call$i$i$i1 = (__Znwj(8)|0);
 store4($call$i$i$i1,(1));
 $$repack4$i$i$i3 = ((($call$i$i$i1)) + 4|0);
 store4($$repack4$i$i$i3,0);
 __embind_register_class_function((1080|0),(4777|0),3,(1852|0),(4725|0),(3|0),($call$i$i$i1|0),0);
 $call$i$i27$i = (__Znwj(8)|0);
 store4($call$i$i27$i,(4));
 $$repack4$i$i29$i = ((($call$i$i27$i)) + 4|0);
 store4($$repack4$i$i29$i,0);
 __embind_register_class_function((1080|0),(4787|0),4,(1864|0),(4743|0),(6|0),($call$i$i27$i|0),0);
 $call$i$i35$i = (__Znwj(8)|0);
 store4($call$i$i35$i,(18));
 $$repack4$i$i37$i = ((($call$i$i35$i)) + 4|0);
 store4($$repack4$i$i37$i,0);
 __embind_register_class_function((1080|0),(4794|0),2,(1880|0),(4758|0),(8|0),($call$i$i35$i|0),0);
 $call$i$i38$i = (__Znwj(4)|0);
 store4($call$i$i38$i,(5));
 __embind_register_class_function((1080|0),(4799|0),3,(1888|0),(4803|0),(16|0),($call$i$i38$i|0),0);
 $call$i$i39$i = (__Znwj(4)|0);
 store4($call$i$i39$i,(17));
 __embind_register_class_function((1080|0),(4808|0),4,(1900|0),(2885|0),(6|0),($call$i$i39$i|0),0);
 __embind_register_function((4696|0),2,(1804|0),(4709|0),(2|0),(25|0));
 __embind_register_function((4713|0),3,(1812|0),(4725|0),(6|0),(3|0));
 __embind_register_function((4730|0),4,(1824|0),(4743|0),(7|0),(7|0));
 __embind_register_function((4749|0),2,(1840|0),(4758|0),(9|0),(19|0));
 __embind_register_function((4762|0),3,(1812|0),(4725|0),(6|0),(4|0));
 return;
}
function __ZN10emscripten8internal7InvokerIvJRKjEE6invokeEPFvS3_Ej($fn,$args) {
 $fn = $fn|0;
 $args = $args|0;
 var $ref$tmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp;
 store4($ref$tmp,$args);
 FUNCTION_TABLE_vi[$fn & 31]($ref$tmp);
 STACKTOP = sp;return;
}
function __Z14deleteVNodePtrRKj($vnodePtr) {
 $vnodePtr = $vnodePtr|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($vnodePtr);
 __ZN6asmdom11deleteVNodeEPNS_5VNodeE($0);
 return;
}
function __ZN10emscripten8internal7InvokerIvJRKjS3_EE6invokeEPFvS3_S3_Ejj($fn,$args,$args1) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $ref$tmp = 0, $ref$tmp3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp + 4|0;
 $ref$tmp3 = sp;
 store4($ref$tmp,$args);
 store4($ref$tmp3,$args1);
 FUNCTION_TABLE_vii[$fn & 7]($ref$tmp,$ref$tmp3);
 STACKTOP = sp;return;
}
function __Z14removeChildPtrRKjS0_($parent,$child) {
 $parent = $parent|0;
 $child = $child|0;
 var $$in$i = 0, $$in$i$i = 0, $$pre$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin_$i$i = 0, $__end_$i10$i = 0;
 var $__new_last3$i$i$i$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $incdec$ptr$i$i$i$i = 0, $incdec$ptr$i19$i$i = 0, $incdec$ptr$i9$i$i = 0, $incdec$ptr$i920$i$i = 0, $lnot$i$i$i = 0, $lnot$i$i$i$i = 0, $lnot$i$i9$i = 0, $lnot$i12$i$i = 0, $lnot$i2$i$i$i = 0, $lnot$i21$i$i = 0, $retval$sroa$0$0$copyload$i$i = 0, $retval$sroa$0$0$copyload23$i$i = 0, $retval$sroa$0$0$copyload24$i$i = 0, $scevgep$i$i$i$i = 0, $scevgep5$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($parent);
 $1 = load4($child);
 $__begin_$i$i = ((($0)) + 44|0);
 $2 = load4($__begin_$i$i);
 $__end_$i10$i = ((($0)) + 48|0);
 $3 = load4($__end_$i10$i);
 $lnot$i2$i$i$i = ($2|0)==($3|0);
 L1: do {
  if ($lnot$i2$i$i$i) {
   $6 = $2;
  } else {
   $5 = $2;
   while(1) {
    $4 = load4($5);
    $cmp$i$i$i = ($4|0)==($1|0);
    if ($cmp$i$i$i) {
     $6 = $5;
     break L1;
    }
    $incdec$ptr$i$i$i$i = ((($5)) + 4|0);
    $lnot$i$i$i$i = ($incdec$ptr$i$i$i$i|0)==($3|0);
    if ($lnot$i$i$i$i) {
     break;
    } else {
     $5 = $incdec$ptr$i$i$i$i;
    }
   }
   return;
  }
 } while(0);
 $lnot$i12$i$i = ($6|0)==($3|0);
 if ($lnot$i12$i$i) {
  return;
 }
 $incdec$ptr$i920$i$i = ((($6)) + 4|0);
 $lnot$i21$i$i = ($incdec$ptr$i920$i$i|0)==($3|0);
 if ($lnot$i21$i$i) {
  $$in$i = $3;$retval$sroa$0$0$copyload$i$i = $6;
 } else {
  $$in$i$i = $incdec$ptr$i920$i$i;$9 = $6;$retval$sroa$0$0$copyload24$i$i = $6;
  while(1) {
   $7 = load4($$in$i$i);
   $cmp$i$i = ($7|0)==($1|0);
   if ($cmp$i$i) {
    $14 = $9;$retval$sroa$0$0$copyload23$i$i = $retval$sroa$0$0$copyload24$i$i;
   } else {
    $8 = $7;
    store4($9,$8);
    $incdec$ptr$i19$i$i = ((($9)) + 4|0);
    $14 = $incdec$ptr$i19$i$i;$retval$sroa$0$0$copyload23$i$i = $incdec$ptr$i19$i$i;
   }
   $incdec$ptr$i9$i$i = ((($$in$i$i)) + 4|0);
   $lnot$i$i9$i = ($incdec$ptr$i9$i$i|0)==($3|0);
   if ($lnot$i$i9$i) {
    break;
   } else {
    $$in$i$i = $incdec$ptr$i9$i$i;$9 = $14;$retval$sroa$0$0$copyload24$i$i = $retval$sroa$0$0$copyload23$i$i;
   }
  }
  $$pre$i = load4($__end_$i10$i);
  $$in$i = $$pre$i;$retval$sroa$0$0$copyload$i$i = $retval$sroa$0$0$copyload23$i$i;
 }
 $lnot$i$i$i = ($retval$sroa$0$0$copyload$i$i|0)==($$in$i|0);
 if ($lnot$i$i$i) {
  return;
 }
 $scevgep$i$i$i$i = ((($$in$i)) + -4|0);
 $10 = $scevgep$i$i$i$i;
 $__new_last3$i$i$i$i = $retval$sroa$0$0$copyload$i$i;
 $11 = (($10) - ($__new_last3$i$i$i$i))|0;
 $12 = $11 >>> 2;
 $13 = $12 ^ -1;
 $scevgep5$i$i$i$i = (($$in$i) + ($13<<2)|0);
 store4($__end_$i10$i,$scevgep5$i$i$i$i);
 return;
}
function __ZN10emscripten8internal7InvokerIvJRKjS3_S3_EE6invokeEPFvS3_S3_S3_Ejjj($fn,$args,$args1,$args3) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 $args3 = $args3|0;
 var $ref$tmp = 0, $ref$tmp5 = 0, $ref$tmp7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp + 8|0;
 $ref$tmp5 = sp + 4|0;
 $ref$tmp7 = sp;
 store4($ref$tmp,$args);
 store4($ref$tmp5,$args1);
 store4($ref$tmp7,$args3);
 FUNCTION_TABLE_viii[$fn & 7]($ref$tmp,$ref$tmp5,$ref$tmp7);
 STACKTOP = sp;return;
}
function __Z15replaceChildPtrRKjS0_S0_($parent,$oldChild,$newChild) {
 $parent = $parent|0;
 $oldChild = $oldChild|0;
 $newChild = $newChild|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $__begin_$i$i = 0, $__end_$i$i = 0, $cmp$i$i = 0, $incdec$ptr$i$i$i = 0, $lnot$i$i$i = 0, $lnot$i3$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($parent);
 $1 = load4($oldChild);
 $2 = load4($newChild);
 $__begin_$i$i = ((($0)) + 44|0);
 $3 = load4($__begin_$i$i);
 $__end_$i$i = ((($0)) + 48|0);
 $4 = load4($__end_$i$i);
 $lnot$i3$i$i = ($3|0)==($4|0);
 if ($lnot$i3$i$i) {
  return;
 } else {
  $6 = $3;
 }
 while(1) {
  $5 = load4($6);
  $cmp$i$i = ($5|0)==($1|0);
  if ($cmp$i$i) {
   store4($6,$2);
  }
  $incdec$ptr$i$i$i = ((($6)) + 4|0);
  $lnot$i$i$i = ($incdec$ptr$i$i$i|0)==($4|0);
  if ($lnot$i$i$i) {
   break;
  } else {
   $6 = $incdec$ptr$i$i$i;
  }
 }
 return;
}
function __ZN10emscripten8internal7InvokerIiJRKjEE6invokeEPFiS3_Ej($fn,$args) {
 $fn = $fn|0;
 $args = $args|0;
 var $call2 = 0, $ref$tmp1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp1 = sp;
 store4($ref$tmp1,$args);
 $call2 = (FUNCTION_TABLE_ii[$fn & 31]($ref$tmp1)|0);
 STACKTOP = sp;return ($call2|0);
}
function __Z7getNodeRKj($vnodePtr) {
 $vnodePtr = $vnodePtr|0;
 var $0 = 0, $1 = 0, $elm = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($vnodePtr);
 $elm = ((($0)) + 40|0);
 $1 = load4($elm);
 return ($1|0);
}
function __Z8patchPtrRKjS0_($oldVnode,$vnode) {
 $oldVnode = $oldVnode|0;
 $vnode = $vnode|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $call$i = 0, $call2$i = 0, $call7$i = 0, $call9$i = 0, $cmp$i = 0, $elm$i = 0, $elm5$i = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($oldVnode);
 $1 = load4($vnode);
 $cmp$i = ($0|0)==($1|0);
 if ($cmp$i) {
  return;
 }
 store4(10696,$1);
 $call$i = (__ZN6asmdom9sameVNodeEPKNS_5VNodeES2_($0,$1)|0);
 if ($call$i) {
  __ZN6asmdom10patchVNodeEPNS_5VNodeES1_($0,$1);
  return;
 }
 $elm$i = ((($0)) + 40|0);
 $2 = load4($elm$i);
 $call2$i = _emscripten_asm_const_ii(15, ($2|0))|0;
 (__ZN6asmdom9createElmEPNS_5VNodeE($1)|0);
 $tobool$i = ($call2$i|0)==(0);
 if ($tobool$i) {
  return;
 }
 $elm5$i = ((($1)) + 40|0);
 $3 = load4($elm5$i);
 $4 = load4($elm$i);
 $call7$i = _emscripten_asm_const_iiii(9, ($call2$i|0), ($3|0), ($4|0))|0;
 $5 = load4($elm$i);
 $call9$i = _emscripten_asm_const_ii(12, ($5|0))|0;
 return;
}
function __ZN10emscripten8internal13getActualTypeINSt3__26vectorIjNS2_9allocatorIjEEEEEEPKvPT_($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1080|0);
}
function __ZN10emscripten8internal14raw_destructorINSt3__26vectorIjNS2_9allocatorIjEEEEEEvPT_($ptr) {
 $ptr = $ptr|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $__end_$i$i$i = 0, $cmp$i = 0, $cmp1$i$i$i = 0, $isnull = 0, $scevgep$i$i$i = 0, $scevgep5$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $isnull = ($ptr|0)==(0|0);
 if ($isnull) {
  return;
 }
 $0 = load4($ptr);
 $cmp$i = ($0|0)==(0|0);
 if (!($cmp$i)) {
  $__end_$i$i$i = ((($ptr)) + 4|0);
  $1 = load4($__end_$i$i$i);
  $cmp1$i$i$i = ($1|0)==($0|0);
  if (!($cmp1$i$i$i)) {
   $scevgep$i$i$i = ((($1)) + -4|0);
   $2 = $scevgep$i$i$i;
   $3 = $0;
   $4 = (($2) - ($3))|0;
   $5 = $4 >>> 2;
   $6 = $5 ^ -1;
   $scevgep5$i$i$i = (($1) + ($6<<2)|0);
   store4($__end_$i$i$i,$scevgep5$i$i$i);
  }
  __ZdlPv($0);
 }
 __ZdlPv($ptr);
 return;
}
function __ZN10emscripten8internal7InvokerIPNSt3__26vectorIjNS2_9allocatorIjEEEEJEE6invokeEPFS7_vE($fn) {
 $fn = $fn|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (FUNCTION_TABLE_i[$fn & 3]()|0);
 return ($call|0);
}
function __ZN10emscripten8internal12operator_newINSt3__26vectorIjNS2_9allocatorIjEEEEJEEEPT_DpOT0_() {
 var $__end_$i$i = 0, $__end_cap_$i$i = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__Znwj(12)|0);
 store4($call,0);
 $__end_$i$i = ((($call)) + 4|0);
 store4($__end_$i$i,0);
 $__end_cap_$i$i = ((($call)) + 8|0);
 store4($__end_cap_$i$i,0);
 return ($call|0);
}
function __ZNSt3__26vectorIjNS_9allocatorIjEEE9push_backERKj($this,$__x) {
 $this = $this|0;
 $__x = $__x|0;
 var $$sroa$speculated$$i$i = 0, $$sroa$speculated$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__end_ = 0, $__first_$i$i$i = 0, $add$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr5$i$i = 0;
 var $call$i$i$i$i$i = 0, $cmp = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i22$i = 0, $cmp3$i$i = 0, $cond$i$i = 0, $exception$i$i$i$i = 0, $idx$neg$i$i$i = 0, $incdec$ptr = 0, $incdec$ptr$i = 0, $mul$i$i = 0, $mul$i$i$i$i = 0, $sub$ptr$div$i$i = 0, $sub$ptr$div$i$i$i$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i$i$i$i = 0, $tobool$i12$i = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $__end_ = ((($this)) + 4|0);
 $0 = load4($__end_);
 $__first_$i$i$i = ((($this)) + 8|0);
 $1 = load4($__first_$i$i$i);
 $cmp = ($0|0)==($1|0);
 $2 = $1;
 if (!($cmp)) {
  $3 = load4($__x);
  store4($0,$3);
  $incdec$ptr = ((($0)) + 4|0);
  store4($__end_,$incdec$ptr);
  return;
 }
 $4 = $0;
 $5 = load4($this);
 $sub$ptr$sub$i$i = (($4) - ($5))|0;
 $sub$ptr$div$i$i = $sub$ptr$sub$i$i >> 2;
 $add$i = (($sub$ptr$div$i$i) + 1)|0;
 $cmp$i$i = ($add$i>>>0)>(1073741823);
 if ($cmp$i$i) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $sub$ptr$sub$i$i$i$i = (($2) - ($5))|0;
 $sub$ptr$div$i$i$i$i = $sub$ptr$sub$i$i$i$i >> 2;
 $cmp3$i$i = ($sub$ptr$div$i$i$i$i>>>0)<(536870911);
 $mul$i$i = $sub$ptr$sub$i$i$i$i >> 1;
 $cmp$i$i$i$i$i = ($mul$i$i>>>0)<($add$i>>>0);
 $$sroa$speculated$i$i = $cmp$i$i$i$i$i ? $add$i : $mul$i$i;
 $$sroa$speculated$$i$i = $cmp3$i$i ? $$sroa$speculated$i$i : 1073741823;
 $cmp$i22$i = ($$sroa$speculated$$i$i|0)==(0);
 do {
  if ($cmp$i22$i) {
   $cond$i$i = 0;
  } else {
   $cmp$i$i$i$i = ($$sroa$speculated$$i$i>>>0)>(1073741823);
   if ($cmp$i$i$i$i) {
    $exception$i$i$i$i = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($exception$i$i$i$i);
    ___cxa_throw(($exception$i$i$i$i|0),(1512|0),(12|0));
    // unreachable;
   } else {
    $mul$i$i$i$i = $$sroa$speculated$$i$i << 2;
    $call$i$i$i$i$i = (__Znwj($mul$i$i$i$i)|0);
    $cond$i$i = $call$i$i$i$i$i;
    break;
   }
  }
 } while(0);
 $add$ptr$i$i = (($cond$i$i) + ($sub$ptr$div$i$i<<2)|0);
 $add$ptr5$i$i = (($cond$i$i) + ($$sroa$speculated$$i$i<<2)|0);
 $6 = $add$ptr5$i$i;
 $7 = load4($__x);
 store4($add$ptr$i$i,$7);
 $incdec$ptr$i = ((($add$ptr$i$i)) + 4|0);
 $8 = $incdec$ptr$i;
 $idx$neg$i$i$i = (0 - ($sub$ptr$div$i$i))|0;
 $add$ptr$i$i$i = (($add$ptr$i$i) + ($idx$neg$i$i$i<<2)|0);
 $9 = $add$ptr$i$i$i;
 $cmp$i$i$i = ($sub$ptr$sub$i$i|0)>(0);
 if ($cmp$i$i$i) {
  $10 = $5;
  _memcpy(($add$ptr$i$i$i|0),($10|0),($sub$ptr$sub$i$i|0))|0;
 }
 store4($this,$9);
 store4($__end_,$8);
 store4($__first_$i$i$i,$6);
 $tobool$i12$i = ($5|0)==(0);
 if ($tobool$i12$i) {
  return;
 }
 $11 = $5;
 __ZdlPv($11);
 return;
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvRKjEvPS6_JS8_EE6invokeERKSA_SB_j($method,$wireThis,$args) {
 $method = $method|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 var $$elt1 = 0, $$unpack = 0, $$unpack2 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $ref$tmp = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp;
 $$unpack = load4($method);
 $$elt1 = ((($method)) + 4|0);
 $$unpack2 = load4($$elt1);
 $memptr$adj$shifted = $$unpack2 >> 1;
 $0 = (($wireThis) + ($memptr$adj$shifted)|0);
 $1 = $$unpack2 & 1;
 $memptr$isvirtual = ($1|0)==(0);
 if ($memptr$isvirtual) {
  $memptr$nonvirtualfn = $$unpack;
  $3 = $memptr$nonvirtualfn;
 } else {
  $vtable = load4($0);
  $2 = (($vtable) + ($$unpack)|0);
  $memptr$virtualfn = load4($2);
  $3 = $memptr$virtualfn;
 }
 store4($ref$tmp,$args);
 FUNCTION_TABLE_vii[$3 & 7]($0,$ref$tmp);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIjNS_9allocatorIjEEE6resizeEjRKj($this,$__sz,$__x) {
 $this = $this|0;
 $__sz = $__sz|0;
 $__x = $__x|0;
 var $$sroa$speculated$$i$i = 0, $$sroa$speculated$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $__end_$i = 0, $__first_$i$i$i$i = 0, $__n$addr$0$i$i = 0, $__n$addr$0$i22$i = 0, $__new_last3$i$i = 0, $add$ptr = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr5$i$i = 0, $call$i$i$i$i$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i25$i = 0, $cmp$i29$i = 0, $cmp$i35$i = 0, $cmp1$i$i = 0;
 var $cmp2 = 0, $cmp3$i$i = 0, $cond$i$i = 0, $dec$i$i = 0, $dec$i24$i = 0, $exception$i$i$i$i = 0, $idx$neg$i$i$i = 0, $incdec$ptr$i$i = 0, $incdec$ptr$i23$i = 0, $mul$i$i = 0, $mul$i$i$i$i = 0, $scevgep$i$i = 0, $scevgep$i$i4 = 0, $scevgep$i27$i = 0, $scevgep5$i$i = 0, $sub = 0, $sub$ptr$div$i = 0, $sub$ptr$div$i$i$i$i = 0, $sub$ptr$div$i3 = 0, $sub$ptr$sub$i = 0;
 var $sub$ptr$sub$i$i$i$i = 0, $sub$ptr$sub$i2 = 0, $tobool$i15$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__end_$i = ((($this)) + 4|0);
 $0 = load4($__end_$i);
 $1 = load4($this);
 $sub$ptr$sub$i = (($0) - ($1))|0;
 $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
 $cmp = ($sub$ptr$div$i>>>0)<($__sz>>>0);
 $2 = $1;
 $3 = $0;
 if (!($cmp)) {
  $cmp2 = ($sub$ptr$div$i>>>0)>($__sz>>>0);
  if (!($cmp2)) {
   return;
  }
  $add$ptr = (($2) + ($__sz<<2)|0);
  $cmp1$i$i = ($3|0)==($add$ptr|0);
  if ($cmp1$i$i) {
   return;
  }
  $scevgep$i$i = ((($3)) + -4|0);
  $14 = $scevgep$i$i;
  $__new_last3$i$i = $add$ptr;
  $15 = (($14) - ($__new_last3$i$i))|0;
  $16 = $15 >>> 2;
  $17 = $16 ^ -1;
  $scevgep5$i$i = (($3) + ($17<<2)|0);
  store4($__end_$i,$scevgep5$i$i);
  return;
 }
 $sub = (($__sz) - ($sub$ptr$div$i))|0;
 $__first_$i$i$i$i = ((($this)) + 8|0);
 $4 = load4($__first_$i$i$i$i);
 $sub$ptr$sub$i2 = (($4) - ($0))|0;
 $sub$ptr$div$i3 = $sub$ptr$sub$i2 >> 2;
 $cmp$i = ($sub$ptr$div$i3>>>0)<($sub>>>0);
 if (!($cmp$i)) {
  $6 = $3;$__n$addr$0$i$i = $sub;
  while(1) {
   $5 = load4($__x);
   store4($6,$5);
   $incdec$ptr$i$i = ((($6)) + 4|0);
   $dec$i$i = (($__n$addr$0$i$i) + -1)|0;
   $cmp$i$i = ($dec$i$i|0)==(0);
   if ($cmp$i$i) {
    break;
   } else {
    $6 = $incdec$ptr$i$i;$__n$addr$0$i$i = $dec$i$i;
   }
  }
  $scevgep$i$i4 = (($3) + ($sub<<2)|0);
  store4($__end_$i,$scevgep$i$i4);
  return;
 }
 $cmp$i35$i = ($__sz>>>0)>(1073741823);
 if ($cmp$i35$i) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $sub$ptr$sub$i$i$i$i = (($4) - ($1))|0;
 $sub$ptr$div$i$i$i$i = $sub$ptr$sub$i$i$i$i >> 2;
 $cmp3$i$i = ($sub$ptr$div$i$i$i$i>>>0)<(536870911);
 $mul$i$i = $sub$ptr$sub$i$i$i$i >> 1;
 $cmp$i$i$i$i$i = ($mul$i$i>>>0)<($__sz>>>0);
 $$sroa$speculated$i$i = $cmp$i$i$i$i$i ? $__sz : $mul$i$i;
 $$sroa$speculated$$i$i = $cmp3$i$i ? $$sroa$speculated$i$i : 1073741823;
 $cmp$i29$i = ($$sroa$speculated$$i$i|0)==(0);
 do {
  if ($cmp$i29$i) {
   $cond$i$i = 0;
  } else {
   $cmp$i$i$i$i = ($$sroa$speculated$$i$i>>>0)>(1073741823);
   if ($cmp$i$i$i$i) {
    $exception$i$i$i$i = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($exception$i$i$i$i);
    ___cxa_throw(($exception$i$i$i$i|0),(1512|0),(12|0));
    // unreachable;
   } else {
    $mul$i$i$i$i = $$sroa$speculated$$i$i << 2;
    $call$i$i$i$i$i = (__Znwj($mul$i$i$i$i)|0);
    $cond$i$i = $call$i$i$i$i$i;
    break;
   }
  }
 } while(0);
 $add$ptr$i$i = (($cond$i$i) + ($sub$ptr$div$i<<2)|0);
 $8 = $add$ptr$i$i;$__n$addr$0$i22$i = $sub;
 while(1) {
  $7 = load4($__x);
  store4($8,$7);
  $incdec$ptr$i23$i = ((($8)) + 4|0);
  $dec$i24$i = (($__n$addr$0$i22$i) + -1)|0;
  $cmp$i25$i = ($dec$i24$i|0)==(0);
  if ($cmp$i25$i) {
   break;
  } else {
   $8 = $incdec$ptr$i23$i;$__n$addr$0$i22$i = $dec$i24$i;
  }
 }
 $add$ptr5$i$i = (($cond$i$i) + ($$sroa$speculated$$i$i<<2)|0);
 $9 = $add$ptr5$i$i;
 $scevgep$i27$i = (($add$ptr$i$i) + ($sub<<2)|0);
 $10 = $scevgep$i27$i;
 $idx$neg$i$i$i = (0 - ($sub$ptr$div$i))|0;
 $add$ptr$i$i$i = (($add$ptr$i$i) + ($idx$neg$i$i$i<<2)|0);
 $11 = $add$ptr$i$i$i;
 $cmp$i$i$i = ($sub$ptr$sub$i|0)>(0);
 if ($cmp$i$i$i) {
  $12 = $1;
  _memcpy(($add$ptr$i$i$i|0),($12|0),($sub$ptr$sub$i|0))|0;
 }
 store4($this,$11);
 store4($__end_$i,$10);
 store4($__first_$i$i$i$i,$9);
 $tobool$i15$i = ($1|0)==(0);
 if ($tobool$i15$i) {
  return;
 }
 $13 = $1;
 __ZdlPv($13);
 return;
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvjRKjEvPS6_JjS8_EE6invokeERKSA_SB_jj($method,$wireThis,$args,$args1) {
 $method = $method|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $$elt1 = 0, $$unpack = 0, $$unpack2 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $ref$tmp = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp;
 $$unpack = load4($method);
 $$elt1 = ((($method)) + 4|0);
 $$unpack2 = load4($$elt1);
 $memptr$adj$shifted = $$unpack2 >> 1;
 $0 = (($wireThis) + ($memptr$adj$shifted)|0);
 $1 = $$unpack2 & 1;
 $memptr$isvirtual = ($1|0)==(0);
 if ($memptr$isvirtual) {
  $memptr$nonvirtualfn = $$unpack;
  $3 = $memptr$nonvirtualfn;
 } else {
  $vtable = load4($0);
  $2 = (($vtable) + ($$unpack)|0);
  $memptr$virtualfn = load4($2);
  $3 = $memptr$virtualfn;
 }
 store4($ref$tmp,$args1);
 FUNCTION_TABLE_viii[$3 & 7]($0,$args,$ref$tmp);
 STACKTOP = sp;return;
}
function __ZNKSt3__26vectorIjNS_9allocatorIjEEE4sizeEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $__end_ = 0, $sub$ptr$div = 0, $sub$ptr$sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__end_ = ((($this)) + 4|0);
 $0 = load4($__end_);
 $1 = load4($this);
 $sub$ptr$sub = (($0) - ($1))|0;
 $sub$ptr$div = $sub$ptr$sub >> 2;
 return ($sub$ptr$div|0);
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEKFjvEjPKS6_JEE6invokeERKS8_SA_($method,$wireThis) {
 $method = $method|0;
 $wireThis = $wireThis|0;
 var $$elt1 = 0, $$unpack = 0, $$unpack2 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $call1 = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$unpack = load4($method);
 $$elt1 = ((($method)) + 4|0);
 $$unpack2 = load4($$elt1);
 $memptr$adj$shifted = $$unpack2 >> 1;
 $0 = (($wireThis) + ($memptr$adj$shifted)|0);
 $1 = $$unpack2 & 1;
 $memptr$isvirtual = ($1|0)==(0);
 if ($memptr$isvirtual) {
  $memptr$nonvirtualfn = $$unpack;
  $3 = $memptr$nonvirtualfn;
  $call1 = (FUNCTION_TABLE_ii[$3 & 31]($0)|0);
  return ($call1|0);
 } else {
  $vtable = load4($0);
  $2 = (($vtable) + ($$unpack)|0);
  $memptr$virtualfn = load4($2);
  $3 = $memptr$virtualfn;
  $call1 = (FUNCTION_TABLE_ii[$3 & 31]($0)|0);
  return ($call1|0);
 }
 return (0)|0;
}
function __ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3getERKS6_j($agg$result,$v,$index) {
 $agg$result = $agg$result|0;
 $v = $v|0;
 $index = $index|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $__end_$i = 0, $argv$i = 0, $arrayidx$i = 0, $call4$i = 0, $call4$i$sink = 0, $cmp = 0, $sub$ptr$div$i = 0, $sub$ptr$sub$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $argv$i = sp;
 $__end_$i = ((($v)) + 4|0);
 $0 = load4($__end_$i);
 $1 = load4($v);
 $sub$ptr$sub$i = (($0) - ($1))|0;
 $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
 $cmp = ($sub$ptr$div$i>>>0)>($index>>>0);
 if (!($cmp)) {
  $call4$i$sink = (1);
  store4($agg$result,$call4$i$sink);
  STACKTOP = sp;return;
 }
 $2 = $1;
 $arrayidx$i = (($2) + ($index<<2)|0);
 $3 = load4($arrayidx$i);
 store4($argv$i,$3);
 $call4$i = (__emval_take_value((1712|0),($argv$i|0))|0);
 $call4$i$sink = $call4$i;
 store4($agg$result,$call4$i$sink);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorIjNS3_9allocatorIjEEEEjES2_S9_JjEE6invokeEPSB_PS7_j($function,$wireThis,$args) {
 $function = $function|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 var $0 = 0, $1 = 0, $2 = 0, $ref$tmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp;
 $0 = load4($function);
 FUNCTION_TABLE_viii[$0 & 7]($ref$tmp,$wireThis,$args);
 $1 = load4($ref$tmp);
 __emval_incref(($1|0));
 $2 = load4($ref$tmp);
 __emval_decref(($2|0));
 STACKTOP = sp;return ($2|0);
}
function __ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3setERS6_jRKj($v,$index,$value) {
 $v = $v|0;
 $index = $index|0;
 $value = $value|0;
 var $0 = 0, $1 = 0, $arrayidx$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($value);
 $1 = load4($v);
 $arrayidx$i = (($1) + ($index<<2)|0);
 store4($arrayidx$i,$0);
 return 1;
}
function __ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorIjNS2_9allocatorIjEEEEjRKjEbS7_JjS9_EE6invokeEPSB_PS6_jj($function,$wireThis,$args,$args1) {
 $function = $function|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $call5 = 0, $ref$tmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp;
 $0 = load4($function);
 store4($ref$tmp,$args1);
 $call5 = (FUNCTION_TABLE_iiii[$0 & 31]($wireThis,$args,$ref$tmp)|0);
 STACKTOP = sp;return ($call5|0);
}
function __ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEPKvPT_($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1168|0);
}
function __ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEvPT_($ptr) {
 $ptr = $ptr|0;
 var $0 = 0, $__first_$i$i$i$i$i$i = 0, $isnull = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $isnull = ($ptr|0)==(0|0);
 if ($isnull) {
  return;
 }
 $__first_$i$i$i$i$i$i = ((($ptr)) + 4|0);
 $0 = load4($__first_$i$i$i$i$i$i);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($0);
 __ZdlPv($ptr);
 return;
}
function __ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEE6invokeEPFSH_vE($fn) {
 $fn = $fn|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (FUNCTION_TABLE_i[$fn & 3]()|0);
 return ($call|0);
}
function __ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEEEPT_DpOT0_() {
 var $__first_$i$i$i$i = 0, $__left_$i$i$i$i$i = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__Znwj(12)|0);
 $__left_$i$i$i$i$i = ((($call)) + 4|0);
 store4($__left_$i$i$i$i$i,0);
 $__first_$i$i$i$i = ((($call)) + 8|0);
 store4($__first_$i$i$i$i,0);
 store4($call,$__left_$i$i$i$i$i);
 return ($call|0);
}
function __ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE4sizeEv($this) {
 $this = $this|0;
 var $0 = 0, $__first_$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__first_$i$i$i = ((($this)) + 8|0);
 $0 = load4($__first_$i$i$i);
 return ($0|0);
}
function __ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_($method,$wireThis) {
 $method = $method|0;
 $wireThis = $wireThis|0;
 var $$elt1 = 0, $$unpack = 0, $$unpack2 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $call1 = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$unpack = load4($method);
 $$elt1 = ((($method)) + 4|0);
 $$unpack2 = load4($$elt1);
 $memptr$adj$shifted = $$unpack2 >> 1;
 $0 = (($wireThis) + ($memptr$adj$shifted)|0);
 $1 = $$unpack2 & 1;
 $memptr$isvirtual = ($1|0)==(0);
 if ($memptr$isvirtual) {
  $memptr$nonvirtualfn = $$unpack;
  $3 = $memptr$nonvirtualfn;
  $call1 = (FUNCTION_TABLE_ii[$3 & 31]($0)|0);
  return ($call1|0);
 } else {
  $vtable = load4($0);
  $2 = (($vtable) + ($$unpack)|0);
  $memptr$virtualfn = load4($2);
  $3 = $memptr$virtualfn;
  $call1 = (FUNCTION_TABLE_ii[$3 & 31]($0)|0);
  return ($call1|0);
 }
 return (0)|0;
}
function __ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3getERKSG_RSD_($agg$result,$m,$k) {
 $agg$result = $agg$result|0;
 $m = $m|0;
 $k = $k|0;
 var $$sink = 0, $$sroa$speculated$i$i$i$i$i = 0, $$sroa$speculated$i$i$i$i$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__first_$i$i$i$i$i1 = 0;
 var $__result$addr$0$ph$lcssa$i$i = 0, $__result$addr$0$ph14$i$i = 0, $__root$addr$0$ph13$i$i = 0, $__root$addr$09$i$i = 0, $__size_$i$i$i$i$i$i$i = 0, $__size_$i$i$i$i$i$i$i$i = 0, $__size_$i$i5$i$i$i$i$i = 0, $__size_$i$i5$i$i$i$i$i$i = 0, $__size_$i3$i$i$i$i$i$i = 0, $__size_$i3$i$i$i$i$i$i$i = 0, $__size_$i3$i7$i$i$i$i$i = 0, $__size_$i3$i7$i$i$i$i$i$i = 0, $__value_$i$i = 0, $__value_$i4$i = 0, $add$i$i$i$i = 0, $argv$i = 0, $call$i$i$i$i$i$i = 0, $call$i$i$i$i$i$i$i = 0, $call1$i$i$i$i = 0, $call4$i = 0;
 var $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i$i6$i = 0, $cmp$i$i$i$i7$i = 0, $cmp$i$i2 = 0, $cmp8$i$i = 0, $cmp8$i$i$i$i$i = 0, $cmp8$i$i$i$i$i$i = 0, $cmp812$i$i = 0, $cond$i$i$i$i$i$i = 0, $cond$i$i$i$i$i$i$i$i = 0, $cond$i$i$i$i$i$i5$i = 0, $cond$i$i21$i$i$i$i = 0, $cond$i$i22$i$i$i$i$i = 0, $cond$i$i22$i$i$i$i$i$i = 0, $cond$i11$i$i$i$i$i = 0;
 var $cond$i11$i$i$i$i$i$i = 0, $conv$i$i$i$i$i$i$i = 0, $conv$i$i$i$i$i$i$i$i = 0, $conv$i$i9$i$i$i$i$i = 0, $conv$i$i9$i$i$i$i$i$i = 0, $data$i$i$i$i = 0, $lnot$i$i = 0, $second = 0, $tobool$i$i$i$i$i$i$i = 0, $tobool$i$i$i$i$i$i$i$i = 0, $tobool$i$i6$i$i$i$i$i = 0, $tobool$i$i6$i$i$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $argv$i = sp;
 $__first_$i$i$i$i$i1 = ((($m)) + 4|0);
 $0 = load4($__first_$i$i$i$i$i1);
 $cmp812$i$i = ($0|0)==(0|0);
 if ($cmp812$i$i) {
  $$sink = (1);
  store4($agg$result,$$sink);
  STACKTOP = sp;return;
 }
 $__size_$i$i5$i$i$i$i$i$i = ((($k)) + 11|0);
 $1 = load1($__size_$i$i5$i$i$i$i$i$i);
 $tobool$i$i6$i$i$i$i$i$i = ($1<<24>>24)<(0);
 $__size_$i3$i7$i$i$i$i$i$i = ((($k)) + 4|0);
 $2 = load4($__size_$i3$i7$i$i$i$i$i$i);
 $conv$i$i9$i$i$i$i$i$i = $1&255;
 $cond$i11$i$i$i$i$i$i = $tobool$i$i6$i$i$i$i$i$i ? $2 : $conv$i$i9$i$i$i$i$i$i;
 $3 = load4($k);
 $cond$i$i22$i$i$i$i$i$i = $tobool$i$i6$i$i$i$i$i$i ? $3 : $k;
 $__result$addr$0$ph14$i$i = $__first_$i$i$i$i$i1;$__root$addr$0$ph13$i$i = $0;
 L4: while(1) {
  $__root$addr$09$i$i = $__root$addr$0$ph13$i$i;
  while(1) {
   $__value_$i4$i = ((($__root$addr$09$i$i)) + 16|0);
   $__size_$i$i$i$i$i$i$i$i = ((($__value_$i4$i)) + 11|0);
   $4 = load1($__size_$i$i$i$i$i$i$i$i);
   $tobool$i$i$i$i$i$i$i$i = ($4<<24>>24)<(0);
   $__size_$i3$i$i$i$i$i$i$i = ((($__root$addr$09$i$i)) + 20|0);
   $5 = load4($__size_$i3$i$i$i$i$i$i$i);
   $conv$i$i$i$i$i$i$i$i = $4&255;
   $cond$i$i$i$i$i$i5$i = $tobool$i$i$i$i$i$i$i$i ? $5 : $conv$i$i$i$i$i$i$i$i;
   $cmp$i$i$i$i$i$i$i$i$i = ($cond$i11$i$i$i$i$i$i>>>0)<($cond$i$i$i$i$i$i5$i>>>0);
   $$sroa$speculated$i$i$i$i$i$i = $cmp$i$i$i$i$i$i$i$i$i ? $cond$i11$i$i$i$i$i$i : $cond$i$i$i$i$i$i5$i;
   $cmp$i$i$i$i$i$i$i = ($$sroa$speculated$i$i$i$i$i$i|0)==(0);
   if ($cmp$i$i$i$i$i$i$i) {
    label = 6;
   } else {
    $6 = load4($__value_$i4$i);
    $cond$i$i$i$i$i$i$i$i = $tobool$i$i$i$i$i$i$i$i ? $6 : $__value_$i4$i;
    $call$i$i$i$i$i$i$i = (_memcmp($cond$i$i$i$i$i$i$i$i,$cond$i$i22$i$i$i$i$i$i,$$sroa$speculated$i$i$i$i$i$i)|0);
    $cmp$i$i$i$i$i6$i = ($call$i$i$i$i$i$i$i|0)==(0);
    if ($cmp$i$i$i$i$i6$i) {
     label = 6;
    } else {
     $cmp$i$i$i$i7$i = ($call$i$i$i$i$i$i$i|0)<(0);
     if (!($cmp$i$i$i$i7$i)) {
      break;
     }
    }
   }
   if ((label|0) == 6) {
    label = 0;
    $cmp8$i$i$i$i$i$i = ($cond$i$i$i$i$i$i5$i>>>0)<($cond$i11$i$i$i$i$i$i>>>0);
    if (!($cmp8$i$i$i$i$i$i)) {
     break;
    }
   }
   $8 = ((($__root$addr$09$i$i)) + 4|0);
   $9 = load4($8);
   $cmp$i$i2 = ($9|0)==(0|0);
   if ($cmp$i$i2) {
    $__result$addr$0$ph$lcssa$i$i = $__result$addr$0$ph14$i$i;
    break L4;
   } else {
    $__root$addr$09$i$i = $9;
   }
  }
  $7 = load4($__root$addr$09$i$i);
  $cmp8$i$i = ($7|0)==(0|0);
  if ($cmp8$i$i) {
   $__result$addr$0$ph$lcssa$i$i = $__root$addr$09$i$i;
   break;
  } else {
   $__result$addr$0$ph14$i$i = $__root$addr$09$i$i;$__root$addr$0$ph13$i$i = $7;
  }
 }
 $lnot$i$i = ($__result$addr$0$ph$lcssa$i$i|0)==($__first_$i$i$i$i$i1|0);
 if ($lnot$i$i) {
  $$sink = (1);
  store4($agg$result,$$sink);
  STACKTOP = sp;return;
 }
 $__value_$i$i = ((($__result$addr$0$ph$lcssa$i$i)) + 16|0);
 $__size_$i$i5$i$i$i$i$i = ((($__value_$i$i)) + 11|0);
 $10 = load1($__size_$i$i5$i$i$i$i$i);
 $tobool$i$i6$i$i$i$i$i = ($10<<24>>24)<(0);
 $__size_$i3$i7$i$i$i$i$i = ((($__result$addr$0$ph$lcssa$i$i)) + 20|0);
 $11 = load4($__size_$i3$i7$i$i$i$i$i);
 $conv$i$i9$i$i$i$i$i = $10&255;
 $cond$i11$i$i$i$i$i = $tobool$i$i6$i$i$i$i$i ? $11 : $conv$i$i9$i$i$i$i$i;
 $cmp$i$i$i$i$i$i$i$i = ($cond$i11$i$i$i$i$i>>>0)<($cond$i11$i$i$i$i$i$i>>>0);
 $$sroa$speculated$i$i$i$i$i = $cmp$i$i$i$i$i$i$i$i ? $cond$i11$i$i$i$i$i : $cond$i11$i$i$i$i$i$i;
 $cmp$i$i$i$i$i$i = ($$sroa$speculated$i$i$i$i$i|0)==(0);
 if ($cmp$i$i$i$i$i$i) {
  label = 13;
 } else {
  $12 = load4($__value_$i$i);
  $cond$i$i22$i$i$i$i$i = $tobool$i$i6$i$i$i$i$i ? $12 : $__value_$i$i;
  $call$i$i$i$i$i$i = (_memcmp($cond$i$i22$i$i$i$i$i$i,$cond$i$i22$i$i$i$i$i,$$sroa$speculated$i$i$i$i$i)|0);
  $cmp$i$i$i$i$i = ($call$i$i$i$i$i$i|0)==(0);
  if ($cmp$i$i$i$i$i) {
   label = 13;
  } else {
   $cmp$i$i$i$i = ($call$i$i$i$i$i$i|0)<(0);
   if ($cmp$i$i$i$i) {
    $$sink = (1);
    store4($agg$result,$$sink);
    STACKTOP = sp;return;
   }
  }
 }
 if ((label|0) == 13) {
  $cmp8$i$i$i$i$i = ($cond$i11$i$i$i$i$i$i>>>0)<($cond$i11$i$i$i$i$i>>>0);
  if ($cmp8$i$i$i$i$i) {
   $$sink = (1);
   store4($agg$result,$$sink);
   STACKTOP = sp;return;
  }
 }
 $second = ((($__result$addr$0$ph$lcssa$i$i)) + 28|0);
 $__size_$i$i$i$i$i$i$i = ((($second)) + 11|0);
 $13 = load1($__size_$i$i$i$i$i$i$i);
 $tobool$i$i$i$i$i$i$i = ($13<<24>>24)<(0);
 $__size_$i3$i$i$i$i$i$i = ((($__result$addr$0$ph$lcssa$i$i)) + 32|0);
 $14 = load4($__size_$i3$i$i$i$i$i$i);
 $conv$i$i$i$i$i$i$i = $13&255;
 $cond$i$i$i$i$i$i = $tobool$i$i$i$i$i$i$i ? $14 : $conv$i$i$i$i$i$i$i;
 $add$i$i$i$i = (($cond$i$i$i$i$i$i) + 4)|0;
 $call1$i$i$i$i = (_malloc($add$i$i$i$i)|0);
 store4($call1$i$i$i$i,$cond$i$i$i$i$i$i);
 $data$i$i$i$i = ((($call1$i$i$i$i)) + 4|0);
 $15 = load4($second);
 $cond$i$i21$i$i$i$i = $tobool$i$i$i$i$i$i$i ? $15 : $second;
 _memcpy(($data$i$i$i$i|0),($cond$i$i21$i$i$i$i|0),($cond$i$i$i$i$i$i|0))|0;
 store4($argv$i,$call1$i$i$i$i);
 $call4$i = (__emval_take_value((1048|0),($argv$i|0))|0);
 $$sink = $call4$i;
 store4($agg$result,$$sink);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E($function,$wireThis,$args) {
 $function = $function|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $arraydecay$i = 0, $ref$tmp = 0, $ref$tmp1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp = sp + 12|0;
 $ref$tmp1 = sp;
 $0 = load4($function);
 $arraydecay$i = ((($args)) + 4|0);
 $1 = load4($args);
 ; store8($ref$tmp1,i64_const(0,0),4); store4($ref$tmp1+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp1,$arraydecay$i,$1);
 FUNCTION_TABLE_viii[$0 & 7]($ref$tmp,$wireThis,$ref$tmp1);
 $2 = load4($ref$tmp);
 __emval_incref(($2|0));
 $3 = load4($ref$tmp);
 __emval_decref(($3|0));
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp1);
 STACKTOP = sp;return ($3|0);
}
function __ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3setERSG_RSD_SJ_($m,$k,$v) {
 $m = $m|0;
 $k = $k|0;
 $v = $v|0;
 var $$pre$i$i$i = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $__first_$i$i$i$i8$i$i = 0, $__left_7$i$i$i = 0, $__parent$i$i = 0, $__parent_$i$i$i = 0, $__r$0$i$i = 0, $__right_$i$i$i = 0, $call$i$i = 0, $call$i$i$i$i$i$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $first$i$i$i$i$i$i5$i$i = 0;
 var $inc$i$i$i = 0, $second$i = 0, $second$i$i$i$i$i$i6$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $__parent$i$i = sp;
 $call$i$i = (__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_($m,$__parent$i$i,$k)|0);
 $0 = load4($call$i$i);
 $cmp$i$i = ($0|0)==(0|0);
 if (!($cmp$i$i)) {
  $__r$0$i$i = $0;
  $second$i = ((($__r$0$i$i)) + 28|0);
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($second$i,$v)|0);
  STACKTOP = sp;return;
 }
 $call$i$i$i$i$i$i = (__Znwj(40)|0);
 $first$i$i$i$i$i$i5$i$i = ((($call$i$i$i$i$i$i)) + 16|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($first$i$i$i$i$i$i5$i$i,$k);
 $second$i$i$i$i$i$i6$i$i = ((($call$i$i$i$i$i$i)) + 28|0);
 ; store8($second$i$i$i$i$i$i6$i$i,i64_const(0,0),4); store4($second$i$i$i$i$i$i6$i$i+8|0,0,4);
 $1 = load4($__parent$i$i);
 store4($call$i$i$i$i$i$i,0);
 $__right_$i$i$i = ((($call$i$i$i$i$i$i)) + 4|0);
 store4($__right_$i$i$i,0);
 $__parent_$i$i$i = ((($call$i$i$i$i$i$i)) + 8|0);
 store4($__parent_$i$i$i,$1);
 store4($call$i$i,$call$i$i$i$i$i$i);
 $2 = load4($m);
 $3 = load4($2);
 $cmp$i$i$i = ($3|0)==(0|0);
 if ($cmp$i$i$i) {
  $6 = $call$i$i$i$i$i$i;
 } else {
  $4 = $3;
  store4($m,$4);
  $$pre$i$i$i = load4($call$i$i);
  $6 = $$pre$i$i$i;
 }
 $__left_7$i$i$i = ((($m)) + 4|0);
 $5 = load4($__left_7$i$i$i);
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($5,$6);
 $__first_$i$i$i$i8$i$i = ((($m)) + 8|0);
 $7 = load4($__first_$i$i$i$i8$i$i);
 $inc$i$i$i = (($7) + 1)|0;
 store4($__first_$i$i$i$i8$i$i,$inc$i$i$i);
 $__r$0$i$i = $call$i$i$i$i$i$i;
 $second$i = ((($__r$0$i$i)) + 28|0);
 (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($second$i,$v)|0);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEERSD_SI_EvSH_JSI_SI_EE6invokeEPSK_PSG_PNS0_11BindingTypeIS9_EUt_ESR_($function,$wireThis,$args,$args1) {
 $function = $function|0;
 $wireThis = $wireThis|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $1 = 0, $2 = 0, $arraydecay$i = 0, $arraydecay$i1 = 0, $ref$tmp = 0, $ref$tmp3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $ref$tmp = sp + 12|0;
 $ref$tmp3 = sp;
 $0 = load4($function);
 $arraydecay$i = ((($args)) + 4|0);
 $1 = load4($args);
 ; store8($ref$tmp,i64_const(0,0),4); store4($ref$tmp+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp,$arraydecay$i,$1);
 $arraydecay$i1 = ((($args1)) + 4|0);
 $2 = load4($args1);
 ; store8($ref$tmp3,i64_const(0,0),4); store4($ref$tmp3+8|0,0,4);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($ref$tmp3,$arraydecay$i1,$2);
 FUNCTION_TABLE_viii[$0 & 7]($wireThis,$ref$tmp,$ref$tmp3);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp3);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($ref$tmp);
 STACKTOP = sp;return;
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEEE6invokeEPFjSA_EPNS0_11BindingTypeIS8_EUt_E($fn,$args) {
 $fn = $fn|0;
 $args = $args|0;
 var $0 = 0, $arraydecay$i = 0, $call = 0, $ref$tmp1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp1 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp1,i64_const(0,0),4); store4($ref$tmp1+8|0,0,4);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwj($ref$tmp1,$arraydecay$i,$0);
 $call = (FUNCTION_TABLE_ii[$fn & 31]($ref$tmp1)|0);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($ref$tmp1);
 STACKTOP = sp;return ($call|0);
}
function __Z3h_sRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE($sel) {
 $sel = $sel|0;
 var $0 = 0, $__begin_$i$i$i = 0, $__end_$i$i$i = 0, $__end_cap_$i$i$i = 0, $agg$tmp = 0, $call = 0, $key$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $agg$tmp = sp;
 $call = (__Znwj(56)|0);
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE($agg$tmp,$sel);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call,$agg$tmp);
 $key$i = ((($call)) + 12|0);
 $__begin_$i$i$i = ((($call)) + 44|0);
 store4($__begin_$i$i$i,0);
 $__end_$i$i$i = ((($call)) + 48|0);
 store4($__end_$i$i$i,0);
 $__end_cap_$i$i$i = ((($call)) + 52|0);
 store4($__end_cap_$i$i$i,0);
 ; store8($key$i,i64_const(0,0),4); store8($key$i+8|0,i64_const(0,0),4); store8($key$i+16|0,i64_const(0,0),4); store4($key$i+24|0,0,4);
 $0 = $call;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp);
 STACKTOP = sp;return ($0|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEbEE6invokeEPFjSA_bEPNS0_11BindingTypeIS8_EUt_Eb($fn,$args,$args1) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $arraydecay$i = 0, $call5 = 0, $ref$tmp3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp3 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp3,i64_const(0,0),4); store4($ref$tmp3+8|0,0,4);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwj($ref$tmp3,$arraydecay$i,$0);
 $call5 = (FUNCTION_TABLE_iii[$fn & 15]($ref$tmp3,$args1)|0);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($ref$tmp3);
 STACKTOP = sp;return ($call5|0);
}
function __Z4h_tiRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEb($nodeText,$isText) {
 $nodeText = $nodeText|0;
 $isText = $isText|0;
 var $0 = 0, $__begin_$i$i$i = 0, $__end_$i$i$i = 0, $__end_cap_$i$i$i = 0, $agg$tmp = 0, $call = 0, $text$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $agg$tmp = sp;
 $call = (__Znwj(56)|0);
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE($agg$tmp,$nodeText);
 $__begin_$i$i$i = ((($call)) + 44|0);
 store4($__begin_$i$i$i,0);
 $__end_$i$i$i = ((($call)) + 48|0);
 store4($__end_$i$i$i,0);
 $__end_cap_$i$i$i = ((($call)) + 52|0);
 store4($__end_cap_$i$i$i,0);
 ; store8($call,i64_const(0,0),4); store8($call+8|0,i64_const(0,0),4); store8($call+16|0,i64_const(0,0),4); store8($call+24|0,i64_const(0,0),4); store8($call+32|0,i64_const(0,0),4);
 if ($isText) {
  $text$i = ((($call)) + 24|0);
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($text$i,$agg$tmp)|0);
  $0 = $call;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp);
  STACKTOP = sp;return ($0|0);
 } else {
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($call,$agg$tmp)|0);
  $0 = $call;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp);
  STACKTOP = sp;return ($0|0);
 }
 return (0)|0;
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKjEE6invokeEPFjSA_SC_EPNS0_11BindingTypeIS8_EUt_Ej($fn,$args,$args1) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $arraydecay$i = 0, $call6 = 0, $ref$tmp3 = 0, $ref$tmp4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp3 = sp + 4|0;
 $ref$tmp4 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp3,i64_const(0,0),4); store4($ref$tmp3+8|0,0,4);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwj($ref$tmp3,$arraydecay$i,$0);
 store4($ref$tmp4,$args1);
 $call6 = (FUNCTION_TABLE_iii[$fn & 15]($ref$tmp3,$ref$tmp4)|0);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($ref$tmp3);
 STACKTOP = sp;return ($call6|0);
}
function __Z4h_snRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKj($sel,$node) {
 $sel = $sel|0;
 $node = $node|0;
 var $0 = 0, $1 = 0, $__end_$i$i$i = 0, $__end_cap_$i$i$i = 0, $add$ptr$i9$i$i = 0, $agg$tmp = 0, $call = 0, $call$i$i$i$i11$i$i = 0, $children$i = 0, $key$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $agg$tmp = sp;
 $call = (__Znwj(56)|0);
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE($agg$tmp,$sel);
 $0 = load4($node);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call,$agg$tmp);
 $key$i = ((($call)) + 12|0);
 $children$i = ((($call)) + 44|0);
 ; store8($key$i,i64_const(0,0),4); store8($key$i+8|0,i64_const(0,0),4); store8($key$i+16|0,i64_const(0,0),4); store4($key$i+24|0,0,4);
 store4($children$i,0);
 $__end_$i$i$i = ((($call)) + 48|0);
 store4($__end_$i$i$i,0);
 $__end_cap_$i$i$i = ((($call)) + 52|0);
 store4($__end_cap_$i$i$i,0);
 $call$i$i$i$i11$i$i = (__Znwj(4)|0);
 store4($children$i,$call$i$i$i$i11$i$i);
 $add$ptr$i9$i$i = ((($call$i$i$i$i11$i$i)) + 4|0);
 store4($__end_cap_$i$i$i,$add$ptr$i9$i$i);
 store4($call$i$i$i$i11$i$i,$0);
 store4($__end_$i$i$i,$add$ptr$i9$i$i);
 $1 = $call;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp);
 STACKTOP = sp;return ($1|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEESA_EE6invokeEPFjSA_SA_EPNS0_11BindingTypeIS8_EUt_ESH_($fn,$args,$args1) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $1 = 0, $arraydecay$i = 0, $arraydecay$i1 = 0, $call = 0, $ref$tmp3 = 0, $ref$tmp4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $ref$tmp3 = sp + 12|0;
 $ref$tmp4 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp3,i64_const(0,0),4); store4($ref$tmp3+8|0,0,4);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwj($ref$tmp3,$arraydecay$i,$0);
 $arraydecay$i1 = ((($args1)) + 4|0);
 $1 = load4($args1);
 ; store8($ref$tmp4,i64_const(0,0),4); store4($ref$tmp4+8|0,0,4);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwj($ref$tmp4,$arraydecay$i1,$1);
 $call = (FUNCTION_TABLE_iii[$fn & 15]($ref$tmp3,$ref$tmp4)|0);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($ref$tmp4);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($ref$tmp3);
 STACKTOP = sp;return ($call|0);
}
function __Z4h_stRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEES7_($sel,$nodeText) {
 $sel = $sel|0;
 $nodeText = $nodeText|0;
 var $0 = 0, $__begin_$i$i$i = 0, $__end_$i$i$i = 0, $__end_cap_$i$i$i = 0, $agg$tmp = 0, $agg$tmp1 = 0, $call = 0, $data$i = 0, $key$i = 0, $text$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $agg$tmp = sp + 12|0;
 $agg$tmp1 = sp;
 $call = (__Znwj(56)|0);
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE($agg$tmp,$sel);
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE($agg$tmp1,$nodeText);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call,$agg$tmp);
 $key$i = ((($call)) + 12|0);
 ; store8($key$i,i64_const(0,0),4); store4($key$i+8|0,0,4);
 $text$i = ((($call)) + 24|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($text$i,$agg$tmp1);
 $data$i = ((($call)) + 36|0);
 store4($data$i,0);
 $__begin_$i$i$i = ((($call)) + 44|0);
 store4($__begin_$i$i$i,0);
 $__end_$i$i$i = ((($call)) + 48|0);
 store4($__end_$i$i$i,0);
 $__end_cap_$i$i$i = ((($call)) + 52|0);
 store4($__end_cap_$i$i$i,0);
 $0 = $call;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp1);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp);
 STACKTOP = sp;return ($0|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEEEE6invokeEPFjSA_SN_EPNS0_11BindingTypeIS8_EUt_EPSL_($fn,$args,$args1) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $arraydecay$i = 0, $call5 = 0, $ref$tmp3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp3 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp3,i64_const(0,0),4); store4($ref$tmp3+8|0,0,4);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwj($ref$tmp3,$arraydecay$i,$0);
 $call5 = (FUNCTION_TABLE_iii[$fn & 15]($ref$tmp3,$args1)|0);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($ref$tmp3);
 STACKTOP = sp;return ($call5|0);
}
function __Z4h_sdRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEE($sel,$nodeAttrs) {
 $sel = $sel|0;
 $nodeAttrs = $nodeAttrs|0;
 var $$pre = 0, $$pre23 = 0, $$pre24 = 0, $$pre25 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__cc$i$i$i = 0, $__first_$i$i$i$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i3 = 0, $__first_$i$i$i$i$i6 = 0, $__first_$i$i$i$i$i6$i = 0, $__first_$i$i$i$i2 = 0, $__first_$i$i$i$i5 = 0, $__left_$i$i$i$i$i = 0, $__left_$i$i$i$i$i1 = 0, $__left_$i$i$i$i$i4 = 0, $__pair1_$i$i$i = 0, $__pair1_$i$i1$i = 0;
 var $__pair1_$i$i10$i = 0, $__pair1_3$i$i11$i$phi$trans$insert = 0, $__parent_$i$i$i$i$i$i = 0, $__parent_$i$i15$i = 0, $__right_$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i = 0, $agg$tmp = 0, $agg$tmp4 = 0, $agg$tmp7 = 0, $agg$tmp8 = 0, $call = 0, $call3 = 0, $callbacks$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i12$i = 0, $cmp$i$i3$i = 0, $cmp$i5$i$i$i$i$i = 0;
 var $lnot$i$i$i$i = 0, $lnot$i$i7$i$i = 0, $props$i = 0, $retval$0$i$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $agg$tmp = sp + 36|0;
 $agg$tmp4 = sp + 24|0;
 $agg$tmp7 = sp + 12|0;
 $agg$tmp8 = sp;
 $call = (__Znwj(56)|0);
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE($agg$tmp,$sel);
 $call3 = (__Znwj(36)|0);
 $__left_$i$i$i$i$i = ((($agg$tmp4)) + 4|0);
 store4($__left_$i$i$i$i$i,0);
 $__first_$i$i$i$i = ((($agg$tmp4)) + 8|0);
 store4($__first_$i$i$i$i,0);
 $__first_$i$i$i$i$i = ((($agg$tmp4)) + 4|0);
 store4($agg$tmp4,$__first_$i$i$i$i$i);
 $0 = load4($nodeAttrs);
 $__first_$i$i$i$i$i6$i = ((($nodeAttrs)) + 4|0);
 $lnot$i$i7$i$i = ($0|0)==($__first_$i$i$i$i$i6$i|0);
 $1 = $__first_$i$i$i$i$i;
 if ($lnot$i$i7$i$i) {
  $11 = 0;$8 = $1;$9 = 0;
 } else {
  $2 = $0;$3 = $0;
  while(1) {
   $__cc$i$i$i = ((($2)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($agg$tmp4,$__first_$i$i$i$i$i,$__cc$i$i$i,$__cc$i$i$i);
   $__right_$i$i$i$i$i = ((($3)) + 4|0);
   $4 = load4($__right_$i$i$i$i$i);
   $cmp$i$i$i$i$i = ($4|0)==(0|0);
   if ($cmp$i$i$i$i$i) {
    $__x$addr$0$i$i$i$i$i = $3;
    while(1) {
     $__parent_$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i)) + 8|0);
     $6 = load4($__parent_$i$i$i$i$i$i);
     $7 = load4($6);
     $cmp$i5$i$i$i$i$i = ($7|0)==($__x$addr$0$i$i$i$i$i|0);
     if ($cmp$i5$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $6;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i = $6;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i = $4;
    while(1) {
     $5 = load4($__x$addr$0$i$i$i$i$i$i);
     $cmp$i$i$i$i$i$i = ($5|0)==(0|0);
     if ($cmp$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i = $5;
     }
    }
   }
   $lnot$i$i$i$i = ($retval$0$i$i$i$i$i|0)==($__first_$i$i$i$i$i6$i|0);
   if ($lnot$i$i$i$i) {
    break;
   } else {
    $2 = $retval$0$i$i$i$i$i;$3 = $retval$0$i$i$i$i$i;
   }
  }
  $$pre = load4($agg$tmp4);
  $__pair1_3$i$i11$i$phi$trans$insert = ((($agg$tmp4)) + 4|0);
  $$pre23 = load4($__pair1_3$i$i11$i$phi$trans$insert);
  $$pre24 = load4($__first_$i$i$i$i);
  $11 = $$pre24;$8 = $$pre;$9 = $$pre23;
 }
 $__left_$i$i$i$i$i1 = ((($agg$tmp7)) + 4|0);
 store4($__left_$i$i$i$i$i1,0);
 $__first_$i$i$i$i2 = ((($agg$tmp7)) + 8|0);
 store4($__first_$i$i$i$i2,0);
 $__first_$i$i$i$i$i3 = ((($agg$tmp7)) + 4|0);
 store4($agg$tmp7,$__first_$i$i$i$i$i3);
 $__left_$i$i$i$i$i4 = ((($agg$tmp8)) + 4|0);
 store4($__left_$i$i$i$i$i4,0);
 $__first_$i$i$i$i5 = ((($agg$tmp8)) + 8|0);
 store4($__first_$i$i$i$i5,0);
 $__first_$i$i$i$i$i6 = ((($agg$tmp8)) + 4|0);
 store4($agg$tmp8,$__first_$i$i$i$i$i6);
 store4($call3,$8);
 $__pair1_$i$i10$i = ((($call3)) + 4|0);
 store4($__pair1_$i$i10$i,$9);
 $10 = ((($call3)) + 8|0);
 store4($10,$11);
 $cmp$i$i12$i = ($11|0)==(0);
 $12 = $__first_$i$i$i$i$i3;
 $13 = $__first_$i$i$i$i$i6;
 if ($cmp$i$i12$i) {
  store4($call3,$__pair1_$i$i10$i);
  $16 = 0;
 } else {
  $14 = $9;
  $__parent_$i$i15$i = ((($14)) + 8|0);
  store4($__parent_$i$i15$i,$__pair1_$i$i10$i);
  store4($agg$tmp4,$__first_$i$i$i$i$i);
  store4($__first_$i$i$i$i$i,0);
  store4($__first_$i$i$i$i,0);
  $$pre25 = load4($__first_$i$i$i$i2);
  $16 = $$pre25;
 }
 $props$i = ((($call3)) + 12|0);
 store4($props$i,$12);
 $__pair1_$i$i1$i = ((($call3)) + 16|0);
 store4($__pair1_$i$i1$i,0);
 $15 = ((($call3)) + 20|0);
 store4($15,$16);
 $cmp$i$i3$i = ($16|0)==(0);
 if ($cmp$i$i3$i) {
  store4($props$i,$__pair1_$i$i1$i);
 } else {
  store4((8),$__pair1_$i$i1$i);
  store4($agg$tmp7,$__first_$i$i$i$i$i3);
  store4($__first_$i$i$i$i$i3,0);
  store4($__first_$i$i$i$i2,0);
 }
 $callbacks$i = ((($call3)) + 24|0);
 store4($callbacks$i,$13);
 $__pair1_$i$i$i = ((($call3)) + 28|0);
 store4($__pair1_$i$i$i,0);
 $17 = ((($call3)) + 32|0);
 $18 = load4($__first_$i$i$i$i5);
 store4($17,$18);
 $cmp$i$i$i = ($18|0)==(0);
 if ($cmp$i$i$i) {
  store4($callbacks$i,$__pair1_$i$i$i);
 } else {
  store4((8),$__pair1_$i$i$i);
  store4($agg$tmp8,$__first_$i$i$i$i$i6);
  store4($__first_$i$i$i$i$i6,0);
  store4($__first_$i$i$i$i5,0);
 }
 __ZN6asmdom5VNodeC2ENSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_9VNodeDataE($call,$agg$tmp,$call3);
 $19 = $call;
 $20 = load4($__first_$i$i$i$i$i6);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_19__map_value_compareIS7_SD_NS_4lessIS7_EELb1EEENS5_ISD_EEE7destroyEPNS_11__tree_nodeISD_PvEE($20);
 $21 = load4($__first_$i$i$i$i$i3);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS5_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE($21);
 $22 = load4($__first_$i$i$i$i$i);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($22);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp);
 STACKTOP = sp;return ($19|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjSA_SF_EPNS0_11BindingTypeIS8_EUt_EPSD_($fn,$args,$args1) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 var $0 = 0, $arraydecay$i = 0, $call5 = 0, $ref$tmp3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp3 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp3,i64_const(0,0),4); store4($ref$tmp3+8|0,0,4);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwj($ref$tmp3,$arraydecay$i,$0);
 $call5 = (FUNCTION_TABLE_iii[$fn & 15]($ref$tmp3,$args1)|0);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($ref$tmp3);
 STACKTOP = sp;return ($call5|0);
}
function __Z4h_scRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_6vectorIjNS3_IjEEEE($sel,$nodeChildren) {
 $sel = $sel|0;
 $nodeChildren = $nodeChildren|0;
 var $$in = 0, $$pre = 0, $$pre44 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__end_$i = 0, $__end_$i$i = 0, $__end_$i$i$i = 0, $__end_cap_$i$i = 0, $__end_cap_$i9$i$i = 0, $__first_$i$i$i$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $agg$tmp = 0, $agg$tmp8$sroa$0$0 = 0, $agg$tmp8$sroa$15$0 = 0, $agg$tmp8$sroa$6$0 = 0, $arrayidx$i = 0, $call$i$i$i$i11$i = 0, $call5 = 0;
 var $children = 0, $children$i = 0, $cmp = 0, $cmp$i$i$i = 0, $cmp$i1 = 0, $cmp$i18 = 0, $cmp$i28 = 0, $cmp$i8$i = 0, $cmp1$i$i$i20 = 0, $cmp42 = 0, $i$043 = 0, $inc = 0, $incdec$ptr$i = 0, $key$i = 0, $ref$tmp = 0, $scevgep$i$i$i22 = 0, $scevgep5$i$i$i23 = 0, $sub$ptr$div$i = 0, $sub$ptr$div$i$i = 0, $sub$ptr$div6$i$i$i = 0;
 var $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $children = sp + 16|0;
 $ref$tmp = sp + 12|0;
 $agg$tmp = sp;
 store4($children,0);
 $__end_$i$i = ((($children)) + 4|0);
 store4($__end_$i$i,0);
 $__end_cap_$i$i = ((($children)) + 8|0);
 store4($__end_cap_$i$i,0);
 $__end_$i = ((($nodeChildren)) + 4|0);
 $0 = load4($__end_$i);
 $1 = load4($nodeChildren);
 $cmp42 = ($0|0)==($1|0);
 L1: do {
  if (!($cmp42)) {
   $__first_$i$i$i$i = ((($children)) + 8|0);
   $$in = $1;$8 = 0;$9 = 0;$i$043 = 0;
   while(1) {
    $6 = $$in;
    $arrayidx$i = (($6) + ($i$043<<2)|0);
    $7 = load4($arrayidx$i);
    store4($ref$tmp,$7);
    $cmp$i28 = ($8>>>0)<($9>>>0);
    if ($cmp$i28) {
     store4($8,$7);
     $incdec$ptr$i = ((($8)) + 4|0);
     store4($__end_$i$i,$incdec$ptr$i);
    } else {
     __ZNSt3__26vectorIPN6asmdom5VNodeENS_9allocatorIS3_EEE21__push_back_slow_pathIS3_EEvOT_($children,$ref$tmp);
    }
    $inc = (($i$043) + 1)|0;
    $10 = load4($__end_$i);
    $11 = load4($nodeChildren);
    $sub$ptr$sub$i = (($10) - ($11))|0;
    $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
    $cmp = ($inc>>>0)<($sub$ptr$div$i>>>0);
    if (!($cmp)) {
     break L1;
    }
    $$pre = load4($__end_$i$i);
    $$pre44 = load4($__first_$i$i$i$i);
    $$in = $11;$8 = $$pre;$9 = $$pre44;$i$043 = $inc;
   }
  }
 } while(0);
 $call5 = (__Znwj(56)|0);
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE($agg$tmp,$sel);
 $2 = load4($__end_$i$i);
 $3 = load4($children);
 $sub$ptr$sub$i$i = (($2) - ($3))|0;
 $sub$ptr$div$i$i = $sub$ptr$sub$i$i >> 2;
 $cmp$i1 = ($sub$ptr$div$i$i|0)==(0);
 $4 = $3;
 $5 = $2;
 if ($cmp$i1) {
  $agg$tmp8$sroa$0$0 = 0;$agg$tmp8$sroa$15$0 = 0;$agg$tmp8$sroa$6$0 = 0;
 } else {
  $cmp$i8$i = ($sub$ptr$div$i$i>>>0)>(1073741823);
  if ($cmp$i8$i) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $call$i$i$i$i11$i = (__Znwj($sub$ptr$sub$i$i)|0);
  $12 = $call$i$i$i$i11$i;
  $add$ptr$i$i = (($call$i$i$i$i11$i) + ($sub$ptr$div$i$i<<2)|0);
  $13 = $add$ptr$i$i;
  $cmp$i$i$i = ($sub$ptr$sub$i$i|0)>(0);
  if ($cmp$i$i$i) {
   $sub$ptr$div6$i$i$i = $sub$ptr$sub$i$i >>> 2;
   $add$ptr$i$i$i = (($call$i$i$i$i11$i) + ($sub$ptr$div6$i$i$i<<2)|0);
   $14 = $3;
   _memcpy(($call$i$i$i$i11$i|0),($14|0),($sub$ptr$sub$i$i|0))|0;
   $15 = $add$ptr$i$i$i;
   $agg$tmp8$sroa$0$0 = $12;$agg$tmp8$sroa$15$0 = $13;$agg$tmp8$sroa$6$0 = $15;
  } else {
   $agg$tmp8$sroa$0$0 = $12;$agg$tmp8$sroa$15$0 = $13;$agg$tmp8$sroa$6$0 = $12;
  }
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call5,$agg$tmp);
 $key$i = ((($call5)) + 12|0);
 $children$i = ((($call5)) + 44|0);
 $__end_$i$i$i = ((($call5)) + 48|0);
 $__end_cap_$i9$i$i = ((($call5)) + 52|0);
 ; store8($key$i,i64_const(0,0),4); store8($key$i+8|0,i64_const(0,0),4); store8($key$i+16|0,i64_const(0,0),4); store4($key$i+24|0,0,4);
 store4($children$i,$agg$tmp8$sroa$0$0);
 store4($__end_$i$i$i,$agg$tmp8$sroa$6$0);
 store4($__end_cap_$i9$i$i,$agg$tmp8$sroa$15$0);
 __ZN6asmdom5VNode11adjustVNodeEv($call5);
 $16 = $call5;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp);
 $cmp$i18 = ($3|0)==(0);
 $17 = $3;
 if ($cmp$i18) {
  STACKTOP = sp;return ($16|0);
 }
 $cmp1$i$i$i20 = ($5|0)==($4|0);
 if (!($cmp1$i$i$i20)) {
  $scevgep$i$i$i22 = ((($5)) + -4|0);
  $18 = $scevgep$i$i$i22;
  $19 = (($18) - ($3))|0;
  $20 = $19 >>> 2;
  $21 = $20 ^ -1;
  $scevgep5$i$i$i23 = (($5) + ($21<<2)|0);
  store4($__end_$i$i,$scevgep5$i$i$i23);
 }
 __ZdlPv($17);
 STACKTOP = sp;return ($16|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEERKjEE6invokeEPFjSA_SN_SP_EPNS0_11BindingTypeIS8_EUt_EPSL_j($fn,$args,$args1,$args3) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 $args3 = $args3|0;
 var $0 = 0, $arraydecay$i = 0, $call11 = 0, $ref$tmp5 = 0, $ref$tmp6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp5 = sp + 4|0;
 $ref$tmp6 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp5,i64_const(0,0),4); store4($ref$tmp5+8|0,0,4);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwj($ref$tmp5,$arraydecay$i,$0);
 store4($ref$tmp6,$args3);
 $call11 = (FUNCTION_TABLE_iiii[$fn & 31]($ref$tmp5,$args1,$ref$tmp6)|0);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($ref$tmp5);
 STACKTOP = sp;return ($call11|0);
}
function __Z5h_sdnRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEERKj($sel,$nodeAttrs,$node) {
 $sel = $sel|0;
 $nodeAttrs = $nodeAttrs|0;
 $node = $node|0;
 var $$pre = 0, $$pre23 = 0, $$pre24 = 0, $$pre25 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__cc$i$i$i = 0, $__end_$i$i$i = 0, $__end_cap_$i$i$i = 0, $__first_$i$i$i$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i3 = 0, $__first_$i$i$i$i$i6 = 0, $__first_$i$i$i$i$i6$i = 0, $__first_$i$i$i$i2 = 0, $__first_$i$i$i$i5 = 0, $__left_$i$i$i$i$i = 0, $__left_$i$i$i$i$i1 = 0;
 var $__left_$i$i$i$i$i4 = 0, $__pair1_$i$i$i = 0, $__pair1_$i$i1$i = 0, $__pair1_$i$i10$i = 0, $__pair1_3$i$i11$i$phi$trans$insert = 0, $__parent_$i$i$i$i$i$i = 0, $__parent_$i$i15$i = 0, $__right_$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i = 0, $add$ptr$i9$i$i = 0, $agg$tmp = 0, $agg$tmp4 = 0, $agg$tmp7 = 0, $agg$tmp8 = 0, $call = 0, $call$i$i$i$i11$i$i = 0, $call3 = 0, $callbacks$i = 0, $children$i = 0;
 var $cmp$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i12$i = 0, $cmp$i$i3$i = 0, $cmp$i5$i$i$i$i$i = 0, $data$i = 0, $key$i = 0, $lnot$i$i$i$i = 0, $lnot$i$i7$i$i = 0, $props$i = 0, $retval$0$i$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $agg$tmp = sp + 36|0;
 $agg$tmp4 = sp + 24|0;
 $agg$tmp7 = sp + 12|0;
 $agg$tmp8 = sp;
 $call = (__Znwj(56)|0);
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE($agg$tmp,$sel);
 $call3 = (__Znwj(36)|0);
 $__left_$i$i$i$i$i = ((($agg$tmp4)) + 4|0);
 store4($__left_$i$i$i$i$i,0);
 $__first_$i$i$i$i = ((($agg$tmp4)) + 8|0);
 store4($__first_$i$i$i$i,0);
 $__first_$i$i$i$i$i = ((($agg$tmp4)) + 4|0);
 store4($agg$tmp4,$__first_$i$i$i$i$i);
 $0 = load4($nodeAttrs);
 $__first_$i$i$i$i$i6$i = ((($nodeAttrs)) + 4|0);
 $lnot$i$i7$i$i = ($0|0)==($__first_$i$i$i$i$i6$i|0);
 $1 = $__first_$i$i$i$i$i;
 if ($lnot$i$i7$i$i) {
  $11 = 0;$8 = $1;$9 = 0;
 } else {
  $2 = $0;$3 = $0;
  while(1) {
   $__cc$i$i$i = ((($2)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($agg$tmp4,$__first_$i$i$i$i$i,$__cc$i$i$i,$__cc$i$i$i);
   $__right_$i$i$i$i$i = ((($3)) + 4|0);
   $4 = load4($__right_$i$i$i$i$i);
   $cmp$i$i$i$i$i = ($4|0)==(0|0);
   if ($cmp$i$i$i$i$i) {
    $__x$addr$0$i$i$i$i$i = $3;
    while(1) {
     $__parent_$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i)) + 8|0);
     $6 = load4($__parent_$i$i$i$i$i$i);
     $7 = load4($6);
     $cmp$i5$i$i$i$i$i = ($7|0)==($__x$addr$0$i$i$i$i$i|0);
     if ($cmp$i5$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $6;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i = $6;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i = $4;
    while(1) {
     $5 = load4($__x$addr$0$i$i$i$i$i$i);
     $cmp$i$i$i$i$i$i = ($5|0)==(0|0);
     if ($cmp$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i = $5;
     }
    }
   }
   $lnot$i$i$i$i = ($retval$0$i$i$i$i$i|0)==($__first_$i$i$i$i$i6$i|0);
   if ($lnot$i$i$i$i) {
    break;
   } else {
    $2 = $retval$0$i$i$i$i$i;$3 = $retval$0$i$i$i$i$i;
   }
  }
  $$pre = load4($agg$tmp4);
  $__pair1_3$i$i11$i$phi$trans$insert = ((($agg$tmp4)) + 4|0);
  $$pre23 = load4($__pair1_3$i$i11$i$phi$trans$insert);
  $$pre24 = load4($__first_$i$i$i$i);
  $11 = $$pre24;$8 = $$pre;$9 = $$pre23;
 }
 $__left_$i$i$i$i$i1 = ((($agg$tmp7)) + 4|0);
 store4($__left_$i$i$i$i$i1,0);
 $__first_$i$i$i$i2 = ((($agg$tmp7)) + 8|0);
 store4($__first_$i$i$i$i2,0);
 $__first_$i$i$i$i$i3 = ((($agg$tmp7)) + 4|0);
 store4($agg$tmp7,$__first_$i$i$i$i$i3);
 $__left_$i$i$i$i$i4 = ((($agg$tmp8)) + 4|0);
 store4($__left_$i$i$i$i$i4,0);
 $__first_$i$i$i$i5 = ((($agg$tmp8)) + 8|0);
 store4($__first_$i$i$i$i5,0);
 $__first_$i$i$i$i$i6 = ((($agg$tmp8)) + 4|0);
 store4($agg$tmp8,$__first_$i$i$i$i$i6);
 store4($call3,$8);
 $__pair1_$i$i10$i = ((($call3)) + 4|0);
 store4($__pair1_$i$i10$i,$9);
 $10 = ((($call3)) + 8|0);
 store4($10,$11);
 $cmp$i$i12$i = ($11|0)==(0);
 $12 = $__first_$i$i$i$i$i3;
 $13 = $__first_$i$i$i$i$i6;
 if ($cmp$i$i12$i) {
  store4($call3,$__pair1_$i$i10$i);
  $16 = 0;
 } else {
  $14 = $9;
  $__parent_$i$i15$i = ((($14)) + 8|0);
  store4($__parent_$i$i15$i,$__pair1_$i$i10$i);
  store4($agg$tmp4,$__first_$i$i$i$i$i);
  store4($__first_$i$i$i$i$i,0);
  store4($__first_$i$i$i$i,0);
  $$pre25 = load4($__first_$i$i$i$i2);
  $16 = $$pre25;
 }
 $props$i = ((($call3)) + 12|0);
 store4($props$i,$12);
 $__pair1_$i$i1$i = ((($call3)) + 16|0);
 store4($__pair1_$i$i1$i,0);
 $15 = ((($call3)) + 20|0);
 store4($15,$16);
 $cmp$i$i3$i = ($16|0)==(0);
 if ($cmp$i$i3$i) {
  store4($props$i,$__pair1_$i$i1$i);
 } else {
  store4((8),$__pair1_$i$i1$i);
  store4($agg$tmp7,$__first_$i$i$i$i$i3);
  store4($__first_$i$i$i$i$i3,0);
  store4($__first_$i$i$i$i2,0);
 }
 $callbacks$i = ((($call3)) + 24|0);
 store4($callbacks$i,$13);
 $__pair1_$i$i$i = ((($call3)) + 28|0);
 store4($__pair1_$i$i$i,0);
 $17 = ((($call3)) + 32|0);
 $18 = load4($__first_$i$i$i$i5);
 store4($17,$18);
 $cmp$i$i$i = ($18|0)==(0);
 if ($cmp$i$i$i) {
  store4($callbacks$i,$__pair1_$i$i$i);
 } else {
  store4((8),$__pair1_$i$i$i);
  store4($agg$tmp8,$__first_$i$i$i$i$i6);
  store4($__first_$i$i$i$i$i6,0);
  store4($__first_$i$i$i$i5,0);
 }
 $19 = load4($node);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call,$agg$tmp);
 $key$i = ((($call)) + 12|0);
 $data$i = ((($call)) + 36|0);
 ; store8($key$i,i64_const(0,0),4); store8($key$i+8|0,i64_const(0,0),4); store8($key$i+16|0,i64_const(0,0),4);
 store4($data$i,$call3);
 $children$i = ((($call)) + 44|0);
 store4($children$i,0);
 $__end_$i$i$i = ((($call)) + 48|0);
 store4($__end_$i$i$i,0);
 $__end_cap_$i$i$i = ((($call)) + 52|0);
 store4($__end_cap_$i$i$i,0);
 $call$i$i$i$i11$i$i = (__Znwj(4)|0);
 store4($children$i,$call$i$i$i$i11$i$i);
 $add$ptr$i9$i$i = ((($call$i$i$i$i11$i$i)) + 4|0);
 store4($__end_cap_$i$i$i,$add$ptr$i9$i$i);
 store4($call$i$i$i$i11$i$i,$19);
 store4($__end_$i$i$i,$add$ptr$i9$i$i);
 __ZN6asmdom5VNode11adjustVNodeEv($call);
 $20 = $call;
 $21 = load4($__first_$i$i$i$i$i6);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_19__map_value_compareIS7_SD_NS_4lessIS7_EELb1EEENS5_ISD_EEE7destroyEPNS_11__tree_nodeISD_PvEE($21);
 $22 = load4($__first_$i$i$i$i$i3);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS5_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE($22);
 $23 = load4($__first_$i$i$i$i$i);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($23);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp);
 STACKTOP = sp;return ($20|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEESA_EE6invokeEPFjSA_SN_SA_EPNS0_11BindingTypeIS8_EUt_EPSL_SU_($fn,$args,$args1,$args3) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 $args3 = $args3|0;
 var $0 = 0, $1 = 0, $arraydecay$i = 0, $arraydecay$i1 = 0, $call11 = 0, $ref$tmp5 = 0, $ref$tmp6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $ref$tmp5 = sp + 12|0;
 $ref$tmp6 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp5,i64_const(0,0),4); store4($ref$tmp5+8|0,0,4);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwj($ref$tmp5,$arraydecay$i,$0);
 $arraydecay$i1 = ((($args3)) + 4|0);
 $1 = load4($args3);
 ; store8($ref$tmp6,i64_const(0,0),4); store4($ref$tmp6+8|0,0,4);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwj($ref$tmp6,$arraydecay$i1,$1);
 $call11 = (FUNCTION_TABLE_iiii[$fn & 31]($ref$tmp5,$args1,$ref$tmp6)|0);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($ref$tmp6);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($ref$tmp5);
 STACKTOP = sp;return ($call11|0);
}
function __Z5h_sdtRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEES7_($sel,$nodeAttrs,$nodeText) {
 $sel = $sel|0;
 $nodeAttrs = $nodeAttrs|0;
 $nodeText = $nodeText|0;
 var $$pre = 0, $$pre23 = 0, $$pre24 = 0, $$pre25 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin_$i$i$i = 0, $__cc$i$i$i = 0, $__end_$i$i$i = 0, $__end_cap_$i$i$i = 0, $__first_$i$i$i$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i3 = 0, $__first_$i$i$i$i$i6 = 0, $__first_$i$i$i$i$i6$i = 0, $__first_$i$i$i$i2 = 0, $__first_$i$i$i$i5 = 0, $__left_$i$i$i$i$i = 0, $__left_$i$i$i$i$i1 = 0;
 var $__left_$i$i$i$i$i4 = 0, $__pair1_$i$i$i = 0, $__pair1_$i$i1$i = 0, $__pair1_$i$i10$i = 0, $__pair1_3$i$i11$i$phi$trans$insert = 0, $__parent_$i$i$i$i$i$i = 0, $__parent_$i$i15$i = 0, $__right_$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i = 0, $agg$tmp = 0, $agg$tmp11 = 0, $agg$tmp4 = 0, $agg$tmp7 = 0, $agg$tmp8 = 0, $call = 0, $call3 = 0, $callbacks$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i$i = 0;
 var $cmp$i$i$i$i$i$i = 0, $cmp$i$i12$i = 0, $cmp$i$i3$i = 0, $cmp$i5$i$i$i$i$i = 0, $data$i = 0, $key$i = 0, $lnot$i$i$i$i = 0, $lnot$i$i7$i$i = 0, $props$i = 0, $retval$0$i$i$i$i$i = 0, $text$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $agg$tmp = sp + 48|0;
 $agg$tmp4 = sp + 36|0;
 $agg$tmp7 = sp + 24|0;
 $agg$tmp8 = sp + 12|0;
 $agg$tmp11 = sp;
 $call = (__Znwj(56)|0);
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE($agg$tmp,$sel);
 $call3 = (__Znwj(36)|0);
 $__left_$i$i$i$i$i = ((($agg$tmp4)) + 4|0);
 store4($__left_$i$i$i$i$i,0);
 $__first_$i$i$i$i = ((($agg$tmp4)) + 8|0);
 store4($__first_$i$i$i$i,0);
 $__first_$i$i$i$i$i = ((($agg$tmp4)) + 4|0);
 store4($agg$tmp4,$__first_$i$i$i$i$i);
 $0 = load4($nodeAttrs);
 $__first_$i$i$i$i$i6$i = ((($nodeAttrs)) + 4|0);
 $lnot$i$i7$i$i = ($0|0)==($__first_$i$i$i$i$i6$i|0);
 $1 = $__first_$i$i$i$i$i;
 if ($lnot$i$i7$i$i) {
  $11 = 0;$8 = $1;$9 = 0;
 } else {
  $2 = $0;$3 = $0;
  while(1) {
   $__cc$i$i$i = ((($2)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($agg$tmp4,$__first_$i$i$i$i$i,$__cc$i$i$i,$__cc$i$i$i);
   $__right_$i$i$i$i$i = ((($3)) + 4|0);
   $4 = load4($__right_$i$i$i$i$i);
   $cmp$i$i$i$i$i = ($4|0)==(0|0);
   if ($cmp$i$i$i$i$i) {
    $__x$addr$0$i$i$i$i$i = $3;
    while(1) {
     $__parent_$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i)) + 8|0);
     $6 = load4($__parent_$i$i$i$i$i$i);
     $7 = load4($6);
     $cmp$i5$i$i$i$i$i = ($7|0)==($__x$addr$0$i$i$i$i$i|0);
     if ($cmp$i5$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $6;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i = $6;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i = $4;
    while(1) {
     $5 = load4($__x$addr$0$i$i$i$i$i$i);
     $cmp$i$i$i$i$i$i = ($5|0)==(0|0);
     if ($cmp$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i = $5;
     }
    }
   }
   $lnot$i$i$i$i = ($retval$0$i$i$i$i$i|0)==($__first_$i$i$i$i$i6$i|0);
   if ($lnot$i$i$i$i) {
    break;
   } else {
    $2 = $retval$0$i$i$i$i$i;$3 = $retval$0$i$i$i$i$i;
   }
  }
  $$pre = load4($agg$tmp4);
  $__pair1_3$i$i11$i$phi$trans$insert = ((($agg$tmp4)) + 4|0);
  $$pre23 = load4($__pair1_3$i$i11$i$phi$trans$insert);
  $$pre24 = load4($__first_$i$i$i$i);
  $11 = $$pre24;$8 = $$pre;$9 = $$pre23;
 }
 $__left_$i$i$i$i$i1 = ((($agg$tmp7)) + 4|0);
 store4($__left_$i$i$i$i$i1,0);
 $__first_$i$i$i$i2 = ((($agg$tmp7)) + 8|0);
 store4($__first_$i$i$i$i2,0);
 $__first_$i$i$i$i$i3 = ((($agg$tmp7)) + 4|0);
 store4($agg$tmp7,$__first_$i$i$i$i$i3);
 $__left_$i$i$i$i$i4 = ((($agg$tmp8)) + 4|0);
 store4($__left_$i$i$i$i$i4,0);
 $__first_$i$i$i$i5 = ((($agg$tmp8)) + 8|0);
 store4($__first_$i$i$i$i5,0);
 $__first_$i$i$i$i$i6 = ((($agg$tmp8)) + 4|0);
 store4($agg$tmp8,$__first_$i$i$i$i$i6);
 store4($call3,$8);
 $__pair1_$i$i10$i = ((($call3)) + 4|0);
 store4($__pair1_$i$i10$i,$9);
 $10 = ((($call3)) + 8|0);
 store4($10,$11);
 $cmp$i$i12$i = ($11|0)==(0);
 $12 = $__first_$i$i$i$i$i3;
 $13 = $__first_$i$i$i$i$i6;
 if ($cmp$i$i12$i) {
  store4($call3,$__pair1_$i$i10$i);
  $16 = 0;
 } else {
  $14 = $9;
  $__parent_$i$i15$i = ((($14)) + 8|0);
  store4($__parent_$i$i15$i,$__pair1_$i$i10$i);
  store4($agg$tmp4,$__first_$i$i$i$i$i);
  store4($__first_$i$i$i$i$i,0);
  store4($__first_$i$i$i$i,0);
  $$pre25 = load4($__first_$i$i$i$i2);
  $16 = $$pre25;
 }
 $props$i = ((($call3)) + 12|0);
 store4($props$i,$12);
 $__pair1_$i$i1$i = ((($call3)) + 16|0);
 store4($__pair1_$i$i1$i,0);
 $15 = ((($call3)) + 20|0);
 store4($15,$16);
 $cmp$i$i3$i = ($16|0)==(0);
 if ($cmp$i$i3$i) {
  store4($props$i,$__pair1_$i$i1$i);
 } else {
  store4((8),$__pair1_$i$i1$i);
  store4($agg$tmp7,$__first_$i$i$i$i$i3);
  store4($__first_$i$i$i$i$i3,0);
  store4($__first_$i$i$i$i2,0);
 }
 $callbacks$i = ((($call3)) + 24|0);
 store4($callbacks$i,$13);
 $__pair1_$i$i$i = ((($call3)) + 28|0);
 store4($__pair1_$i$i$i,0);
 $17 = ((($call3)) + 32|0);
 $18 = load4($__first_$i$i$i$i5);
 store4($17,$18);
 $cmp$i$i$i = ($18|0)==(0);
 if ($cmp$i$i$i) {
  store4($callbacks$i,$__pair1_$i$i$i);
 } else {
  store4((8),$__pair1_$i$i$i);
  store4($agg$tmp8,$__first_$i$i$i$i$i6);
  store4($__first_$i$i$i$i$i6,0);
  store4($__first_$i$i$i$i5,0);
 }
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE($agg$tmp11,$nodeText);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call,$agg$tmp);
 $key$i = ((($call)) + 12|0);
 ; store8($key$i,i64_const(0,0),4); store4($key$i+8|0,0,4);
 $text$i = ((($call)) + 24|0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($text$i,$agg$tmp11);
 $data$i = ((($call)) + 36|0);
 store4($data$i,$call3);
 $__begin_$i$i$i = ((($call)) + 44|0);
 store4($__begin_$i$i$i,0);
 $__end_$i$i$i = ((($call)) + 48|0);
 store4($__end_$i$i$i,0);
 $__end_cap_$i$i$i = ((($call)) + 52|0);
 store4($__end_cap_$i$i$i,0);
 __ZN6asmdom5VNode11adjustVNodeEv($call);
 $19 = $call;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp11);
 $20 = load4($__first_$i$i$i$i$i6);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_19__map_value_compareIS7_SD_NS_4lessIS7_EELb1EEENS5_ISD_EEE7destroyEPNS_11__tree_nodeISD_PvEE($20);
 $21 = load4($__first_$i$i$i$i$i3);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS5_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE($21);
 $22 = load4($__first_$i$i$i$i$i);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($22);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp);
 STACKTOP = sp;return ($19|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEERKNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjSA_SN_SS_EPNS0_11BindingTypeIS8_EUt_EPSL_PSQ_($fn,$args,$args1,$args3) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 $args3 = $args3|0;
 var $0 = 0, $arraydecay$i = 0, $call9 = 0, $ref$tmp5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp5 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp5,i64_const(0,0),4); store4($ref$tmp5+8|0,0,4);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwj($ref$tmp5,$arraydecay$i,$0);
 $call9 = (FUNCTION_TABLE_iiii[$fn & 31]($ref$tmp5,$args1,$args3)|0);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($ref$tmp5);
 STACKTOP = sp;return ($call9|0);
}
function __Z5h_sdcRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEERKNS_6vectorIjNS3_IjEEEE($sel,$nodeAttrs,$nodeChildren) {
 $sel = $sel|0;
 $nodeAttrs = $nodeAttrs|0;
 $nodeChildren = $nodeChildren|0;
 var $$in = 0, $$pre = 0, $$pre13 = 0, $$pre66 = 0, $$pre67 = 0, $$pre69 = 0, $$pre70 = 0, $$pre71 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__cc$i$i$i = 0, $__end_$i = 0, $__end_$i$i = 0, $__end_$i$i$i = 0, $__end_cap_$i$i = 0, $__end_cap_$i9$i$i = 0, $__first_$i$i$i$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i16 = 0;
 var $__first_$i$i$i$i$i19 = 0, $__first_$i$i$i$i$i6$i = 0, $__first_$i$i$i$i13 = 0, $__first_$i$i$i$i15 = 0, $__first_$i$i$i$i18 = 0, $__left_$i$i$i$i$i = 0, $__left_$i$i$i$i$i14 = 0, $__left_$i$i$i$i$i17 = 0, $__pair1_$i$i$i = 0, $__pair1_$i$i1$i = 0, $__pair1_$i$i10$i = 0, $__pair1_3$i$i11$i$phi$trans$insert = 0, $__parent_$i$i$i$i$i$i = 0, $__parent_$i$i15$i = 0, $__right_$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $agg$tmp = 0;
 var $agg$tmp11 = 0, $agg$tmp14 = 0, $agg$tmp15 = 0, $agg$tmp18$sroa$0$0 = 0, $agg$tmp18$sroa$15$0 = 0, $agg$tmp18$sroa$6$0 = 0, $arrayidx$i = 0, $call$i$i$i$i11$i = 0, $call10 = 0, $call5 = 0, $callbacks$i = 0, $children = 0, $children$i = 0, $cmp = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i$i4 = 0, $cmp$i$i12$i = 0, $cmp$i$i3$i = 0;
 var $cmp$i1 = 0, $cmp$i10 = 0, $cmp$i49 = 0, $cmp$i5$i$i$i$i$i = 0, $cmp$i8$i = 0, $cmp1$i$i$i51 = 0, $cmp63 = 0, $data$i = 0, $i$064 = 0, $inc = 0, $incdec$ptr$i = 0, $key$i = 0, $lnot$i$i$i$i = 0, $lnot$i$i7$i$i = 0, $props$i = 0, $ref$tmp = 0, $retval$0$i$i$i$i$i = 0, $scevgep$i$i$i53 = 0, $scevgep5$i$i$i54 = 0, $sub$ptr$div$i = 0;
 var $sub$ptr$div$i$i = 0, $sub$ptr$div6$i$i$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $children = sp + 52|0;
 $ref$tmp = sp + 48|0;
 $agg$tmp = sp + 36|0;
 $agg$tmp11 = sp + 24|0;
 $agg$tmp14 = sp + 12|0;
 $agg$tmp15 = sp;
 store4($children,0);
 $__end_$i$i = ((($children)) + 4|0);
 store4($__end_$i$i,0);
 $__end_cap_$i$i = ((($children)) + 8|0);
 store4($__end_cap_$i$i,0);
 $__end_$i = ((($nodeChildren)) + 4|0);
 $0 = load4($__end_$i);
 $1 = load4($nodeChildren);
 $cmp63 = ($0|0)==($1|0);
 L1: do {
  if (!($cmp63)) {
   $__first_$i$i$i$i = ((($children)) + 8|0);
   $$in = $1;$6 = 0;$7 = 0;$i$064 = 0;
   while(1) {
    $4 = $$in;
    $arrayidx$i = (($4) + ($i$064<<2)|0);
    $5 = load4($arrayidx$i);
    store4($ref$tmp,$5);
    $cmp$i10 = ($6>>>0)<($7>>>0);
    if ($cmp$i10) {
     store4($6,$5);
     $incdec$ptr$i = ((($6)) + 4|0);
     store4($__end_$i$i,$incdec$ptr$i);
    } else {
     __ZNSt3__26vectorIPN6asmdom5VNodeENS_9allocatorIS3_EEE21__push_back_slow_pathIS3_EEvOT_($children,$ref$tmp);
    }
    $inc = (($i$064) + 1)|0;
    $8 = load4($__end_$i);
    $9 = load4($nodeChildren);
    $sub$ptr$sub$i = (($8) - ($9))|0;
    $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
    $cmp = ($inc>>>0)<($sub$ptr$div$i>>>0);
    if (!($cmp)) {
     break L1;
    }
    $$pre = load4($__end_$i$i);
    $$pre66 = load4($__first_$i$i$i$i);
    $$in = $9;$6 = $$pre;$7 = $$pre66;$i$064 = $inc;
   }
  }
 } while(0);
 $call5 = (__Znwj(56)|0);
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE($agg$tmp,$sel);
 $call10 = (__Znwj(36)|0);
 $__left_$i$i$i$i$i = ((($agg$tmp11)) + 4|0);
 store4($__left_$i$i$i$i$i,0);
 $__first_$i$i$i$i13 = ((($agg$tmp11)) + 8|0);
 store4($__first_$i$i$i$i13,0);
 $__first_$i$i$i$i$i = ((($agg$tmp11)) + 4|0);
 store4($agg$tmp11,$__first_$i$i$i$i$i);
 $2 = load4($nodeAttrs);
 $__first_$i$i$i$i$i6$i = ((($nodeAttrs)) + 4|0);
 $lnot$i$i7$i$i = ($2|0)==($__first_$i$i$i$i$i6$i|0);
 $3 = $__first_$i$i$i$i$i;
 if ($lnot$i$i7$i$i) {
  $16 = $3;$17 = 0;$19 = 0;
 } else {
  $10 = $2;$11 = $2;
  while(1) {
   $__cc$i$i$i = ((($10)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($agg$tmp11,$__first_$i$i$i$i$i,$__cc$i$i$i,$__cc$i$i$i);
   $__right_$i$i$i$i$i = ((($11)) + 4|0);
   $12 = load4($__right_$i$i$i$i$i);
   $cmp$i$i$i$i$i = ($12|0)==(0|0);
   if ($cmp$i$i$i$i$i) {
    $__x$addr$0$i$i$i$i$i = $11;
    while(1) {
     $__parent_$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i)) + 8|0);
     $14 = load4($__parent_$i$i$i$i$i$i);
     $15 = load4($14);
     $cmp$i5$i$i$i$i$i = ($15|0)==($__x$addr$0$i$i$i$i$i|0);
     if ($cmp$i5$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $14;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i = $14;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i = $12;
    while(1) {
     $13 = load4($__x$addr$0$i$i$i$i$i$i);
     $cmp$i$i$i$i$i$i = ($13|0)==(0|0);
     if ($cmp$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i = $13;
     }
    }
   }
   $lnot$i$i$i$i = ($retval$0$i$i$i$i$i|0)==($__first_$i$i$i$i$i6$i|0);
   if ($lnot$i$i$i$i) {
    break;
   } else {
    $10 = $retval$0$i$i$i$i$i;$11 = $retval$0$i$i$i$i$i;
   }
  }
  $$pre67 = load4($agg$tmp11);
  $__pair1_3$i$i11$i$phi$trans$insert = ((($agg$tmp11)) + 4|0);
  $$pre69 = load4($__pair1_3$i$i11$i$phi$trans$insert);
  $$pre70 = load4($__first_$i$i$i$i13);
  $16 = $$pre67;$17 = $$pre69;$19 = $$pre70;
 }
 $__left_$i$i$i$i$i14 = ((($agg$tmp14)) + 4|0);
 store4($__left_$i$i$i$i$i14,0);
 $__first_$i$i$i$i15 = ((($agg$tmp14)) + 8|0);
 store4($__first_$i$i$i$i15,0);
 $__first_$i$i$i$i$i16 = ((($agg$tmp14)) + 4|0);
 store4($agg$tmp14,$__first_$i$i$i$i$i16);
 $__left_$i$i$i$i$i17 = ((($agg$tmp15)) + 4|0);
 store4($__left_$i$i$i$i$i17,0);
 $__first_$i$i$i$i18 = ((($agg$tmp15)) + 8|0);
 store4($__first_$i$i$i$i18,0);
 $__first_$i$i$i$i$i19 = ((($agg$tmp15)) + 4|0);
 store4($agg$tmp15,$__first_$i$i$i$i$i19);
 store4($call10,$16);
 $__pair1_$i$i10$i = ((($call10)) + 4|0);
 store4($__pair1_$i$i10$i,$17);
 $18 = ((($call10)) + 8|0);
 store4($18,$19);
 $cmp$i$i12$i = ($19|0)==(0);
 $20 = $__first_$i$i$i$i$i16;
 $21 = $__first_$i$i$i$i$i19;
 if ($cmp$i$i12$i) {
  store4($call10,$__pair1_$i$i10$i);
  $24 = 0;
 } else {
  $22 = $17;
  $__parent_$i$i15$i = ((($22)) + 8|0);
  store4($__parent_$i$i15$i,$__pair1_$i$i10$i);
  store4($agg$tmp11,$__first_$i$i$i$i$i);
  store4($__first_$i$i$i$i$i,0);
  store4($__first_$i$i$i$i13,0);
  $$pre71 = load4($__first_$i$i$i$i15);
  $24 = $$pre71;
 }
 $props$i = ((($call10)) + 12|0);
 store4($props$i,$20);
 $__pair1_$i$i1$i = ((($call10)) + 16|0);
 store4($__pair1_$i$i1$i,0);
 $23 = ((($call10)) + 20|0);
 store4($23,$24);
 $cmp$i$i3$i = ($24|0)==(0);
 if ($cmp$i$i3$i) {
  store4($props$i,$__pair1_$i$i1$i);
 } else {
  store4((8),$__pair1_$i$i1$i);
  store4($agg$tmp14,$__first_$i$i$i$i$i16);
  store4($__first_$i$i$i$i$i16,0);
  store4($__first_$i$i$i$i15,0);
 }
 $callbacks$i = ((($call10)) + 24|0);
 store4($callbacks$i,$21);
 $__pair1_$i$i$i = ((($call10)) + 28|0);
 store4($__pair1_$i$i$i,0);
 $25 = ((($call10)) + 32|0);
 $26 = load4($__first_$i$i$i$i18);
 store4($25,$26);
 $cmp$i$i$i = ($26|0)==(0);
 if ($cmp$i$i$i) {
  store4($callbacks$i,$__pair1_$i$i$i);
 } else {
  store4((8),$__pair1_$i$i$i);
  store4($agg$tmp15,$__first_$i$i$i$i$i19);
  store4($__first_$i$i$i$i$i19,0);
  store4($__first_$i$i$i$i18,0);
 }
 $27 = load4($__end_$i$i);
 $28 = load4($children);
 $sub$ptr$sub$i$i = (($27) - ($28))|0;
 $sub$ptr$div$i$i = $sub$ptr$sub$i$i >> 2;
 $cmp$i1 = ($sub$ptr$div$i$i|0)==(0);
 $29 = $28;
 $30 = $27;
 if ($cmp$i1) {
  $agg$tmp18$sroa$0$0 = 0;$agg$tmp18$sroa$15$0 = 0;$agg$tmp18$sroa$6$0 = 0;
 } else {
  $cmp$i8$i = ($sub$ptr$div$i$i>>>0)>(1073741823);
  if ($cmp$i8$i) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
   // unreachable;
  }
  $call$i$i$i$i11$i = (__Znwj($sub$ptr$sub$i$i)|0);
  $31 = $call$i$i$i$i11$i;
  $add$ptr$i$i = (($call$i$i$i$i11$i) + ($sub$ptr$div$i$i<<2)|0);
  $32 = $add$ptr$i$i;
  $cmp$i$i$i4 = ($sub$ptr$sub$i$i|0)>(0);
  if ($cmp$i$i$i4) {
   $sub$ptr$div6$i$i$i = $sub$ptr$sub$i$i >>> 2;
   $add$ptr$i$i$i = (($call$i$i$i$i11$i) + ($sub$ptr$div6$i$i$i<<2)|0);
   $33 = $28;
   _memcpy(($call$i$i$i$i11$i|0),($33|0),($sub$ptr$sub$i$i|0))|0;
   $34 = $add$ptr$i$i$i;
   $agg$tmp18$sroa$0$0 = $31;$agg$tmp18$sroa$15$0 = $32;$agg$tmp18$sroa$6$0 = $34;
  } else {
   $agg$tmp18$sroa$0$0 = $31;$agg$tmp18$sroa$15$0 = $32;$agg$tmp18$sroa$6$0 = $31;
  }
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($call5,$agg$tmp);
 $key$i = ((($call5)) + 12|0);
 $data$i = ((($call5)) + 36|0);
 ; store8($key$i,i64_const(0,0),4); store8($key$i+8|0,i64_const(0,0),4); store8($key$i+16|0,i64_const(0,0),4);
 store4($data$i,$call10);
 $children$i = ((($call5)) + 44|0);
 $__end_$i$i$i = ((($call5)) + 48|0);
 $__end_cap_$i9$i$i = ((($call5)) + 52|0);
 store4($children$i,$agg$tmp18$sroa$0$0);
 store4($__end_$i$i$i,$agg$tmp18$sroa$6$0);
 store4($__end_cap_$i9$i$i,$agg$tmp18$sroa$15$0);
 __ZN6asmdom5VNode11adjustVNodeEv($call5);
 $35 = $call5;
 $$pre13 = load4($__first_$i$i$i$i$i19);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_19__map_value_compareIS7_SD_NS_4lessIS7_EELb1EEENS5_ISD_EEE7destroyEPNS_11__tree_nodeISD_PvEE($$pre13);
 $36 = load4($__first_$i$i$i$i$i16);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS5_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE($36);
 $37 = load4($__first_$i$i$i$i$i);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($37);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp);
 $cmp$i49 = ($28|0)==(0);
 $38 = $28;
 if ($cmp$i49) {
  STACKTOP = sp;return ($35|0);
 }
 $cmp1$i$i$i51 = ($30|0)==($29|0);
 if (!($cmp1$i$i$i51)) {
  $scevgep$i$i$i53 = ((($30)) + -4|0);
  $39 = $scevgep$i$i$i53;
  $40 = (($39) - ($28))|0;
  $41 = $40 >>> 2;
  $42 = $41 ^ -1;
  $scevgep5$i$i$i54 = (($30) + ($42<<2)|0);
  store4($__end_$i$i,$scevgep5$i$i$i54);
 }
 __ZdlPv($38);
 STACKTOP = sp;return ($35|0);
}
function __ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEEiEE6invokeEPFjSA_SN_iEPNS0_11BindingTypeIS8_EUt_EPSL_i($fn,$args,$args1,$args3) {
 $fn = $fn|0;
 $args = $args|0;
 $args1 = $args1|0;
 $args3 = $args3|0;
 var $0 = 0, $arraydecay$i = 0, $call9 = 0, $ref$tmp5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ref$tmp5 = sp;
 $arraydecay$i = ((($args)) + 4|0);
 $0 = load4($args);
 ; store8($ref$tmp5,i64_const(0,0),4); store4($ref$tmp5+8|0,0,4);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwj($ref$tmp5,$arraydecay$i,$0);
 $call9 = (FUNCTION_TABLE_iiii[$fn & 31]($ref$tmp5,$args1,$args3)|0);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($ref$tmp5);
 STACKTOP = sp;return ($call9|0);
}
function __Z5h_elmRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEEi($sel,$nodeAttrs,$elm) {
 $sel = $sel|0;
 $nodeAttrs = $nodeAttrs|0;
 $elm = $elm|0;
 var $$pre = 0, $$pre25 = 0, $$pre26 = 0, $$pre27 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__cc$i$i$i = 0, $__first_$i$i$i$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i5 = 0, $__first_$i$i$i$i$i6$i = 0, $__first_$i$i$i$i$i8 = 0, $__first_$i$i$i$i4 = 0, $__first_$i$i$i$i7 = 0, $__left_$i$i$i$i$i = 0, $__left_$i$i$i$i$i3 = 0, $__left_$i$i$i$i$i6 = 0, $__pair1_$i$i$i = 0, $__pair1_$i$i1$i = 0;
 var $__pair1_$i$i10$i = 0, $__pair1_3$i$i11$i$phi$trans$insert = 0, $__parent_$i$i$i$i$i$i = 0, $__parent_$i$i15$i = 0, $__right_$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i = 0, $agg$tmp = 0, $agg$tmp4 = 0, $agg$tmp7 = 0, $agg$tmp8 = 0, $call = 0, $call3 = 0, $callbacks$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i12$i = 0, $cmp$i$i3$i = 0, $cmp$i5$i$i$i$i$i = 0;
 var $elm18 = 0, $lnot$i$i$i$i = 0, $lnot$i$i7$i$i = 0, $props$i = 0, $retval$0$i$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $agg$tmp = sp + 36|0;
 $agg$tmp4 = sp + 24|0;
 $agg$tmp7 = sp + 12|0;
 $agg$tmp8 = sp;
 $call = (__Znwj(56)|0);
 __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE($agg$tmp,$sel);
 $call3 = (__Znwj(36)|0);
 $__left_$i$i$i$i$i = ((($agg$tmp4)) + 4|0);
 store4($__left_$i$i$i$i$i,0);
 $__first_$i$i$i$i = ((($agg$tmp4)) + 8|0);
 store4($__first_$i$i$i$i,0);
 $__first_$i$i$i$i$i = ((($agg$tmp4)) + 4|0);
 store4($agg$tmp4,$__first_$i$i$i$i$i);
 $0 = load4($nodeAttrs);
 $__first_$i$i$i$i$i6$i = ((($nodeAttrs)) + 4|0);
 $lnot$i$i7$i$i = ($0|0)==($__first_$i$i$i$i$i6$i|0);
 $1 = $__first_$i$i$i$i$i;
 if ($lnot$i$i7$i$i) {
  $11 = 0;$8 = $1;$9 = 0;
 } else {
  $2 = $0;$3 = $0;
  while(1) {
   $__cc$i$i$i = ((($2)) + 16|0);
   __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE30__emplace_hint_unique_key_argsIS7_JRKNS_4pairIKS7_S7_EEEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEEiEENS_21__tree_const_iteratorIS8_SP_iEERKT_DpOT0_($agg$tmp4,$__first_$i$i$i$i$i,$__cc$i$i$i,$__cc$i$i$i);
   $__right_$i$i$i$i$i = ((($3)) + 4|0);
   $4 = load4($__right_$i$i$i$i$i);
   $cmp$i$i$i$i$i = ($4|0)==(0|0);
   if ($cmp$i$i$i$i$i) {
    $__x$addr$0$i$i$i$i$i = $3;
    while(1) {
     $__parent_$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i)) + 8|0);
     $6 = load4($__parent_$i$i$i$i$i$i);
     $7 = load4($6);
     $cmp$i5$i$i$i$i$i = ($7|0)==($__x$addr$0$i$i$i$i$i|0);
     if ($cmp$i5$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $6;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i = $6;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i = $4;
    while(1) {
     $5 = load4($__x$addr$0$i$i$i$i$i$i);
     $cmp$i$i$i$i$i$i = ($5|0)==(0|0);
     if ($cmp$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i = $5;
     }
    }
   }
   $lnot$i$i$i$i = ($retval$0$i$i$i$i$i|0)==($__first_$i$i$i$i$i6$i|0);
   if ($lnot$i$i$i$i) {
    break;
   } else {
    $2 = $retval$0$i$i$i$i$i;$3 = $retval$0$i$i$i$i$i;
   }
  }
  $$pre = load4($agg$tmp4);
  $__pair1_3$i$i11$i$phi$trans$insert = ((($agg$tmp4)) + 4|0);
  $$pre25 = load4($__pair1_3$i$i11$i$phi$trans$insert);
  $$pre26 = load4($__first_$i$i$i$i);
  $11 = $$pre26;$8 = $$pre;$9 = $$pre25;
 }
 $__left_$i$i$i$i$i3 = ((($agg$tmp7)) + 4|0);
 store4($__left_$i$i$i$i$i3,0);
 $__first_$i$i$i$i4 = ((($agg$tmp7)) + 8|0);
 store4($__first_$i$i$i$i4,0);
 $__first_$i$i$i$i$i5 = ((($agg$tmp7)) + 4|0);
 store4($agg$tmp7,$__first_$i$i$i$i$i5);
 $__left_$i$i$i$i$i6 = ((($agg$tmp8)) + 4|0);
 store4($__left_$i$i$i$i$i6,0);
 $__first_$i$i$i$i7 = ((($agg$tmp8)) + 8|0);
 store4($__first_$i$i$i$i7,0);
 $__first_$i$i$i$i$i8 = ((($agg$tmp8)) + 4|0);
 store4($agg$tmp8,$__first_$i$i$i$i$i8);
 store4($call3,$8);
 $__pair1_$i$i10$i = ((($call3)) + 4|0);
 store4($__pair1_$i$i10$i,$9);
 $10 = ((($call3)) + 8|0);
 store4($10,$11);
 $cmp$i$i12$i = ($11|0)==(0);
 $12 = $__first_$i$i$i$i$i5;
 $13 = $__first_$i$i$i$i$i8;
 if ($cmp$i$i12$i) {
  store4($call3,$__pair1_$i$i10$i);
  $16 = 0;
 } else {
  $14 = $9;
  $__parent_$i$i15$i = ((($14)) + 8|0);
  store4($__parent_$i$i15$i,$__pair1_$i$i10$i);
  store4($agg$tmp4,$__first_$i$i$i$i$i);
  store4($__first_$i$i$i$i$i,0);
  store4($__first_$i$i$i$i,0);
  $$pre27 = load4($__first_$i$i$i$i4);
  $16 = $$pre27;
 }
 $props$i = ((($call3)) + 12|0);
 store4($props$i,$12);
 $__pair1_$i$i1$i = ((($call3)) + 16|0);
 store4($__pair1_$i$i1$i,0);
 $15 = ((($call3)) + 20|0);
 store4($15,$16);
 $cmp$i$i3$i = ($16|0)==(0);
 if ($cmp$i$i3$i) {
  store4($props$i,$__pair1_$i$i1$i);
 } else {
  store4((8),$__pair1_$i$i1$i);
  store4($agg$tmp7,$__first_$i$i$i$i$i5);
  store4($__first_$i$i$i$i$i5,0);
  store4($__first_$i$i$i$i4,0);
 }
 $callbacks$i = ((($call3)) + 24|0);
 store4($callbacks$i,$13);
 $__pair1_$i$i$i = ((($call3)) + 28|0);
 store4($__pair1_$i$i$i,0);
 $17 = ((($call3)) + 32|0);
 $18 = load4($__first_$i$i$i$i7);
 store4($17,$18);
 $cmp$i$i$i = ($18|0)==(0);
 if ($cmp$i$i$i) {
  store4($callbacks$i,$__pair1_$i$i$i);
 } else {
  store4((8),$__pair1_$i$i$i);
  store4($agg$tmp8,$__first_$i$i$i$i$i8);
  store4($__first_$i$i$i$i$i8,0);
  store4($__first_$i$i$i$i7,0);
 }
 __ZN6asmdom5VNodeC2ENSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPNS_9VNodeDataE($call,$agg$tmp,$call3);
 $19 = load4($__first_$i$i$i$i$i8);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_8functionIFbN10emscripten3valEEEEEENS_19__map_value_compareIS7_SD_NS_4lessIS7_EELb1EEENS5_ISD_EEE7destroyEPNS_11__tree_nodeISD_PvEE($19);
 $20 = load4($__first_$i$i$i$i$i5);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN10emscripten3valEEENS_19__map_value_compareIS7_SA_NS_4lessIS7_EELb1EEENS5_ISA_EEE7destroyEPNS_11__tree_nodeISA_PvEE($20);
 $21 = load4($__first_$i$i$i$i$i);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7_EENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE($21);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$tmp);
 $elm18 = ((($call)) + 40|0);
 store4($elm18,$elm);
 $22 = $call;
 STACKTOP = sp;return ($22|0);
}
function __Z15wstring_to_utf8RKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE($agg$result,$str) {
 $agg$result = $agg$result|0;
 $str = $str|0;
 var $$ph266$i = 0, $$pn346$i = 0, $$pre = 0, $$pre$i$i = 0, $$pre312$i = 0, $$pre314$i = 0, $$pre316$i = 0, $$pre39 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $_Maxcode_$i$i = 0, $_Mode_$i$i = 0, $__cap_$i$i$i = 0, $__cap_$i$i$i$i = 0, $__cap_$i$i195$i = 0, $__cvtcount_$i = 0, $__cvtptr_$i = 0, $__cvtstate_$i = 0, $__first$addr$036$i$i = 0, $__frm$addr$0$i = 0, $__frm$addr$1$i = 0, $__frm_nxt$i = 0, $__p$0$lcssa$i$i = 0, $__p$037$i$i = 0, $__size_$i$i$i = 0, $__size_$i$i$i$i = 0, $__size_$i$i$i47$i$phi$trans$insert = 0, $__size_$i$i202$pre$phi$iZZZ2D = 0;
 var $__size_$i2$i$i = 0, $__size_$i3$i$i$i = 0, $__size_$i3$i$pre$phi$iZZZ2D = 0, $__size_$i3$i162$i = 0, $__size_$i3$i204$i = 0, $__size_$i3$i213$pre$phi$iZZZ2D = 0, $__size_$i3$i79$i = 0, $__st$i = 0, $__to$0$i = 0, $__to75$0$i = 0, $__to_end$0$i = 0, $__to_end79$0$i = 0, $__to_nxt$i = 0, $__wide_err_string_$i7 = 0, $add$i = 0, $add$i$i = 0, $add$i35 = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$idx = 0;
 var $add$ptr$i7 = 0, $add$ptr118257261$i = 0, $add$ptr122$i = 0, $add$ptr53236240$i = 0, $add$ptr57$i = 0, $add$ptr78252$i = 0, $add$ptr81$i = 0, $add9$i$i = 0, $and$i$i$i = 0, $and$i$i$i$i = 0, $and$i$i196$i = 0, $call = 0, $call$i146$i = 0, $call$i95$i = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i121$i = 0, $cmp19$i = 0, $cmp2$i = 0, $cmp63$i = 0;
 var $cmp7$i$i = 0, $cmp735$i$i = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i$i103$i = 0, $cond$i$i112$i = 0, $cond$i$i131$i = 0, $cond$i$i141$i = 0, $cond$i$i156$i = 0, $cond$i$i226242$i = 0, $cond$i$i231$i = 0, $cond$i$i3 = 0, $cond$i$i51$i = 0, $cond$i$i64263$i = 0, $cond$i$i92$i = 0, $cond$i166$i = 0, $cond$i199$i = 0, $cond$i208323$i = 0, $cond$i217$i = 0, $cond$i29$i$i = 0;
 var $cond$i34$i$i = 0, $cond$i40$i$i = 0, $cond$i56$i = 0, $cond$i83$i = 0, $conv$i$i$i = 0, $conv$i$i$i$i = 0, $conv$i$i$i119$i = 0, $conv$i$i$i8 = 0, $conv$i$i164$i = 0, $conv$i$i206$i = 0, $conv$i$i215$i = 0, $conv$i$i23$i$i = 0, $conv$i$i81$i = 0, $converter = 0, $exception$i = 0, $incdec$ptr$i$i = 0, $incdec$ptr8$i$i = 0, $isnull$i3 = 0, $mul$i = 0, $mul113$i = 0;
 var $mul48$i = 0, $phitmp$i$i = 0, $phitmp$i$i$i = 0, $phitmp$i197$i = 0, $scevgep$i$i = 0, $scevgep38$i$i = 0, $scevgep39$i$i = 0, $sub$i$i = 0, $sub$ptr$div17$i = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast14$i = 0, $sub$ptr$lhs$cast25$i = 0, $sub$ptr$lhs$cast92$i = 0, $sub$ptr$rhs$cast102$i = 0, $sub$ptr$rhs$cast111$i = 0, $sub$ptr$rhs$cast15$i = 0, $sub$ptr$rhs$cast26$i = 0, $sub$ptr$rhs$cast37$i = 0, $sub$ptr$rhs$cast46$i = 0, $sub$ptr$rhs$cast93$i = 0;
 var $sub$ptr$sub$i$i$i$i = 0, $sub$ptr$sub103$i = 0, $sub$ptr$sub112$i = 0, $sub$ptr$sub16$i = 0, $sub$ptr$sub27$i = 0, $sub$ptr$sub38$i = 0, $sub$ptr$sub47$i = 0, $sub$ptr$sub94$i = 0, $sub5$i$i = 0, $tobool$i$i = 0, $tobool$i$i$i = 0, $tobool$i$i$i$i = 0, $tobool$i$i$i$i5 = 0, $tobool$i$i$i107$i = 0, $tobool$i$i$i118$i = 0, $tobool$i$i$i126$i = 0, $tobool$i$i$i136$i = 0, $tobool$i$i$i151$i = 0, $tobool$i$i$i170$i = 0, $tobool$i$i$i184$i = 0;
 var $tobool$i$i$i48$i = 0, $tobool$i$i$i68$i = 0, $tobool$i$i$i87$i = 0, $tobool$i$i$i98$i = 0, $tobool$i$i203$i = 0, $tobool$i$i22$i$i = 0, $tobool$i$i26$i$i = 0, $vfn$i$i = 0, $vfn$i145$i = 0, $vfn$i5 = 0, $vtable$i$i = 0, $vtable$i144$i = 0, $vtable$i4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $__st$i = sp;
 $__frm_nxt$i = sp + 52|0;
 $__to_nxt$i = sp + 48|0;
 $converter = sp + 8|0;
 $call = (__Znwj(20)|0);
 __ZNSt3__27codecvtIwc11__mbstate_tEC2Ej($call);
 $_Maxcode_$i$i = ((($call)) + 12|0);
 store4($_Maxcode_$i$i,1114111);
 $_Mode_$i$i = ((($call)) + 16|0);
 store4($_Mode_$i$i,0);
 store4($call,(2096));
 $__cvtptr_$i = ((($converter)) + 24|0);
 ; store8($converter,i64_const(0,0),4); store8($converter+8|0,i64_const(0,0),4); store8($converter+16|0,i64_const(0,0),4);
 store4($__cvtptr_$i,$call);
 $__cvtstate_$i = ((($converter)) + 28|0);
 store8($__cvtstate_$i,i64_const(0,0),4);
 $__cvtcount_$i = ((($converter)) + 36|0);
 $0 = ((($str)) + 8|0);
 $__size_$i$i$i$i = ((($0)) + 3|0);
 $1 = load1($__size_$i$i$i$i);
 $tobool$i$i$i$i = ($1<<24>>24)<(0);
 $2 = load4($str);
 $cond$i$i$i = $tobool$i$i$i$i ? $2 : $str;
 $__size_$i2$i$i = ((($str)) + 4|0);
 $3 = load4($__size_$i2$i$i);
 $conv$i$i$i = $1&255;
 $cond$i$i = $tobool$i$i$i$i ? $3 : $conv$i$i$i;
 $add$ptr$i = (($cond$i$i$i) + ($cond$i$i<<2)|0);
 store4($__cvtcount_$i,0);
 $cmp$i = ($call|0)==(0|0);
 L1: do {
  if ($cmp$i) {
   $49 = 0;
   label = 63;
  } else {
   $sub$ptr$lhs$cast$i = $add$ptr$i;
   $add$ptr$i$idx = $cond$i$i << 2;
   $mul$i = $add$ptr$i$idx >> 1;
   ; store8($agg$result,i64_const(0,0),4); store4($agg$result+8|0,0,4);
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEjc($agg$result,$mul$i);
   $cmp2$i = ($cond$i$i|0)==(0);
   do {
    if ($cmp2$i) {
     store8($__st$i,i64_const(0,0));
     $$pre314$i = ((($agg$result)) + 11|0);
     $53 = $__st$i;$__size_$i$i202$pre$phi$iZZZ2D = $$pre314$i;
     label = 40;
    } else {
     $__size_$i$i$i = ((($agg$result)) + 11|0);
     $4 = load1($__size_$i$i$i);
     $tobool$i$i$i = ($4<<24>>24)<(0);
     if ($tobool$i$i$i) {
      $__cap_$i$i$i = ((($agg$result)) + 8|0);
      $5 = load4($__cap_$i$i$i);
      $and$i$i$i = $5 & 2147483647;
      $phitmp$i$i = (($and$i$i$i) + -1)|0;
      $cond$i$i3 = $phitmp$i$i;
     } else {
      $cond$i$i3 = 10;
     }
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc($agg$result,$cond$i$i3);
     store8($__st$i,i64_const(0,0));
     $6 = load1($__size_$i$i$i);
     $tobool$i$i$i$i5 = ($6<<24>>24)<(0);
     if ($tobool$i$i$i$i5) {
      $7 = load4($agg$result);
      $__size_$i3$i79$i = ((($agg$result)) + 4|0);
      $8 = load4($__size_$i3$i79$i);
      $__size_$i3$i213$pre$phi$iZZZ2D = $__size_$i3$i79$i;$cond$i$i231$i = $7;$cond$i83$i = $8;
     } else {
      $conv$i$i81$i = $6&255;
      $$pre312$i = ((($agg$result)) + 4|0);
      $__size_$i3$i213$pre$phi$iZZZ2D = $$pre312$i;$cond$i$i231$i = $agg$result;$cond$i83$i = $conv$i$i81$i;
     }
     $add$ptr$i7 = (($cond$i$i231$i) + ($cond$i83$i)|0);
     $__frm$addr$0$i = $cond$i$i$i;$__to$0$i = $cond$i$i231$i;$__to_end$0$i = $add$ptr$i7;$add$i35 = 0;
     L13: while(1) {
      $vtable$i$i = load4($call);
      $vfn$i$i = ((($vtable$i$i)) + 12|0);
      $9 = load4($vfn$i$i);
      $call$i95$i = (FUNCTION_TABLE_iiiiiiiii[$9 & 7]($call,$__st$i,$__frm$addr$0$i,$add$ptr$i,$__frm_nxt$i,$__to$0$i,$__to_end$0$i,$__to_nxt$i)|0);
      $10 = load4($__frm_nxt$i);
      $sub$ptr$lhs$cast14$i = $10;
      $sub$ptr$rhs$cast15$i = $__frm$addr$0$i;
      $sub$ptr$sub16$i = (($sub$ptr$lhs$cast14$i) - ($sub$ptr$rhs$cast15$i))|0;
      $sub$ptr$div17$i = $sub$ptr$sub16$i >> 2;
      $add$i = (($sub$ptr$div17$i) + ($add$i35))|0;
      $cmp19$i = ($10|0)==($__frm$addr$0$i|0);
      if ($cmp19$i) {
       label = 39;
       break;
      }
      switch ($call$i95$i|0) {
      case 3:  {
       label = 12;
       break L13;
       break;
      }
      case 0:  {
       label = 28;
       break L13;
       break;
      }
      case 1:  {
       break;
      }
      default: {
       label = 39;
       break L13;
      }
      }
      $24 = load4($__to_nxt$i);
      $25 = load1($__size_$i$i$i);
      $tobool$i$i$i151$i = ($25<<24>>24)<(0);
      if ($tobool$i$i$i151$i) {
       $26 = load4($agg$result);
       $cond$i$i156$i = $26;
      } else {
       $cond$i$i156$i = $agg$result;
      }
      $sub$ptr$rhs$cast46$i = $cond$i$i156$i;
      $sub$ptr$sub47$i = (($24) - ($sub$ptr$rhs$cast46$i))|0;
      $mul48$i = $sub$ptr$sub47$i << 1;
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc($agg$result,$mul48$i);
      $27 = load1($__size_$i$i$i);
      $tobool$i$i$i184$i = ($27<<24>>24)<(0);
      if ($tobool$i$i$i184$i) {
       $28 = load4($agg$result);
       $29 = load4($__size_$i3$i213$pre$phi$iZZZ2D);
       $cond$i$i226242$i = $28;$cond$i217$i = $29;
      } else {
       $conv$i$i215$i = $27&255;
       $cond$i$i226242$i = $agg$result;$cond$i217$i = $conv$i$i215$i;
      }
      $add$ptr53236240$i = (($cond$i$i226242$i) + ($sub$ptr$sub47$i)|0);
      $add$ptr57$i = (($cond$i$i226242$i) + ($cond$i217$i)|0);
      $__frm$addr$1$i = load4($__frm_nxt$i);
      $cmp63$i = ($__frm$addr$1$i>>>0)<($add$ptr$i>>>0);
      if ($cmp63$i) {
       $__frm$addr$0$i = $__frm$addr$1$i;$__to$0$i = $add$ptr53236240$i;$__to_end$0$i = $add$ptr57$i;$add$i35 = $add$i;
      } else {
       label = 37;
       break;
      }
     }
     if ((label|0) == 12) {
      store4($__cvtcount_$i,$add$i);
      $11 = load1($__size_$i$i$i);
      $tobool$i$i$i98$i = ($11<<24>>24)<(0);
      if ($tobool$i$i$i98$i) {
       $12 = load4($agg$result);
       $cond$i$i103$i = $12;
      } else {
       $cond$i$i103$i = $agg$result;
      }
      $sub$ptr$lhs$cast25$i = $__to$0$i;
      $sub$ptr$rhs$cast26$i = $cond$i$i103$i;
      $sub$ptr$sub27$i = (($sub$ptr$lhs$cast25$i) - ($sub$ptr$rhs$cast26$i))|0;
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc($agg$result,$sub$ptr$sub27$i);
      $13 = load1($__size_$i$i$i);
      $tobool$i$i$i118$i = ($13<<24>>24)<(0);
      if ($tobool$i$i$i118$i) {
       $14 = load4($__size_$i3$i213$pre$phi$iZZZ2D);
       $__cap_$i$i$i$i = ((($agg$result)) + 8|0);
       $15 = load4($__cap_$i$i$i$i);
       $and$i$i$i$i = $15 & 2147483647;
       $phitmp$i$i$i = (($and$i$i$i$i) + -1)|0;
       $cond$i34$i$i = $phitmp$i$i$i;$cond$i40$i$i = $14;
      } else {
       $conv$i$i$i119$i = $13&255;
       $cond$i34$i$i = 10;$cond$i40$i$i = $conv$i$i$i119$i;
      }
      $sub$ptr$sub$i$i$i$i = (($sub$ptr$lhs$cast$i) - ($sub$ptr$rhs$cast15$i))|0;
      $tobool$i$i = ($sub$ptr$sub$i$i$i$i|0)==(0);
      do {
       if (!($tobool$i$i)) {
        $sub$i$i = (($cond$i34$i$i) - ($cond$i40$i$i))|0;
        $cmp$i121$i = ($sub$i$i>>>0)<($sub$ptr$sub$i$i$i$i>>>0);
        if ($cmp$i121$i) {
         $add$i$i = (($cond$i40$i$i) + ($sub$ptr$sub$i$i$i$i))|0;
         $sub5$i$i = (($add$i$i) - ($cond$i34$i$i))|0;
         __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj($agg$result,$cond$i34$i$i,$sub5$i$i,$cond$i40$i$i,$cond$i40$i$i);
         $$pre$i$i = load1($__size_$i$i$i);
         $16 = $$pre$i$i;
        } else {
         $16 = $13;
        }
        $tobool$i$i26$i$i = ($16<<24>>24)<(0);
        if ($tobool$i$i26$i$i) {
         $17 = load4($agg$result);
         $cond$i29$i$i = $17;
        } else {
         $cond$i29$i$i = $agg$result;
        }
        $add$ptr$i$i = (($cond$i29$i$i) + ($cond$i40$i$i)|0);
        $cmp735$i$i = ($__frm$addr$0$i|0)==($add$ptr$i|0);
        if ($cmp735$i$i) {
         $__p$0$lcssa$i$i = $add$ptr$i$i;
        } else {
         $__first$addr$036$i$i = $__frm$addr$0$i;$__p$037$i$i = $add$ptr$i$i;
         while(1) {
          $18 = load1($__first$addr$036$i$i);
          store1($__p$037$i$i,$18);
          $incdec$ptr$i$i = ((($__p$037$i$i)) + 1|0);
          $incdec$ptr8$i$i = ((($__first$addr$036$i$i)) + 1|0);
          $cmp7$i$i = ($incdec$ptr8$i$i|0)==($add$ptr$i|0);
          if ($cmp7$i$i) {
           break;
          } else {
           $__first$addr$036$i$i = $incdec$ptr8$i$i;$__p$037$i$i = $incdec$ptr$i$i;
          }
         }
         $19 = (($cond$i40$i$i) - ($sub$ptr$rhs$cast15$i))|0;
         $scevgep$i$i = (($add$ptr$i) + ($19)|0);
         $scevgep38$i$i = $scevgep$i$i;
         $scevgep39$i$i = (($cond$i29$i$i) + ($scevgep38$i$i)|0);
         $__p$0$lcssa$i$i = $scevgep39$i$i;
        }
        store1($__p$0$lcssa$i$i,0);
        $add9$i$i = (($cond$i40$i$i) + ($sub$ptr$sub$i$i$i$i))|0;
        $20 = load1($__size_$i$i$i);
        $tobool$i$i22$i$i = ($20<<24>>24)<(0);
        if ($tobool$i$i22$i$i) {
         store4($__size_$i3$i213$pre$phi$iZZZ2D,$add9$i$i);
         break;
        } else {
         $conv$i$i23$i$i = $add9$i$i&255;
         store1($__size_$i$i$i,$conv$i$i23$i$i);
         break;
        }
       }
      } while(0);
      $53 = $__st$i;$__size_$i$i202$pre$phi$iZZZ2D = $__size_$i$i$i;
      label = 40;
      break;
     }
     else if ((label|0) == 28) {
      store4($__cvtcount_$i,$add$i);
      $21 = load4($__to_nxt$i);
      $22 = load1($__size_$i$i$i);
      $tobool$i$i$i126$i = ($22<<24>>24)<(0);
      if ($tobool$i$i$i126$i) {
       $23 = load4($agg$result);
       $cond$i$i131$i = $23;
      } else {
       $cond$i$i131$i = $agg$result;
      }
      $sub$ptr$rhs$cast37$i = $cond$i$i131$i;
      $sub$ptr$sub38$i = (($21) - ($sub$ptr$rhs$cast37$i))|0;
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc($agg$result,$sub$ptr$sub38$i);
      $53 = $__st$i;$__size_$i$i202$pre$phi$iZZZ2D = $__size_$i$i$i;
      label = 40;
      break;
     }
     else if ((label|0) == 37) {
      store4($__cvtcount_$i,$add$i);
      $$ph266$i = $__st$i;
      break;
     }
     else if ((label|0) == 39) {
      store4($__cvtcount_$i,$add$i);
      $$ph266$i = $__st$i;
      break;
     }
    }
   } while(0);
   do {
    if ((label|0) == 40) {
     $30 = load1($__size_$i$i202$pre$phi$iZZZ2D);
     $tobool$i$i203$i = ($30<<24>>24)<(0);
     if ($tobool$i$i203$i) {
      $__size_$i3$i204$i = ((($agg$result)) + 4|0);
      $31 = load4($__size_$i3$i204$i);
      $__cap_$i$i195$i = ((($agg$result)) + 8|0);
      $32 = load4($__cap_$i$i195$i);
      $and$i$i196$i = $32 & 2147483647;
      $phitmp$i197$i = (($and$i$i196$i) + -1)|0;
      $cond$i199$i = $phitmp$i197$i;$cond$i208323$i = $31;
     } else {
      $conv$i$i206$i = $30&255;
      $cond$i199$i = 10;$cond$i208323$i = $conv$i$i206$i;
     }
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc($agg$result,$cond$i199$i);
     $33 = load1($__size_$i$i202$pre$phi$iZZZ2D);
     $tobool$i$i$i170$i = ($33<<24>>24)<(0);
     if ($tobool$i$i$i170$i) {
      $34 = load4($agg$result);
      $__size_$i3$i162$i = ((($agg$result)) + 4|0);
      $35 = load4($__size_$i3$i162$i);
      $$pn346$i = $34;$__size_$i3$i$pre$phi$iZZZ2D = $__size_$i3$i162$i;$cond$i166$i = $35;
     } else {
      $conv$i$i164$i = $33&255;
      $$pre316$i = ((($agg$result)) + 4|0);
      $$pn346$i = $agg$result;$__size_$i3$i$pre$phi$iZZZ2D = $$pre316$i;$cond$i166$i = $conv$i$i164$i;
     }
     $add$ptr78252$i = (($$pn346$i) + ($cond$i208323$i)|0);
     $add$ptr81$i = (($add$ptr78252$i) + ($cond$i166$i)|0);
     $36 = load4($__cvtptr_$i);
     $__to75$0$i = $add$ptr78252$i;$__to_end79$0$i = $add$ptr81$i;
     L66: while(1) {
      $vtable$i144$i = load4($36);
      $vfn$i145$i = ((($vtable$i144$i)) + 20|0);
      $37 = load4($vfn$i145$i);
      $call$i146$i = (FUNCTION_TABLE_iiiiii[$37 & 7]($36,$__st$i,$__to75$0$i,$__to_end79$0$i,$__frm_nxt$i)|0);
      switch ($call$i146$i|0) {
      case 3:  {
       label = 48;
       break L66;
       break;
      }
      case 0:  {
       label = 51;
       break L66;
       break;
      }
      case 1:  {
       break;
      }
      default: {
       label = 60;
       break L66;
      }
      }
      $43 = load4($__frm_nxt$i);
      $44 = load1($__size_$i$i202$pre$phi$iZZZ2D);
      $tobool$i$i$i87$i = ($44<<24>>24)<(0);
      if ($tobool$i$i$i87$i) {
       $45 = load4($agg$result);
       $cond$i$i92$i = $45;
      } else {
       $cond$i$i92$i = $agg$result;
      }
      $sub$ptr$rhs$cast111$i = $cond$i$i92$i;
      $sub$ptr$sub112$i = (($43) - ($sub$ptr$rhs$cast111$i))|0;
      $mul113$i = $sub$ptr$sub112$i << 1;
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc($agg$result,$mul113$i);
      $46 = load1($__size_$i$i202$pre$phi$iZZZ2D);
      $tobool$i$i$i68$i = ($46<<24>>24)<(0);
      if ($tobool$i$i$i68$i) {
       $47 = load4($agg$result);
       $48 = load4($__size_$i3$i$pre$phi$iZZZ2D);
       $cond$i$i64263$i = $47;$cond$i56$i = $48;
      } else {
       $conv$i$i$i8 = $46&255;
       $cond$i$i64263$i = $agg$result;$cond$i56$i = $conv$i$i$i8;
      }
      $add$ptr118257261$i = (($cond$i$i64263$i) + ($sub$ptr$sub112$i)|0);
      $add$ptr122$i = (($cond$i$i64263$i) + ($cond$i56$i)|0);
      $__to75$0$i = $add$ptr118257261$i;$__to_end79$0$i = $add$ptr122$i;
     }
     if ((label|0) == 48) {
      $38 = load1($__size_$i$i202$pre$phi$iZZZ2D);
      $tobool$i$i$i136$i = ($38<<24>>24)<(0);
      if ($tobool$i$i$i136$i) {
       $39 = load4($agg$result);
       $cond$i$i141$i = $39;
      } else {
       $cond$i$i141$i = $agg$result;
      }
      $sub$ptr$lhs$cast92$i = $__to75$0$i;
      $sub$ptr$rhs$cast93$i = $cond$i$i141$i;
      $sub$ptr$sub94$i = (($sub$ptr$lhs$cast92$i) - ($sub$ptr$rhs$cast93$i))|0;
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc($agg$result,$sub$ptr$sub94$i);
     }
     else if ((label|0) == 51) {
      $40 = load4($__frm_nxt$i);
      $41 = load1($__size_$i$i202$pre$phi$iZZZ2D);
      $tobool$i$i$i107$i = ($41<<24>>24)<(0);
      if ($tobool$i$i$i107$i) {
       $42 = load4($agg$result);
       $cond$i$i112$i = $42;
      } else {
       $cond$i$i112$i = $agg$result;
      }
      $sub$ptr$rhs$cast102$i = $cond$i$i112$i;
      $sub$ptr$sub103$i = (($40) - ($sub$ptr$rhs$cast102$i))|0;
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc($agg$result,$sub$ptr$sub103$i);
     }
     else if ((label|0) == 60) {
      $$ph266$i = $53;
      break;
     }
     $51 = $36;
     break L1;
    }
   } while(0);
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($agg$result);
   $__size_$i$i$i47$i$phi$trans$insert = ((($converter)) + 11|0);
   $$pre = load1($__size_$i$i$i47$i$phi$trans$insert);
   $49 = $$pre;
   label = 63;
  }
 } while(0);
 do {
  if ((label|0) == 63) {
   $tobool$i$i$i48$i = ($49<<24>>24)<(0);
   $__size_$i3$i$i$i = ((($converter)) + 4|0);
   $50 = load4($__size_$i3$i$i$i);
   $conv$i$i$i$i = $49&255;
   $cond$i$i51$i = $tobool$i$i$i48$i ? $50 : $conv$i$i$i$i;
   $cmp$i$i = ($cond$i$i51$i|0)==(0);
   if ($cmp$i$i) {
    $exception$i = (___cxa_allocate_exception(8)|0);
    __ZNSt13runtime_errorC2EPKc($exception$i);
    store4($exception$i,(2756));
    ___cxa_throw(($exception$i|0),(1576|0),(16|0));
    // unreachable;
   } else {
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($agg$result,$converter);
    $$pre39 = load4($__cvtptr_$i);
    $51 = $$pre39;
    break;
   }
  }
 } while(0);
 $isnull$i3 = ($51|0)==(0|0);
 if ($isnull$i3) {
  $__wide_err_string_$i7 = ((($converter)) + 12|0);
  __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($__wide_err_string_$i7);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($converter);
  STACKTOP = sp;return;
 }
 $vtable$i4 = load4($51);
 $vfn$i5 = ((($vtable$i4)) + 4|0);
 $52 = load4($vfn$i5);
 FUNCTION_TABLE_vi[$52 & 31]($51);
 $__wide_err_string_$i7 = ((($converter)) + 12|0);
 __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($__wide_err_string_$i7);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($converter);
 STACKTOP = sp;return;
}
function __ZNSt3__212codecvt_utf8IwLm1114111ELNS_12codecvt_modeE0EED0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt3__27codecvtIwc11__mbstate_tED2Ev($this);
 __ZdlPv($this);
 return;
}
function __ZNSt3__26vectorIPN6asmdom5VNodeENS_9allocatorIS3_EEE21__push_back_slow_pathIS3_EEvOT_($this,$__x) {
 $this = $this|0;
 $__x = $__x|0;
 var $$sroa$speculated$$i = 0, $$sroa$speculated$i = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $__end_$i = 0, $__first_$i$i$i$i$i$i = 0, $add = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr5$i = 0, $call$i$i$i$i = 0, $cmp$i = 0, $cmp$i$i = 0;
 var $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i22 = 0, $cmp3$i = 0, $cond$i = 0, $exception$i$i$i = 0, $idx$neg$i$i = 0, $incdec$ptr = 0, $mul$i = 0, $mul$i$i$i = 0, $sub$ptr$div$i = 0, $sub$ptr$div$i$i$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i$i = 0, $tobool$i12 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__end_$i = ((($this)) + 4|0);
 $0 = load4($__end_$i);
 $1 = load4($this);
 $sub$ptr$sub$i = (($0) - ($1))|0;
 $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
 $add = (($sub$ptr$div$i) + 1)|0;
 $cmp$i = ($add>>>0)>(1073741823);
 if ($cmp$i) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $__first_$i$i$i$i$i$i = ((($this)) + 8|0);
 $2 = load4($__first_$i$i$i$i$i$i);
 $sub$ptr$sub$i$i$i = (($2) - ($1))|0;
 $sub$ptr$div$i$i$i = $sub$ptr$sub$i$i$i >> 2;
 $cmp3$i = ($sub$ptr$div$i$i$i>>>0)<(536870911);
 $mul$i = $sub$ptr$sub$i$i$i >> 1;
 $cmp$i$i$i$i = ($mul$i>>>0)<($add>>>0);
 $$sroa$speculated$i = $cmp$i$i$i$i ? $add : $mul$i;
 $$sroa$speculated$$i = $cmp3$i ? $$sroa$speculated$i : 1073741823;
 $cmp$i22 = ($$sroa$speculated$$i|0)==(0);
 do {
  if ($cmp$i22) {
   $cond$i = 0;
  } else {
   $cmp$i$i$i = ($$sroa$speculated$$i>>>0)>(1073741823);
   if ($cmp$i$i$i) {
    $exception$i$i$i = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($exception$i$i$i);
    ___cxa_throw(($exception$i$i$i|0),(1512|0),(12|0));
    // unreachable;
   } else {
    $mul$i$i$i = $$sroa$speculated$$i << 2;
    $call$i$i$i$i = (__Znwj($mul$i$i$i)|0);
    $cond$i = $call$i$i$i$i;
    break;
   }
  }
 } while(0);
 $add$ptr$i = (($cond$i) + ($sub$ptr$div$i<<2)|0);
 $add$ptr5$i = (($cond$i) + ($$sroa$speculated$$i<<2)|0);
 $3 = $add$ptr5$i;
 $4 = load4($__x);
 store4($add$ptr$i,$4);
 $incdec$ptr = ((($add$ptr$i)) + 4|0);
 $5 = $incdec$ptr;
 $idx$neg$i$i = (0 - ($sub$ptr$div$i))|0;
 $add$ptr$i$i = (($add$ptr$i) + ($idx$neg$i$i<<2)|0);
 $6 = $add$ptr$i$i;
 $cmp$i$i = ($sub$ptr$sub$i|0)>(0);
 if ($cmp$i$i) {
  $7 = $1;
  _memcpy(($add$ptr$i$i|0),($7|0),($sub$ptr$sub$i|0))|0;
 }
 store4($this,$6);
 store4($__end_$i,$5);
 store4($__first_$i$i$i$i$i$i,$3);
 $tobool$i12 = ($1|0)==(0);
 if ($tobool$i12) {
  return;
 }
 $8 = $1;
 __ZdlPv($8);
 return;
}
function __GLOBAL__sub_I_bind_cpp() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 __embind_register_void((1640|0),(10627|0));
 __embind_register_bool((1656|0),(10632|0),1,1,0);
 __embind_register_integer((1664|0),(10575|0),1,-128,127);
 __embind_register_integer((1680|0),(10580|0),1,-128,127);
 __embind_register_integer((1672|0),(10592|0),1,0,255);
 __embind_register_integer((1688|0),(10606|0),2,-32768,32767);
 __embind_register_integer((1696|0),(10612|0),2,0,65535);
 __embind_register_integer((1704|0),(10637|0),4,-2147483648,2147483647);
 __embind_register_integer((1712|0),(10641|0),4,0,-1);
 __embind_register_integer((1720|0),(10654|0),4,-2147483648,2147483647);
 __embind_register_integer((1728|0),(10659|0),4,0,-1);
 __embind_register_float((1736|0),(10673|0),4);
 __embind_register_float((1744|0),(10679|0),8);
 __embind_register_std_string((1048|0),(10563|0));
 __embind_register_std_string((1248|0),(5567|0));
 __embind_register_std_wstring((1224|0),4,(5600|0));
 __embind_register_emval((1040|0),(5613|0));
 __embind_register_memory_view((1272|0),0,(5629|0));
 __embind_register_memory_view((1280|0),0,(5659|0));
 __embind_register_memory_view((1288|0),1,(5696|0));
 __embind_register_memory_view((1296|0),2,(5735|0));
 __embind_register_memory_view((1304|0),3,(5766|0));
 __embind_register_memory_view((1312|0),4,(5806|0));
 __embind_register_memory_view((1320|0),5,(5835|0));
 __embind_register_memory_view((1328|0),4,(5873|0));
 __embind_register_memory_view((1336|0),5,(5903|0));
 __embind_register_memory_view((1280|0),0,(5942|0));
 __embind_register_memory_view((1288|0),1,(5974|0));
 __embind_register_memory_view((1296|0),2,(6007|0));
 __embind_register_memory_view((1304|0),3,(6040|0));
 __embind_register_memory_view((1312|0),4,(6074|0));
 __embind_register_memory_view((1320|0),5,(6107|0));
 __embind_register_memory_view((1344|0),6,(6141|0));
 __embind_register_memory_view((1352|0),7,(6172|0));
 __embind_register_memory_view((1360|0),7,(6204|0));
 return;
}
function ___getTypeName($ti) {
 $ti = $ti|0;
 var $0 = 0, $__type_name$i = 0, $call1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__type_name$i = ((($ti)) + 4|0);
 $0 = load4($__type_name$i);
 $call1 = (___strdup($0)|0);
 return ($call1|0);
}
function _malloc($bytes) {
 $bytes = $bytes|0;
 var $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i133 = 0, $$pre$i186 = 0, $$pre$i27$i = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i187Z2D = 0, $$pre$phi$i28$iZ2D = 0, $$pre$phi$iZ2D = 0, $$pre$phiZ2D = 0, $$sink$i = 0, $$sink$i$i = 0, $$sink$i166 = 0, $$sink2$i = 0, $$sink2$i183 = 0, $$sink4$i = 0, $$v$0$i = 0, $0 = 0, $1 = 0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0;
 var $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0;
 var $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $F$0$i$i = 0, $F104$0 = 0, $F197$0$i = 0, $F224$0$i$i = 0, $F290$0$i = 0, $I252$0$i$i = 0, $I316$0$i = 0, $I57$0$i$i = 0, $K105$0$i$i = 0, $K305$0$i$i = 0, $K373$0$i = 0, $R$1$i = 0, $R$1$i$i = 0, $R$1$i175 = 0;
 var $R$3$i = 0, $R$3$i$i = 0, $R$3$i179 = 0, $RP$1$i = 0, $RP$1$i$i = 0, $RP$1$i174 = 0, $T$0$i = 0, $T$0$i$i = 0, $T$0$i29$i = 0, $add$i = 0, $add$i$i = 0, $add$i134 = 0, $add$i152 = 0, $add$ptr = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr$i140 = 0, $add$ptr$i169 = 0, $add$ptr$i2$i$i = 0;
 var $add$ptr$i31$i = 0, $add$ptr$i38$i = 0, $add$ptr$i54$i = 0, $add$ptr14$i$i = 0, $add$ptr15$i$i = 0, $add$ptr16$i$i = 0, $add$ptr166 = 0, $add$ptr169 = 0, $add$ptr17$i$i = 0, $add$ptr178 = 0, $add$ptr181$i = 0, $add$ptr182 = 0, $add$ptr189$i = 0, $add$ptr190$i = 0, $add$ptr193 = 0, $add$ptr199 = 0, $add$ptr2$i$i = 0, $add$ptr205$i$i = 0, $add$ptr212$i$i = 0, $add$ptr225$i = 0;
 var $add$ptr227$i = 0, $add$ptr24$i$i = 0, $add$ptr262$i = 0, $add$ptr269$i = 0, $add$ptr273$i = 0, $add$ptr282$i = 0, $add$ptr3$i$i = 0, $add$ptr30$i$i = 0, $add$ptr369$i$i = 0, $add$ptr4$i$i = 0, $add$ptr4$i$i$i = 0, $add$ptr4$i36$i = 0, $add$ptr4$i43$i = 0, $add$ptr441$i = 0, $add$ptr5$i$i = 0, $add$ptr6$i$i = 0, $add$ptr6$i$i$i = 0, $add$ptr6$i47$i = 0, $add$ptr7$i$i = 0, $add$ptr81$i$i = 0;
 var $add$ptr95 = 0, $add$ptr98 = 0, $add10$i = 0, $add101$i = 0, $add110$i = 0, $add13$i = 0, $add14$i = 0, $add140$i = 0, $add144 = 0, $add150$i = 0, $add17$i = 0, $add17$i155 = 0, $add177$i = 0, $add18$i = 0, $add19$i = 0, $add2 = 0, $add20$i = 0, $add206$i$i = 0, $add212$i = 0, $add215$i = 0;
 var $add22$i = 0, $add246$i = 0, $add26$i$i = 0, $add268$i = 0, $add269$i$i = 0, $add274$i$i = 0, $add278$i$i = 0, $add280$i$i = 0, $add283$i$i = 0, $add337$i = 0, $add342$i = 0, $add346$i = 0, $add348$i = 0, $add351$i = 0, $add46$i = 0, $add50 = 0, $add51$i = 0, $add54 = 0, $add54$i = 0, $add58 = 0;
 var $add62 = 0, $add64 = 0, $add74$i$i = 0, $add77$i = 0, $add78$i = 0, $add79$i$i = 0, $add8 = 0, $add82$i = 0, $add83$i$i = 0, $add85$i$i = 0, $add86$i = 0, $add88$i$i = 0, $add9$i = 0, $add90$i = 0, $add92$i = 0, $and = 0, $and$i = 0, $and$i$i = 0, $and$i$i$i = 0, $and$i11$i = 0;
 var $and$i149 = 0, $and$i32$i = 0, $and$i39$i = 0, $and100$i = 0, $and103$i = 0, $and104$i = 0, $and106 = 0, $and11$add51$i = 0, $and11$i = 0, $and119$i$i = 0, $and12$i = 0, $and13$i = 0, $and13$i$i = 0, $and133$i$i = 0, $and14 = 0, $and145 = 0, $and17$i = 0, $and194$i = 0, $and194$i182 = 0, $and199$i = 0;
 var $and209$i$i = 0, $and21$i = 0, $and21$i156 = 0, $and227$i$i = 0, $and236$i = 0, $and264$i$i = 0, $and268$i$i = 0, $and273$i$i = 0, $and282$i$i = 0, $and29$i = 0, $and292$i = 0, $and295$i$i = 0, $and3$i = 0, $and3$i$i = 0, $and3$i$i$i = 0, $and3$i34$i = 0, $and3$i41$i = 0, $and30$i = 0, $and318$i$i = 0, $and32$i = 0;
 var $and32$i$i = 0, $and33$i$i = 0, $and331$i = 0, $and336$i = 0, $and341$i = 0, $and350$i = 0, $and363$i = 0, $and37$i$i = 0, $and387$i = 0, $and4 = 0, $and40$i$i = 0, $and41 = 0, $and42$i = 0, $and43 = 0, $and46 = 0, $and49 = 0, $and49$i = 0, $and49$i$i = 0, $and53 = 0, $and57 = 0;
 var $and6$i = 0, $and6$i$i = 0, $and6$i10$i = 0, $and6$i14$i = 0, $and61 = 0, $and64$i = 0, $and68$i = 0, $and69$i$i = 0, $and7 = 0, $and73$i = 0, $and73$i$i = 0, $and74 = 0, $and77$i = 0, $and78$i$i = 0, $and8$i = 0, $and80$i = 0, $and81$i = 0, $and85$i = 0, $and87$i$i = 0, $and89$i = 0;
 var $and9$i = 0, $and96$i$i = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i$i = 0, $arrayidx$i157 = 0, $arrayidx$i50$i = 0, $arrayidx103 = 0, $arrayidx103$i$i = 0, $arrayidx106$i = 0, $arrayidx107$i$i = 0, $arrayidx113$i = 0, $arrayidx113$i167 = 0, $arrayidx121$i = 0, $arrayidx123$i$i = 0, $arrayidx126$i$i = 0, $arrayidx137$i = 0, $arrayidx143$i$i = 0, $arrayidx148$i = 0, $arrayidx151$i = 0;
 var $arrayidx151$i$i = 0, $arrayidx154$i = 0, $arrayidx155$i = 0, $arrayidx161$i = 0, $arrayidx165$i = 0, $arrayidx165$i177 = 0, $arrayidx178$i$i = 0, $arrayidx184$i = 0, $arrayidx184$i$i = 0, $arrayidx195$i$i = 0, $arrayidx196$i = 0, $arrayidx204$i = 0, $arrayidx212$i = 0, $arrayidx223$i$i = 0, $arrayidx228$i = 0, $arrayidx23$i = 0, $arrayidx232$i = 0, $arrayidx239$i = 0, $arrayidx245$i = 0, $arrayidx256$i = 0;
 var $arrayidx27$i = 0, $arrayidx275$i = 0, $arrayidx287$i$i = 0, $arrayidx289$i = 0, $arrayidx290$i$i = 0, $arrayidx325$i$i = 0, $arrayidx355$i = 0, $arrayidx358$i = 0, $arrayidx394$i = 0, $arrayidx40$i = 0, $arrayidx44$i = 0, $arrayidx61$i = 0, $arrayidx65$i = 0, $arrayidx66 = 0, $arrayidx71$i = 0, $arrayidx75$i = 0, $arrayidx91$i$i = 0, $arrayidx92$i$i = 0, $arrayidx94$i = 0, $arrayidx94$i165 = 0;
 var $arrayidx96$i$i = 0, $bk$i = 0, $bk$i$i = 0, $bk$i171 = 0, $bk$i22$i = 0, $bk102$i$i = 0, $bk122 = 0, $bk124 = 0, $bk139$i$i = 0, $bk145$i = 0, $bk158$i$i = 0, $bk161$i$i = 0, $bk18 = 0, $bk218$i = 0, $bk220$i = 0, $bk246$i$i = 0, $bk248$i$i = 0, $bk302$i$i = 0, $bk311$i = 0, $bk313$i = 0;
 var $bk338$i$i = 0, $bk357$i$i = 0, $bk360$i$i = 0, $bk370$i = 0, $bk407$i = 0, $bk429$i = 0, $bk432$i = 0, $bk55$i$i = 0, $bk56$i = 0, $bk67$i$i = 0, $bk74$i$i = 0, $bk85 = 0, $bk91$i$i = 0, $br$2$ph$i = 0, $call107$i = 0, $call131$i = 0, $call132$i = 0, $call37$i = 0, $call68$i = 0, $call83$i = 0;
 var $child$i$i = 0, $child166$i$i = 0, $child289$i$i = 0, $child357$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp$i12$i = 0, $cmp$i146 = 0, $cmp$i3$i$i = 0, $cmp$i33$i = 0, $cmp$i40$i = 0, $cmp$i52$i = 0, $cmp$i9$i = 0, $cmp1 = 0, $cmp1$i = 0, $cmp10 = 0, $cmp100$i$i = 0, $cmp102$i = 0, $cmp104$i$i = 0;
 var $cmp105$i = 0, $cmp106$i$i = 0, $cmp108$i = 0, $cmp108$i$i = 0, $cmp116$i = 0, $cmp118$i = 0, $cmp119$i = 0, $cmp12$i = 0, $cmp120$i$i = 0, $cmp120$i24$i = 0, $cmp123$i = 0, $cmp124$i$i = 0, $cmp127$i = 0, $cmp128 = 0, $cmp128$i = 0, $cmp128$i$i = 0, $cmp133$i = 0, $cmp135$i = 0, $cmp137$i = 0, $cmp138$i = 0;
 var $cmp139 = 0, $cmp141$i = 0, $cmp146 = 0, $cmp147$i = 0, $cmp14795$i = 0, $cmp15$i = 0, $cmp151$i = 0, $cmp152$i = 0, $cmp155$i = 0, $cmp156 = 0, $cmp156$i = 0, $cmp157$i = 0, $cmp159$i = 0, $cmp162 = 0, $cmp162$i = 0, $cmp162$i176 = 0, $cmp166$i = 0, $cmp168$i$i = 0, $cmp174$i = 0, $cmp180$i = 0;
 var $cmp185$i = 0, $cmp185$i$i = 0, $cmp186 = 0, $cmp186$i = 0, $cmp19$i = 0, $cmp190$i = 0, $cmp191$i = 0, $cmp2$i$i = 0, $cmp2$i$i$i = 0, $cmp20$i$i = 0, $cmp203$i = 0, $cmp209$i = 0, $cmp21$i = 0, $cmp215$i$i = 0, $cmp218$i = 0, $cmp224$i = 0, $cmp228$i = 0, $cmp229$i = 0, $cmp24$i = 0, $cmp24$i$i = 0;
 var $cmp246$i = 0, $cmp254$i$i = 0, $cmp257$i = 0, $cmp258$i$i = 0, $cmp26$i = 0, $cmp265$i = 0, $cmp27$i$i = 0, $cmp28$i = 0, $cmp28$i$i = 0, $cmp284$i = 0, $cmp286$i = 0, $cmp29 = 0, $cmp3$i$i = 0, $cmp306$i$i = 0, $cmp31 = 0, $cmp319$i = 0, $cmp319$i$i = 0, $cmp32$i = 0, $cmp32$i137 = 0, $cmp323$i = 0;
 var $cmp327$i$i = 0, $cmp34$i = 0, $cmp34$i$i = 0, $cmp35$i = 0, $cmp36$i = 0, $cmp36$i$i = 0, $cmp374$i = 0, $cmp38$i = 0, $cmp38$i$i = 0, $cmp388$i = 0, $cmp396$i = 0, $cmp40$i = 0, $cmp43$i = 0, $cmp45$i = 0, $cmp46$i = 0, $cmp46$i$i = 0, $cmp49$i = 0, $cmp5 = 0, $cmp55$i = 0, $cmp55$i161 = 0;
 var $cmp57$i = 0, $cmp57$i162 = 0, $cmp59$i$i = 0, $cmp60$i = 0, $cmp62$i = 0, $cmp63$i = 0, $cmp63$i$i = 0, $cmp65$i = 0, $cmp66$i = 0, $cmp66$i139 = 0, $cmp69$i = 0, $cmp7$i$i = 0, $cmp70 = 0, $cmp72$i = 0, $cmp75$i$i = 0, $cmp76$i = 0, $cmp81$i = 0, $cmp85$i = 0, $cmp89$i = 0, $cmp9$i$i = 0;
 var $cmp90$i = 0, $cmp91$i = 0, $cmp93$i = 0, $cmp95$i = 0, $cmp96$i = 0, $cmp97$i = 0, $cmp97$i$i = 0, $cmp976$i = 0, $cmp99 = 0, $cond = 0, $cond$i = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i13$i = 0, $cond$i158 = 0, $cond$i35$i = 0, $cond$i42$i = 0, $cond1$i$i = 0, $cond115$i$i = 0, $cond13$i$i = 0;
 var $cond15$i$i = 0, $cond2$i = 0, $cond315$i$i = 0, $cond383$i = 0, $exitcond$i$i = 0, $fd$i = 0, $fd$i$i = 0, $fd$i172 = 0, $fd103$i$i = 0, $fd123 = 0, $fd140$i$i = 0, $fd146$i = 0, $fd148$i$i = 0, $fd160$i$i = 0, $fd219$i = 0, $fd247$i$i = 0, $fd303$i$i = 0, $fd312$i = 0, $fd339$i$i = 0, $fd344$i$i = 0;
 var $fd359$i$i = 0, $fd371$i = 0, $fd408$i = 0, $fd416$i = 0, $fd431$i = 0, $fd54$i$i = 0, $fd57$i = 0, $fd68$i$i = 0, $fd69 = 0, $fd78$i$i = 0, $fd9 = 0, $fd92$i$i = 0, $head = 0, $head$i = 0, $head$i$i = 0, $head$i$i$i = 0, $head$i159 = 0, $head$i18$i = 0, $head$i37$i = 0, $head$i46$i = 0;
 var $head118$i$i = 0, $head168 = 0, $head173 = 0, $head177 = 0, $head179 = 0, $head179$i = 0, $head182$i = 0, $head187$i = 0, $head189$i = 0, $head195 = 0, $head198 = 0, $head208$i$i = 0, $head211$i$i = 0, $head23$i$i = 0, $head25 = 0, $head26$i$i = 0, $head265$i = 0, $head268$i = 0, $head271$i = 0, $head274$i = 0;
 var $head279$i = 0, $head281$i = 0, $head29$i = 0, $head29$i$i = 0, $head317$i$i = 0, $head32$i$i = 0, $head34$i$i = 0, $head386$i = 0, $head7$i$i = 0, $head7$i$i$i = 0, $head7$i48$i = 0, $head94 = 0, $head97 = 0, $head99$i = 0, $i$01$i$i = 0, $idx$0$i = 0, $inc$i$i = 0, $index$i = 0, $index$i$i = 0, $index$i180 = 0;
 var $index$i25$i = 0, $index288$i$i = 0, $index356$i = 0, $magic$i$i = 0, $nb$0 = 0, $neg = 0, $neg$i = 0, $neg$i$i = 0, $neg$i136 = 0, $neg$i181 = 0, $neg103$i = 0, $neg13 = 0, $neg132$i$i = 0, $neg48$i = 0, $neg73 = 0, $next$i = 0, $next$i$i = 0, $next$i$i$i = 0, $next231$i = 0, $not$cmp$i = 0;
 var $not$cmp107$i = 0, $not$cmp114$i = 0, $not$cmp141$i = 0, $not$cmp144$i$i = 0, $not$cmp205$i = 0, $not$cmp3$i = 0, $not$cmp493$i = 0, $oldfirst$0$i$i = 0, $or$cond$i = 0, $or$cond$i163 = 0, $or$cond1$i = 0, $or$cond1$i160 = 0, $or$cond2$i = 0, $or$cond3$i = 0, $or$cond4$i = 0, $or$cond5$i = 0, $or$cond7$i = 0, $or$cond7$not$i = 0, $or$cond8$i = 0, $or$cond93$i = 0;
 var $or$cond94$i = 0, $or$i = 0, $or$i$i = 0, $or$i$i$i = 0, $or$i164 = 0, $or$i45$i = 0, $or101$i$i = 0, $or110 = 0, $or167 = 0, $or172 = 0, $or176 = 0, $or178$i = 0, $or180 = 0, $or183$i = 0, $or186$i = 0, $or188$i = 0, $or19$i$i = 0, $or194 = 0, $or197 = 0, $or204$i = 0;
 var $or210$i$i = 0, $or22$i$i = 0, $or23 = 0, $or232$i$i = 0, $or26 = 0, $or264$i = 0, $or267$i = 0, $or270$i = 0, $or275$i = 0, $or278$i = 0, $or28$i$i = 0, $or280$i = 0, $or297$i = 0, $or300$i$i = 0, $or33$i$i = 0, $or368$i = 0, $or40 = 0, $or44$i$i = 0, $or93 = 0, $or96 = 0;
 var $parent$i = 0, $parent$i$i = 0, $parent$i170 = 0, $parent$i23$i = 0, $parent135$i = 0, $parent138$i$i = 0, $parent149$i = 0, $parent162$i$i = 0, $parent165$i$i = 0, $parent166$i = 0, $parent179$i$i = 0, $parent196$i$i = 0, $parent226$i = 0, $parent240$i = 0, $parent257$i = 0, $parent301$i$i = 0, $parent337$i$i = 0, $parent361$i$i = 0, $parent369$i = 0, $parent406$i = 0;
 var $parent433$i = 0, $qsize$0$i$i = 0, $retval$0 = 0, $rsize$0$i = 0, $rsize$0$lcssa$i = 0, $rsize$07$i = 0, $rsize$1$i = 0, $rsize$3$i = 0, $rsize$4$lcssa$i = 0, $rsize$48$i = 0, $rst$0$i = 0, $rst$1$i = 0, $sflags193$i = 0, $sflags235$i = 0, $shl = 0, $shl$i = 0, $shl$i$i = 0, $shl$i150 = 0, $shl$i49$i = 0, $shl102 = 0;
 var $shl105 = 0, $shl116$i$i = 0, $shl12 = 0, $shl127$i$i = 0, $shl131$i$i = 0, $shl15$i = 0, $shl18$i = 0, $shl192$i = 0, $shl195$i = 0, $shl198$i = 0, $shl22 = 0, $shl222$i$i = 0, $shl226$i$i = 0, $shl265$i$i = 0, $shl270$i$i = 0, $shl276$i$i = 0, $shl279$i$i = 0, $shl288$i = 0, $shl291$i = 0, $shl294$i$i = 0;
 var $shl31$i = 0, $shl316$i$i = 0, $shl326$i$i = 0, $shl333$i = 0, $shl338$i = 0, $shl344$i = 0, $shl347$i = 0, $shl35 = 0, $shl362$i = 0, $shl37 = 0, $shl384$i = 0, $shl39$i$i = 0, $shl395$i = 0, $shl48$i$i = 0, $shl52$i = 0, $shl60$i = 0, $shl65 = 0, $shl70$i$i = 0, $shl72 = 0, $shl75$i$i = 0;
 var $shl81$i$i = 0, $shl84$i$i = 0, $shl9$i = 0, $shl90 = 0, $shl95$i$i = 0, $shr = 0, $shr$i = 0, $shr$i$i = 0, $shr$i145 = 0, $shr$i21$i = 0, $shr101 = 0, $shr11$i = 0, $shr11$i153 = 0, $shr110$i$i = 0, $shr12$i = 0, $shr124$i$i = 0, $shr15$i = 0, $shr16$i = 0, $shr16$i154 = 0, $shr19$i = 0;
 var $shr194$i = 0, $shr20$i = 0, $shr214$i$i = 0, $shr253$i$i = 0, $shr263$i$i = 0, $shr267$i$i = 0, $shr27$i = 0, $shr272$i$i = 0, $shr277$i$i = 0, $shr281$i$i = 0, $shr283$i = 0, $shr3 = 0, $shr310$i$i = 0, $shr318$i = 0, $shr323$i$i = 0, $shr330$i = 0, $shr335$i = 0, $shr340$i = 0, $shr345$i = 0, $shr349$i = 0;
 var $shr378$i = 0, $shr392$i = 0, $shr4$i = 0, $shr42$i = 0, $shr45 = 0, $shr47 = 0, $shr48 = 0, $shr5$i = 0, $shr5$i148 = 0, $shr51 = 0, $shr52 = 0, $shr55 = 0, $shr56 = 0, $shr58$i$i = 0, $shr59 = 0, $shr60 = 0, $shr63 = 0, $shr68$i$i = 0, $shr7$i = 0, $shr7$i151 = 0;
 var $shr72$i = 0, $shr72$i$i = 0, $shr75$i = 0, $shr76$i = 0, $shr77$i$i = 0, $shr79$i = 0, $shr8$i = 0, $shr80$i = 0, $shr82$i$i = 0, $shr83$i = 0, $shr84$i = 0, $shr86$i$i = 0, $shr87$i = 0, $shr88$i = 0, $shr91$i = 0, $size$i$i = 0, $size$i$i$i = 0, $size188$i = 0, $size245$i = 0, $sizebits$0$i = 0;
 var $sizebits$0$shl52$i = 0, $sp$0$i$i = 0, $sp$0$i$i$i = 0, $sp$0104$i = 0, $sp$1103$i = 0, $ssize$2$ph$i = 0, $sub = 0, $sub$i = 0, $sub$i135 = 0, $sub$i144 = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast$i$i = 0, $sub$ptr$lhs$cast$i15$i = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast$i$i = 0, $sub$ptr$rhs$cast$i16$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i17$i = 0, $sub$ptr$sub$tsize$4$i = 0;
 var $sub10$i = 0, $sub101$i = 0, $sub101$rsize$4$i = 0, $sub112$i = 0, $sub113$i$i = 0, $sub118$i = 0, $sub14$i = 0, $sub16$i$i = 0, $sub160 = 0, $sub172$i = 0, $sub18$i$i = 0, $sub190 = 0, $sub2$i = 0, $sub22$i = 0, $sub260$i = 0, $sub262$i$i = 0, $sub266$i$i = 0, $sub271$i$i = 0, $sub275$i$i = 0, $sub30$i = 0;
 var $sub31$i = 0, $sub31$rsize$0$i = 0, $sub313$i$i = 0, $sub329$i = 0, $sub33$i = 0, $sub334$i = 0, $sub339$i = 0, $sub343$i = 0, $sub381$i = 0, $sub4$i = 0, $sub41$i = 0, $sub42 = 0, $sub44 = 0, $sub5$i$i = 0, $sub5$i$i$i = 0, $sub5$i44$i = 0, $sub50$i = 0, $sub6$i = 0, $sub63$i = 0, $sub67$i = 0;
 var $sub67$i$i = 0, $sub70$i = 0, $sub71$i$i = 0, $sub76$i$i = 0, $sub80$i$i = 0, $sub91 = 0, $sub99$i = 0, $t$0$i = 0, $t$2$i = 0, $t$4$ph$i = 0, $t$4$v$4$i = 0, $t$47$i = 0, $tbase$792$i = 0, $tobool$i$i = 0, $tobool107 = 0, $tobool195$i = 0, $tobool200$i = 0, $tobool228$i$i = 0, $tobool237$i = 0, $tobool293$i = 0;
 var $tobool296$i$i = 0, $tobool30$i = 0, $tobool364$i = 0, $tobool97$i$i = 0, $tsize$2617179$i = 0, $tsize$4$i = 0, $tsize$791$i = 0, $v$0$i = 0, $v$0$lcssa$i = 0, $v$08$i = 0, $v$1$i = 0, $v$3$i = 0, $v$4$lcssa$i = 0, $v$4$ph$i = 0, $v$49$i = 0, $xor$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $magic$i$i = sp;
 $cmp = ($bytes>>>0)<(245);
 do {
  if ($cmp) {
   $cmp1 = ($bytes>>>0)<(11);
   $add2 = (($bytes) + 11)|0;
   $and = $add2 & -8;
   $cond = $cmp1 ? 16 : $and;
   $shr = $cond >>> 3;
   $0 = load4(10704);
   $shr3 = $0 >>> $shr;
   $and4 = $shr3 & 3;
   $cmp5 = ($and4|0)==(0);
   if (!($cmp5)) {
    $neg = $shr3 & 1;
    $and7 = $neg ^ 1;
    $add8 = (($and7) + ($shr))|0;
    $shl = $add8 << 1;
    $arrayidx = (10744 + ($shl<<2)|0);
    $1 = ((($arrayidx)) + 8|0);
    $2 = load4($1);
    $fd9 = ((($2)) + 8|0);
    $3 = load4($fd9);
    $cmp10 = ($arrayidx|0)==($3|0);
    if ($cmp10) {
     $shl12 = 1 << $add8;
     $neg13 = $shl12 ^ -1;
     $and14 = $0 & $neg13;
     store4(10704,$and14);
    } else {
     $bk18 = ((($3)) + 12|0);
     store4($bk18,$arrayidx);
     store4($1,$3);
    }
    $shl22 = $add8 << 3;
    $or23 = $shl22 | 3;
    $head = ((($2)) + 4|0);
    store4($head,$or23);
    $add$ptr = (($2) + ($shl22)|0);
    $head25 = ((($add$ptr)) + 4|0);
    $4 = load4($head25);
    $or26 = $4 | 1;
    store4($head25,$or26);
    $retval$0 = $fd9;
    STACKTOP = sp;return ($retval$0|0);
   }
   $5 = load4((10712));
   $cmp29 = ($cond>>>0)>($5>>>0);
   if ($cmp29) {
    $cmp31 = ($shr3|0)==(0);
    if (!($cmp31)) {
     $shl35 = $shr3 << $shr;
     $shl37 = 2 << $shr;
     $sub = (0 - ($shl37))|0;
     $or40 = $shl37 | $sub;
     $and41 = $shl35 & $or40;
     $sub42 = (0 - ($and41))|0;
     $and43 = $and41 & $sub42;
     $sub44 = (($and43) + -1)|0;
     $shr45 = $sub44 >>> 12;
     $and46 = $shr45 & 16;
     $shr47 = $sub44 >>> $and46;
     $shr48 = $shr47 >>> 5;
     $and49 = $shr48 & 8;
     $add50 = $and49 | $and46;
     $shr51 = $shr47 >>> $and49;
     $shr52 = $shr51 >>> 2;
     $and53 = $shr52 & 4;
     $add54 = $add50 | $and53;
     $shr55 = $shr51 >>> $and53;
     $shr56 = $shr55 >>> 1;
     $and57 = $shr56 & 2;
     $add58 = $add54 | $and57;
     $shr59 = $shr55 >>> $and57;
     $shr60 = $shr59 >>> 1;
     $and61 = $shr60 & 1;
     $add62 = $add58 | $and61;
     $shr63 = $shr59 >>> $and61;
     $add64 = (($add62) + ($shr63))|0;
     $shl65 = $add64 << 1;
     $arrayidx66 = (10744 + ($shl65<<2)|0);
     $6 = ((($arrayidx66)) + 8|0);
     $7 = load4($6);
     $fd69 = ((($7)) + 8|0);
     $8 = load4($fd69);
     $cmp70 = ($arrayidx66|0)==($8|0);
     if ($cmp70) {
      $shl72 = 1 << $add64;
      $neg73 = $shl72 ^ -1;
      $and74 = $0 & $neg73;
      store4(10704,$and74);
      $10 = $and74;
     } else {
      $bk85 = ((($8)) + 12|0);
      store4($bk85,$arrayidx66);
      store4($6,$8);
      $10 = $0;
     }
     $shl90 = $add64 << 3;
     $sub91 = (($shl90) - ($cond))|0;
     $or93 = $cond | 3;
     $head94 = ((($7)) + 4|0);
     store4($head94,$or93);
     $add$ptr95 = (($7) + ($cond)|0);
     $or96 = $sub91 | 1;
     $head97 = ((($add$ptr95)) + 4|0);
     store4($head97,$or96);
     $add$ptr98 = (($add$ptr95) + ($sub91)|0);
     store4($add$ptr98,$sub91);
     $cmp99 = ($5|0)==(0);
     if (!($cmp99)) {
      $9 = load4((10724));
      $shr101 = $5 >>> 3;
      $shl102 = $shr101 << 1;
      $arrayidx103 = (10744 + ($shl102<<2)|0);
      $shl105 = 1 << $shr101;
      $and106 = $10 & $shl105;
      $tobool107 = ($and106|0)==(0);
      if ($tobool107) {
       $or110 = $10 | $shl105;
       store4(10704,$or110);
       $$pre = ((($arrayidx103)) + 8|0);
       $$pre$phiZ2D = $$pre;$F104$0 = $arrayidx103;
      } else {
       $11 = ((($arrayidx103)) + 8|0);
       $12 = load4($11);
       $$pre$phiZ2D = $11;$F104$0 = $12;
      }
      store4($$pre$phiZ2D,$9);
      $bk122 = ((($F104$0)) + 12|0);
      store4($bk122,$9);
      $fd123 = ((($9)) + 8|0);
      store4($fd123,$F104$0);
      $bk124 = ((($9)) + 12|0);
      store4($bk124,$arrayidx103);
     }
     store4((10712),$sub91);
     store4((10724),$add$ptr95);
     $retval$0 = $fd69;
     STACKTOP = sp;return ($retval$0|0);
    }
    $13 = load4((10708));
    $cmp128 = ($13|0)==(0);
    if ($cmp128) {
     $nb$0 = $cond;
    } else {
     $sub$i = (0 - ($13))|0;
     $and$i = $13 & $sub$i;
     $sub2$i = (($and$i) + -1)|0;
     $shr$i = $sub2$i >>> 12;
     $and3$i = $shr$i & 16;
     $shr4$i = $sub2$i >>> $and3$i;
     $shr5$i = $shr4$i >>> 5;
     $and6$i = $shr5$i & 8;
     $add$i = $and6$i | $and3$i;
     $shr7$i = $shr4$i >>> $and6$i;
     $shr8$i = $shr7$i >>> 2;
     $and9$i = $shr8$i & 4;
     $add10$i = $add$i | $and9$i;
     $shr11$i = $shr7$i >>> $and9$i;
     $shr12$i = $shr11$i >>> 1;
     $and13$i = $shr12$i & 2;
     $add14$i = $add10$i | $and13$i;
     $shr15$i = $shr11$i >>> $and13$i;
     $shr16$i = $shr15$i >>> 1;
     $and17$i = $shr16$i & 1;
     $add18$i = $add14$i | $and17$i;
     $shr19$i = $shr15$i >>> $and17$i;
     $add20$i = (($add18$i) + ($shr19$i))|0;
     $arrayidx$i = (11008 + ($add20$i<<2)|0);
     $14 = load4($arrayidx$i);
     $head$i = ((($14)) + 4|0);
     $15 = load4($head$i);
     $and21$i = $15 & -8;
     $sub22$i = (($and21$i) - ($cond))|0;
     $arrayidx232$i = ((($14)) + 16|0);
     $16 = load4($arrayidx232$i);
     $not$cmp3$i = ($16|0)==(0|0);
     $$sink4$i = $not$cmp3$i&1;
     $arrayidx275$i = (((($14)) + 16|0) + ($$sink4$i<<2)|0);
     $17 = load4($arrayidx275$i);
     $cmp286$i = ($17|0)==(0|0);
     if ($cmp286$i) {
      $rsize$0$lcssa$i = $sub22$i;$v$0$lcssa$i = $14;
     } else {
      $18 = $17;$rsize$07$i = $sub22$i;$v$08$i = $14;
      while(1) {
       $head29$i = ((($18)) + 4|0);
       $19 = load4($head29$i);
       $and30$i = $19 & -8;
       $sub31$i = (($and30$i) - ($cond))|0;
       $cmp32$i = ($sub31$i>>>0)<($rsize$07$i>>>0);
       $sub31$rsize$0$i = $cmp32$i ? $sub31$i : $rsize$07$i;
       $$v$0$i = $cmp32$i ? $18 : $v$08$i;
       $arrayidx23$i = ((($18)) + 16|0);
       $20 = load4($arrayidx23$i);
       $not$cmp$i = ($20|0)==(0|0);
       $$sink$i = $not$cmp$i&1;
       $arrayidx27$i = (((($18)) + 16|0) + ($$sink$i<<2)|0);
       $21 = load4($arrayidx27$i);
       $cmp28$i = ($21|0)==(0|0);
       if ($cmp28$i) {
        $rsize$0$lcssa$i = $sub31$rsize$0$i;$v$0$lcssa$i = $$v$0$i;
        break;
       } else {
        $18 = $21;$rsize$07$i = $sub31$rsize$0$i;$v$08$i = $$v$0$i;
       }
      }
     }
     $add$ptr$i = (($v$0$lcssa$i) + ($cond)|0);
     $cmp35$i = ($v$0$lcssa$i>>>0)<($add$ptr$i>>>0);
     if ($cmp35$i) {
      $parent$i = ((($v$0$lcssa$i)) + 24|0);
      $22 = load4($parent$i);
      $bk$i = ((($v$0$lcssa$i)) + 12|0);
      $23 = load4($bk$i);
      $cmp40$i = ($23|0)==($v$0$lcssa$i|0);
      do {
       if ($cmp40$i) {
        $arrayidx61$i = ((($v$0$lcssa$i)) + 20|0);
        $25 = load4($arrayidx61$i);
        $cmp62$i = ($25|0)==(0|0);
        if ($cmp62$i) {
         $arrayidx65$i = ((($v$0$lcssa$i)) + 16|0);
         $26 = load4($arrayidx65$i);
         $cmp66$i = ($26|0)==(0|0);
         if ($cmp66$i) {
          $R$3$i = 0;
          break;
         } else {
          $R$1$i = $26;$RP$1$i = $arrayidx65$i;
         }
        } else {
         $R$1$i = $25;$RP$1$i = $arrayidx61$i;
        }
        while(1) {
         $arrayidx71$i = ((($R$1$i)) + 20|0);
         $27 = load4($arrayidx71$i);
         $cmp72$i = ($27|0)==(0|0);
         if (!($cmp72$i)) {
          $R$1$i = $27;$RP$1$i = $arrayidx71$i;
          continue;
         }
         $arrayidx75$i = ((($R$1$i)) + 16|0);
         $28 = load4($arrayidx75$i);
         $cmp76$i = ($28|0)==(0|0);
         if ($cmp76$i) {
          break;
         } else {
          $R$1$i = $28;$RP$1$i = $arrayidx75$i;
         }
        }
        store4($RP$1$i,0);
        $R$3$i = $R$1$i;
       } else {
        $fd$i = ((($v$0$lcssa$i)) + 8|0);
        $24 = load4($fd$i);
        $bk56$i = ((($24)) + 12|0);
        store4($bk56$i,$23);
        $fd57$i = ((($23)) + 8|0);
        store4($fd57$i,$24);
        $R$3$i = $23;
       }
      } while(0);
      $cmp90$i = ($22|0)==(0|0);
      do {
       if (!($cmp90$i)) {
        $index$i = ((($v$0$lcssa$i)) + 28|0);
        $29 = load4($index$i);
        $arrayidx94$i = (11008 + ($29<<2)|0);
        $30 = load4($arrayidx94$i);
        $cmp95$i = ($v$0$lcssa$i|0)==($30|0);
        $cond$i = ($R$3$i|0)==(0|0);
        if ($cmp95$i) {
         store4($arrayidx94$i,$R$3$i);
         if ($cond$i) {
          $shl$i = 1 << $29;
          $neg$i = $shl$i ^ -1;
          $and103$i = $13 & $neg$i;
          store4((10708),$and103$i);
          break;
         }
        } else {
         $arrayidx113$i = ((($22)) + 16|0);
         $31 = load4($arrayidx113$i);
         $not$cmp114$i = ($31|0)!=($v$0$lcssa$i|0);
         $$sink2$i = $not$cmp114$i&1;
         $arrayidx121$i = (((($22)) + 16|0) + ($$sink2$i<<2)|0);
         store4($arrayidx121$i,$R$3$i);
         if ($cond$i) {
          break;
         }
        }
        $parent135$i = ((($R$3$i)) + 24|0);
        store4($parent135$i,$22);
        $arrayidx137$i = ((($v$0$lcssa$i)) + 16|0);
        $32 = load4($arrayidx137$i);
        $cmp138$i = ($32|0)==(0|0);
        if (!($cmp138$i)) {
         $arrayidx148$i = ((($R$3$i)) + 16|0);
         store4($arrayidx148$i,$32);
         $parent149$i = ((($32)) + 24|0);
         store4($parent149$i,$R$3$i);
        }
        $arrayidx154$i = ((($v$0$lcssa$i)) + 20|0);
        $33 = load4($arrayidx154$i);
        $cmp155$i = ($33|0)==(0|0);
        if (!($cmp155$i)) {
         $arrayidx165$i = ((($R$3$i)) + 20|0);
         store4($arrayidx165$i,$33);
         $parent166$i = ((($33)) + 24|0);
         store4($parent166$i,$R$3$i);
        }
       }
      } while(0);
      $cmp174$i = ($rsize$0$lcssa$i>>>0)<(16);
      if ($cmp174$i) {
       $add177$i = (($rsize$0$lcssa$i) + ($cond))|0;
       $or178$i = $add177$i | 3;
       $head179$i = ((($v$0$lcssa$i)) + 4|0);
       store4($head179$i,$or178$i);
       $add$ptr181$i = (($v$0$lcssa$i) + ($add177$i)|0);
       $head182$i = ((($add$ptr181$i)) + 4|0);
       $34 = load4($head182$i);
       $or183$i = $34 | 1;
       store4($head182$i,$or183$i);
      } else {
       $or186$i = $cond | 3;
       $head187$i = ((($v$0$lcssa$i)) + 4|0);
       store4($head187$i,$or186$i);
       $or188$i = $rsize$0$lcssa$i | 1;
       $head189$i = ((($add$ptr$i)) + 4|0);
       store4($head189$i,$or188$i);
       $add$ptr190$i = (($add$ptr$i) + ($rsize$0$lcssa$i)|0);
       store4($add$ptr190$i,$rsize$0$lcssa$i);
       $cmp191$i = ($5|0)==(0);
       if (!($cmp191$i)) {
        $35 = load4((10724));
        $shr194$i = $5 >>> 3;
        $shl195$i = $shr194$i << 1;
        $arrayidx196$i = (10744 + ($shl195$i<<2)|0);
        $shl198$i = 1 << $shr194$i;
        $and199$i = $shl198$i & $0;
        $tobool200$i = ($and199$i|0)==(0);
        if ($tobool200$i) {
         $or204$i = $shl198$i | $0;
         store4(10704,$or204$i);
         $$pre$i = ((($arrayidx196$i)) + 8|0);
         $$pre$phi$iZ2D = $$pre$i;$F197$0$i = $arrayidx196$i;
        } else {
         $36 = ((($arrayidx196$i)) + 8|0);
         $37 = load4($36);
         $$pre$phi$iZ2D = $36;$F197$0$i = $37;
        }
        store4($$pre$phi$iZ2D,$35);
        $bk218$i = ((($F197$0$i)) + 12|0);
        store4($bk218$i,$35);
        $fd219$i = ((($35)) + 8|0);
        store4($fd219$i,$F197$0$i);
        $bk220$i = ((($35)) + 12|0);
        store4($bk220$i,$arrayidx196$i);
       }
       store4((10712),$rsize$0$lcssa$i);
       store4((10724),$add$ptr$i);
      }
      $add$ptr225$i = ((($v$0$lcssa$i)) + 8|0);
      $retval$0 = $add$ptr225$i;
      STACKTOP = sp;return ($retval$0|0);
     } else {
      $nb$0 = $cond;
     }
    }
   } else {
    $nb$0 = $cond;
   }
  } else {
   $cmp139 = ($bytes>>>0)>(4294967231);
   if ($cmp139) {
    $nb$0 = -1;
   } else {
    $add144 = (($bytes) + 11)|0;
    $and145 = $add144 & -8;
    $38 = load4((10708));
    $cmp146 = ($38|0)==(0);
    if ($cmp146) {
     $nb$0 = $and145;
    } else {
     $sub$i144 = (0 - ($and145))|0;
     $shr$i145 = $add144 >>> 8;
     $cmp$i146 = ($shr$i145|0)==(0);
     if ($cmp$i146) {
      $idx$0$i = 0;
     } else {
      $cmp1$i = ($and145>>>0)>(16777215);
      if ($cmp1$i) {
       $idx$0$i = 31;
      } else {
       $sub4$i = (($shr$i145) + 1048320)|0;
       $shr5$i148 = $sub4$i >>> 16;
       $and$i149 = $shr5$i148 & 8;
       $shl$i150 = $shr$i145 << $and$i149;
       $sub6$i = (($shl$i150) + 520192)|0;
       $shr7$i151 = $sub6$i >>> 16;
       $and8$i = $shr7$i151 & 4;
       $add$i152 = $and8$i | $and$i149;
       $shl9$i = $shl$i150 << $and8$i;
       $sub10$i = (($shl9$i) + 245760)|0;
       $shr11$i153 = $sub10$i >>> 16;
       $and12$i = $shr11$i153 & 2;
       $add13$i = $add$i152 | $and12$i;
       $sub14$i = (14 - ($add13$i))|0;
       $shl15$i = $shl9$i << $and12$i;
       $shr16$i154 = $shl15$i >>> 15;
       $add17$i155 = (($sub14$i) + ($shr16$i154))|0;
       $shl18$i = $add17$i155 << 1;
       $add19$i = (($add17$i155) + 7)|0;
       $shr20$i = $and145 >>> $add19$i;
       $and21$i156 = $shr20$i & 1;
       $add22$i = $and21$i156 | $shl18$i;
       $idx$0$i = $add22$i;
      }
     }
     $arrayidx$i157 = (11008 + ($idx$0$i<<2)|0);
     $39 = load4($arrayidx$i157);
     $cmp24$i = ($39|0)==(0|0);
     L74: do {
      if ($cmp24$i) {
       $rsize$3$i = $sub$i144;$t$2$i = 0;$v$3$i = 0;
       label = 57;
      } else {
       $cmp26$i = ($idx$0$i|0)==(31);
       $shr27$i = $idx$0$i >>> 1;
       $sub30$i = (25 - ($shr27$i))|0;
       $cond$i158 = $cmp26$i ? 0 : $sub30$i;
       $shl31$i = $and145 << $cond$i158;
       $rsize$0$i = $sub$i144;$rst$0$i = 0;$sizebits$0$i = $shl31$i;$t$0$i = $39;$v$0$i = 0;
       while(1) {
        $head$i159 = ((($t$0$i)) + 4|0);
        $40 = load4($head$i159);
        $and32$i = $40 & -8;
        $sub33$i = (($and32$i) - ($and145))|0;
        $cmp34$i = ($sub33$i>>>0)<($rsize$0$i>>>0);
        if ($cmp34$i) {
         $cmp36$i = ($sub33$i|0)==(0);
         if ($cmp36$i) {
          $rsize$48$i = 0;$t$47$i = $t$0$i;$v$49$i = $t$0$i;
          label = 61;
          break L74;
         } else {
          $rsize$1$i = $sub33$i;$v$1$i = $t$0$i;
         }
        } else {
         $rsize$1$i = $rsize$0$i;$v$1$i = $v$0$i;
        }
        $arrayidx40$i = ((($t$0$i)) + 20|0);
        $41 = load4($arrayidx40$i);
        $shr42$i = $sizebits$0$i >>> 31;
        $arrayidx44$i = (((($t$0$i)) + 16|0) + ($shr42$i<<2)|0);
        $42 = load4($arrayidx44$i);
        $cmp45$i = ($41|0)==(0|0);
        $cmp46$i = ($41|0)==($42|0);
        $or$cond1$i160 = $cmp45$i | $cmp46$i;
        $rst$1$i = $or$cond1$i160 ? $rst$0$i : $41;
        $cmp49$i = ($42|0)==(0|0);
        $not$cmp493$i = $cmp49$i ^ 1;
        $shl52$i = $not$cmp493$i&1;
        $sizebits$0$shl52$i = $sizebits$0$i << $shl52$i;
        if ($cmp49$i) {
         $rsize$3$i = $rsize$1$i;$t$2$i = $rst$1$i;$v$3$i = $v$1$i;
         label = 57;
         break;
        } else {
         $rsize$0$i = $rsize$1$i;$rst$0$i = $rst$1$i;$sizebits$0$i = $sizebits$0$shl52$i;$t$0$i = $42;$v$0$i = $v$1$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 57) {
      $cmp55$i161 = ($t$2$i|0)==(0|0);
      $cmp57$i162 = ($v$3$i|0)==(0|0);
      $or$cond$i163 = $cmp55$i161 & $cmp57$i162;
      if ($or$cond$i163) {
       $shl60$i = 2 << $idx$0$i;
       $sub63$i = (0 - ($shl60$i))|0;
       $or$i164 = $shl60$i | $sub63$i;
       $and64$i = $or$i164 & $38;
       $cmp65$i = ($and64$i|0)==(0);
       if ($cmp65$i) {
        $nb$0 = $and145;
        break;
       }
       $sub67$i = (0 - ($and64$i))|0;
       $and68$i = $and64$i & $sub67$i;
       $sub70$i = (($and68$i) + -1)|0;
       $shr72$i = $sub70$i >>> 12;
       $and73$i = $shr72$i & 16;
       $shr75$i = $sub70$i >>> $and73$i;
       $shr76$i = $shr75$i >>> 5;
       $and77$i = $shr76$i & 8;
       $add78$i = $and77$i | $and73$i;
       $shr79$i = $shr75$i >>> $and77$i;
       $shr80$i = $shr79$i >>> 2;
       $and81$i = $shr80$i & 4;
       $add82$i = $add78$i | $and81$i;
       $shr83$i = $shr79$i >>> $and81$i;
       $shr84$i = $shr83$i >>> 1;
       $and85$i = $shr84$i & 2;
       $add86$i = $add82$i | $and85$i;
       $shr87$i = $shr83$i >>> $and85$i;
       $shr88$i = $shr87$i >>> 1;
       $and89$i = $shr88$i & 1;
       $add90$i = $add86$i | $and89$i;
       $shr91$i = $shr87$i >>> $and89$i;
       $add92$i = (($add90$i) + ($shr91$i))|0;
       $arrayidx94$i165 = (11008 + ($add92$i<<2)|0);
       $43 = load4($arrayidx94$i165);
       $t$4$ph$i = $43;$v$4$ph$i = 0;
      } else {
       $t$4$ph$i = $t$2$i;$v$4$ph$i = $v$3$i;
      }
      $cmp976$i = ($t$4$ph$i|0)==(0|0);
      if ($cmp976$i) {
       $rsize$4$lcssa$i = $rsize$3$i;$v$4$lcssa$i = $v$4$ph$i;
      } else {
       $rsize$48$i = $rsize$3$i;$t$47$i = $t$4$ph$i;$v$49$i = $v$4$ph$i;
       label = 61;
      }
     }
     if ((label|0) == 61) {
      while(1) {
       label = 0;
       $head99$i = ((($t$47$i)) + 4|0);
       $44 = load4($head99$i);
       $and100$i = $44 & -8;
       $sub101$i = (($and100$i) - ($and145))|0;
       $cmp102$i = ($sub101$i>>>0)<($rsize$48$i>>>0);
       $sub101$rsize$4$i = $cmp102$i ? $sub101$i : $rsize$48$i;
       $t$4$v$4$i = $cmp102$i ? $t$47$i : $v$49$i;
       $arrayidx106$i = ((($t$47$i)) + 16|0);
       $45 = load4($arrayidx106$i);
       $not$cmp107$i = ($45|0)==(0|0);
       $$sink$i166 = $not$cmp107$i&1;
       $arrayidx113$i167 = (((($t$47$i)) + 16|0) + ($$sink$i166<<2)|0);
       $46 = load4($arrayidx113$i167);
       $cmp97$i = ($46|0)==(0|0);
       if ($cmp97$i) {
        $rsize$4$lcssa$i = $sub101$rsize$4$i;$v$4$lcssa$i = $t$4$v$4$i;
        break;
       } else {
        $rsize$48$i = $sub101$rsize$4$i;$t$47$i = $46;$v$49$i = $t$4$v$4$i;
        label = 61;
       }
      }
     }
     $cmp116$i = ($v$4$lcssa$i|0)==(0|0);
     if ($cmp116$i) {
      $nb$0 = $and145;
     } else {
      $47 = load4((10712));
      $sub118$i = (($47) - ($and145))|0;
      $cmp119$i = ($rsize$4$lcssa$i>>>0)<($sub118$i>>>0);
      if ($cmp119$i) {
       $add$ptr$i169 = (($v$4$lcssa$i) + ($and145)|0);
       $cmp123$i = ($v$4$lcssa$i>>>0)<($add$ptr$i169>>>0);
       if (!($cmp123$i)) {
        $retval$0 = 0;
        STACKTOP = sp;return ($retval$0|0);
       }
       $parent$i170 = ((($v$4$lcssa$i)) + 24|0);
       $48 = load4($parent$i170);
       $bk$i171 = ((($v$4$lcssa$i)) + 12|0);
       $49 = load4($bk$i171);
       $cmp128$i = ($49|0)==($v$4$lcssa$i|0);
       do {
        if ($cmp128$i) {
         $arrayidx151$i = ((($v$4$lcssa$i)) + 20|0);
         $51 = load4($arrayidx151$i);
         $cmp152$i = ($51|0)==(0|0);
         if ($cmp152$i) {
          $arrayidx155$i = ((($v$4$lcssa$i)) + 16|0);
          $52 = load4($arrayidx155$i);
          $cmp156$i = ($52|0)==(0|0);
          if ($cmp156$i) {
           $R$3$i179 = 0;
           break;
          } else {
           $R$1$i175 = $52;$RP$1$i174 = $arrayidx155$i;
          }
         } else {
          $R$1$i175 = $51;$RP$1$i174 = $arrayidx151$i;
         }
         while(1) {
          $arrayidx161$i = ((($R$1$i175)) + 20|0);
          $53 = load4($arrayidx161$i);
          $cmp162$i176 = ($53|0)==(0|0);
          if (!($cmp162$i176)) {
           $R$1$i175 = $53;$RP$1$i174 = $arrayidx161$i;
           continue;
          }
          $arrayidx165$i177 = ((($R$1$i175)) + 16|0);
          $54 = load4($arrayidx165$i177);
          $cmp166$i = ($54|0)==(0|0);
          if ($cmp166$i) {
           break;
          } else {
           $R$1$i175 = $54;$RP$1$i174 = $arrayidx165$i177;
          }
         }
         store4($RP$1$i174,0);
         $R$3$i179 = $R$1$i175;
        } else {
         $fd$i172 = ((($v$4$lcssa$i)) + 8|0);
         $50 = load4($fd$i172);
         $bk145$i = ((($50)) + 12|0);
         store4($bk145$i,$49);
         $fd146$i = ((($49)) + 8|0);
         store4($fd146$i,$50);
         $R$3$i179 = $49;
        }
       } while(0);
       $cmp180$i = ($48|0)==(0|0);
       do {
        if ($cmp180$i) {
         $64 = $38;
        } else {
         $index$i180 = ((($v$4$lcssa$i)) + 28|0);
         $55 = load4($index$i180);
         $arrayidx184$i = (11008 + ($55<<2)|0);
         $56 = load4($arrayidx184$i);
         $cmp185$i = ($v$4$lcssa$i|0)==($56|0);
         $cond2$i = ($R$3$i179|0)==(0|0);
         if ($cmp185$i) {
          store4($arrayidx184$i,$R$3$i179);
          if ($cond2$i) {
           $shl192$i = 1 << $55;
           $neg$i181 = $shl192$i ^ -1;
           $and194$i182 = $38 & $neg$i181;
           store4((10708),$and194$i182);
           $64 = $and194$i182;
           break;
          }
         } else {
          $arrayidx204$i = ((($48)) + 16|0);
          $57 = load4($arrayidx204$i);
          $not$cmp205$i = ($57|0)!=($v$4$lcssa$i|0);
          $$sink2$i183 = $not$cmp205$i&1;
          $arrayidx212$i = (((($48)) + 16|0) + ($$sink2$i183<<2)|0);
          store4($arrayidx212$i,$R$3$i179);
          if ($cond2$i) {
           $64 = $38;
           break;
          }
         }
         $parent226$i = ((($R$3$i179)) + 24|0);
         store4($parent226$i,$48);
         $arrayidx228$i = ((($v$4$lcssa$i)) + 16|0);
         $58 = load4($arrayidx228$i);
         $cmp229$i = ($58|0)==(0|0);
         if (!($cmp229$i)) {
          $arrayidx239$i = ((($R$3$i179)) + 16|0);
          store4($arrayidx239$i,$58);
          $parent240$i = ((($58)) + 24|0);
          store4($parent240$i,$R$3$i179);
         }
         $arrayidx245$i = ((($v$4$lcssa$i)) + 20|0);
         $59 = load4($arrayidx245$i);
         $cmp246$i = ($59|0)==(0|0);
         if ($cmp246$i) {
          $64 = $38;
         } else {
          $arrayidx256$i = ((($R$3$i179)) + 20|0);
          store4($arrayidx256$i,$59);
          $parent257$i = ((($59)) + 24|0);
          store4($parent257$i,$R$3$i179);
          $64 = $38;
         }
        }
       } while(0);
       $cmp265$i = ($rsize$4$lcssa$i>>>0)<(16);
       do {
        if ($cmp265$i) {
         $add268$i = (($rsize$4$lcssa$i) + ($and145))|0;
         $or270$i = $add268$i | 3;
         $head271$i = ((($v$4$lcssa$i)) + 4|0);
         store4($head271$i,$or270$i);
         $add$ptr273$i = (($v$4$lcssa$i) + ($add268$i)|0);
         $head274$i = ((($add$ptr273$i)) + 4|0);
         $60 = load4($head274$i);
         $or275$i = $60 | 1;
         store4($head274$i,$or275$i);
        } else {
         $or278$i = $and145 | 3;
         $head279$i = ((($v$4$lcssa$i)) + 4|0);
         store4($head279$i,$or278$i);
         $or280$i = $rsize$4$lcssa$i | 1;
         $head281$i = ((($add$ptr$i169)) + 4|0);
         store4($head281$i,$or280$i);
         $add$ptr282$i = (($add$ptr$i169) + ($rsize$4$lcssa$i)|0);
         store4($add$ptr282$i,$rsize$4$lcssa$i);
         $shr283$i = $rsize$4$lcssa$i >>> 3;
         $cmp284$i = ($rsize$4$lcssa$i>>>0)<(256);
         if ($cmp284$i) {
          $shl288$i = $shr283$i << 1;
          $arrayidx289$i = (10744 + ($shl288$i<<2)|0);
          $61 = load4(10704);
          $shl291$i = 1 << $shr283$i;
          $and292$i = $61 & $shl291$i;
          $tobool293$i = ($and292$i|0)==(0);
          if ($tobool293$i) {
           $or297$i = $61 | $shl291$i;
           store4(10704,$or297$i);
           $$pre$i186 = ((($arrayidx289$i)) + 8|0);
           $$pre$phi$i187Z2D = $$pre$i186;$F290$0$i = $arrayidx289$i;
          } else {
           $62 = ((($arrayidx289$i)) + 8|0);
           $63 = load4($62);
           $$pre$phi$i187Z2D = $62;$F290$0$i = $63;
          }
          store4($$pre$phi$i187Z2D,$add$ptr$i169);
          $bk311$i = ((($F290$0$i)) + 12|0);
          store4($bk311$i,$add$ptr$i169);
          $fd312$i = ((($add$ptr$i169)) + 8|0);
          store4($fd312$i,$F290$0$i);
          $bk313$i = ((($add$ptr$i169)) + 12|0);
          store4($bk313$i,$arrayidx289$i);
          break;
         }
         $shr318$i = $rsize$4$lcssa$i >>> 8;
         $cmp319$i = ($shr318$i|0)==(0);
         if ($cmp319$i) {
          $I316$0$i = 0;
         } else {
          $cmp323$i = ($rsize$4$lcssa$i>>>0)>(16777215);
          if ($cmp323$i) {
           $I316$0$i = 31;
          } else {
           $sub329$i = (($shr318$i) + 1048320)|0;
           $shr330$i = $sub329$i >>> 16;
           $and331$i = $shr330$i & 8;
           $shl333$i = $shr318$i << $and331$i;
           $sub334$i = (($shl333$i) + 520192)|0;
           $shr335$i = $sub334$i >>> 16;
           $and336$i = $shr335$i & 4;
           $add337$i = $and336$i | $and331$i;
           $shl338$i = $shl333$i << $and336$i;
           $sub339$i = (($shl338$i) + 245760)|0;
           $shr340$i = $sub339$i >>> 16;
           $and341$i = $shr340$i & 2;
           $add342$i = $add337$i | $and341$i;
           $sub343$i = (14 - ($add342$i))|0;
           $shl344$i = $shl338$i << $and341$i;
           $shr345$i = $shl344$i >>> 15;
           $add346$i = (($sub343$i) + ($shr345$i))|0;
           $shl347$i = $add346$i << 1;
           $add348$i = (($add346$i) + 7)|0;
           $shr349$i = $rsize$4$lcssa$i >>> $add348$i;
           $and350$i = $shr349$i & 1;
           $add351$i = $and350$i | $shl347$i;
           $I316$0$i = $add351$i;
          }
         }
         $arrayidx355$i = (11008 + ($I316$0$i<<2)|0);
         $index356$i = ((($add$ptr$i169)) + 28|0);
         store4($index356$i,$I316$0$i);
         $child357$i = ((($add$ptr$i169)) + 16|0);
         $arrayidx358$i = ((($child357$i)) + 4|0);
         store4($arrayidx358$i,0);
         store4($child357$i,0);
         $shl362$i = 1 << $I316$0$i;
         $and363$i = $shl362$i & $64;
         $tobool364$i = ($and363$i|0)==(0);
         if ($tobool364$i) {
          $or368$i = $shl362$i | $64;
          store4((10708),$or368$i);
          store4($arrayidx355$i,$add$ptr$i169);
          $parent369$i = ((($add$ptr$i169)) + 24|0);
          store4($parent369$i,$arrayidx355$i);
          $bk370$i = ((($add$ptr$i169)) + 12|0);
          store4($bk370$i,$add$ptr$i169);
          $fd371$i = ((($add$ptr$i169)) + 8|0);
          store4($fd371$i,$add$ptr$i169);
          break;
         }
         $65 = load4($arrayidx355$i);
         $cmp374$i = ($I316$0$i|0)==(31);
         $shr378$i = $I316$0$i >>> 1;
         $sub381$i = (25 - ($shr378$i))|0;
         $cond383$i = $cmp374$i ? 0 : $sub381$i;
         $shl384$i = $rsize$4$lcssa$i << $cond383$i;
         $K373$0$i = $shl384$i;$T$0$i = $65;
         while(1) {
          $head386$i = ((($T$0$i)) + 4|0);
          $66 = load4($head386$i);
          $and387$i = $66 & -8;
          $cmp388$i = ($and387$i|0)==($rsize$4$lcssa$i|0);
          if ($cmp388$i) {
           label = 97;
           break;
          }
          $shr392$i = $K373$0$i >>> 31;
          $arrayidx394$i = (((($T$0$i)) + 16|0) + ($shr392$i<<2)|0);
          $shl395$i = $K373$0$i << 1;
          $67 = load4($arrayidx394$i);
          $cmp396$i = ($67|0)==(0|0);
          if ($cmp396$i) {
           label = 96;
           break;
          } else {
           $K373$0$i = $shl395$i;$T$0$i = $67;
          }
         }
         if ((label|0) == 96) {
          store4($arrayidx394$i,$add$ptr$i169);
          $parent406$i = ((($add$ptr$i169)) + 24|0);
          store4($parent406$i,$T$0$i);
          $bk407$i = ((($add$ptr$i169)) + 12|0);
          store4($bk407$i,$add$ptr$i169);
          $fd408$i = ((($add$ptr$i169)) + 8|0);
          store4($fd408$i,$add$ptr$i169);
          break;
         }
         else if ((label|0) == 97) {
          $fd416$i = ((($T$0$i)) + 8|0);
          $68 = load4($fd416$i);
          $bk429$i = ((($68)) + 12|0);
          store4($bk429$i,$add$ptr$i169);
          store4($fd416$i,$add$ptr$i169);
          $fd431$i = ((($add$ptr$i169)) + 8|0);
          store4($fd431$i,$68);
          $bk432$i = ((($add$ptr$i169)) + 12|0);
          store4($bk432$i,$T$0$i);
          $parent433$i = ((($add$ptr$i169)) + 24|0);
          store4($parent433$i,0);
          break;
         }
        }
       } while(0);
       $add$ptr441$i = ((($v$4$lcssa$i)) + 8|0);
       $retval$0 = $add$ptr441$i;
       STACKTOP = sp;return ($retval$0|0);
      } else {
       $nb$0 = $and145;
      }
     }
    }
   }
  }
 } while(0);
 $69 = load4((10712));
 $cmp156 = ($69>>>0)<($nb$0>>>0);
 if (!($cmp156)) {
  $sub160 = (($69) - ($nb$0))|0;
  $70 = load4((10724));
  $cmp162 = ($sub160>>>0)>(15);
  if ($cmp162) {
   $add$ptr166 = (($70) + ($nb$0)|0);
   store4((10724),$add$ptr166);
   store4((10712),$sub160);
   $or167 = $sub160 | 1;
   $head168 = ((($add$ptr166)) + 4|0);
   store4($head168,$or167);
   $add$ptr169 = (($add$ptr166) + ($sub160)|0);
   store4($add$ptr169,$sub160);
   $or172 = $nb$0 | 3;
   $head173 = ((($70)) + 4|0);
   store4($head173,$or172);
  } else {
   store4((10712),0);
   store4((10724),0);
   $or176 = $69 | 3;
   $head177 = ((($70)) + 4|0);
   store4($head177,$or176);
   $add$ptr178 = (($70) + ($69)|0);
   $head179 = ((($add$ptr178)) + 4|0);
   $71 = load4($head179);
   $or180 = $71 | 1;
   store4($head179,$or180);
  }
  $add$ptr182 = ((($70)) + 8|0);
  $retval$0 = $add$ptr182;
  STACKTOP = sp;return ($retval$0|0);
 }
 $72 = load4((10716));
 $cmp186 = ($72>>>0)>($nb$0>>>0);
 if ($cmp186) {
  $sub190 = (($72) - ($nb$0))|0;
  store4((10716),$sub190);
  $73 = load4((10728));
  $add$ptr193 = (($73) + ($nb$0)|0);
  store4((10728),$add$ptr193);
  $or194 = $sub190 | 1;
  $head195 = ((($add$ptr193)) + 4|0);
  store4($head195,$or194);
  $or197 = $nb$0 | 3;
  $head198 = ((($73)) + 4|0);
  store4($head198,$or197);
  $add$ptr199 = ((($73)) + 8|0);
  $retval$0 = $add$ptr199;
  STACKTOP = sp;return ($retval$0|0);
 }
 $74 = load4(11176);
 $cmp$i = ($74|0)==(0);
 if ($cmp$i) {
  store4((11184),4096);
  store4((11180),4096);
  store4((11188),-1);
  store4((11192),-1);
  store4((11196),0);
  store4((11148),0);
  $75 = $magic$i$i;
  $xor$i$i = $75 & -16;
  $and6$i$i = $xor$i$i ^ 1431655768;
  store4($magic$i$i,$and6$i$i);
  store4(11176,$and6$i$i);
  $76 = 4096;
 } else {
  $$pre$i133 = load4((11184));
  $76 = $$pre$i133;
 }
 $add$i134 = (($nb$0) + 48)|0;
 $sub$i135 = (($nb$0) + 47)|0;
 $add9$i = (($76) + ($sub$i135))|0;
 $neg$i136 = (0 - ($76))|0;
 $and11$i = $add9$i & $neg$i136;
 $cmp12$i = ($and11$i>>>0)>($nb$0>>>0);
 if (!($cmp12$i)) {
  $retval$0 = 0;
  STACKTOP = sp;return ($retval$0|0);
 }
 $77 = load4((11144));
 $cmp15$i = ($77|0)==(0);
 if (!($cmp15$i)) {
  $78 = load4((11136));
  $add17$i = (($78) + ($and11$i))|0;
  $cmp19$i = ($add17$i>>>0)<=($78>>>0);
  $cmp21$i = ($add17$i>>>0)>($77>>>0);
  $or$cond1$i = $cmp19$i | $cmp21$i;
  if ($or$cond1$i) {
   $retval$0 = 0;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $79 = load4((11148));
 $and29$i = $79 & 4;
 $tobool30$i = ($and29$i|0)==(0);
 L167: do {
  if ($tobool30$i) {
   $80 = load4((10728));
   $cmp32$i137 = ($80|0)==(0|0);
   L169: do {
    if ($cmp32$i137) {
     label = 118;
    } else {
     $sp$0$i$i = (11152);
     while(1) {
      $81 = load4($sp$0$i$i);
      $cmp$i52$i = ($81>>>0)>($80>>>0);
      if (!($cmp$i52$i)) {
       $size$i$i = ((($sp$0$i$i)) + 4|0);
       $82 = load4($size$i$i);
       $add$ptr$i54$i = (($81) + ($82)|0);
       $cmp2$i$i = ($add$ptr$i54$i>>>0)>($80>>>0);
       if ($cmp2$i$i) {
        break;
       }
      }
      $next$i$i = ((($sp$0$i$i)) + 8|0);
      $83 = load4($next$i$i);
      $cmp3$i$i = ($83|0)==(0|0);
      if ($cmp3$i$i) {
       label = 118;
       break L169;
      } else {
       $sp$0$i$i = $83;
      }
     }
     $add77$i = (($add9$i) - ($72))|0;
     $and80$i = $add77$i & $neg$i136;
     $cmp81$i = ($and80$i>>>0)<(2147483647);
     if ($cmp81$i) {
      $call83$i = (_sbrk(($and80$i|0))|0);
      $88 = load4($sp$0$i$i);
      $89 = load4($size$i$i);
      $add$ptr$i140 = (($88) + ($89)|0);
      $cmp85$i = ($call83$i|0)==($add$ptr$i140|0);
      if ($cmp85$i) {
       $cmp89$i = ($call83$i|0)==((-1)|0);
       if ($cmp89$i) {
        $tsize$2617179$i = $and80$i;
       } else {
        $tbase$792$i = $call83$i;$tsize$791$i = $and80$i;
        label = 135;
        break L167;
       }
      } else {
       $br$2$ph$i = $call83$i;$ssize$2$ph$i = $and80$i;
       label = 126;
      }
     } else {
      $tsize$2617179$i = 0;
     }
    }
   } while(0);
   do {
    if ((label|0) == 118) {
     $call37$i = (_sbrk(0)|0);
     $cmp38$i = ($call37$i|0)==((-1)|0);
     if ($cmp38$i) {
      $tsize$2617179$i = 0;
     } else {
      $84 = $call37$i;
      $85 = load4((11180));
      $sub41$i = (($85) + -1)|0;
      $and42$i = $sub41$i & $84;
      $cmp43$i = ($and42$i|0)==(0);
      $add46$i = (($sub41$i) + ($84))|0;
      $neg48$i = (0 - ($85))|0;
      $and49$i = $add46$i & $neg48$i;
      $sub50$i = (($and49$i) - ($84))|0;
      $add51$i = $cmp43$i ? 0 : $sub50$i;
      $and11$add51$i = (($add51$i) + ($and11$i))|0;
      $86 = load4((11136));
      $add54$i = (($and11$add51$i) + ($86))|0;
      $cmp55$i = ($and11$add51$i>>>0)>($nb$0>>>0);
      $cmp57$i = ($and11$add51$i>>>0)<(2147483647);
      $or$cond$i = $cmp55$i & $cmp57$i;
      if ($or$cond$i) {
       $87 = load4((11144));
       $cmp60$i = ($87|0)==(0);
       if (!($cmp60$i)) {
        $cmp63$i = ($add54$i>>>0)<=($86>>>0);
        $cmp66$i139 = ($add54$i>>>0)>($87>>>0);
        $or$cond2$i = $cmp63$i | $cmp66$i139;
        if ($or$cond2$i) {
         $tsize$2617179$i = 0;
         break;
        }
       }
       $call68$i = (_sbrk(($and11$add51$i|0))|0);
       $cmp69$i = ($call68$i|0)==($call37$i|0);
       if ($cmp69$i) {
        $tbase$792$i = $call37$i;$tsize$791$i = $and11$add51$i;
        label = 135;
        break L167;
       } else {
        $br$2$ph$i = $call68$i;$ssize$2$ph$i = $and11$add51$i;
        label = 126;
       }
      } else {
       $tsize$2617179$i = 0;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 126) {
     $sub112$i = (0 - ($ssize$2$ph$i))|0;
     $cmp91$i = ($br$2$ph$i|0)!=((-1)|0);
     $cmp93$i = ($ssize$2$ph$i>>>0)<(2147483647);
     $or$cond5$i = $cmp93$i & $cmp91$i;
     $cmp96$i = ($add$i134>>>0)>($ssize$2$ph$i>>>0);
     $or$cond3$i = $cmp96$i & $or$cond5$i;
     if (!($or$cond3$i)) {
      $cmp118$i = ($br$2$ph$i|0)==((-1)|0);
      if ($cmp118$i) {
       $tsize$2617179$i = 0;
       break;
      } else {
       $tbase$792$i = $br$2$ph$i;$tsize$791$i = $ssize$2$ph$i;
       label = 135;
       break L167;
      }
     }
     $90 = load4((11184));
     $sub99$i = (($sub$i135) - ($ssize$2$ph$i))|0;
     $add101$i = (($sub99$i) + ($90))|0;
     $neg103$i = (0 - ($90))|0;
     $and104$i = $add101$i & $neg103$i;
     $cmp105$i = ($and104$i>>>0)<(2147483647);
     if (!($cmp105$i)) {
      $tbase$792$i = $br$2$ph$i;$tsize$791$i = $ssize$2$ph$i;
      label = 135;
      break L167;
     }
     $call107$i = (_sbrk(($and104$i|0))|0);
     $cmp108$i = ($call107$i|0)==((-1)|0);
     if ($cmp108$i) {
      (_sbrk(($sub112$i|0))|0);
      $tsize$2617179$i = 0;
      break;
     } else {
      $add110$i = (($and104$i) + ($ssize$2$ph$i))|0;
      $tbase$792$i = $br$2$ph$i;$tsize$791$i = $add110$i;
      label = 135;
      break L167;
     }
    }
   } while(0);
   $91 = load4((11148));
   $or$i = $91 | 4;
   store4((11148),$or$i);
   $tsize$4$i = $tsize$2617179$i;
   label = 133;
  } else {
   $tsize$4$i = 0;
   label = 133;
  }
 } while(0);
 if ((label|0) == 133) {
  $cmp127$i = ($and11$i>>>0)<(2147483647);
  if ($cmp127$i) {
   $call131$i = (_sbrk(($and11$i|0))|0);
   $call132$i = (_sbrk(0)|0);
   $cmp133$i = ($call131$i|0)!=((-1)|0);
   $cmp135$i = ($call132$i|0)!=((-1)|0);
   $or$cond4$i = $cmp133$i & $cmp135$i;
   $cmp137$i = ($call131$i>>>0)<($call132$i>>>0);
   $or$cond7$i = $cmp137$i & $or$cond4$i;
   $sub$ptr$lhs$cast$i = $call132$i;
   $sub$ptr$rhs$cast$i = $call131$i;
   $sub$ptr$sub$i = (($sub$ptr$lhs$cast$i) - ($sub$ptr$rhs$cast$i))|0;
   $add140$i = (($nb$0) + 40)|0;
   $cmp141$i = ($sub$ptr$sub$i>>>0)>($add140$i>>>0);
   $sub$ptr$sub$tsize$4$i = $cmp141$i ? $sub$ptr$sub$i : $tsize$4$i;
   $or$cond7$not$i = $or$cond7$i ^ 1;
   $cmp14795$i = ($call131$i|0)==((-1)|0);
   $not$cmp141$i = $cmp141$i ^ 1;
   $cmp147$i = $cmp14795$i | $not$cmp141$i;
   $or$cond93$i = $cmp147$i | $or$cond7$not$i;
   if (!($or$cond93$i)) {
    $tbase$792$i = $call131$i;$tsize$791$i = $sub$ptr$sub$tsize$4$i;
    label = 135;
   }
  }
 }
 if ((label|0) == 135) {
  $92 = load4((11136));
  $add150$i = (($92) + ($tsize$791$i))|0;
  store4((11136),$add150$i);
  $93 = load4((11140));
  $cmp151$i = ($add150$i>>>0)>($93>>>0);
  if ($cmp151$i) {
   store4((11140),$add150$i);
  }
  $94 = load4((10728));
  $cmp157$i = ($94|0)==(0|0);
  do {
   if ($cmp157$i) {
    $95 = load4((10720));
    $cmp159$i = ($95|0)==(0|0);
    $cmp162$i = ($tbase$792$i>>>0)<($95>>>0);
    $or$cond8$i = $cmp159$i | $cmp162$i;
    if ($or$cond8$i) {
     store4((10720),$tbase$792$i);
    }
    store4((11152),$tbase$792$i);
    store4((11156),$tsize$791$i);
    store4((11164),0);
    $96 = load4(11176);
    store4((10740),$96);
    store4((10736),-1);
    $i$01$i$i = 0;
    while(1) {
     $shl$i49$i = $i$01$i$i << 1;
     $arrayidx$i50$i = (10744 + ($shl$i49$i<<2)|0);
     $97 = ((($arrayidx$i50$i)) + 12|0);
     store4($97,$arrayidx$i50$i);
     $98 = ((($arrayidx$i50$i)) + 8|0);
     store4($98,$arrayidx$i50$i);
     $inc$i$i = (($i$01$i$i) + 1)|0;
     $exitcond$i$i = ($inc$i$i|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $i$01$i$i = $inc$i$i;
     }
    }
    $sub172$i = (($tsize$791$i) + -40)|0;
    $add$ptr$i38$i = ((($tbase$792$i)) + 8|0);
    $99 = $add$ptr$i38$i;
    $and$i39$i = $99 & 7;
    $cmp$i40$i = ($and$i39$i|0)==(0);
    $100 = (0 - ($99))|0;
    $and3$i41$i = $100 & 7;
    $cond$i42$i = $cmp$i40$i ? 0 : $and3$i41$i;
    $add$ptr4$i43$i = (($tbase$792$i) + ($cond$i42$i)|0);
    $sub5$i44$i = (($sub172$i) - ($cond$i42$i))|0;
    store4((10728),$add$ptr4$i43$i);
    store4((10716),$sub5$i44$i);
    $or$i45$i = $sub5$i44$i | 1;
    $head$i46$i = ((($add$ptr4$i43$i)) + 4|0);
    store4($head$i46$i,$or$i45$i);
    $add$ptr6$i47$i = (($add$ptr4$i43$i) + ($sub5$i44$i)|0);
    $head7$i48$i = ((($add$ptr6$i47$i)) + 4|0);
    store4($head7$i48$i,40);
    $101 = load4((11192));
    store4((10732),$101);
   } else {
    $sp$0104$i = (11152);
    while(1) {
     $102 = load4($sp$0104$i);
     $size188$i = ((($sp$0104$i)) + 4|0);
     $103 = load4($size188$i);
     $add$ptr189$i = (($102) + ($103)|0);
     $cmp190$i = ($tbase$792$i|0)==($add$ptr189$i|0);
     if ($cmp190$i) {
      label = 145;
      break;
     }
     $next$i = ((($sp$0104$i)) + 8|0);
     $104 = load4($next$i);
     $cmp186$i = ($104|0)==(0|0);
     if ($cmp186$i) {
      break;
     } else {
      $sp$0104$i = $104;
     }
    }
    if ((label|0) == 145) {
     $sflags193$i = ((($sp$0104$i)) + 12|0);
     $105 = load4($sflags193$i);
     $and194$i = $105 & 8;
     $tobool195$i = ($and194$i|0)==(0);
     if ($tobool195$i) {
      $cmp203$i = ($94>>>0)>=($102>>>0);
      $cmp209$i = ($94>>>0)<($tbase$792$i>>>0);
      $or$cond94$i = $cmp209$i & $cmp203$i;
      if ($or$cond94$i) {
       $add212$i = (($103) + ($tsize$791$i))|0;
       store4($size188$i,$add212$i);
       $106 = load4((10716));
       $add$ptr$i31$i = ((($94)) + 8|0);
       $107 = $add$ptr$i31$i;
       $and$i32$i = $107 & 7;
       $cmp$i33$i = ($and$i32$i|0)==(0);
       $108 = (0 - ($107))|0;
       $and3$i34$i = $108 & 7;
       $cond$i35$i = $cmp$i33$i ? 0 : $and3$i34$i;
       $add$ptr4$i36$i = (($94) + ($cond$i35$i)|0);
       $add215$i = (($tsize$791$i) - ($cond$i35$i))|0;
       $sub5$i$i = (($106) + ($add215$i))|0;
       store4((10728),$add$ptr4$i36$i);
       store4((10716),$sub5$i$i);
       $or$i$i = $sub5$i$i | 1;
       $head$i37$i = ((($add$ptr4$i36$i)) + 4|0);
       store4($head$i37$i,$or$i$i);
       $add$ptr6$i$i = (($add$ptr4$i36$i) + ($sub5$i$i)|0);
       $head7$i$i = ((($add$ptr6$i$i)) + 4|0);
       store4($head7$i$i,40);
       $109 = load4((11192));
       store4((10732),$109);
       break;
      }
     }
    }
    $110 = load4((10720));
    $cmp218$i = ($tbase$792$i>>>0)<($110>>>0);
    if ($cmp218$i) {
     store4((10720),$tbase$792$i);
    }
    $add$ptr227$i = (($tbase$792$i) + ($tsize$791$i)|0);
    $sp$1103$i = (11152);
    while(1) {
     $111 = load4($sp$1103$i);
     $cmp228$i = ($111|0)==($add$ptr227$i|0);
     if ($cmp228$i) {
      label = 153;
      break;
     }
     $next231$i = ((($sp$1103$i)) + 8|0);
     $112 = load4($next231$i);
     $cmp224$i = ($112|0)==(0|0);
     if ($cmp224$i) {
      break;
     } else {
      $sp$1103$i = $112;
     }
    }
    if ((label|0) == 153) {
     $sflags235$i = ((($sp$1103$i)) + 12|0);
     $113 = load4($sflags235$i);
     $and236$i = $113 & 8;
     $tobool237$i = ($and236$i|0)==(0);
     if ($tobool237$i) {
      store4($sp$1103$i,$tbase$792$i);
      $size245$i = ((($sp$1103$i)) + 4|0);
      $114 = load4($size245$i);
      $add246$i = (($114) + ($tsize$791$i))|0;
      store4($size245$i,$add246$i);
      $add$ptr$i$i = ((($tbase$792$i)) + 8|0);
      $115 = $add$ptr$i$i;
      $and$i11$i = $115 & 7;
      $cmp$i12$i = ($and$i11$i|0)==(0);
      $116 = (0 - ($115))|0;
      $and3$i$i = $116 & 7;
      $cond$i13$i = $cmp$i12$i ? 0 : $and3$i$i;
      $add$ptr4$i$i = (($tbase$792$i) + ($cond$i13$i)|0);
      $add$ptr5$i$i = ((($add$ptr227$i)) + 8|0);
      $117 = $add$ptr5$i$i;
      $and6$i14$i = $117 & 7;
      $cmp7$i$i = ($and6$i14$i|0)==(0);
      $118 = (0 - ($117))|0;
      $and13$i$i = $118 & 7;
      $cond15$i$i = $cmp7$i$i ? 0 : $and13$i$i;
      $add$ptr16$i$i = (($add$ptr227$i) + ($cond15$i$i)|0);
      $sub$ptr$lhs$cast$i15$i = $add$ptr16$i$i;
      $sub$ptr$rhs$cast$i16$i = $add$ptr4$i$i;
      $sub$ptr$sub$i17$i = (($sub$ptr$lhs$cast$i15$i) - ($sub$ptr$rhs$cast$i16$i))|0;
      $add$ptr17$i$i = (($add$ptr4$i$i) + ($nb$0)|0);
      $sub18$i$i = (($sub$ptr$sub$i17$i) - ($nb$0))|0;
      $or19$i$i = $nb$0 | 3;
      $head$i18$i = ((($add$ptr4$i$i)) + 4|0);
      store4($head$i18$i,$or19$i$i);
      $cmp20$i$i = ($add$ptr16$i$i|0)==($94|0);
      do {
       if ($cmp20$i$i) {
        $119 = load4((10716));
        $add$i$i = (($119) + ($sub18$i$i))|0;
        store4((10716),$add$i$i);
        store4((10728),$add$ptr17$i$i);
        $or22$i$i = $add$i$i | 1;
        $head23$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head23$i$i,$or22$i$i);
       } else {
        $120 = load4((10724));
        $cmp24$i$i = ($add$ptr16$i$i|0)==($120|0);
        if ($cmp24$i$i) {
         $121 = load4((10712));
         $add26$i$i = (($121) + ($sub18$i$i))|0;
         store4((10712),$add26$i$i);
         store4((10724),$add$ptr17$i$i);
         $or28$i$i = $add26$i$i | 1;
         $head29$i$i = ((($add$ptr17$i$i)) + 4|0);
         store4($head29$i$i,$or28$i$i);
         $add$ptr30$i$i = (($add$ptr17$i$i) + ($add26$i$i)|0);
         store4($add$ptr30$i$i,$add26$i$i);
         break;
        }
        $head32$i$i = ((($add$ptr16$i$i)) + 4|0);
        $122 = load4($head32$i$i);
        $and33$i$i = $122 & 3;
        $cmp34$i$i = ($and33$i$i|0)==(1);
        if ($cmp34$i$i) {
         $and37$i$i = $122 & -8;
         $shr$i21$i = $122 >>> 3;
         $cmp38$i$i = ($122>>>0)<(256);
         L237: do {
          if ($cmp38$i$i) {
           $fd$i$i = ((($add$ptr16$i$i)) + 8|0);
           $123 = load4($fd$i$i);
           $bk$i22$i = ((($add$ptr16$i$i)) + 12|0);
           $124 = load4($bk$i22$i);
           $cmp46$i$i = ($124|0)==($123|0);
           if ($cmp46$i$i) {
            $shl48$i$i = 1 << $shr$i21$i;
            $neg$i$i = $shl48$i$i ^ -1;
            $125 = load4(10704);
            $and49$i$i = $125 & $neg$i$i;
            store4(10704,$and49$i$i);
            break;
           } else {
            $bk67$i$i = ((($123)) + 12|0);
            store4($bk67$i$i,$124);
            $fd68$i$i = ((($124)) + 8|0);
            store4($fd68$i$i,$123);
            break;
           }
          } else {
           $parent$i23$i = ((($add$ptr16$i$i)) + 24|0);
           $126 = load4($parent$i23$i);
           $bk74$i$i = ((($add$ptr16$i$i)) + 12|0);
           $127 = load4($bk74$i$i);
           $cmp75$i$i = ($127|0)==($add$ptr16$i$i|0);
           do {
            if ($cmp75$i$i) {
             $child$i$i = ((($add$ptr16$i$i)) + 16|0);
             $arrayidx96$i$i = ((($child$i$i)) + 4|0);
             $129 = load4($arrayidx96$i$i);
             $cmp97$i$i = ($129|0)==(0|0);
             if ($cmp97$i$i) {
              $130 = load4($child$i$i);
              $cmp100$i$i = ($130|0)==(0|0);
              if ($cmp100$i$i) {
               $R$3$i$i = 0;
               break;
              } else {
               $R$1$i$i = $130;$RP$1$i$i = $child$i$i;
              }
             } else {
              $R$1$i$i = $129;$RP$1$i$i = $arrayidx96$i$i;
             }
             while(1) {
              $arrayidx103$i$i = ((($R$1$i$i)) + 20|0);
              $131 = load4($arrayidx103$i$i);
              $cmp104$i$i = ($131|0)==(0|0);
              if (!($cmp104$i$i)) {
               $R$1$i$i = $131;$RP$1$i$i = $arrayidx103$i$i;
               continue;
              }
              $arrayidx107$i$i = ((($R$1$i$i)) + 16|0);
              $132 = load4($arrayidx107$i$i);
              $cmp108$i$i = ($132|0)==(0|0);
              if ($cmp108$i$i) {
               break;
              } else {
               $R$1$i$i = $132;$RP$1$i$i = $arrayidx107$i$i;
              }
             }
             store4($RP$1$i$i,0);
             $R$3$i$i = $R$1$i$i;
            } else {
             $fd78$i$i = ((($add$ptr16$i$i)) + 8|0);
             $128 = load4($fd78$i$i);
             $bk91$i$i = ((($128)) + 12|0);
             store4($bk91$i$i,$127);
             $fd92$i$i = ((($127)) + 8|0);
             store4($fd92$i$i,$128);
             $R$3$i$i = $127;
            }
           } while(0);
           $cmp120$i24$i = ($126|0)==(0|0);
           if ($cmp120$i24$i) {
            break;
           }
           $index$i25$i = ((($add$ptr16$i$i)) + 28|0);
           $133 = load4($index$i25$i);
           $arrayidx123$i$i = (11008 + ($133<<2)|0);
           $134 = load4($arrayidx123$i$i);
           $cmp124$i$i = ($add$ptr16$i$i|0)==($134|0);
           $cond1$i$i = ($R$3$i$i|0)==(0|0);
           do {
            if ($cmp124$i$i) {
             store4($arrayidx123$i$i,$R$3$i$i);
             if (!($cond1$i$i)) {
              break;
             }
             $shl131$i$i = 1 << $133;
             $neg132$i$i = $shl131$i$i ^ -1;
             $135 = load4((10708));
             $and133$i$i = $135 & $neg132$i$i;
             store4((10708),$and133$i$i);
             break L237;
            } else {
             $arrayidx143$i$i = ((($126)) + 16|0);
             $136 = load4($arrayidx143$i$i);
             $not$cmp144$i$i = ($136|0)!=($add$ptr16$i$i|0);
             $$sink$i$i = $not$cmp144$i$i&1;
             $arrayidx151$i$i = (((($126)) + 16|0) + ($$sink$i$i<<2)|0);
             store4($arrayidx151$i$i,$R$3$i$i);
             if ($cond1$i$i) {
              break L237;
             }
            }
           } while(0);
           $parent165$i$i = ((($R$3$i$i)) + 24|0);
           store4($parent165$i$i,$126);
           $child166$i$i = ((($add$ptr16$i$i)) + 16|0);
           $137 = load4($child166$i$i);
           $cmp168$i$i = ($137|0)==(0|0);
           if (!($cmp168$i$i)) {
            $arrayidx178$i$i = ((($R$3$i$i)) + 16|0);
            store4($arrayidx178$i$i,$137);
            $parent179$i$i = ((($137)) + 24|0);
            store4($parent179$i$i,$R$3$i$i);
           }
           $arrayidx184$i$i = ((($child166$i$i)) + 4|0);
           $138 = load4($arrayidx184$i$i);
           $cmp185$i$i = ($138|0)==(0|0);
           if ($cmp185$i$i) {
            break;
           }
           $arrayidx195$i$i = ((($R$3$i$i)) + 20|0);
           store4($arrayidx195$i$i,$138);
           $parent196$i$i = ((($138)) + 24|0);
           store4($parent196$i$i,$R$3$i$i);
          }
         } while(0);
         $add$ptr205$i$i = (($add$ptr16$i$i) + ($and37$i$i)|0);
         $add206$i$i = (($and37$i$i) + ($sub18$i$i))|0;
         $oldfirst$0$i$i = $add$ptr205$i$i;$qsize$0$i$i = $add206$i$i;
        } else {
         $oldfirst$0$i$i = $add$ptr16$i$i;$qsize$0$i$i = $sub18$i$i;
        }
        $head208$i$i = ((($oldfirst$0$i$i)) + 4|0);
        $139 = load4($head208$i$i);
        $and209$i$i = $139 & -2;
        store4($head208$i$i,$and209$i$i);
        $or210$i$i = $qsize$0$i$i | 1;
        $head211$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head211$i$i,$or210$i$i);
        $add$ptr212$i$i = (($add$ptr17$i$i) + ($qsize$0$i$i)|0);
        store4($add$ptr212$i$i,$qsize$0$i$i);
        $shr214$i$i = $qsize$0$i$i >>> 3;
        $cmp215$i$i = ($qsize$0$i$i>>>0)<(256);
        if ($cmp215$i$i) {
         $shl222$i$i = $shr214$i$i << 1;
         $arrayidx223$i$i = (10744 + ($shl222$i$i<<2)|0);
         $140 = load4(10704);
         $shl226$i$i = 1 << $shr214$i$i;
         $and227$i$i = $140 & $shl226$i$i;
         $tobool228$i$i = ($and227$i$i|0)==(0);
         if ($tobool228$i$i) {
          $or232$i$i = $140 | $shl226$i$i;
          store4(10704,$or232$i$i);
          $$pre$i27$i = ((($arrayidx223$i$i)) + 8|0);
          $$pre$phi$i28$iZ2D = $$pre$i27$i;$F224$0$i$i = $arrayidx223$i$i;
         } else {
          $141 = ((($arrayidx223$i$i)) + 8|0);
          $142 = load4($141);
          $$pre$phi$i28$iZ2D = $141;$F224$0$i$i = $142;
         }
         store4($$pre$phi$i28$iZ2D,$add$ptr17$i$i);
         $bk246$i$i = ((($F224$0$i$i)) + 12|0);
         store4($bk246$i$i,$add$ptr17$i$i);
         $fd247$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd247$i$i,$F224$0$i$i);
         $bk248$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk248$i$i,$arrayidx223$i$i);
         break;
        }
        $shr253$i$i = $qsize$0$i$i >>> 8;
        $cmp254$i$i = ($shr253$i$i|0)==(0);
        do {
         if ($cmp254$i$i) {
          $I252$0$i$i = 0;
         } else {
          $cmp258$i$i = ($qsize$0$i$i>>>0)>(16777215);
          if ($cmp258$i$i) {
           $I252$0$i$i = 31;
           break;
          }
          $sub262$i$i = (($shr253$i$i) + 1048320)|0;
          $shr263$i$i = $sub262$i$i >>> 16;
          $and264$i$i = $shr263$i$i & 8;
          $shl265$i$i = $shr253$i$i << $and264$i$i;
          $sub266$i$i = (($shl265$i$i) + 520192)|0;
          $shr267$i$i = $sub266$i$i >>> 16;
          $and268$i$i = $shr267$i$i & 4;
          $add269$i$i = $and268$i$i | $and264$i$i;
          $shl270$i$i = $shl265$i$i << $and268$i$i;
          $sub271$i$i = (($shl270$i$i) + 245760)|0;
          $shr272$i$i = $sub271$i$i >>> 16;
          $and273$i$i = $shr272$i$i & 2;
          $add274$i$i = $add269$i$i | $and273$i$i;
          $sub275$i$i = (14 - ($add274$i$i))|0;
          $shl276$i$i = $shl270$i$i << $and273$i$i;
          $shr277$i$i = $shl276$i$i >>> 15;
          $add278$i$i = (($sub275$i$i) + ($shr277$i$i))|0;
          $shl279$i$i = $add278$i$i << 1;
          $add280$i$i = (($add278$i$i) + 7)|0;
          $shr281$i$i = $qsize$0$i$i >>> $add280$i$i;
          $and282$i$i = $shr281$i$i & 1;
          $add283$i$i = $and282$i$i | $shl279$i$i;
          $I252$0$i$i = $add283$i$i;
         }
        } while(0);
        $arrayidx287$i$i = (11008 + ($I252$0$i$i<<2)|0);
        $index288$i$i = ((($add$ptr17$i$i)) + 28|0);
        store4($index288$i$i,$I252$0$i$i);
        $child289$i$i = ((($add$ptr17$i$i)) + 16|0);
        $arrayidx290$i$i = ((($child289$i$i)) + 4|0);
        store4($arrayidx290$i$i,0);
        store4($child289$i$i,0);
        $143 = load4((10708));
        $shl294$i$i = 1 << $I252$0$i$i;
        $and295$i$i = $143 & $shl294$i$i;
        $tobool296$i$i = ($and295$i$i|0)==(0);
        if ($tobool296$i$i) {
         $or300$i$i = $143 | $shl294$i$i;
         store4((10708),$or300$i$i);
         store4($arrayidx287$i$i,$add$ptr17$i$i);
         $parent301$i$i = ((($add$ptr17$i$i)) + 24|0);
         store4($parent301$i$i,$arrayidx287$i$i);
         $bk302$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk302$i$i,$add$ptr17$i$i);
         $fd303$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd303$i$i,$add$ptr17$i$i);
         break;
        }
        $144 = load4($arrayidx287$i$i);
        $cmp306$i$i = ($I252$0$i$i|0)==(31);
        $shr310$i$i = $I252$0$i$i >>> 1;
        $sub313$i$i = (25 - ($shr310$i$i))|0;
        $cond315$i$i = $cmp306$i$i ? 0 : $sub313$i$i;
        $shl316$i$i = $qsize$0$i$i << $cond315$i$i;
        $K305$0$i$i = $shl316$i$i;$T$0$i29$i = $144;
        while(1) {
         $head317$i$i = ((($T$0$i29$i)) + 4|0);
         $145 = load4($head317$i$i);
         $and318$i$i = $145 & -8;
         $cmp319$i$i = ($and318$i$i|0)==($qsize$0$i$i|0);
         if ($cmp319$i$i) {
          label = 194;
          break;
         }
         $shr323$i$i = $K305$0$i$i >>> 31;
         $arrayidx325$i$i = (((($T$0$i29$i)) + 16|0) + ($shr323$i$i<<2)|0);
         $shl326$i$i = $K305$0$i$i << 1;
         $146 = load4($arrayidx325$i$i);
         $cmp327$i$i = ($146|0)==(0|0);
         if ($cmp327$i$i) {
          label = 193;
          break;
         } else {
          $K305$0$i$i = $shl326$i$i;$T$0$i29$i = $146;
         }
        }
        if ((label|0) == 193) {
         store4($arrayidx325$i$i,$add$ptr17$i$i);
         $parent337$i$i = ((($add$ptr17$i$i)) + 24|0);
         store4($parent337$i$i,$T$0$i29$i);
         $bk338$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk338$i$i,$add$ptr17$i$i);
         $fd339$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd339$i$i,$add$ptr17$i$i);
         break;
        }
        else if ((label|0) == 194) {
         $fd344$i$i = ((($T$0$i29$i)) + 8|0);
         $147 = load4($fd344$i$i);
         $bk357$i$i = ((($147)) + 12|0);
         store4($bk357$i$i,$add$ptr17$i$i);
         store4($fd344$i$i,$add$ptr17$i$i);
         $fd359$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd359$i$i,$147);
         $bk360$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk360$i$i,$T$0$i29$i);
         $parent361$i$i = ((($add$ptr17$i$i)) + 24|0);
         store4($parent361$i$i,0);
         break;
        }
       }
      } while(0);
      $add$ptr369$i$i = ((($add$ptr4$i$i)) + 8|0);
      $retval$0 = $add$ptr369$i$i;
      STACKTOP = sp;return ($retval$0|0);
     }
    }
    $sp$0$i$i$i = (11152);
    while(1) {
     $148 = load4($sp$0$i$i$i);
     $cmp$i$i$i = ($148>>>0)>($94>>>0);
     if (!($cmp$i$i$i)) {
      $size$i$i$i = ((($sp$0$i$i$i)) + 4|0);
      $149 = load4($size$i$i$i);
      $add$ptr$i$i$i = (($148) + ($149)|0);
      $cmp2$i$i$i = ($add$ptr$i$i$i>>>0)>($94>>>0);
      if ($cmp2$i$i$i) {
       break;
      }
     }
     $next$i$i$i = ((($sp$0$i$i$i)) + 8|0);
     $150 = load4($next$i$i$i);
     $sp$0$i$i$i = $150;
    }
    $add$ptr2$i$i = ((($add$ptr$i$i$i)) + -47|0);
    $add$ptr3$i$i = ((($add$ptr2$i$i)) + 8|0);
    $151 = $add$ptr3$i$i;
    $and$i$i = $151 & 7;
    $cmp$i9$i = ($and$i$i|0)==(0);
    $152 = (0 - ($151))|0;
    $and6$i10$i = $152 & 7;
    $cond$i$i = $cmp$i9$i ? 0 : $and6$i10$i;
    $add$ptr7$i$i = (($add$ptr2$i$i) + ($cond$i$i)|0);
    $add$ptr81$i$i = ((($94)) + 16|0);
    $cmp9$i$i = ($add$ptr7$i$i>>>0)<($add$ptr81$i$i>>>0);
    $cond13$i$i = $cmp9$i$i ? $94 : $add$ptr7$i$i;
    $add$ptr14$i$i = ((($cond13$i$i)) + 8|0);
    $add$ptr15$i$i = ((($cond13$i$i)) + 24|0);
    $sub16$i$i = (($tsize$791$i) + -40)|0;
    $add$ptr$i2$i$i = ((($tbase$792$i)) + 8|0);
    $153 = $add$ptr$i2$i$i;
    $and$i$i$i = $153 & 7;
    $cmp$i3$i$i = ($and$i$i$i|0)==(0);
    $154 = (0 - ($153))|0;
    $and3$i$i$i = $154 & 7;
    $cond$i$i$i = $cmp$i3$i$i ? 0 : $and3$i$i$i;
    $add$ptr4$i$i$i = (($tbase$792$i) + ($cond$i$i$i)|0);
    $sub5$i$i$i = (($sub16$i$i) - ($cond$i$i$i))|0;
    store4((10728),$add$ptr4$i$i$i);
    store4((10716),$sub5$i$i$i);
    $or$i$i$i = $sub5$i$i$i | 1;
    $head$i$i$i = ((($add$ptr4$i$i$i)) + 4|0);
    store4($head$i$i$i,$or$i$i$i);
    $add$ptr6$i$i$i = (($add$ptr4$i$i$i) + ($sub5$i$i$i)|0);
    $head7$i$i$i = ((($add$ptr6$i$i$i)) + 4|0);
    store4($head7$i$i$i,40);
    $155 = load4((11192));
    store4((10732),$155);
    $head$i$i = ((($cond13$i$i)) + 4|0);
    store4($head$i$i,27);
    ; store8($add$ptr14$i$i,load8((11152),4),4); store8($add$ptr14$i$i+8 | 0,load8((11152)+8 | 0,4),4);
    store4((11152),$tbase$792$i);
    store4((11156),$tsize$791$i);
    store4((11164),0);
    store4((11160),$add$ptr14$i$i);
    $156 = $add$ptr15$i$i;
    while(1) {
     $add$ptr24$i$i = ((($156)) + 4|0);
     store4($add$ptr24$i$i,7);
     $head26$i$i = ((($156)) + 8|0);
     $cmp27$i$i = ($head26$i$i>>>0)<($add$ptr$i$i$i>>>0);
     if ($cmp27$i$i) {
      $156 = $add$ptr24$i$i;
     } else {
      break;
     }
    }
    $cmp28$i$i = ($cond13$i$i|0)==($94|0);
    if (!($cmp28$i$i)) {
     $sub$ptr$lhs$cast$i$i = $cond13$i$i;
     $sub$ptr$rhs$cast$i$i = $94;
     $sub$ptr$sub$i$i = (($sub$ptr$lhs$cast$i$i) - ($sub$ptr$rhs$cast$i$i))|0;
     $157 = load4($head$i$i);
     $and32$i$i = $157 & -2;
     store4($head$i$i,$and32$i$i);
     $or33$i$i = $sub$ptr$sub$i$i | 1;
     $head34$i$i = ((($94)) + 4|0);
     store4($head34$i$i,$or33$i$i);
     store4($cond13$i$i,$sub$ptr$sub$i$i);
     $shr$i$i = $sub$ptr$sub$i$i >>> 3;
     $cmp36$i$i = ($sub$ptr$sub$i$i>>>0)<(256);
     if ($cmp36$i$i) {
      $shl$i$i = $shr$i$i << 1;
      $arrayidx$i$i = (10744 + ($shl$i$i<<2)|0);
      $158 = load4(10704);
      $shl39$i$i = 1 << $shr$i$i;
      $and40$i$i = $158 & $shl39$i$i;
      $tobool$i$i = ($and40$i$i|0)==(0);
      if ($tobool$i$i) {
       $or44$i$i = $158 | $shl39$i$i;
       store4(10704,$or44$i$i);
       $$pre$i$i = ((($arrayidx$i$i)) + 8|0);
       $$pre$phi$i$iZ2D = $$pre$i$i;$F$0$i$i = $arrayidx$i$i;
      } else {
       $159 = ((($arrayidx$i$i)) + 8|0);
       $160 = load4($159);
       $$pre$phi$i$iZ2D = $159;$F$0$i$i = $160;
      }
      store4($$pre$phi$i$iZ2D,$94);
      $bk$i$i = ((($F$0$i$i)) + 12|0);
      store4($bk$i$i,$94);
      $fd54$i$i = ((($94)) + 8|0);
      store4($fd54$i$i,$F$0$i$i);
      $bk55$i$i = ((($94)) + 12|0);
      store4($bk55$i$i,$arrayidx$i$i);
      break;
     }
     $shr58$i$i = $sub$ptr$sub$i$i >>> 8;
     $cmp59$i$i = ($shr58$i$i|0)==(0);
     if ($cmp59$i$i) {
      $I57$0$i$i = 0;
     } else {
      $cmp63$i$i = ($sub$ptr$sub$i$i>>>0)>(16777215);
      if ($cmp63$i$i) {
       $I57$0$i$i = 31;
      } else {
       $sub67$i$i = (($shr58$i$i) + 1048320)|0;
       $shr68$i$i = $sub67$i$i >>> 16;
       $and69$i$i = $shr68$i$i & 8;
       $shl70$i$i = $shr58$i$i << $and69$i$i;
       $sub71$i$i = (($shl70$i$i) + 520192)|0;
       $shr72$i$i = $sub71$i$i >>> 16;
       $and73$i$i = $shr72$i$i & 4;
       $add74$i$i = $and73$i$i | $and69$i$i;
       $shl75$i$i = $shl70$i$i << $and73$i$i;
       $sub76$i$i = (($shl75$i$i) + 245760)|0;
       $shr77$i$i = $sub76$i$i >>> 16;
       $and78$i$i = $shr77$i$i & 2;
       $add79$i$i = $add74$i$i | $and78$i$i;
       $sub80$i$i = (14 - ($add79$i$i))|0;
       $shl81$i$i = $shl75$i$i << $and78$i$i;
       $shr82$i$i = $shl81$i$i >>> 15;
       $add83$i$i = (($sub80$i$i) + ($shr82$i$i))|0;
       $shl84$i$i = $add83$i$i << 1;
       $add85$i$i = (($add83$i$i) + 7)|0;
       $shr86$i$i = $sub$ptr$sub$i$i >>> $add85$i$i;
       $and87$i$i = $shr86$i$i & 1;
       $add88$i$i = $and87$i$i | $shl84$i$i;
       $I57$0$i$i = $add88$i$i;
      }
     }
     $arrayidx91$i$i = (11008 + ($I57$0$i$i<<2)|0);
     $index$i$i = ((($94)) + 28|0);
     store4($index$i$i,$I57$0$i$i);
     $arrayidx92$i$i = ((($94)) + 20|0);
     store4($arrayidx92$i$i,0);
     store4($add$ptr81$i$i,0);
     $161 = load4((10708));
     $shl95$i$i = 1 << $I57$0$i$i;
     $and96$i$i = $161 & $shl95$i$i;
     $tobool97$i$i = ($and96$i$i|0)==(0);
     if ($tobool97$i$i) {
      $or101$i$i = $161 | $shl95$i$i;
      store4((10708),$or101$i$i);
      store4($arrayidx91$i$i,$94);
      $parent$i$i = ((($94)) + 24|0);
      store4($parent$i$i,$arrayidx91$i$i);
      $bk102$i$i = ((($94)) + 12|0);
      store4($bk102$i$i,$94);
      $fd103$i$i = ((($94)) + 8|0);
      store4($fd103$i$i,$94);
      break;
     }
     $162 = load4($arrayidx91$i$i);
     $cmp106$i$i = ($I57$0$i$i|0)==(31);
     $shr110$i$i = $I57$0$i$i >>> 1;
     $sub113$i$i = (25 - ($shr110$i$i))|0;
     $cond115$i$i = $cmp106$i$i ? 0 : $sub113$i$i;
     $shl116$i$i = $sub$ptr$sub$i$i << $cond115$i$i;
     $K105$0$i$i = $shl116$i$i;$T$0$i$i = $162;
     while(1) {
      $head118$i$i = ((($T$0$i$i)) + 4|0);
      $163 = load4($head118$i$i);
      $and119$i$i = $163 & -8;
      $cmp120$i$i = ($and119$i$i|0)==($sub$ptr$sub$i$i|0);
      if ($cmp120$i$i) {
       label = 216;
       break;
      }
      $shr124$i$i = $K105$0$i$i >>> 31;
      $arrayidx126$i$i = (((($T$0$i$i)) + 16|0) + ($shr124$i$i<<2)|0);
      $shl127$i$i = $K105$0$i$i << 1;
      $164 = load4($arrayidx126$i$i);
      $cmp128$i$i = ($164|0)==(0|0);
      if ($cmp128$i$i) {
       label = 215;
       break;
      } else {
       $K105$0$i$i = $shl127$i$i;$T$0$i$i = $164;
      }
     }
     if ((label|0) == 215) {
      store4($arrayidx126$i$i,$94);
      $parent138$i$i = ((($94)) + 24|0);
      store4($parent138$i$i,$T$0$i$i);
      $bk139$i$i = ((($94)) + 12|0);
      store4($bk139$i$i,$94);
      $fd140$i$i = ((($94)) + 8|0);
      store4($fd140$i$i,$94);
      break;
     }
     else if ((label|0) == 216) {
      $fd148$i$i = ((($T$0$i$i)) + 8|0);
      $165 = load4($fd148$i$i);
      $bk158$i$i = ((($165)) + 12|0);
      store4($bk158$i$i,$94);
      store4($fd148$i$i,$94);
      $fd160$i$i = ((($94)) + 8|0);
      store4($fd160$i$i,$165);
      $bk161$i$i = ((($94)) + 12|0);
      store4($bk161$i$i,$T$0$i$i);
      $parent162$i$i = ((($94)) + 24|0);
      store4($parent162$i$i,0);
      break;
     }
    }
   }
  } while(0);
  $166 = load4((10716));
  $cmp257$i = ($166>>>0)>($nb$0>>>0);
  if ($cmp257$i) {
   $sub260$i = (($166) - ($nb$0))|0;
   store4((10716),$sub260$i);
   $167 = load4((10728));
   $add$ptr262$i = (($167) + ($nb$0)|0);
   store4((10728),$add$ptr262$i);
   $or264$i = $sub260$i | 1;
   $head265$i = ((($add$ptr262$i)) + 4|0);
   store4($head265$i,$or264$i);
   $or267$i = $nb$0 | 3;
   $head268$i = ((($167)) + 4|0);
   store4($head268$i,$or267$i);
   $add$ptr269$i = ((($167)) + 8|0);
   $retval$0 = $add$ptr269$i;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 store4(11324,12);
 $retval$0 = 0;
 STACKTOP = sp;return ($retval$0|0);
}
function _free($mem) {
 $mem = $mem|0;
 var $$pre = 0, $$pre$phiZ2D = 0, $$sink = 0, $$sink4 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $F510$0 = 0, $I534$0 = 0, $K583$0 = 0;
 var $R$1 = 0, $R$3 = 0, $R332$1 = 0, $R332$3 = 0, $RP$1 = 0, $RP360$1 = 0, $T$0 = 0, $add$ptr = 0, $add$ptr16 = 0, $add$ptr217 = 0, $add$ptr261 = 0, $add$ptr482 = 0, $add$ptr498 = 0, $add$ptr6 = 0, $add17 = 0, $add246 = 0, $add258 = 0, $add267 = 0, $add550 = 0, $add555 = 0;
 var $add559 = 0, $add561 = 0, $add564 = 0, $and12 = 0, $and140 = 0, $and210 = 0, $and215 = 0, $and232 = 0, $and240 = 0, $and266 = 0, $and301 = 0, $and410 = 0, $and46 = 0, $and495 = 0, $and5 = 0, $and512 = 0, $and545 = 0, $and549 = 0, $and554 = 0, $and563 = 0;
 var $and574 = 0, $and592 = 0, $and8 = 0, $arrayidx108 = 0, $arrayidx113 = 0, $arrayidx130 = 0, $arrayidx149 = 0, $arrayidx157 = 0, $arrayidx182 = 0, $arrayidx188 = 0, $arrayidx198 = 0, $arrayidx362 = 0, $arrayidx374 = 0, $arrayidx379 = 0, $arrayidx400 = 0, $arrayidx419 = 0, $arrayidx427 = 0, $arrayidx454 = 0, $arrayidx460 = 0, $arrayidx470 = 0;
 var $arrayidx509 = 0, $arrayidx567 = 0, $arrayidx570 = 0, $arrayidx599 = 0, $arrayidx99 = 0, $bk = 0, $bk275 = 0, $bk321 = 0, $bk333 = 0, $bk355 = 0, $bk529 = 0, $bk531 = 0, $bk580 = 0, $bk611 = 0, $bk631 = 0, $bk634 = 0, $bk66 = 0, $bk73 = 0, $bk94 = 0, $child = 0;
 var $child171 = 0, $child361 = 0, $child443 = 0, $child569 = 0, $cmp = 0, $cmp$i = 0, $cmp100 = 0, $cmp104 = 0, $cmp109 = 0, $cmp114 = 0, $cmp127 = 0, $cmp13 = 0, $cmp131 = 0, $cmp173 = 0, $cmp18 = 0, $cmp189 = 0, $cmp211 = 0, $cmp22 = 0, $cmp228 = 0, $cmp243 = 0;
 var $cmp249 = 0, $cmp25 = 0, $cmp255 = 0, $cmp269 = 0, $cmp296 = 0, $cmp334 = 0, $cmp363 = 0, $cmp368 = 0, $cmp375 = 0, $cmp380 = 0, $cmp395 = 0, $cmp401 = 0, $cmp42 = 0, $cmp445 = 0, $cmp461 = 0, $cmp484 = 0, $cmp502 = 0, $cmp536 = 0, $cmp540 = 0, $cmp584 = 0;
 var $cmp593 = 0, $cmp601 = 0, $cmp640 = 0, $cmp74 = 0, $cond = 0, $cond255 = 0, $cond256 = 0, $dec = 0, $fd = 0, $fd273 = 0, $fd322 = 0, $fd338 = 0, $fd356 = 0, $fd530 = 0, $fd581 = 0, $fd612 = 0, $fd620 = 0, $fd633 = 0, $fd67 = 0, $fd78 = 0;
 var $fd95 = 0, $head209 = 0, $head216 = 0, $head231 = 0, $head248 = 0, $head260 = 0, $head4 = 0, $head481 = 0, $head497 = 0, $head591 = 0, $idx$neg = 0, $index = 0, $index399 = 0, $index568 = 0, $neg = 0, $neg139 = 0, $neg300 = 0, $neg409 = 0, $next4$i = 0, $not$cmp150 = 0;
 var $not$cmp420 = 0, $or = 0, $or247 = 0, $or259 = 0, $or480 = 0, $or496 = 0, $or516 = 0, $or578 = 0, $p$1 = 0, $parent = 0, $parent170 = 0, $parent183 = 0, $parent199 = 0, $parent331 = 0, $parent442 = 0, $parent455 = 0, $parent471 = 0, $parent579 = 0, $parent610 = 0, $parent635 = 0;
 var $psize$1 = 0, $psize$2 = 0, $shl138 = 0, $shl299 = 0, $shl408 = 0, $shl45 = 0, $shl508 = 0, $shl511 = 0, $shl546 = 0, $shl551 = 0, $shl557 = 0, $shl560 = 0, $shl573 = 0, $shl590 = 0, $shl600 = 0, $shr = 0, $shr268 = 0, $shr501 = 0, $shr535 = 0, $shr544 = 0;
 var $shr548 = 0, $shr553 = 0, $shr558 = 0, $shr562 = 0, $shr586 = 0, $shr597 = 0, $sp$0$i = 0, $sp$0$in$i = 0, $sub = 0, $sub547 = 0, $sub552 = 0, $sub556 = 0, $sub589 = 0, $tobool233 = 0, $tobool241 = 0, $tobool513 = 0, $tobool575 = 0, $tobool9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($mem|0)==(0|0);
 if ($cmp) {
  return;
 }
 $add$ptr = ((($mem)) + -8|0);
 $0 = load4((10720));
 $head4 = ((($mem)) + -4|0);
 $1 = load4($head4);
 $and5 = $1 & -8;
 $add$ptr6 = (($add$ptr) + ($and5)|0);
 $and8 = $1 & 1;
 $tobool9 = ($and8|0)==(0);
 do {
  if ($tobool9) {
   $2 = load4($add$ptr);
   $and12 = $1 & 3;
   $cmp13 = ($and12|0)==(0);
   if ($cmp13) {
    return;
   }
   $idx$neg = (0 - ($2))|0;
   $add$ptr16 = (($add$ptr) + ($idx$neg)|0);
   $add17 = (($2) + ($and5))|0;
   $cmp18 = ($add$ptr16>>>0)<($0>>>0);
   if ($cmp18) {
    return;
   }
   $3 = load4((10724));
   $cmp22 = ($add$ptr16|0)==($3|0);
   if ($cmp22) {
    $head209 = ((($add$ptr6)) + 4|0);
    $20 = load4($head209);
    $and210 = $20 & 3;
    $cmp211 = ($and210|0)==(3);
    if (!($cmp211)) {
     $21 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
    $add$ptr217 = (($add$ptr16) + ($add17)|0);
    $head216 = ((($add$ptr16)) + 4|0);
    $or = $add17 | 1;
    $and215 = $20 & -2;
    store4((10712),$add17);
    store4($head209,$and215);
    store4($head216,$or);
    store4($add$ptr217,$add17);
    return;
   }
   $shr = $2 >>> 3;
   $cmp25 = ($2>>>0)<(256);
   if ($cmp25) {
    $fd = ((($add$ptr16)) + 8|0);
    $4 = load4($fd);
    $bk = ((($add$ptr16)) + 12|0);
    $5 = load4($bk);
    $cmp42 = ($5|0)==($4|0);
    if ($cmp42) {
     $shl45 = 1 << $shr;
     $neg = $shl45 ^ -1;
     $6 = load4(10704);
     $and46 = $6 & $neg;
     store4(10704,$and46);
     $21 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    } else {
     $bk66 = ((($4)) + 12|0);
     store4($bk66,$5);
     $fd67 = ((($5)) + 8|0);
     store4($fd67,$4);
     $21 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
   }
   $parent = ((($add$ptr16)) + 24|0);
   $7 = load4($parent);
   $bk73 = ((($add$ptr16)) + 12|0);
   $8 = load4($bk73);
   $cmp74 = ($8|0)==($add$ptr16|0);
   do {
    if ($cmp74) {
     $child = ((($add$ptr16)) + 16|0);
     $arrayidx99 = ((($child)) + 4|0);
     $10 = load4($arrayidx99);
     $cmp100 = ($10|0)==(0|0);
     if ($cmp100) {
      $11 = load4($child);
      $cmp104 = ($11|0)==(0|0);
      if ($cmp104) {
       $R$3 = 0;
       break;
      } else {
       $R$1 = $11;$RP$1 = $child;
      }
     } else {
      $R$1 = $10;$RP$1 = $arrayidx99;
     }
     while(1) {
      $arrayidx108 = ((($R$1)) + 20|0);
      $12 = load4($arrayidx108);
      $cmp109 = ($12|0)==(0|0);
      if (!($cmp109)) {
       $R$1 = $12;$RP$1 = $arrayidx108;
       continue;
      }
      $arrayidx113 = ((($R$1)) + 16|0);
      $13 = load4($arrayidx113);
      $cmp114 = ($13|0)==(0|0);
      if ($cmp114) {
       break;
      } else {
       $R$1 = $13;$RP$1 = $arrayidx113;
      }
     }
     store4($RP$1,0);
     $R$3 = $R$1;
    } else {
     $fd78 = ((($add$ptr16)) + 8|0);
     $9 = load4($fd78);
     $bk94 = ((($9)) + 12|0);
     store4($bk94,$8);
     $fd95 = ((($8)) + 8|0);
     store4($fd95,$9);
     $R$3 = $8;
    }
   } while(0);
   $cmp127 = ($7|0)==(0|0);
   if ($cmp127) {
    $21 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
   } else {
    $index = ((($add$ptr16)) + 28|0);
    $14 = load4($index);
    $arrayidx130 = (11008 + ($14<<2)|0);
    $15 = load4($arrayidx130);
    $cmp131 = ($add$ptr16|0)==($15|0);
    $cond255 = ($R$3|0)==(0|0);
    if ($cmp131) {
     store4($arrayidx130,$R$3);
     if ($cond255) {
      $shl138 = 1 << $14;
      $neg139 = $shl138 ^ -1;
      $16 = load4((10708));
      $and140 = $16 & $neg139;
      store4((10708),$and140);
      $21 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    } else {
     $arrayidx149 = ((($7)) + 16|0);
     $17 = load4($arrayidx149);
     $not$cmp150 = ($17|0)!=($add$ptr16|0);
     $$sink = $not$cmp150&1;
     $arrayidx157 = (((($7)) + 16|0) + ($$sink<<2)|0);
     store4($arrayidx157,$R$3);
     if ($cond255) {
      $21 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    }
    $parent170 = ((($R$3)) + 24|0);
    store4($parent170,$7);
    $child171 = ((($add$ptr16)) + 16|0);
    $18 = load4($child171);
    $cmp173 = ($18|0)==(0|0);
    if (!($cmp173)) {
     $arrayidx182 = ((($R$3)) + 16|0);
     store4($arrayidx182,$18);
     $parent183 = ((($18)) + 24|0);
     store4($parent183,$R$3);
    }
    $arrayidx188 = ((($child171)) + 4|0);
    $19 = load4($arrayidx188);
    $cmp189 = ($19|0)==(0|0);
    if ($cmp189) {
     $21 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
    } else {
     $arrayidx198 = ((($R$3)) + 20|0);
     store4($arrayidx198,$19);
     $parent199 = ((($19)) + 24|0);
     store4($parent199,$R$3);
     $21 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
    }
   }
  } else {
   $21 = $add$ptr;$p$1 = $add$ptr;$psize$1 = $and5;
  }
 } while(0);
 $cmp228 = ($21>>>0)<($add$ptr6>>>0);
 if (!($cmp228)) {
  return;
 }
 $head231 = ((($add$ptr6)) + 4|0);
 $22 = load4($head231);
 $and232 = $22 & 1;
 $tobool233 = ($and232|0)==(0);
 if ($tobool233) {
  return;
 }
 $and240 = $22 & 2;
 $tobool241 = ($and240|0)==(0);
 if ($tobool241) {
  $23 = load4((10728));
  $cmp243 = ($add$ptr6|0)==($23|0);
  $24 = load4((10724));
  if ($cmp243) {
   $25 = load4((10716));
   $add246 = (($25) + ($psize$1))|0;
   store4((10716),$add246);
   store4((10728),$p$1);
   $or247 = $add246 | 1;
   $head248 = ((($p$1)) + 4|0);
   store4($head248,$or247);
   $cmp249 = ($p$1|0)==($24|0);
   if (!($cmp249)) {
    return;
   }
   store4((10724),0);
   store4((10712),0);
   return;
  }
  $cmp255 = ($add$ptr6|0)==($24|0);
  if ($cmp255) {
   $26 = load4((10712));
   $add258 = (($26) + ($psize$1))|0;
   store4((10712),$add258);
   store4((10724),$21);
   $or259 = $add258 | 1;
   $head260 = ((($p$1)) + 4|0);
   store4($head260,$or259);
   $add$ptr261 = (($21) + ($add258)|0);
   store4($add$ptr261,$add258);
   return;
  }
  $and266 = $22 & -8;
  $add267 = (($and266) + ($psize$1))|0;
  $shr268 = $22 >>> 3;
  $cmp269 = ($22>>>0)<(256);
  do {
   if ($cmp269) {
    $fd273 = ((($add$ptr6)) + 8|0);
    $27 = load4($fd273);
    $bk275 = ((($add$ptr6)) + 12|0);
    $28 = load4($bk275);
    $cmp296 = ($28|0)==($27|0);
    if ($cmp296) {
     $shl299 = 1 << $shr268;
     $neg300 = $shl299 ^ -1;
     $29 = load4(10704);
     $and301 = $29 & $neg300;
     store4(10704,$and301);
     break;
    } else {
     $bk321 = ((($27)) + 12|0);
     store4($bk321,$28);
     $fd322 = ((($28)) + 8|0);
     store4($fd322,$27);
     break;
    }
   } else {
    $parent331 = ((($add$ptr6)) + 24|0);
    $30 = load4($parent331);
    $bk333 = ((($add$ptr6)) + 12|0);
    $31 = load4($bk333);
    $cmp334 = ($31|0)==($add$ptr6|0);
    do {
     if ($cmp334) {
      $child361 = ((($add$ptr6)) + 16|0);
      $arrayidx362 = ((($child361)) + 4|0);
      $33 = load4($arrayidx362);
      $cmp363 = ($33|0)==(0|0);
      if ($cmp363) {
       $34 = load4($child361);
       $cmp368 = ($34|0)==(0|0);
       if ($cmp368) {
        $R332$3 = 0;
        break;
       } else {
        $R332$1 = $34;$RP360$1 = $child361;
       }
      } else {
       $R332$1 = $33;$RP360$1 = $arrayidx362;
      }
      while(1) {
       $arrayidx374 = ((($R332$1)) + 20|0);
       $35 = load4($arrayidx374);
       $cmp375 = ($35|0)==(0|0);
       if (!($cmp375)) {
        $R332$1 = $35;$RP360$1 = $arrayidx374;
        continue;
       }
       $arrayidx379 = ((($R332$1)) + 16|0);
       $36 = load4($arrayidx379);
       $cmp380 = ($36|0)==(0|0);
       if ($cmp380) {
        break;
       } else {
        $R332$1 = $36;$RP360$1 = $arrayidx379;
       }
      }
      store4($RP360$1,0);
      $R332$3 = $R332$1;
     } else {
      $fd338 = ((($add$ptr6)) + 8|0);
      $32 = load4($fd338);
      $bk355 = ((($32)) + 12|0);
      store4($bk355,$31);
      $fd356 = ((($31)) + 8|0);
      store4($fd356,$32);
      $R332$3 = $31;
     }
    } while(0);
    $cmp395 = ($30|0)==(0|0);
    if (!($cmp395)) {
     $index399 = ((($add$ptr6)) + 28|0);
     $37 = load4($index399);
     $arrayidx400 = (11008 + ($37<<2)|0);
     $38 = load4($arrayidx400);
     $cmp401 = ($add$ptr6|0)==($38|0);
     $cond256 = ($R332$3|0)==(0|0);
     if ($cmp401) {
      store4($arrayidx400,$R332$3);
      if ($cond256) {
       $shl408 = 1 << $37;
       $neg409 = $shl408 ^ -1;
       $39 = load4((10708));
       $and410 = $39 & $neg409;
       store4((10708),$and410);
       break;
      }
     } else {
      $arrayidx419 = ((($30)) + 16|0);
      $40 = load4($arrayidx419);
      $not$cmp420 = ($40|0)!=($add$ptr6|0);
      $$sink4 = $not$cmp420&1;
      $arrayidx427 = (((($30)) + 16|0) + ($$sink4<<2)|0);
      store4($arrayidx427,$R332$3);
      if ($cond256) {
       break;
      }
     }
     $parent442 = ((($R332$3)) + 24|0);
     store4($parent442,$30);
     $child443 = ((($add$ptr6)) + 16|0);
     $41 = load4($child443);
     $cmp445 = ($41|0)==(0|0);
     if (!($cmp445)) {
      $arrayidx454 = ((($R332$3)) + 16|0);
      store4($arrayidx454,$41);
      $parent455 = ((($41)) + 24|0);
      store4($parent455,$R332$3);
     }
     $arrayidx460 = ((($child443)) + 4|0);
     $42 = load4($arrayidx460);
     $cmp461 = ($42|0)==(0|0);
     if (!($cmp461)) {
      $arrayidx470 = ((($R332$3)) + 20|0);
      store4($arrayidx470,$42);
      $parent471 = ((($42)) + 24|0);
      store4($parent471,$R332$3);
     }
    }
   }
  } while(0);
  $or480 = $add267 | 1;
  $head481 = ((($p$1)) + 4|0);
  store4($head481,$or480);
  $add$ptr482 = (($21) + ($add267)|0);
  store4($add$ptr482,$add267);
  $43 = load4((10724));
  $cmp484 = ($p$1|0)==($43|0);
  if ($cmp484) {
   store4((10712),$add267);
   return;
  } else {
   $psize$2 = $add267;
  }
 } else {
  $and495 = $22 & -2;
  store4($head231,$and495);
  $or496 = $psize$1 | 1;
  $head497 = ((($p$1)) + 4|0);
  store4($head497,$or496);
  $add$ptr498 = (($21) + ($psize$1)|0);
  store4($add$ptr498,$psize$1);
  $psize$2 = $psize$1;
 }
 $shr501 = $psize$2 >>> 3;
 $cmp502 = ($psize$2>>>0)<(256);
 if ($cmp502) {
  $shl508 = $shr501 << 1;
  $arrayidx509 = (10744 + ($shl508<<2)|0);
  $44 = load4(10704);
  $shl511 = 1 << $shr501;
  $and512 = $44 & $shl511;
  $tobool513 = ($and512|0)==(0);
  if ($tobool513) {
   $or516 = $44 | $shl511;
   store4(10704,$or516);
   $$pre = ((($arrayidx509)) + 8|0);
   $$pre$phiZ2D = $$pre;$F510$0 = $arrayidx509;
  } else {
   $45 = ((($arrayidx509)) + 8|0);
   $46 = load4($45);
   $$pre$phiZ2D = $45;$F510$0 = $46;
  }
  store4($$pre$phiZ2D,$p$1);
  $bk529 = ((($F510$0)) + 12|0);
  store4($bk529,$p$1);
  $fd530 = ((($p$1)) + 8|0);
  store4($fd530,$F510$0);
  $bk531 = ((($p$1)) + 12|0);
  store4($bk531,$arrayidx509);
  return;
 }
 $shr535 = $psize$2 >>> 8;
 $cmp536 = ($shr535|0)==(0);
 if ($cmp536) {
  $I534$0 = 0;
 } else {
  $cmp540 = ($psize$2>>>0)>(16777215);
  if ($cmp540) {
   $I534$0 = 31;
  } else {
   $sub = (($shr535) + 1048320)|0;
   $shr544 = $sub >>> 16;
   $and545 = $shr544 & 8;
   $shl546 = $shr535 << $and545;
   $sub547 = (($shl546) + 520192)|0;
   $shr548 = $sub547 >>> 16;
   $and549 = $shr548 & 4;
   $add550 = $and549 | $and545;
   $shl551 = $shl546 << $and549;
   $sub552 = (($shl551) + 245760)|0;
   $shr553 = $sub552 >>> 16;
   $and554 = $shr553 & 2;
   $add555 = $add550 | $and554;
   $sub556 = (14 - ($add555))|0;
   $shl557 = $shl551 << $and554;
   $shr558 = $shl557 >>> 15;
   $add559 = (($sub556) + ($shr558))|0;
   $shl560 = $add559 << 1;
   $add561 = (($add559) + 7)|0;
   $shr562 = $psize$2 >>> $add561;
   $and563 = $shr562 & 1;
   $add564 = $and563 | $shl560;
   $I534$0 = $add564;
  }
 }
 $arrayidx567 = (11008 + ($I534$0<<2)|0);
 $index568 = ((($p$1)) + 28|0);
 store4($index568,$I534$0);
 $child569 = ((($p$1)) + 16|0);
 $arrayidx570 = ((($p$1)) + 20|0);
 store4($arrayidx570,0);
 store4($child569,0);
 $47 = load4((10708));
 $shl573 = 1 << $I534$0;
 $and574 = $47 & $shl573;
 $tobool575 = ($and574|0)==(0);
 do {
  if ($tobool575) {
   $or578 = $47 | $shl573;
   store4((10708),$or578);
   store4($arrayidx567,$p$1);
   $parent579 = ((($p$1)) + 24|0);
   store4($parent579,$arrayidx567);
   $bk580 = ((($p$1)) + 12|0);
   store4($bk580,$p$1);
   $fd581 = ((($p$1)) + 8|0);
   store4($fd581,$p$1);
  } else {
   $48 = load4($arrayidx567);
   $cmp584 = ($I534$0|0)==(31);
   $shr586 = $I534$0 >>> 1;
   $sub589 = (25 - ($shr586))|0;
   $cond = $cmp584 ? 0 : $sub589;
   $shl590 = $psize$2 << $cond;
   $K583$0 = $shl590;$T$0 = $48;
   while(1) {
    $head591 = ((($T$0)) + 4|0);
    $49 = load4($head591);
    $and592 = $49 & -8;
    $cmp593 = ($and592|0)==($psize$2|0);
    if ($cmp593) {
     label = 73;
     break;
    }
    $shr597 = $K583$0 >>> 31;
    $arrayidx599 = (((($T$0)) + 16|0) + ($shr597<<2)|0);
    $shl600 = $K583$0 << 1;
    $50 = load4($arrayidx599);
    $cmp601 = ($50|0)==(0|0);
    if ($cmp601) {
     label = 72;
     break;
    } else {
     $K583$0 = $shl600;$T$0 = $50;
    }
   }
   if ((label|0) == 72) {
    store4($arrayidx599,$p$1);
    $parent610 = ((($p$1)) + 24|0);
    store4($parent610,$T$0);
    $bk611 = ((($p$1)) + 12|0);
    store4($bk611,$p$1);
    $fd612 = ((($p$1)) + 8|0);
    store4($fd612,$p$1);
    break;
   }
   else if ((label|0) == 73) {
    $fd620 = ((($T$0)) + 8|0);
    $51 = load4($fd620);
    $bk631 = ((($51)) + 12|0);
    store4($bk631,$p$1);
    store4($fd620,$p$1);
    $fd633 = ((($p$1)) + 8|0);
    store4($fd633,$51);
    $bk634 = ((($p$1)) + 12|0);
    store4($bk634,$T$0);
    $parent635 = ((($p$1)) + 24|0);
    store4($parent635,0);
    break;
   }
  }
 } while(0);
 $52 = load4((10736));
 $dec = (($52) + -1)|0;
 store4((10736),$dec);
 $cmp640 = ($dec|0)==(0);
 if ($cmp640) {
  $sp$0$in$i = (11160);
 } else {
  return;
 }
 while(1) {
  $sp$0$i = load4($sp$0$in$i);
  $cmp$i = ($sp$0$i|0)==(0|0);
  $next4$i = ((($sp$0$i)) + 8|0);
  if ($cmp$i) {
   break;
  } else {
   $sp$0$in$i = $next4$i;
  }
 }
 store4((10736),-1);
 return;
}
function _emscripten_get_global_libc() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (11200|0);
}
function ___stdio_close($f) {
 $f = $f|0;
 var $0 = 0, $call = 0, $call1 = 0, $call2 = 0, $fd = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $fd = ((($f)) + 60|0);
 $0 = load4($fd);
 $call = (_dummy_570($0)|0);
 store4($vararg_buffer,$call);
 $call1 = (___syscall6(6,($vararg_buffer|0))|0);
 $call2 = (___syscall_ret($call1)|0);
 STACKTOP = sp;return ($call2|0);
}
function ___stdio_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr32 = 0, $buf8 = 0, $buf_size = 0, $call = 0, $call40 = 0;
 var $call7 = 0, $call741 = 0, $call746 = 0, $cmp = 0, $cmp12 = 0, $cmp17 = 0, $cmp24 = 0, $cmp42 = 0, $cnt$0 = 0, $dec = 0, $fd = 0, $incdec$ptr = 0, $iov$043 = 0, $iov$1 = 0, $iov_base2 = 0, $iov_len = 0, $iov_len19 = 0, $iov_len23 = 0, $iov_len3 = 0, $iov_len36 = 0;
 var $iovcnt$045 = 0, $iovcnt$1 = 0, $iovs = 0, $or = 0, $rem$044 = 0, $retval$0 = 0, $sub = 0, $sub$ptr$sub = 0, $sub21 = 0, $sub28 = 0, $sub37 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, $wbase = 0, $wend = 0, $wend14 = 0;
 var $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $iovs = sp + 32|0;
 $wbase = ((($f)) + 28|0);
 $0 = load4($wbase);
 store4($iovs,$0);
 $iov_len = ((($iovs)) + 4|0);
 $wpos = ((($f)) + 20|0);
 $1 = load4($wpos);
 $sub$ptr$sub = (($1) - ($0))|0;
 store4($iov_len,$sub$ptr$sub);
 $iov_base2 = ((($iovs)) + 8|0);
 store4($iov_base2,$buf);
 $iov_len3 = ((($iovs)) + 12|0);
 store4($iov_len3,$len);
 $add = (($sub$ptr$sub) + ($len))|0;
 $fd = ((($f)) + 60|0);
 $2 = load4($fd);
 $3 = $iovs;
 store4($vararg_buffer,$2);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,$3);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,2);
 $call40 = (___syscall146(146,($vararg_buffer|0))|0);
 $call741 = (___syscall_ret($call40)|0);
 $cmp42 = ($add|0)==($call741|0);
 L1: do {
  if ($cmp42) {
   label = 3;
  } else {
   $call746 = $call741;$iov$043 = $iovs;$iovcnt$045 = 2;$rem$044 = $add;
   while(1) {
    $cmp12 = ($call746|0)<(0);
    if ($cmp12) {
     break;
    }
    $sub21 = (($rem$044) - ($call746))|0;
    $iov_len23 = ((($iov$043)) + 4|0);
    $8 = load4($iov_len23);
    $cmp24 = ($call746>>>0)>($8>>>0);
    $incdec$ptr = ((($iov$043)) + 8|0);
    $iov$1 = $cmp24 ? $incdec$ptr : $iov$043;
    $dec = $cmp24 << 31 >> 31;
    $iovcnt$1 = (($dec) + ($iovcnt$045))|0;
    $sub28 = $cmp24 ? $8 : 0;
    $cnt$0 = (($call746) - ($sub28))|0;
    $9 = load4($iov$1);
    $add$ptr32 = (($9) + ($cnt$0)|0);
    store4($iov$1,$add$ptr32);
    $iov_len36 = ((($iov$1)) + 4|0);
    $10 = load4($iov_len36);
    $sub37 = (($10) - ($cnt$0))|0;
    store4($iov_len36,$sub37);
    $11 = load4($fd);
    $12 = $iov$1;
    store4($vararg_buffer3,$11);
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    store4($vararg_ptr6,$12);
    $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
    store4($vararg_ptr7,$iovcnt$1);
    $call = (___syscall146(146,($vararg_buffer3|0))|0);
    $call7 = (___syscall_ret($call)|0);
    $cmp = ($sub21|0)==($call7|0);
    if ($cmp) {
     label = 3;
     break L1;
    } else {
     $call746 = $call7;$iov$043 = $iov$1;$iovcnt$045 = $iovcnt$1;$rem$044 = $sub21;
    }
   }
   $wend14 = ((($f)) + 16|0);
   store4($wend14,0);
   store4($wbase,0);
   store4($wpos,0);
   $6 = load4($f);
   $or = $6 | 32;
   store4($f,$or);
   $cmp17 = ($iovcnt$045|0)==(2);
   if ($cmp17) {
    $retval$0 = 0;
   } else {
    $iov_len19 = ((($iov$043)) + 4|0);
    $7 = load4($iov_len19);
    $sub = (($len) - ($7))|0;
    $retval$0 = $sub;
   }
  }
 } while(0);
 if ((label|0) == 3) {
  $buf8 = ((($f)) + 44|0);
  $4 = load4($buf8);
  $buf_size = ((($f)) + 48|0);
  $5 = load4($buf_size);
  $add$ptr = (($4) + ($5)|0);
  $wend = ((($f)) + 16|0);
  store4($wend,$add$ptr);
  store4($wbase,$4);
  store4($wpos,$4);
  $retval$0 = $len;
 }
 STACKTOP = sp;return ($retval$0|0);
}
function ___stdio_seek($f,$off,$whence) {
 $f = $f|0;
 $off = $off|0;
 $whence = $whence|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $call = 0, $call1 = 0, $cmp = 0, $fd = 0, $ret = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $ret = sp + 20|0;
 $fd = ((($f)) + 60|0);
 $0 = load4($fd);
 $1 = $ret;
 store4($vararg_buffer,$0);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,0);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,$off);
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 store4($vararg_ptr3,$1);
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 store4($vararg_ptr4,$whence);
 $call = (___syscall140(140,($vararg_buffer|0))|0);
 $call1 = (___syscall_ret($call)|0);
 $cmp = ($call1|0)<(0);
 if ($cmp) {
  store4($ret,-1);
  $2 = -1;
 } else {
  $$pre = load4($ret);
  $2 = $$pre;
 }
 STACKTOP = sp;return ($2|0);
}
function ___syscall_ret($r) {
 $r = $r|0;
 var $cmp = 0, $retval$0 = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($r>>>0)>(4294963200);
 if ($cmp) {
  $sub = (0 - ($r))|0;
  store4(11324,$sub);
  $retval$0 = -1;
 } else {
  $retval$0 = $r;
 }
 return ($retval$0|0);
}
function _dummy_570($fd) {
 $fd = $fd|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return ($fd|0);
}
function _strcmp($l,$r) {
 $l = $l|0;
 $r = $r|0;
 var $$lcssa = 0, $$lcssa6 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $cmp = 0, $cmp7 = 0, $conv5 = 0, $conv6 = 0, $incdec$ptr = 0, $incdec$ptr4 = 0, $l$addr$010 = 0, $or$cond = 0, $or$cond9 = 0, $r$addr$011 = 0, $sub = 0, $tobool = 0, $tobool8 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $0 = load1($l);
 $1 = load1($r);
 $cmp7 = ($0<<24>>24)!=($1<<24>>24);
 $tobool8 = ($0<<24>>24)==(0);
 $or$cond9 = $tobool8 | $cmp7;
 if ($or$cond9) {
  $$lcssa = $1;$$lcssa6 = $0;
 } else {
  $l$addr$010 = $l;$r$addr$011 = $r;
  while(1) {
   $incdec$ptr = ((($l$addr$010)) + 1|0);
   $incdec$ptr4 = ((($r$addr$011)) + 1|0);
   $2 = load1($incdec$ptr);
   $3 = load1($incdec$ptr4);
   $cmp = ($2<<24>>24)!=($3<<24>>24);
   $tobool = ($2<<24>>24)==(0);
   $or$cond = $tobool | $cmp;
   if ($or$cond) {
    $$lcssa = $3;$$lcssa6 = $2;
    break;
   } else {
    $l$addr$010 = $incdec$ptr;$r$addr$011 = $incdec$ptr4;
   }
  }
 }
 $conv5 = $$lcssa6&255;
 $conv6 = $$lcssa&255;
 $sub = (($conv5) - ($conv6))|0;
 return ($sub|0);
}
function _memcmp($vl,$vr,$n) {
 $vl = $vl|0;
 $vr = $vr|0;
 $n = $n|0;
 var $0 = 0, $1 = 0, $cmp = 0, $cond = 0, $conv5 = 0, $conv6 = 0, $dec = 0, $incdec$ptr = 0, $incdec$ptr3 = 0, $l$012 = 0, $n$addr$011 = 0, $r$013 = 0, $sub = 0, $tobool = 0, $tobool10 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool10 = ($n|0)==(0);
 L1: do {
  if ($tobool10) {
   $cond = 0;
  } else {
   $l$012 = $vl;$n$addr$011 = $n;$r$013 = $vr;
   while(1) {
    $0 = load1($l$012);
    $1 = load1($r$013);
    $cmp = ($0<<24>>24)==($1<<24>>24);
    if (!($cmp)) {
     break;
    }
    $dec = (($n$addr$011) + -1)|0;
    $incdec$ptr = ((($l$012)) + 1|0);
    $incdec$ptr3 = ((($r$013)) + 1|0);
    $tobool = ($dec|0)==(0);
    if ($tobool) {
     $cond = 0;
     break L1;
    } else {
     $l$012 = $incdec$ptr;$n$addr$011 = $dec;$r$013 = $incdec$ptr3;
    }
   }
   $conv5 = $0&255;
   $conv6 = $1&255;
   $sub = (($conv5) - ($conv6))|0;
   $cond = $sub;
  }
 } while(0);
 return ($cond|0);
}
function _vfprintf($fmt,$ap) {
 $fmt = $fmt|0;
 $ap = $ap|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $add$ptr = 0, $and = 0, $and11 = 0, $ap2 = 0, $call = 0, $cmp = 0, $cmp7 = 0, $internal_buf = 0, $nl_arg = 0, $nl_type = 0, $or = 0, $tobool = 0, $tobool22 = 0;
 var $vacopy_currentptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0;
 $ap2 = sp + 120|0;
 $nl_type = sp + 80|0;
 $nl_arg = sp;
 $internal_buf = sp + 136|0;
 ; store8($nl_type,i64_const(0,0),4); store8($nl_type+8|0,i64_const(0,0),4); store8($nl_type+16|0,i64_const(0,0),4); store8($nl_type+24|0,i64_const(0,0),4); store8($nl_type+32|0,i64_const(0,0),4);
 $vacopy_currentptr = load4($ap);
 store4($ap2,$vacopy_currentptr);
 $call = (_printf_core(0,$fmt,$ap2,$nl_arg,$nl_type)|0);
 $cmp = ($call|0)<(0);
 if ($cmp) {
 } else {
  $0 = load4((2488));
  $1 = load4(2412);
  $and = $1 & 32;
  $2 = load1((2486));
  $cmp7 = ($2<<24>>24)<(1);
  if ($cmp7) {
   $and11 = $1 & -33;
   store4(2412,$and11);
  }
  $3 = load4((2460));
  $tobool = ($3|0)==(0);
  if ($tobool) {
   $4 = load4((2456));
   store4((2456),$internal_buf);
   store4((2440),$internal_buf);
   store4((2432),$internal_buf);
   store4((2460),80);
   $add$ptr = ((($internal_buf)) + 80|0);
   store4((2428),$add$ptr);
   (_printf_core(2412,$fmt,$ap2,$nl_arg,$nl_type)|0);
   $tobool22 = ($4|0)==(0|0);
   if (!($tobool22)) {
    $5 = load4((2448));
    (FUNCTION_TABLE_iiii[$5 & 31](2412,0,0)|0);
    store4((2456),$4);
    store4((2460),0);
    store4((2428),0);
    store4((2440),0);
    store4((2432),0);
   }
  } else {
   (_printf_core(2412,$fmt,$ap2,$nl_arg,$nl_type)|0);
  }
  $6 = load4(2412);
  $or = $6 | $and;
  store4(2412,$or);
 }
 STACKTOP = sp;return;
}
function _printf_core($f,$fmt,$ap,$nl_arg,$nl_type) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 $nl_arg = $nl_arg|0;
 $nl_type = $nl_type|0;
 var $$ = 0, $$$ = 0, $$194$ = 0, $$197 = 0, $$add$ptr258 = 0, $$l10n$0 = 0, $$lcssa199 = 0, $$pre = 0, $$pre247 = 0, $$pre248 = 0, $$pre248$pre = 0, $$pre249 = 0, $$pre250 = i64(), $$pre35 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
 var $14 = 0, $15 = 0, $16 = i64(), $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = i64(), $29 = 0, $3 = 0, $30 = 0, $31 = 0;
 var $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = i64(), $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = i64(), $49 = i64(), $5 = 0;
 var $50 = 0, $51 = i64(), $52 = 0, $53 = i64(), $54 = i64(), $55 = i64(), $56 = 0, $57 = 0, $58 = i64(), $59 = 0, $6 = 0, $60 = 0, $61 = 0.0, $62 = 0, $63 = 0, $64 = 0, $7 = 0, $8 = 0, $9 = 0, $a$0 = 0;
 var $a$0$add$ptr206 = 0, $a$1 = 0, $a$2 = 0, $add = 0, $add$ptr = 0, $add$ptr139 = 0, $add$ptr206 = 0, $add$ptr258 = 0, $add$ptr341 = 0, $add$ptr360 = 0, $add$ptr43 = 0, $add$ptr43$arrayidx31 = 0, $add$ptr474 = 0, $add$ptr88 = 0, $add270 = 0, $add323 = 0, $add396 = 0, $add413 = 0, $add442 = 0, $and = 0;
 var $and211 = 0, $and215 = 0, $and217 = 0, $and220 = 0, $and250 = 0, $and255 = 0, $and264 = 0, $and290 = 0, $and295 = 0, $and310 = 0, $and310$fl$4 = 0, $arg = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $argpos$0 = 0, $arrayidx114 = 0, $arrayidx119 = 0, $arrayidx124 = 0;
 var $arrayidx132 = 0, $arrayidx16 = 0, $arrayidx174 = 0, $arrayidx193 = 0, $arrayidx31 = 0, $arrayidx35 = 0, $arrayidx371 = 0, $arrayidx470 = 0, $arrayidx482$phi$trans$insert = 0, $arrayidx68 = 0, $arrayidx73 = 0, $arrayidx81 = 0, $buf = 0, $call104 = 0, $call160 = 0, $call251 = 0, $call263 = 0, $call305 = 0, $call346 = 0, $call357 = 0;
 var $call385 = 0, $call412 = 0, $call430 = 0, $cmp = 0, $cmp1 = 0, $cmp105 = 0, $cmp111 = 0, $cmp116 = 0, $cmp126 = 0, $cmp13 = 0, $cmp166 = 0, $cmp177 = 0, $cmp18 = 0, $cmp182 = 0, $cmp185 = 0, $cmp212 = 0, $cmp241 = 0, $cmp271 = 0, $cmp283 = 0, $cmp307 = 0;
 var $cmp324 = 0, $cmp37 = 0, $cmp378 = 0, $cmp378227 = 0, $cmp386 = 0, $cmp391 = 0, $cmp398 = 0, $cmp405 = 0, $cmp405237 = 0, $cmp414 = 0, $cmp422 = 0, $cmp435 = 0, $cmp443 = 0, $cmp467 = 0, $cmp479 = 0, $cmp50 = 0, $cmp50217 = 0, $cmp65 = 0, $cmp75 = 0, $cmp97 = 0;
 var $cnt$0 = 0, $cnt$1 = 0, $cond149 = 0, $cond246 = 0, $cond355 = 0, $cond427 = 0, $conv120 = 0, $conv134 = 0, $conv138 = 0, $conv164 = 0, $conv172 = 0, $conv175 = 0, $conv208 = 0, $conv227 = i64(), $conv230 = 0, $conv233 = 0, $conv238 = i64(), $conv32 = 0, $conv340 = 0, $conv369 = 0;
 var $conv48 = 0, $conv48215 = 0, $conv69 = 0, $conv83 = 0, $conv87 = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded12 = 0, $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded16 = 0, $expanded4 = 0, $expanded5 = 0, $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $expanded9 = 0, $fl$0$lcssa = 0;
 var $fl$0219 = 0, $fl$1 = 0, $fl$1$and220 = 0, $fl$3 = 0, $fl$4 = 0, $fl$6 = 0, $i$0$lcssa = 0, $i$0$lcssa256 = 0, $i$0229 = 0, $i$1238 = 0, $i$2210 = 0, $i137 = 0, $i86 = 0, $inc = 0, $inc48971 = 0, $inc48971$in = 0, $incdec$ptr = 0, $incdec$ptr171 = 0, $incdec$ptr23 = 0, $incdec$ptr384 = 0;
 var $incdec$ptr411 = 0, $incdec$ptr62 = 0, $isdigit = 0, $isdigit188 = 0, $isdigit190 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp187 = 0, $isdigittmp189 = 0, $l$0 = 0, $l$1228 = 0, $l$2 = 0, $l10n$0 = 0, $l10n$0$phi = 0, $l10n$1 = 0, $l10n$2 = 0, $l10n$3 = 0, $lnot = 0, $lnot$ext = 0, $lnot484 = 0;
 var $mb = 0, $narrow = 0, $or = 0, $or$cond = 0, $or$cond192 = 0, $or$cond193 = 0, $or$cond195 = 0, $or100 = 0, $or100$fl$0 = 0, $or247 = 0, $p$0 = 0, $p$0$p$0$add270 = 0, $p$1 = 0, $p$2 = 0, $p$2$add323 = 0, $p$2$add323$p$2 = 0, $p$3 = 0, $p$4253 = 0, $p$5 = 0, $pl$0 = 0;
 var $pl$1 = 0, $pl$2 = 0, $prefix$0 = 0, $prefix$1 = 0, $prefix$2 = 0, $retval$0 = 0, $s = 0, $shl = 0, $shr = 0, $st$0 = 0, $storemerge = 0, $storemerge186218 = 0, $storemerge191 = 0, $sub = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast318 = 0, $sub$ptr$lhs$cast362 = 0, $sub$ptr$lhs$cast432 = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast268 = 0;
 var $sub$ptr$rhs$cast319 = 0, $sub$ptr$rhs$cast363 = 0, $sub$ptr$rhs$cast433 = 0, $sub$ptr$sub = 0, $sub$ptr$sub269 = 0, $sub$ptr$sub320 = 0, $sub$ptr$sub364 = 0, $sub$ptr$sub434 = 0, $sub$ptr$sub434$p$5 = 0, $sub101 = 0, $sub101$w$0 = 0, $sub135 = 0, $sub165 = 0, $sub173 = 0, $sub176 = 0, $sub287 = i64(), $sub390 = 0, $sub49 = 0, $sub49216 = 0, $sub49220 = 0;
 var $sub84 = 0, $t$0 = 0, $t$1 = 0, $tobool = 0, $tobool141 = 0, $tobool179 = 0, $tobool209 = 0, $tobool218 = 0, $tobool25 = 0, $tobool253 = 0, $tobool256 = 0, $tobool265 = 0, $tobool28 = 0, $tobool291 = 0, $tobool296 = 0, $tobool313 = 0, $tobool315 = 0, $tobool350 = 0, $tobool358 = 0, $tobool381 = 0;
 var $tobool408 = 0, $tobool460 = 0, $tobool463 = 0, $tobool471 = 0, $tobool55 = 0, $tobool90 = 0, $trunc = 0, $w$0 = 0, $w$1 = 0, $w$2 = 0, $wc = 0, $ws$0230 = 0, $ws$1239 = 0, $xor = 0, $xor450 = 0, $xor458 = 0, $z$0$lcssa = 0, $z$0212 = 0, $z$1 = 0, $z$2 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $s = sp + 16|0;
 $arg = sp;
 $buf = sp + 24|0;
 $wc = sp + 8|0;
 $mb = sp + 20|0;
 store4($s,$fmt);
 $tobool25 = ($f|0)!=(0|0);
 $add$ptr206 = ((($buf)) + 40|0);
 $sub$ptr$lhs$cast318 = $add$ptr206;
 $add$ptr341 = ((($buf)) + 39|0);
 $arrayidx371 = ((($wc)) + 4|0);
 $1 = $fmt;$cnt$0 = 0;$l$0 = 0;$l10n$0 = 0;
 L1: while(1) {
  $cmp = ($cnt$0|0)>(-1);
  do {
   if ($cmp) {
    $sub = (2147483647 - ($cnt$0))|0;
    $cmp1 = ($l$0|0)>($sub|0);
    if ($cmp1) {
     store4(11324,75);
     $cnt$1 = -1;
     break;
    } else {
     $add = (($l$0) + ($cnt$0))|0;
     $cnt$1 = $add;
     break;
    }
   } else {
    $cnt$1 = $cnt$0;
   }
  } while(0);
  $0 = load1($1);
  $tobool = ($0<<24>>24)==(0);
  if ($tobool) {
   label = 87;
   break;
  } else {
   $2 = $0;$3 = $1;
  }
  L9: while(1) {
   switch ($2<<24>>24) {
   case 37:  {
    $4 = $3;$z$0212 = $3;
    label = 9;
    break L9;
    break;
   }
   case 0:  {
    $7 = $3;$z$0$lcssa = $3;
    break L9;
    break;
   }
   default: {
   }
   }
   $incdec$ptr = ((($3)) + 1|0);
   store4($s,$incdec$ptr);
   $$pre = load1($incdec$ptr);
   $2 = $$pre;$3 = $incdec$ptr;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $arrayidx16 = ((($4)) + 1|0);
     $5 = load1($arrayidx16);
     $cmp18 = ($5<<24>>24)==(37);
     if (!($cmp18)) {
      $7 = $4;$z$0$lcssa = $z$0212;
      break L12;
     }
     $incdec$ptr23 = ((($z$0212)) + 1|0);
     $add$ptr = ((($4)) + 2|0);
     store4($s,$add$ptr);
     $6 = load1($add$ptr);
     $cmp13 = ($6<<24>>24)==(37);
     if ($cmp13) {
      $4 = $add$ptr;$z$0212 = $incdec$ptr23;
      label = 9;
     } else {
      $7 = $add$ptr;$z$0$lcssa = $incdec$ptr23;
      break;
     }
    }
   }
  } while(0);
  $sub$ptr$lhs$cast = $z$0$lcssa;
  $sub$ptr$rhs$cast = $1;
  $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
  if ($tobool25) {
   _out($f,$1,$sub$ptr$sub);
  }
  $tobool28 = ($sub$ptr$sub|0)==(0);
  if (!($tobool28)) {
   $l10n$0$phi = $l10n$0;$1 = $7;$cnt$0 = $cnt$1;$l$0 = $sub$ptr$sub;$l10n$0 = $l10n$0$phi;
   continue;
  }
  $arrayidx31 = ((($7)) + 1|0);
  $8 = load1($arrayidx31);
  $conv32 = $8 << 24 >> 24;
  $isdigittmp = (($conv32) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $arrayidx35 = ((($7)) + 2|0);
   $9 = load1($arrayidx35);
   $cmp37 = ($9<<24>>24)==(36);
   $add$ptr43 = ((($7)) + 3|0);
   $add$ptr43$arrayidx31 = $cmp37 ? $add$ptr43 : $arrayidx31;
   $$l10n$0 = $cmp37 ? 1 : $l10n$0;
   $isdigittmp$ = $cmp37 ? $isdigittmp : -1;
   $argpos$0 = $isdigittmp$;$l10n$1 = $$l10n$0;$storemerge = $add$ptr43$arrayidx31;
  } else {
   $argpos$0 = -1;$l10n$1 = $l10n$0;$storemerge = $arrayidx31;
  }
  store4($s,$storemerge);
  $10 = load1($storemerge);
  $conv48215 = $10 << 24 >> 24;
  $sub49216 = (($conv48215) + -32)|0;
  $cmp50217 = ($sub49216>>>0)<(32);
  L24: do {
   if ($cmp50217) {
    $63 = $10;$fl$0219 = 0;$storemerge186218 = $storemerge;$sub49220 = $sub49216;
    while(1) {
     $shl = 1 << $sub49220;
     $and = $shl & 75913;
     $tobool55 = ($and|0)==(0);
     if ($tobool55) {
      $$lcssa199 = $63;$12 = $storemerge186218;$fl$0$lcssa = $fl$0219;
      break L24;
     }
     $or = $fl$0219 | $shl;
     $incdec$ptr62 = ((($storemerge186218)) + 1|0);
     store4($s,$incdec$ptr62);
     $11 = load1($incdec$ptr62);
     $conv48 = $11 << 24 >> 24;
     $sub49 = (($conv48) + -32)|0;
     $cmp50 = ($sub49>>>0)<(32);
     if ($cmp50) {
      $63 = $11;$fl$0219 = $or;$storemerge186218 = $incdec$ptr62;$sub49220 = $sub49;
     } else {
      $$lcssa199 = $11;$12 = $incdec$ptr62;$fl$0$lcssa = $or;
      break;
     }
    }
   } else {
    $$lcssa199 = $10;$12 = $storemerge;$fl$0$lcssa = 0;
   }
  } while(0);
  $cmp65 = ($$lcssa199<<24>>24)==(42);
  if ($cmp65) {
   $arrayidx68 = ((($12)) + 1|0);
   $13 = load1($arrayidx68);
   $conv69 = $13 << 24 >> 24;
   $isdigittmp189 = (($conv69) + -48)|0;
   $isdigit190 = ($isdigittmp189>>>0)<(10);
   if ($isdigit190) {
    $arrayidx73 = ((($12)) + 2|0);
    $14 = load1($arrayidx73);
    $cmp75 = ($14<<24>>24)==(36);
    if ($cmp75) {
     $arrayidx81 = (($nl_type) + ($isdigittmp189<<2)|0);
     store4($arrayidx81,10);
     $15 = load1($arrayidx68);
     $conv83 = $15 << 24 >> 24;
     $sub84 = (($conv83) + -48)|0;
     $i86 = (($nl_arg) + ($sub84<<3)|0);
     $16 = load8($i86);
     $conv87 = i64_trunc($16);
     $add$ptr88 = ((($12)) + 3|0);
     $l10n$2 = 1;$storemerge191 = $add$ptr88;$w$0 = $conv87;
    } else {
     label = 23;
    }
   } else {
    label = 23;
   }
   if ((label|0) == 23) {
    label = 0;
    $tobool90 = ($l10n$1|0)==(0);
    if (!($tobool90)) {
     $retval$0 = -1;
     break;
    }
    if ($tobool25) {
     $arglist_current = load4($ap);
     $17 = $arglist_current;
     $expanded5 = ((0) + 4|0);
     $expanded4 = $expanded5;
     $expanded = (($expanded4) - 1)|0;
     $18 = (($17) + ($expanded))|0;
     $expanded9 = ((0) + 4|0);
     $expanded8 = $expanded9;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $19 = $18 & $expanded6;
     $20 = $19;
     $21 = load4($20);
     $arglist_next = ((($20)) + 4|0);
     store4($ap,$arglist_next);
     $l10n$2 = 0;$storemerge191 = $arrayidx68;$w$0 = $21;
    } else {
     $l10n$2 = 0;$storemerge191 = $arrayidx68;$w$0 = 0;
    }
   }
   store4($s,$storemerge191);
   $cmp97 = ($w$0|0)<(0);
   $or100 = $fl$0$lcssa | 8192;
   $sub101 = (0 - ($w$0))|0;
   $or100$fl$0 = $cmp97 ? $or100 : $fl$0$lcssa;
   $sub101$w$0 = $cmp97 ? $sub101 : $w$0;
   $23 = $storemerge191;$fl$1 = $or100$fl$0;$l10n$3 = $l10n$2;$w$1 = $sub101$w$0;
  } else {
   $call104 = (_getint($s)|0);
   $cmp105 = ($call104|0)<(0);
   if ($cmp105) {
    $retval$0 = -1;
    break;
   }
   $$pre247 = load4($s);
   $23 = $$pre247;$fl$1 = $fl$0$lcssa;$l10n$3 = $l10n$1;$w$1 = $call104;
  }
  $22 = load1($23);
  $cmp111 = ($22<<24>>24)==(46);
  do {
   if ($cmp111) {
    $arrayidx114 = ((($23)) + 1|0);
    $24 = load1($arrayidx114);
    $cmp116 = ($24<<24>>24)==(42);
    if (!($cmp116)) {
     store4($s,$arrayidx114);
     $call160 = (_getint($s)|0);
     $$pre248$pre = load4($s);
     $$pre248 = $$pre248$pre;$p$0 = $call160;
     break;
    }
    $arrayidx119 = ((($23)) + 2|0);
    $25 = load1($arrayidx119);
    $conv120 = $25 << 24 >> 24;
    $isdigittmp187 = (($conv120) + -48)|0;
    $isdigit188 = ($isdigittmp187>>>0)<(10);
    if ($isdigit188) {
     $arrayidx124 = ((($23)) + 3|0);
     $26 = load1($arrayidx124);
     $cmp126 = ($26<<24>>24)==(36);
     if ($cmp126) {
      $arrayidx132 = (($nl_type) + ($isdigittmp187<<2)|0);
      store4($arrayidx132,10);
      $27 = load1($arrayidx119);
      $conv134 = $27 << 24 >> 24;
      $sub135 = (($conv134) + -48)|0;
      $i137 = (($nl_arg) + ($sub135<<3)|0);
      $28 = load8($i137);
      $conv138 = i64_trunc($28);
      $add$ptr139 = ((($23)) + 4|0);
      store4($s,$add$ptr139);
      $$pre248 = $add$ptr139;$p$0 = $conv138;
      break;
     }
    }
    $tobool141 = ($l10n$3|0)==(0);
    if (!($tobool141)) {
     $retval$0 = -1;
     break L1;
    }
    if ($tobool25) {
     $arglist_current2 = load4($ap);
     $29 = $arglist_current2;
     $expanded12 = ((0) + 4|0);
     $expanded11 = $expanded12;
     $expanded10 = (($expanded11) - 1)|0;
     $30 = (($29) + ($expanded10))|0;
     $expanded16 = ((0) + 4|0);
     $expanded15 = $expanded16;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $31 = $30 & $expanded13;
     $32 = $31;
     $33 = load4($32);
     $arglist_next3 = ((($32)) + 4|0);
     store4($ap,$arglist_next3);
     $cond149 = $33;
    } else {
     $cond149 = 0;
    }
    store4($s,$arrayidx119);
    $$pre248 = $arrayidx119;$p$0 = $cond149;
   } else {
    $$pre248 = $23;$p$0 = -1;
   }
  } while(0);
  $35 = $$pre248;$st$0 = 0;
  while(1) {
   $34 = load1($35);
   $conv164 = $34 << 24 >> 24;
   $sub165 = (($conv164) + -65)|0;
   $cmp166 = ($sub165>>>0)>(57);
   if ($cmp166) {
    $retval$0 = -1;
    break L1;
   }
   $incdec$ptr171 = ((($35)) + 1|0);
   store4($s,$incdec$ptr171);
   $36 = load1($35);
   $conv172 = $36 << 24 >> 24;
   $sub173 = (($conv172) + -65)|0;
   $arrayidx174 = ((6676 + (($st$0*58)|0)|0) + ($sub173)|0);
   $37 = load1($arrayidx174);
   $conv175 = $37&255;
   $sub176 = (($conv175) + -1)|0;
   $cmp177 = ($sub176>>>0)<(8);
   if ($cmp177) {
    $35 = $incdec$ptr171;$st$0 = $conv175;
   } else {
    break;
   }
  }
  $tobool179 = ($37<<24>>24)==(0);
  if ($tobool179) {
   $retval$0 = -1;
   break;
  }
  $cmp182 = ($37<<24>>24)==(19);
  $cmp185 = ($argpos$0|0)>(-1);
  do {
   if ($cmp182) {
    if ($cmp185) {
     $retval$0 = -1;
     break L1;
    } else {
     label = 49;
    }
   } else {
    if ($cmp185) {
     $arrayidx193 = (($nl_type) + ($argpos$0<<2)|0);
     store4($arrayidx193,$conv175);
     $38 = (($nl_arg) + ($argpos$0<<3)|0);
     $39 = load8($38);
     store8($arg,$39);
     label = 49;
     break;
    }
    if (!($tobool25)) {
     $retval$0 = 0;
     break L1;
    }
    _pop_arg($arg,$conv175,$ap);
   }
  } while(0);
  if ((label|0) == 49) {
   label = 0;
   if (!($tobool25)) {
    $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
    continue;
   }
  }
  $40 = load1($35);
  $conv208 = $40 << 24 >> 24;
  $tobool209 = ($st$0|0)!=(0);
  $and211 = $conv208 & 15;
  $cmp212 = ($and211|0)==(3);
  $or$cond192 = $tobool209 & $cmp212;
  $and215 = $conv208 & -33;
  $t$0 = $or$cond192 ? $and215 : $conv208;
  $and217 = $fl$1 & 8192;
  $tobool218 = ($and217|0)==(0);
  $and220 = $fl$1 & -65537;
  $fl$1$and220 = $tobool218 ? $fl$1 : $and220;
  L71: do {
   switch ($t$0|0) {
   case 110:  {
    $trunc = $st$0&255;
    switch ($trunc<<24>>24) {
    case 0:  {
     $41 = load4($arg);
     store4($41,$cnt$1);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 1:  {
     $42 = load4($arg);
     store4($42,$cnt$1);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 2:  {
     $conv227 = i64_sext($cnt$1);
     $43 = load4($arg);
     store8($43,$conv227);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 3:  {
     $conv230 = $cnt$1&65535;
     $44 = load4($arg);
     store2($44,$conv230);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 4:  {
     $conv233 = $cnt$1&255;
     $45 = load4($arg);
     store1($45,$conv233);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 6:  {
     $46 = load4($arg);
     store4($46,$cnt$1);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 7:  {
     $conv238 = i64_sext($cnt$1);
     $47 = load4($arg);
     store8($47,$conv238);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    default: {
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
    }
    }
    break;
   }
   case 112:  {
    $cmp241 = ($p$0>>>0)>(8);
    $cond246 = $cmp241 ? $p$0 : 8;
    $or247 = $fl$1$and220 | 8;
    $fl$3 = $or247;$p$1 = $cond246;$t$1 = 120;
    label = 61;
    break;
   }
   case 88: case 120:  {
    $fl$3 = $fl$1$and220;$p$1 = $p$0;$t$1 = $t$0;
    label = 61;
    break;
   }
   case 111:  {
    $49 = load8($arg);
    $call263 = (_fmt_o($49,$add$ptr206)|0);
    $and264 = $fl$1$and220 & 8;
    $tobool265 = ($and264|0)==(0);
    $sub$ptr$rhs$cast268 = $call263;
    $sub$ptr$sub269 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast268))|0;
    $cmp271 = ($p$0|0)>($sub$ptr$sub269|0);
    $add270 = (($sub$ptr$sub269) + 1)|0;
    $50 = $tobool265 | $cmp271;
    $p$0$p$0$add270 = $50 ? $p$0 : $add270;
    $54 = $49;$a$0 = $call263;$fl$4 = $fl$1$and220;$p$2 = $p$0$p$0$add270;$pl$1 = 0;$prefix$1 = 7140;
    label = 67;
    break;
   }
   case 105: case 100:  {
    $51 = load8($arg);
    $cmp283 = i64_slt($51,i64_const(0,0));
    if ($cmp283) {
     $sub287 = i64_sub(i64_const(0,0),$51);
     store8($arg,$sub287);
     $53 = $sub287;$pl$0 = 1;$prefix$0 = 7140;
     label = 66;
     break L71;
    } else {
     $and290 = $fl$1$and220 & 2048;
     $tobool291 = ($and290|0)==(0);
     $and295 = $fl$1$and220 & 1;
     $tobool296 = ($and295|0)==(0);
     $$ = $tobool296 ? 7140 : (7142);
     $$$ = $tobool291 ? $$ : (7141);
     $52 = $fl$1$and220 & 2049;
     $narrow = ($52|0)!=(0);
     $$194$ = $narrow&1;
     $53 = $51;$pl$0 = $$194$;$prefix$0 = $$$;
     label = 66;
     break L71;
    }
    break;
   }
   case 117:  {
    $$pre250 = load8($arg);
    $53 = $$pre250;$pl$0 = 0;$prefix$0 = 7140;
    label = 66;
    break;
   }
   case 99:  {
    $55 = load8($arg);
    $conv340 = i64_trunc($55)&255;
    store1($add$ptr341,$conv340);
    $a$2 = $add$ptr341;$fl$6 = $and220;$p$5 = 1;$pl$2 = 0;$prefix$2 = 7140;$z$2 = $add$ptr206;
    break;
   }
   case 109:  {
    $56 = load4(11324);
    $call346 = (_strerror($56)|0);
    $a$1 = $call346;
    label = 71;
    break;
   }
   case 115:  {
    $57 = load4($arg);
    $tobool350 = ($57|0)!=(0|0);
    $cond355 = $tobool350 ? $57 : 9204;
    $a$1 = $cond355;
    label = 71;
    break;
   }
   case 67:  {
    $58 = load8($arg);
    $conv369 = i64_trunc($58);
    store4($wc,$conv369);
    store4($arrayidx371,0);
    store4($arg,$wc);
    $64 = $wc;$p$4253 = -1;
    label = 75;
    break;
   }
   case 83:  {
    $$pre249 = load4($arg);
    $cmp378227 = ($p$0|0)==(0);
    if ($cmp378227) {
     _pad_684($f,32,$w$1,0,$fl$1$and220);
     $i$0$lcssa256 = 0;
     label = 84;
    } else {
     $64 = $$pre249;$p$4253 = $p$0;
     label = 75;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $61 = loadd($arg);
    $call430 = (_fmt_fp($f,$61,$w$1,$p$0,$fl$1$and220,$t$0)|0);
    $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = $call430;$l10n$0 = $l10n$3;
    continue L1;
    break;
   }
   default: {
    $a$2 = $1;$fl$6 = $fl$1$and220;$p$5 = $p$0;$pl$2 = 0;$prefix$2 = 7140;$z$2 = $add$ptr206;
   }
   }
  } while(0);
  L95: do {
   if ((label|0) == 61) {
    label = 0;
    $48 = load8($arg);
    $and250 = $t$1 & 32;
    $call251 = (_fmt_x($48,$add$ptr206,$and250)|0);
    $tobool253 = i64_eq($48,i64_const(0,0));
    $and255 = $fl$3 & 8;
    $tobool256 = ($and255|0)==(0);
    $or$cond193 = $tobool256 | $tobool253;
    $shr = $t$1 >> 4;
    $add$ptr258 = (7140 + ($shr)|0);
    $$add$ptr258 = $or$cond193 ? 7140 : $add$ptr258;
    $$197 = $or$cond193 ? 0 : 2;
    $54 = $48;$a$0 = $call251;$fl$4 = $fl$3;$p$2 = $p$1;$pl$1 = $$197;$prefix$1 = $$add$ptr258;
    label = 67;
   }
   else if ((label|0) == 66) {
    label = 0;
    $call305 = (_fmt_u($53,$add$ptr206)|0);
    $54 = $53;$a$0 = $call305;$fl$4 = $fl$1$and220;$p$2 = $p$0;$pl$1 = $pl$0;$prefix$1 = $prefix$0;
    label = 67;
   }
   else if ((label|0) == 71) {
    label = 0;
    $call357 = (_memchr($a$1,$p$0)|0);
    $tobool358 = ($call357|0)==(0|0);
    $sub$ptr$lhs$cast362 = $call357;
    $sub$ptr$rhs$cast363 = $a$1;
    $sub$ptr$sub364 = (($sub$ptr$lhs$cast362) - ($sub$ptr$rhs$cast363))|0;
    $add$ptr360 = (($a$1) + ($p$0)|0);
    $p$3 = $tobool358 ? $p$0 : $sub$ptr$sub364;
    $z$1 = $tobool358 ? $add$ptr360 : $call357;
    $a$2 = $a$1;$fl$6 = $and220;$p$5 = $p$3;$pl$2 = 0;$prefix$2 = 7140;$z$2 = $z$1;
   }
   else if ((label|0) == 75) {
    label = 0;
    $i$0229 = 0;$l$1228 = 0;$ws$0230 = $64;
    while(1) {
     $59 = load4($ws$0230);
     $tobool381 = ($59|0)==(0);
     if ($tobool381) {
      $i$0$lcssa = $i$0229;$l$2 = $l$1228;
      break;
     }
     $call385 = (_wctomb($mb,$59)|0);
     $cmp386 = ($call385|0)<(0);
     $sub390 = (($p$4253) - ($i$0229))|0;
     $cmp391 = ($call385>>>0)>($sub390>>>0);
     $or$cond195 = $cmp386 | $cmp391;
     if ($or$cond195) {
      $i$0$lcssa = $i$0229;$l$2 = $call385;
      break;
     }
     $incdec$ptr384 = ((($ws$0230)) + 4|0);
     $add396 = (($call385) + ($i$0229))|0;
     $cmp378 = ($p$4253>>>0)>($add396>>>0);
     if ($cmp378) {
      $i$0229 = $add396;$l$1228 = $call385;$ws$0230 = $incdec$ptr384;
     } else {
      $i$0$lcssa = $add396;$l$2 = $call385;
      break;
     }
    }
    $cmp398 = ($l$2|0)<(0);
    if ($cmp398) {
     $retval$0 = -1;
     break L1;
    }
    _pad_684($f,32,$w$1,$i$0$lcssa,$fl$1$and220);
    $cmp405237 = ($i$0$lcssa|0)==(0);
    if ($cmp405237) {
     $i$0$lcssa256 = 0;
     label = 84;
    } else {
     $i$1238 = 0;$ws$1239 = $64;
     while(1) {
      $60 = load4($ws$1239);
      $tobool408 = ($60|0)==(0);
      if ($tobool408) {
       $i$0$lcssa256 = $i$0$lcssa;
       label = 84;
       break L95;
      }
      $call412 = (_wctomb($mb,$60)|0);
      $add413 = (($call412) + ($i$1238))|0;
      $cmp414 = ($add413|0)>($i$0$lcssa|0);
      if ($cmp414) {
       $i$0$lcssa256 = $i$0$lcssa;
       label = 84;
       break L95;
      }
      $incdec$ptr411 = ((($ws$1239)) + 4|0);
      _out($f,$mb,$call412);
      $cmp405 = ($add413>>>0)<($i$0$lcssa>>>0);
      if ($cmp405) {
       $i$1238 = $add413;$ws$1239 = $incdec$ptr411;
      } else {
       $i$0$lcssa256 = $i$0$lcssa;
       label = 84;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 67) {
   label = 0;
   $cmp307 = ($p$2|0)>(-1);
   $and310 = $fl$4 & -65537;
   $and310$fl$4 = $cmp307 ? $and310 : $fl$4;
   $tobool313 = i64_ne($54,i64_const(0,0));
   $tobool315 = ($p$2|0)!=(0);
   $or$cond = $tobool313 | $tobool315;
   $sub$ptr$rhs$cast319 = $a$0;
   $sub$ptr$sub320 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast319))|0;
   $lnot = $tobool313 ^ 1;
   $lnot$ext = $lnot&1;
   $add323 = (($sub$ptr$sub320) + ($lnot$ext))|0;
   $cmp324 = ($p$2|0)>($add323|0);
   $p$2$add323 = $cmp324 ? $p$2 : $add323;
   $p$2$add323$p$2 = $or$cond ? $p$2$add323 : $p$2;
   $a$0$add$ptr206 = $or$cond ? $a$0 : $add$ptr206;
   $a$2 = $a$0$add$ptr206;$fl$6 = $and310$fl$4;$p$5 = $p$2$add323$p$2;$pl$2 = $pl$1;$prefix$2 = $prefix$1;$z$2 = $add$ptr206;
  }
  else if ((label|0) == 84) {
   label = 0;
   $xor = $fl$1$and220 ^ 8192;
   _pad_684($f,32,$w$1,$i$0$lcssa256,$xor);
   $cmp422 = ($w$1|0)>($i$0$lcssa256|0);
   $cond427 = $cmp422 ? $w$1 : $i$0$lcssa256;
   $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = $cond427;$l10n$0 = $l10n$3;
   continue;
  }
  $sub$ptr$lhs$cast432 = $z$2;
  $sub$ptr$rhs$cast433 = $a$2;
  $sub$ptr$sub434 = (($sub$ptr$lhs$cast432) - ($sub$ptr$rhs$cast433))|0;
  $cmp435 = ($p$5|0)<($sub$ptr$sub434|0);
  $sub$ptr$sub434$p$5 = $cmp435 ? $sub$ptr$sub434 : $p$5;
  $add442 = (($sub$ptr$sub434$p$5) + ($pl$2))|0;
  $cmp443 = ($w$1|0)<($add442|0);
  $w$2 = $cmp443 ? $add442 : $w$1;
  _pad_684($f,32,$w$2,$add442,$fl$6);
  _out($f,$prefix$2,$pl$2);
  $xor450 = $fl$6 ^ 65536;
  _pad_684($f,48,$w$2,$add442,$xor450);
  _pad_684($f,48,$sub$ptr$sub434$p$5,$sub$ptr$sub434,0);
  _out($f,$a$2,$sub$ptr$sub434);
  $xor458 = $fl$6 ^ 8192;
  _pad_684($f,32,$w$2,$add442,$xor458);
  $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = $w$2;$l10n$0 = $l10n$3;
 }
 L114: do {
  if ((label|0) == 87) {
   $tobool460 = ($f|0)==(0|0);
   if ($tobool460) {
    $tobool463 = ($l10n$0|0)==(0);
    if ($tobool463) {
     $retval$0 = 0;
    } else {
     $i$2210 = 1;
     while(1) {
      $arrayidx470 = (($nl_type) + ($i$2210<<2)|0);
      $62 = load4($arrayidx470);
      $tobool471 = ($62|0)==(0);
      if ($tobool471) {
       $inc48971$in = $i$2210;
       break;
      }
      $add$ptr474 = (($nl_arg) + ($i$2210<<3)|0);
      _pop_arg($add$ptr474,$62,$ap);
      $inc = (($i$2210) + 1)|0;
      $cmp467 = ($inc|0)<(10);
      if ($cmp467) {
       $i$2210 = $inc;
      } else {
       $retval$0 = 1;
       break L114;
      }
     }
     while(1) {
      $inc48971 = (($inc48971$in) + 1)|0;
      $cmp479 = ($inc48971|0)<(10);
      if (!($cmp479)) {
       $retval$0 = 1;
       break L114;
      }
      $arrayidx482$phi$trans$insert = (($nl_type) + ($inc48971<<2)|0);
      $$pre35 = load4($arrayidx482$phi$trans$insert);
      $lnot484 = ($$pre35|0)==(0);
      if ($lnot484) {
       $inc48971$in = $inc48971;
      } else {
       $retval$0 = -1;
       break;
      }
     }
    }
   } else {
    $retval$0 = $cnt$1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function _out($f,$s,$l) {
 $f = $f|0;
 $s = $s|0;
 $l = $l|0;
 var $0 = 0, $and = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($f);
 $and = $0 & 32;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  ___fwritex($s,$l,$f);
 }
 return;
}
function _getint($s) {
 $s = $s|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $add = 0, $conv = 0, $conv4 = 0, $i$0$lcssa = 0, $i$07 = 0, $incdec$ptr = 0, $isdigit = 0, $isdigit6 = 0, $isdigittmp = 0, $isdigittmp5 = 0, $isdigittmp8 = 0, $mul = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($s);
 $1 = load1($0);
 $conv4 = $1 << 24 >> 24;
 $isdigittmp5 = (($conv4) + -48)|0;
 $isdigit6 = ($isdigittmp5>>>0)<(10);
 if ($isdigit6) {
  $2 = $0;$i$07 = 0;$isdigittmp8 = $isdigittmp5;
  while(1) {
   $mul = ($i$07*10)|0;
   $add = (($mul) + ($isdigittmp8))|0;
   $incdec$ptr = ((($2)) + 1|0);
   store4($s,$incdec$ptr);
   $3 = load1($incdec$ptr);
   $conv = $3 << 24 >> 24;
   $isdigittmp = (($conv) + -48)|0;
   $isdigit = ($isdigittmp>>>0)<(10);
   if ($isdigit) {
    $2 = $incdec$ptr;$i$07 = $add;$isdigittmp8 = $isdigittmp;
   } else {
    $i$0$lcssa = $add;
    break;
   }
  }
 } else {
  $i$0$lcssa = 0;
 }
 return ($i$0$lcssa|0);
}
function _pop_arg($arg,$type,$ap) {
 $arg = $arg|0;
 $type = $type|0;
 $ap = $ap|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = i64(), $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0.0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0.0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0, $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0;
 var $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0, $arglist_next9 = 0, $cmp = 0, $conv = i64(), $conv16 = 0, $conv17 = i64(), $conv22$mask = 0, $conv23 = i64(), $conv28 = 0, $conv29 = i64(), $conv34$mask = 0, $conv35 = i64();
 var $conv7 = i64(), $expanded = 0, $expanded28 = 0, $expanded29 = 0, $expanded30 = 0, $expanded31 = 0, $expanded32 = 0, $expanded33 = 0, $expanded34 = 0, $expanded35 = 0, $expanded36 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded40 = 0, $expanded41 = 0, $expanded42 = 0, $expanded43 = 0, $expanded44 = 0, $expanded45 = 0;
 var $expanded46 = 0, $expanded47 = 0, $expanded48 = 0, $expanded49 = 0, $expanded50 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded54 = 0, $expanded55 = 0, $expanded56 = 0, $expanded57 = 0, $expanded58 = 0, $expanded59 = 0, $expanded60 = 0, $expanded61 = 0, $expanded62 = 0, $expanded63 = 0, $expanded64 = 0, $expanded65 = 0;
 var $expanded66 = 0, $expanded67 = 0, $expanded68 = 0, $expanded69 = 0, $expanded70 = 0, $expanded71 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded75 = 0, $expanded76 = 0, $expanded77 = 0, $expanded78 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded82 = 0, $expanded83 = 0, $expanded84 = 0, $expanded85 = 0;
 var $expanded86 = 0, $expanded87 = 0, $expanded88 = 0, $expanded89 = 0, $expanded90 = 0, $expanded91 = 0, $expanded92 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, $expanded96 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($type>>>0)>(20);
 L1: do {
  if (!($cmp)) {
   do {
    switch ($type|0) {
    case 9:  {
     $arglist_current = load4($ap);
     $0 = $arglist_current;
     $expanded29 = ((0) + 4|0);
     $expanded28 = $expanded29;
     $expanded = (($expanded28) - 1)|0;
     $1 = (($0) + ($expanded))|0;
     $expanded33 = ((0) + 4|0);
     $expanded32 = $expanded33;
     $expanded31 = (($expanded32) - 1)|0;
     $expanded30 = $expanded31 ^ -1;
     $2 = $1 & $expanded30;
     $3 = $2;
     $4 = load4($3);
     $arglist_next = ((($3)) + 4|0);
     store4($ap,$arglist_next);
     store4($arg,$4);
     break L1;
     break;
    }
    case 10:  {
     $arglist_current2 = load4($ap);
     $5 = $arglist_current2;
     $expanded36 = ((0) + 4|0);
     $expanded35 = $expanded36;
     $expanded34 = (($expanded35) - 1)|0;
     $6 = (($5) + ($expanded34))|0;
     $expanded40 = ((0) + 4|0);
     $expanded39 = $expanded40;
     $expanded38 = (($expanded39) - 1)|0;
     $expanded37 = $expanded38 ^ -1;
     $7 = $6 & $expanded37;
     $8 = $7;
     $9 = load4($8);
     $arglist_next3 = ((($8)) + 4|0);
     store4($ap,$arglist_next3);
     $conv = i64_sext($9);
     store8($arg,$conv);
     break L1;
     break;
    }
    case 11:  {
     $arglist_current5 = load4($ap);
     $10 = $arglist_current5;
     $expanded43 = ((0) + 4|0);
     $expanded42 = $expanded43;
     $expanded41 = (($expanded42) - 1)|0;
     $11 = (($10) + ($expanded41))|0;
     $expanded47 = ((0) + 4|0);
     $expanded46 = $expanded47;
     $expanded45 = (($expanded46) - 1)|0;
     $expanded44 = $expanded45 ^ -1;
     $12 = $11 & $expanded44;
     $13 = $12;
     $14 = load4($13);
     $arglist_next6 = ((($13)) + 4|0);
     store4($ap,$arglist_next6);
     $conv7 = i64_zext($14>>>0);
     store8($arg,$conv7);
     break L1;
     break;
    }
    case 12:  {
     $arglist_current8 = load4($ap);
     $15 = $arglist_current8;
     $expanded50 = ((0) + 8|0);
     $expanded49 = $expanded50;
     $expanded48 = (($expanded49) - 1)|0;
     $16 = (($15) + ($expanded48))|0;
     $expanded54 = ((0) + 8|0);
     $expanded53 = $expanded54;
     $expanded52 = (($expanded53) - 1)|0;
     $expanded51 = $expanded52 ^ -1;
     $17 = $16 & $expanded51;
     $18 = $17;
     $19 = load8($18);
     $arglist_next9 = ((($18)) + 8|0);
     store4($ap,$arglist_next9);
     store8($arg,$19);
     break L1;
     break;
    }
    case 13:  {
     $arglist_current11 = load4($ap);
     $20 = $arglist_current11;
     $expanded57 = ((0) + 4|0);
     $expanded56 = $expanded57;
     $expanded55 = (($expanded56) - 1)|0;
     $21 = (($20) + ($expanded55))|0;
     $expanded61 = ((0) + 4|0);
     $expanded60 = $expanded61;
     $expanded59 = (($expanded60) - 1)|0;
     $expanded58 = $expanded59 ^ -1;
     $22 = $21 & $expanded58;
     $23 = $22;
     $24 = load4($23);
     $arglist_next12 = ((($23)) + 4|0);
     store4($ap,$arglist_next12);
     $conv16 = $24&65535;
     $conv17 = i64_sext($conv16 << 16 >> 16);
     store8($arg,$conv17);
     break L1;
     break;
    }
    case 14:  {
     $arglist_current14 = load4($ap);
     $25 = $arglist_current14;
     $expanded64 = ((0) + 4|0);
     $expanded63 = $expanded64;
     $expanded62 = (($expanded63) - 1)|0;
     $26 = (($25) + ($expanded62))|0;
     $expanded68 = ((0) + 4|0);
     $expanded67 = $expanded68;
     $expanded66 = (($expanded67) - 1)|0;
     $expanded65 = $expanded66 ^ -1;
     $27 = $26 & $expanded65;
     $28 = $27;
     $29 = load4($28);
     $arglist_next15 = ((($28)) + 4|0);
     store4($ap,$arglist_next15);
     $conv22$mask = $29 & 65535;
     $conv23 = i64_zext($conv22$mask>>>0);
     store8($arg,$conv23);
     break L1;
     break;
    }
    case 15:  {
     $arglist_current17 = load4($ap);
     $30 = $arglist_current17;
     $expanded71 = ((0) + 4|0);
     $expanded70 = $expanded71;
     $expanded69 = (($expanded70) - 1)|0;
     $31 = (($30) + ($expanded69))|0;
     $expanded75 = ((0) + 4|0);
     $expanded74 = $expanded75;
     $expanded73 = (($expanded74) - 1)|0;
     $expanded72 = $expanded73 ^ -1;
     $32 = $31 & $expanded72;
     $33 = $32;
     $34 = load4($33);
     $arglist_next18 = ((($33)) + 4|0);
     store4($ap,$arglist_next18);
     $conv28 = $34&255;
     $conv29 = i64_sext($conv28 << 24 >> 24);
     store8($arg,$conv29);
     break L1;
     break;
    }
    case 16:  {
     $arglist_current20 = load4($ap);
     $35 = $arglist_current20;
     $expanded78 = ((0) + 4|0);
     $expanded77 = $expanded78;
     $expanded76 = (($expanded77) - 1)|0;
     $36 = (($35) + ($expanded76))|0;
     $expanded82 = ((0) + 4|0);
     $expanded81 = $expanded82;
     $expanded80 = (($expanded81) - 1)|0;
     $expanded79 = $expanded80 ^ -1;
     $37 = $36 & $expanded79;
     $38 = $37;
     $39 = load4($38);
     $arglist_next21 = ((($38)) + 4|0);
     store4($ap,$arglist_next21);
     $conv34$mask = $39 & 255;
     $conv35 = i64_zext($conv34$mask>>>0);
     store8($arg,$conv35);
     break L1;
     break;
    }
    case 17:  {
     $arglist_current23 = load4($ap);
     $40 = $arglist_current23;
     $expanded85 = ((0) + 8|0);
     $expanded84 = $expanded85;
     $expanded83 = (($expanded84) - 1)|0;
     $41 = (($40) + ($expanded83))|0;
     $expanded89 = ((0) + 8|0);
     $expanded88 = $expanded89;
     $expanded87 = (($expanded88) - 1)|0;
     $expanded86 = $expanded87 ^ -1;
     $42 = $41 & $expanded86;
     $43 = $42;
     $44 = loadd($43);
     $arglist_next24 = ((($43)) + 8|0);
     store4($ap,$arglist_next24);
     stored($arg,$44);
     break L1;
     break;
    }
    case 18:  {
     $arglist_current26 = load4($ap);
     $45 = $arglist_current26;
     $expanded92 = ((0) + 8|0);
     $expanded91 = $expanded92;
     $expanded90 = (($expanded91) - 1)|0;
     $46 = (($45) + ($expanded90))|0;
     $expanded96 = ((0) + 8|0);
     $expanded95 = $expanded96;
     $expanded94 = (($expanded95) - 1)|0;
     $expanded93 = $expanded94 ^ -1;
     $47 = $46 & $expanded93;
     $48 = $47;
     $49 = loadd($48);
     $arglist_next27 = ((($48)) + 8|0);
     store4($ap,$arglist_next27);
     stored($arg,$49);
     break L1;
     break;
    }
    default: {
     break L1;
    }
    }
   } while(0);
  }
 } while(0);
 return;
}
function _fmt_x($x,$s,$lower) {
 $x = i64($x);
 $s = $s|0;
 $lower = $lower|0;
 var $0 = 0, $1 = 0, $arrayidx = 0, $conv1 = 0, $conv4 = 0, $idxprom = 0, $incdec$ptr = 0, $or = 0, $s$addr$0$lcssa = 0, $s$addr$06 = 0, $shr = i64(), $tobool = 0, $tobool5 = 0, $x$addr$07 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $tobool5 = i64_eq($x,i64_const(0,0));
 if ($tobool5) {
  $s$addr$0$lcssa = $s;
 } else {
  $s$addr$06 = $s;$x$addr$07 = $x;
  while(1) {
   $0 = i64_trunc($x$addr$07);
   $idxprom = $0 & 15;
   $arrayidx = (7181 + ($idxprom)|0);
   $1 = load1($arrayidx);
   $conv4 = $1&255;
   $or = $conv4 | $lower;
   $conv1 = $or&255;
   $incdec$ptr = ((($s$addr$06)) + -1|0);
   store1($incdec$ptr,$conv1);
   $shr = i64_lshr($x$addr$07,i64_const(4,0));
   $tobool = i64_eq($shr,i64_const(0,0));
   if ($tobool) {
    $s$addr$0$lcssa = $incdec$ptr;
    break;
   } else {
    $s$addr$06 = $incdec$ptr;$x$addr$07 = $shr;
   }
  }
 }
 return ($s$addr$0$lcssa|0);
}
function _fmt_o($x,$s) {
 $x = i64($x);
 $s = $s|0;
 var $0 = 0, $1 = 0, $conv = 0, $incdec$ptr = 0, $s$addr$0$lcssa = 0, $s$addr$06 = 0, $shr = i64(), $tobool = 0, $tobool4 = 0, $x$addr$05 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $tobool4 = i64_eq($x,i64_const(0,0));
 if ($tobool4) {
  $s$addr$0$lcssa = $s;
 } else {
  $s$addr$06 = $s;$x$addr$05 = $x;
  while(1) {
   $0 = i64_trunc($x$addr$05)&255;
   $1 = $0 & 7;
   $conv = $1 | 48;
   $incdec$ptr = ((($s$addr$06)) + -1|0);
   store1($incdec$ptr,$conv);
   $shr = i64_lshr($x$addr$05,i64_const(3,0));
   $tobool = i64_eq($shr,i64_const(0,0));
   if ($tobool) {
    $s$addr$0$lcssa = $incdec$ptr;
    break;
   } else {
    $s$addr$06 = $incdec$ptr;$x$addr$05 = $shr;
   }
  }
 }
 return ($s$addr$0$lcssa|0);
}
function _fmt_u($x,$s) {
 $x = i64($x);
 $s = $s|0;
 var $0 = 0, $1 = 0, $add5 = 0, $cmp = 0, $cmp11 = 0, $conv = 0, $conv6 = 0, $div = i64(), $div9 = 0, $extract$t = 0, $extract$t16 = 0, $incdec$ptr = 0, $incdec$ptr7 = 0, $rem = i64(), $rem4 = 0, $s$addr$0$lcssa = 0, $s$addr$013 = 0, $s$addr$1$lcssa = 0, $s$addr$19 = 0, $tobool8 = 0;
 var $x$addr$0$lcssa$off0 = 0, $x$addr$012 = i64(), $y$010 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp11 = i64_ugt($x,i64_const(4294967295,0));
 $extract$t = i64_trunc($x);
 if ($cmp11) {
  $s$addr$013 = $s;$x$addr$012 = $x;
  while(1) {
   $rem = i64_urem($x$addr$012,i64_const(10,0));
   $0 = i64_trunc($rem)&255;
   $conv = $0 | 48;
   $incdec$ptr = ((($s$addr$013)) + -1|0);
   store1($incdec$ptr,$conv);
   $div = i64_udiv($x$addr$012,i64_const(10,0));
   $cmp = i64_ugt($x$addr$012,i64_const(4294967295,9));
   if ($cmp) {
    $s$addr$013 = $incdec$ptr;$x$addr$012 = $div;
   } else {
    break;
   }
  }
  $extract$t16 = i64_trunc($div);
  $s$addr$0$lcssa = $incdec$ptr;$x$addr$0$lcssa$off0 = $extract$t16;
 } else {
  $s$addr$0$lcssa = $s;$x$addr$0$lcssa$off0 = $extract$t;
 }
 $tobool8 = ($x$addr$0$lcssa$off0|0)==(0);
 if ($tobool8) {
  $s$addr$1$lcssa = $s$addr$0$lcssa;
 } else {
  $s$addr$19 = $s$addr$0$lcssa;$y$010 = $x$addr$0$lcssa$off0;
  while(1) {
   $rem4 = (($y$010>>>0) % 10)&-1;
   $add5 = $rem4 | 48;
   $conv6 = $add5&255;
   $incdec$ptr7 = ((($s$addr$19)) + -1|0);
   store1($incdec$ptr7,$conv6);
   $div9 = (($y$010>>>0) / 10)&-1;
   $1 = ($y$010>>>0)<(10);
   if ($1) {
    $s$addr$1$lcssa = $incdec$ptr7;
    break;
   } else {
    $s$addr$19 = $incdec$ptr7;$y$010 = $div9;
   }
  }
 }
 return ($s$addr$1$lcssa|0);
}
function _strerror($e) {
 $e = $e|0;
 var $0 = 0, $call1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(2864);
 $call1 = (___strerror_l($e,$0)|0);
 return ($call1|0);
}
function _memchr($src,$n) {
 $src = $src|0;
 $n = $n|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $and = 0, $and15 = 0, $and16 = 0, $and39 = 0, $cmp = 0, $cmp11 = 0, $cmp1132 = 0, $cmp28 = 0, $cmp8 = 0, $cond = 0, $dec = 0, $dec34 = 0, $incdec$ptr = 0, $incdec$ptr21 = 0;
 var $incdec$ptr33 = 0, $lnot = 0, $n$addr$0$lcssa = 0, $n$addr$043 = 0, $n$addr$1$lcssa = 0, $n$addr$133 = 0, $n$addr$227 = 0, $n$addr$3 = 0, $neg = 0, $or$cond = 0, $or$cond42 = 0, $s$0$lcssa = 0, $s$044 = 0, $s$128 = 0, $s$2 = 0, $sub = 0, $sub22 = 0, $tobool = 0, $tobool2 = 0, $tobool2$lcssa = 0;
 var $tobool241 = 0, $tobool25 = 0, $tobool2526 = 0, $tobool36 = 0, $tobool40 = 0, $w$0$lcssa = 0, $w$034 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $src;
 $and39 = $0 & 3;
 $tobool40 = ($and39|0)!=(0);
 $tobool241 = ($n|0)!=(0);
 $or$cond42 = $tobool241 & $tobool40;
 L1: do {
  if ($or$cond42) {
   $n$addr$043 = $n;$s$044 = $src;
   while(1) {
    $1 = load1($s$044);
    $cmp = ($1<<24>>24)==(0);
    if ($cmp) {
     $n$addr$3 = $n$addr$043;$s$2 = $s$044;
     break L1;
    }
    $incdec$ptr = ((($s$044)) + 1|0);
    $dec = (($n$addr$043) + -1)|0;
    $2 = $incdec$ptr;
    $and = $2 & 3;
    $tobool = ($and|0)!=(0);
    $tobool2 = ($dec|0)!=(0);
    $or$cond = $tobool2 & $tobool;
    if ($or$cond) {
     $n$addr$043 = $dec;$s$044 = $incdec$ptr;
    } else {
     $n$addr$0$lcssa = $dec;$s$0$lcssa = $incdec$ptr;$tobool2$lcssa = $tobool2;
     label = 4;
     break;
    }
   }
  } else {
   $n$addr$0$lcssa = $n;$s$0$lcssa = $src;$tobool2$lcssa = $tobool241;
   label = 4;
  }
 } while(0);
 L5: do {
  if ((label|0) == 4) {
   if ($tobool2$lcssa) {
    $$pre = load1($s$0$lcssa);
    $cmp8 = ($$pre<<24>>24)==(0);
    if ($cmp8) {
     $n$addr$3 = $n$addr$0$lcssa;$s$2 = $s$0$lcssa;
    } else {
     $cmp1132 = ($n$addr$0$lcssa>>>0)>(3);
     L9: do {
      if ($cmp1132) {
       $n$addr$133 = $n$addr$0$lcssa;$w$034 = $s$0$lcssa;
       while(1) {
        $3 = load4($w$034);
        $sub = (($3) + -16843009)|0;
        $neg = $3 & -2139062144;
        $and15 = $neg ^ -2139062144;
        $and16 = $and15 & $sub;
        $lnot = ($and16|0)==(0);
        if (!($lnot)) {
         break;
        }
        $incdec$ptr21 = ((($w$034)) + 4|0);
        $sub22 = (($n$addr$133) + -4)|0;
        $cmp11 = ($sub22>>>0)>(3);
        if ($cmp11) {
         $n$addr$133 = $sub22;$w$034 = $incdec$ptr21;
        } else {
         $n$addr$1$lcssa = $sub22;$w$0$lcssa = $incdec$ptr21;
         label = 10;
         break L9;
        }
       }
       $n$addr$227 = $n$addr$133;$s$128 = $w$034;
      } else {
       $n$addr$1$lcssa = $n$addr$0$lcssa;$w$0$lcssa = $s$0$lcssa;
       label = 10;
      }
     } while(0);
     if ((label|0) == 10) {
      $tobool2526 = ($n$addr$1$lcssa|0)==(0);
      if ($tobool2526) {
       $n$addr$3 = 0;$s$2 = $w$0$lcssa;
       break;
      } else {
       $n$addr$227 = $n$addr$1$lcssa;$s$128 = $w$0$lcssa;
      }
     }
     while(1) {
      $4 = load1($s$128);
      $cmp28 = ($4<<24>>24)==(0);
      if ($cmp28) {
       $n$addr$3 = $n$addr$227;$s$2 = $s$128;
       break L5;
      }
      $incdec$ptr33 = ((($s$128)) + 1|0);
      $dec34 = (($n$addr$227) + -1)|0;
      $tobool25 = ($dec34|0)==(0);
      if ($tobool25) {
       $n$addr$3 = 0;$s$2 = $incdec$ptr33;
       break;
      } else {
       $n$addr$227 = $dec34;$s$128 = $incdec$ptr33;
      }
     }
    }
   } else {
    $n$addr$3 = 0;$s$2 = $s$0$lcssa;
   }
  }
 } while(0);
 $tobool36 = ($n$addr$3|0)!=(0);
 $cond = $tobool36 ? $s$2 : 0;
 return ($cond|0);
}
function _pad_684($f,$c,$w,$l,$fl) {
 $f = $f|0;
 $c = $c|0;
 $w = $w|0;
 $l = $l|0;
 $fl = $fl|0;
 var $0 = 0, $1 = 0, $and = 0, $cmp = 0, $cmp3 = 0, $cmp38 = 0, $cond = 0, $l$addr$0$lcssa = 0, $l$addr$09 = 0, $or$cond = 0, $pad = 0, $sub = 0, $sub6 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0;
 $pad = sp;
 $and = $fl & 73728;
 $tobool = ($and|0)==(0);
 $cmp = ($w|0)>($l|0);
 $or$cond = $cmp & $tobool;
 if ($or$cond) {
  $sub = (($w) - ($l))|0;
  $0 = ($sub>>>0)<(256);
  $cond = $0 ? $sub : 256;
  _memset(($pad|0),($c|0),($cond|0))|0;
  $cmp38 = ($sub>>>0)>(255);
  if ($cmp38) {
   $l$addr$09 = $sub;
   while(1) {
    _out($f,$pad,256);
    $sub6 = (($l$addr$09) + -256)|0;
    $cmp3 = ($sub6>>>0)>(255);
    if ($cmp3) {
     $l$addr$09 = $sub6;
    } else {
     break;
    }
   }
   $1 = $sub & 255;
   $l$addr$0$lcssa = $1;
  } else {
   $l$addr$0$lcssa = $sub;
  }
  _out($f,$pad,$l$addr$0$lcssa);
 }
 STACKTOP = sp;return;
}
function _wctomb($s,$wc) {
 $s = $s|0;
 $wc = $wc|0;
 var $call = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($s|0)==(0|0);
 if ($tobool) {
  $retval$0 = 0;
 } else {
  $call = (_wcrtomb($s,$wc)|0);
  $retval$0 = $call;
 }
 return ($retval$0|0);
}
function _fmt_fp($f,$y,$w,$p,$fl,$t) {
 $f = $f|0;
 $y = +$y;
 $w = $w|0;
 $p = $p|0;
 $fl = $fl|0;
 $t = $t|0;
 var $$ = 0, $$$ = 0, $$$405 = 0.0, $$394$ = 0, $$397 = 0.0, $$405 = 0.0, $$p = 0, $$p$inc468 = 0, $$pr = 0, $$pr407 = 0, $$pre = 0, $$pre487 = 0, $$sub514 = 0, $$sub562 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
 var $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0;
 var $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0;
 var $50 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $a$1$lcssa = 0, $a$1476 = 0, $a$2$ph = 0, $a$3$lcssa = 0, $a$3466 = 0, $a$5$lcssa = 0, $a$5448 = 0, $a$6 = 0, $a$8 = 0, $a$9$ph = 0, $add = 0, $add$ptr213 = 0, $add$ptr311 = 0, $add$ptr311$z$4 = 0, $add$ptr354 = 0;
 var $add$ptr358 = 0, $add$ptr373 = 0, $add$ptr442 = 0, $add$ptr442$z$3 = 0, $add$ptr65 = 0, $add$ptr671 = 0, $add$ptr742 = 0, $add$ptr756 = 0, $add113 = 0, $add150 = 0, $add150$pn = 0, $add165 = 0, $add240 = i64(), $add273 = 0, $add275 = 0, $add284 = 0, $add313 = 0, $add355 = 0, $add410 = 0.0, $add414 = 0;
 var $add477$neg = 0, $add561 = 0, $add608 = 0, $add612 = 0, $add620 = 0, $add653 = 0, $add653$sink406 = 0, $add67 = 0, $add737 = 0, $add810 = 0, $add87 = 0.0, $add90 = 0.0, $and = 0, $and12 = 0, $and134 = 0, $and27 = i64(), $and282 = 0, $and36 = 0, $and379 = 0, $and45 = 0;
 var $and483 = 0, $and610$pre$phiZ2D = 0, $and62 = 0, $arraydecay208$add$ptr213 = 0, $arrayidx = 0, $arrayidx117 = 0, $arrayidx251 = 0, $arrayidx453 = 0, $arrayidx489 = 0, $big = 0, $buf = 0, $call102 = 0, $call2 = i64(), $call26 = i64(), $call55 = 0.0, $call631 = 0, $call672 = 0, $call719 = 0, $call757 = 0, $carry$0471 = 0;
 var $carry262$0462 = 0, $cmp103 = 0, $cmp127 = 0, $cmp147 = 0, $cmp205 = 0, $cmp225 = 0, $cmp225474 = 0, $cmp235 = 0, $cmp235470 = 0, $cmp249 = 0, $cmp259 = 0, $cmp259464 = 0, $cmp277 = 0, $cmp277460 = 0, $cmp28 = 0, $cmp299 = 0, $cmp308 = 0, $cmp315 = 0, $cmp324 = 0, $cmp324456 = 0;
 var $cmp333 = 0, $cmp338 = 0, $cmp350 = 0, $cmp363452 = 0, $cmp374 = 0, $cmp38 = 0, $cmp385 = 0, $cmp390 = 0, $cmp403 = 0, $cmp411 = 0, $cmp416 = 0, $cmp416446 = 0, $cmp420 = 0, $cmp433 = 0, $cmp433442 = 0, $cmp443 = 0, $cmp450 = 0, $cmp450$lcssa = 0, $cmp470 = 0, $cmp473 = 0;
 var $cmp495 = 0, $cmp495438 = 0, $cmp505 = 0, $cmp528 = 0, $cmp577 = 0, $cmp59 = 0, $cmp614 = 0, $cmp617 = 0, $cmp623 = 0, $cmp636 = 0, $cmp636433 = 0, $cmp660 = 0, $cmp665 = 0, $cmp673 = 0, $cmp678 = 0, $cmp678419 = 0, $cmp68 = 0, $cmp686 = 0, $cmp707 = 0, $cmp707414 = 0;
 var $cmp710 = 0, $cmp710415 = 0, $cmp722 = 0, $cmp722411 = 0, $cmp745 = 0, $cmp748 = 0, $cmp748427 = 0, $cmp760 = 0, $cmp765 = 0, $cmp770 = 0, $cmp770423 = 0, $cmp777 = 0, $cmp790 = 0, $cmp818 = 0, $cmp82 = 0, $cmp94 = 0, $cond = 0, $cond100 = 0, $cond233 = 0, $cond271 = 0;
 var $cond304 = 0, $cond43 = 0, $cond629 = 0, $cond732 = 0, $cond800 = 0, $conv101 = i64(), $conv111 = 0, $conv114 = 0, $conv116 = 0, $conv118393 = 0, $conv121 = 0, $conv123 = 0.0, $conv216 = 0, $conv218 = 0.0, $conv238 = i64(), $conv239 = i64(), $conv241 = 0, $conv242 = 0, $conv630 = i64(), $conv644 = 0;
 var $conv646 = 0, $conv669 = i64(), $conv716 = i64(), $conv754 = i64(), $d$0 = 0, $d$0469 = 0, $d$0472 = 0, $d$1461 = 0, $d$4 = 0, $d$5422 = 0, $d$6416 = 0, $d$7428 = 0, $dec = 0, $dec78 = 0, $div = i64(), $div274 = 0, $div356 = 0, $div378 = 0, $div384 = 0, $e$0458 = 0;
 var $e$1 = 0, $e$2444 = 0, $e$4 = 0, $e$5$ph = 0, $e2 = 0, $ebuf0 = 0, $estr$0 = 0, $estr$1$lcssa = 0, $estr$1434 = 0, $estr$2 = 0, $exitcond = 0, $i$0457 = 0, $i$1$lcssa = 0, $i$1453 = 0, $i$2443 = 0, $i$3439 = 0, $inc = 0, $inc425 = 0, $inc438 = 0, $inc468 = 0;
 var $inc500 = 0, $incdec$ptr106 = 0, $incdec$ptr112 = 0, $incdec$ptr115 = 0, $incdec$ptr122 = 0, $incdec$ptr137 = 0, $incdec$ptr217 = 0, $incdec$ptr246 = 0, $incdec$ptr288 = 0, $incdec$ptr292 = 0, $incdec$ptr292$a$3 = 0, $incdec$ptr292$a$3492 = 0, $incdec$ptr292$a$3494 = 0, $incdec$ptr292491 = 0, $incdec$ptr296 = 0, $incdec$ptr419 = 0, $incdec$ptr419$sink$lcssa = 0, $incdec$ptr419$sink447 = 0, $incdec$ptr423 = 0, $incdec$ptr639 = 0;
 var $incdec$ptr645 = 0, $incdec$ptr647 = 0, $incdec$ptr681 = 0, $incdec$ptr689 = 0, $incdec$ptr698 = 0, $incdec$ptr725 = 0, $incdec$ptr734 = 0, $incdec$ptr763 = 0, $incdec$ptr773 = 0, $incdec$ptr776 = 0, $incdec$ptr808 = 0, $j$0 = 0, $j$0451 = 0, $j$0454 = 0, $j$1440 = 0, $j$2 = 0, $l$0 = 0, $l$1 = 0, $land$ext$neg = 0, $lnot = 0;
 var $lnot455 = 0, $lor$ext = 0, $mul = 0.0, $mul125 = 0.0, $mul202 = 0.0, $mul220 = 0.0, $mul286 = 0, $mul322 = 0, $mul328 = 0, $mul335 = 0, $mul349 = 0, $mul367 = 0, $mul406 = 0.0, $mul406$$397 = 0.0, $mul407 = 0.0, $mul407$$$405 = 0.0, $mul431 = 0, $mul437 = 0, $mul499 = 0, $mul513 = 0;
 var $mul80 = 0.0, $narrow = 0, $not$tobool341 = 0, $notlhs = 0, $notrhs = 0, $or = 0, $or$cond = 0, $or$cond1$not = 0, $or$cond2 = 0, $or$cond395 = 0, $or$cond396 = 0, $or$cond398 = 0, $or$cond402 = 0, $or120 = 0, $or504 = 0, $or613 = 0, $p$addr$2 = 0, $p$addr$2$$sub514399 = 0, $p$addr$2$$sub562400 = 0, $p$addr$3 = 0;
 var $p$addr$4$lcssa = 0, $p$addr$4417 = 0, $p$addr$5$lcssa = 0, $p$addr$5429 = 0, $pl$0 = 0, $prefix$0 = 0, $prefix$0$add$ptr65 = 0, $r$0$a$9 = 0, $re$1410 = 0, $rem = i64(), $rem360 = 0, $rem370 = 0, $rem494 = 0, $rem494437 = 0, $round$0409 = 0.0, $round377$1 = 0.0, $s$0 = 0, $s$1 = 0, $s35$0 = 0, $s668$0420 = 0;
 var $s668$1 = 0, $s715$0$lcssa = 0, $s715$0412 = 0, $s753$0 = 0, $s753$1424 = 0, $s753$2 = 0, $scevgep483 = 0, $scevgep483484 = 0, $sh_prom = i64(), $shl = i64(), $shl280 = 0, $shr283 = 0, $shr285 = 0, $small$1 = 0.0, $sub = 0.0, $sub$ptr$div = 0, $sub$ptr$div321 = 0, $sub$ptr$div347 = 0, $sub$ptr$div430 = 0, $sub$ptr$div511 = 0;
 var $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast143 = 0, $sub$ptr$lhs$cast151 = 0, $sub$ptr$lhs$cast305 = 0, $sub$ptr$lhs$cast318 = 0, $sub$ptr$lhs$cast344 = 0, $sub$ptr$lhs$cast508 = 0, $sub$ptr$lhs$cast633 = 0, $sub$ptr$lhs$cast694 = 0, $sub$ptr$lhs$cast787 = 0, $sub$ptr$lhs$cast811 = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast152 = 0, $sub$ptr$rhs$cast306 = 0, $sub$ptr$rhs$cast319 = 0, $sub$ptr$rhs$cast428 = 0, $sub$ptr$rhs$cast634 = 0, $sub$ptr$rhs$cast634431 = 0, $sub$ptr$rhs$cast649 = 0, $sub$ptr$rhs$cast695 = 0;
 var $sub$ptr$rhs$cast788 = 0, $sub$ptr$rhs$cast812 = 0, $sub$ptr$sub = 0, $sub$ptr$sub145 = 0, $sub$ptr$sub153 = 0, $sub$ptr$sub307 = 0, $sub$ptr$sub320 = 0, $sub$ptr$sub346 = 0, $sub$ptr$sub429 = 0, $sub$ptr$sub510 = 0, $sub$ptr$sub635 = 0, $sub$ptr$sub635432 = 0, $sub$ptr$sub650 = 0, $sub$ptr$sub650$pn = 0, $sub$ptr$sub696 = 0, $sub$ptr$sub789 = 0, $sub$ptr$sub813 = 0, $sub124 = 0.0, $sub146 = 0, $sub181 = 0;
 var $sub203 = 0, $sub219 = 0.0, $sub256 = 0, $sub264 = 0, $sub281 = 0, $sub336 = 0, $sub343 = 0, $sub357 = 0, $sub409 = 0, $sub478$neg = 0, $sub514 = 0, $sub562 = 0, $sub626$le = 0, $sub735 = 0, $sub74 = 0, $sub806 = 0, $sub85 = 0.0, $sub86 = 0.0, $sub88 = 0.0, $sub91 = 0.0;
 var $sub97 = 0, $t$addr$0 = 0, $t$addr$0$v = 0, $t$addr$1 = 0, $tobool13 = 0, $tobool135 = 0, $tobool139 = 0, $tobool140 = 0, $tobool222 = 0, $tobool244 = 0, $tobool290 = 0, $tobool290490 = 0, $tobool294 = 0, $tobool341 = 0, $tobool37 = 0, $tobool371 = 0, $tobool380 = 0, $tobool400 = 0, $tobool484 = 0, $tobool490 = 0;
 var $tobool5 = 0, $tobool56 = 0, $tobool63 = 0, $tobool76 = 0, $tobool76488 = 0, $tobool781 = 0, $tobool79 = 0, $tobool9 = 0, $w$add653 = 0, $xor = 0, $xor167 = 0, $xor186 = 0, $xor655 = 0, $xor816 = 0, $y$addr$0 = 0.0, $y$addr$1 = 0.0, $y$addr$2 = 0.0, $y$addr$3 = 0.0, $y$addr$4 = 0.0, $z$0 = 0;
 var $z$1$lcssa = 0, $z$1475 = 0, $z$2 = 0, $z$3$lcssa = 0, $z$3465 = 0, $z$4 = 0, $z$7 = 0, $z$7$add$ptr742 = 0, $z$7$ph = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 560|0;
 $big = sp + 8|0;
 $e2 = sp;
 $buf = sp + 524|0;
 $sub$ptr$rhs$cast = $buf;
 $ebuf0 = sp + 512|0;
 store4($e2,0);
 $arrayidx = ((($ebuf0)) + 12|0);
 $call2 = (i64(___DOUBLE_BITS_685($y)));
 $tobool5 = i64_slt($call2,i64_const(0,0));
 if ($tobool5) {
  $sub = -$y;
  $pl$0 = 1;$prefix$0 = 7150;$y$addr$0 = $sub;
 } else {
  $and = $fl & 2048;
  $tobool9 = ($and|0)==(0);
  $and12 = $fl & 1;
  $tobool13 = ($and12|0)==(0);
  $$ = $tobool13 ? (7151) : (7156);
  $$$ = $tobool9 ? $$ : (7153);
  $0 = $fl & 2049;
  $narrow = ($0|0)!=(0);
  $$394$ = $narrow&1;
  $pl$0 = $$394$;$prefix$0 = $$$;$y$addr$0 = $y;
 }
 $call26 = (i64(___DOUBLE_BITS_685($y$addr$0)));
 $and27 = i64_and($call26,i64_const(0,2146435072));
 $cmp28 = i64_ult($and27,i64_const(0,2146435072));
 do {
  if ($cmp28) {
   $call55 = (+_frexpl($y$addr$0,$e2));
   $mul = $call55 * 2.0;
   $tobool56 = $mul != 0.0;
   if ($tobool56) {
    $1 = load4($e2);
    $dec = (($1) + -1)|0;
    store4($e2,$dec);
   }
   $or = $t | 32;
   $cmp59 = ($or|0)==(97);
   if ($cmp59) {
    $and62 = $t & 32;
    $tobool63 = ($and62|0)==(0);
    $add$ptr65 = ((($prefix$0)) + 9|0);
    $prefix$0$add$ptr65 = $tobool63 ? $prefix$0 : $add$ptr65;
    $add67 = $pl$0 | 2;
    $2 = ($p>>>0)>(11);
    $sub74 = (12 - ($p))|0;
    $tobool76488 = ($sub74|0)==(0);
    $tobool76 = $2 | $tobool76488;
    do {
     if ($tobool76) {
      $y$addr$1 = $mul;
     } else {
      $re$1410 = $sub74;$round$0409 = 8.0;
      while(1) {
       $dec78 = (($re$1410) + -1)|0;
       $mul80 = $round$0409 * 16.0;
       $tobool79 = ($dec78|0)==(0);
       if ($tobool79) {
        break;
       } else {
        $re$1410 = $dec78;$round$0409 = $mul80;
       }
      }
      $3 = load1($prefix$0$add$ptr65);
      $cmp82 = ($3<<24>>24)==(45);
      if ($cmp82) {
       $sub85 = -$mul;
       $sub86 = $sub85 - $mul80;
       $add87 = $mul80 + $sub86;
       $sub88 = -$add87;
       $y$addr$1 = $sub88;
       break;
      } else {
       $add90 = $mul + $mul80;
       $sub91 = $add90 - $mul80;
       $y$addr$1 = $sub91;
       break;
      }
     }
    } while(0);
    $4 = load4($e2);
    $cmp94 = ($4|0)<(0);
    $sub97 = (0 - ($4))|0;
    $cond100 = $cmp94 ? $sub97 : $4;
    $conv101 = i64_sext($cond100);
    $call102 = (_fmt_u($conv101,$arrayidx)|0);
    $cmp103 = ($call102|0)==($arrayidx|0);
    if ($cmp103) {
     $incdec$ptr106 = ((($ebuf0)) + 11|0);
     store1($incdec$ptr106,48);
     $estr$0 = $incdec$ptr106;
    } else {
     $estr$0 = $call102;
    }
    $5 = $4 >> 31;
    $6 = $5 & 2;
    $7 = (($6) + 43)|0;
    $conv111 = $7&255;
    $incdec$ptr112 = ((($estr$0)) + -1|0);
    store1($incdec$ptr112,$conv111);
    $add113 = (($t) + 15)|0;
    $conv114 = $add113&255;
    $incdec$ptr115 = ((($estr$0)) + -2|0);
    store1($incdec$ptr115,$conv114);
    $notrhs = ($p|0)<(1);
    $and134 = $fl & 8;
    $tobool135 = ($and134|0)==(0);
    $s$0 = $buf;$y$addr$2 = $y$addr$1;
    while(1) {
     $conv116 = (~~(($y$addr$2)));
     $arrayidx117 = (7181 + ($conv116)|0);
     $8 = load1($arrayidx117);
     $conv118393 = $8&255;
     $or120 = $conv118393 | $and62;
     $conv121 = $or120&255;
     $incdec$ptr122 = ((($s$0)) + 1|0);
     store1($s$0,$conv121);
     $conv123 = (+($conv116|0));
     $sub124 = $y$addr$2 - $conv123;
     $mul125 = $sub124 * 16.0;
     $sub$ptr$lhs$cast = $incdec$ptr122;
     $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
     $cmp127 = ($sub$ptr$sub|0)==(1);
     if ($cmp127) {
      $notlhs = $mul125 == 0.0;
      $or$cond1$not = $notrhs & $notlhs;
      $or$cond = $tobool135 & $or$cond1$not;
      if ($or$cond) {
       $s$1 = $incdec$ptr122;
      } else {
       $incdec$ptr137 = ((($s$0)) + 2|0);
       store1($incdec$ptr122,46);
       $s$1 = $incdec$ptr137;
      }
     } else {
      $s$1 = $incdec$ptr122;
     }
     $tobool139 = $mul125 != 0.0;
     if ($tobool139) {
      $s$0 = $s$1;$y$addr$2 = $mul125;
     } else {
      break;
     }
    }
    $tobool140 = ($p|0)!=(0);
    $sub$ptr$rhs$cast152 = $incdec$ptr115;
    $sub$ptr$lhs$cast151 = $arrayidx;
    $sub$ptr$lhs$cast143 = $s$1;
    $sub$ptr$sub145 = (($sub$ptr$lhs$cast143) - ($sub$ptr$rhs$cast))|0;
    $sub$ptr$sub153 = (($sub$ptr$lhs$cast151) - ($sub$ptr$rhs$cast152))|0;
    $sub146 = (($sub$ptr$sub145) + -2)|0;
    $cmp147 = ($sub146|0)<($p|0);
    $or$cond395 = $tobool140 & $cmp147;
    $add150 = (($p) + 2)|0;
    $add150$pn = $or$cond395 ? $add150 : $sub$ptr$sub145;
    $l$0 = (($sub$ptr$sub153) + ($add67))|0;
    $add165 = (($l$0) + ($add150$pn))|0;
    _pad_684($f,32,$w,$add165,$fl);
    _out($f,$prefix$0$add$ptr65,$add67);
    $xor167 = $fl ^ 65536;
    _pad_684($f,48,$w,$add165,$xor167);
    _out($f,$buf,$sub$ptr$sub145);
    $sub181 = (($add150$pn) - ($sub$ptr$sub145))|0;
    _pad_684($f,48,$sub181,0,0);
    _out($f,$incdec$ptr115,$sub$ptr$sub153);
    $xor186 = $fl ^ 8192;
    _pad_684($f,32,$w,$add165,$xor186);
    $add653$sink406 = $add165;
    break;
   }
   $cmp68 = ($p|0)<(0);
   $$p = $cmp68 ? 6 : $p;
   if ($tobool56) {
    $mul202 = $mul * 268435456.0;
    $9 = load4($e2);
    $sub203 = (($9) + -28)|0;
    store4($e2,$sub203);
    $$pr = $sub203;$y$addr$3 = $mul202;
   } else {
    $$pre = load4($e2);
    $$pr = $$pre;$y$addr$3 = $mul;
   }
   $cmp205 = ($$pr|0)<(0);
   $add$ptr213 = ((($big)) + 288|0);
   $arraydecay208$add$ptr213 = $cmp205 ? $big : $add$ptr213;
   $y$addr$4 = $y$addr$3;$z$0 = $arraydecay208$add$ptr213;
   while(1) {
    $conv216 = (~~(($y$addr$4))>>>0);
    store4($z$0,$conv216);
    $incdec$ptr217 = ((($z$0)) + 4|0);
    $conv218 = (+($conv216>>>0));
    $sub219 = $y$addr$4 - $conv218;
    $mul220 = $sub219 * 1.0E+9;
    $tobool222 = $mul220 != 0.0;
    if ($tobool222) {
     $y$addr$4 = $mul220;$z$0 = $incdec$ptr217;
    } else {
     break;
    }
   }
   $cmp225474 = ($$pr|0)>(0);
   if ($cmp225474) {
    $11 = $$pr;$a$1476 = $arraydecay208$add$ptr213;$z$1475 = $incdec$ptr217;
    while(1) {
     $10 = ($11|0)<(29);
     $cond233 = $10 ? $11 : 29;
     $d$0469 = ((($z$1475)) + -4|0);
     $cmp235470 = ($d$0469>>>0)<($a$1476>>>0);
     if ($cmp235470) {
      $a$2$ph = $a$1476;
     } else {
      $sh_prom = i64_zext($cond233>>>0);
      $carry$0471 = 0;$d$0472 = $d$0469;
      while(1) {
       $12 = load4($d$0472);
       $conv238 = i64_zext($12>>>0);
       $shl = i64_shl($conv238,$sh_prom);
       $conv239 = i64_zext($carry$0471>>>0);
       $add240 = i64_add($shl,$conv239);
       $rem = i64_urem($add240,i64_const(1000000000,0));
       $conv241 = i64_trunc($rem);
       store4($d$0472,$conv241);
       $div = i64_udiv($add240,i64_const(1000000000,0));
       $conv242 = i64_trunc($div);
       $d$0 = ((($d$0472)) + -4|0);
       $cmp235 = ($d$0>>>0)<($a$1476>>>0);
       if ($cmp235) {
        break;
       } else {
        $carry$0471 = $conv242;$d$0472 = $d$0;
       }
      }
      $tobool244 = ($conv242|0)==(0);
      if ($tobool244) {
       $a$2$ph = $a$1476;
      } else {
       $incdec$ptr246 = ((($a$1476)) + -4|0);
       store4($incdec$ptr246,$conv242);
       $a$2$ph = $incdec$ptr246;
      }
     }
     $z$2 = $z$1475;
     while(1) {
      $cmp249 = ($z$2>>>0)>($a$2$ph>>>0);
      if (!($cmp249)) {
       break;
      }
      $arrayidx251 = ((($z$2)) + -4|0);
      $13 = load4($arrayidx251);
      $lnot = ($13|0)==(0);
      if ($lnot) {
       $z$2 = $arrayidx251;
      } else {
       break;
      }
     }
     $14 = load4($e2);
     $sub256 = (($14) - ($cond233))|0;
     store4($e2,$sub256);
     $cmp225 = ($sub256|0)>(0);
     if ($cmp225) {
      $11 = $sub256;$a$1476 = $a$2$ph;$z$1475 = $z$2;
     } else {
      $$pr407 = $sub256;$a$1$lcssa = $a$2$ph;$z$1$lcssa = $z$2;
      break;
     }
    }
   } else {
    $$pr407 = $$pr;$a$1$lcssa = $arraydecay208$add$ptr213;$z$1$lcssa = $incdec$ptr217;
   }
   $cmp259464 = ($$pr407|0)<(0);
   if ($cmp259464) {
    $add273 = (($$p) + 25)|0;
    $div274 = (($add273|0) / 9)&-1;
    $add275 = (($div274) + 1)|0;
    $cmp299 = ($or|0)==(102);
    $15 = $$pr407;$a$3466 = $a$1$lcssa;$z$3465 = $z$1$lcssa;
    while(1) {
     $sub264 = (0 - ($15))|0;
     $16 = ($sub264|0)<(9);
     $cond271 = $16 ? $sub264 : 9;
     $cmp277460 = ($a$3466>>>0)<($z$3465>>>0);
     if ($cmp277460) {
      $shl280 = 1 << $cond271;
      $sub281 = (($shl280) + -1)|0;
      $shr285 = 1000000000 >>> $cond271;
      $carry262$0462 = 0;$d$1461 = $a$3466;
      while(1) {
       $18 = load4($d$1461);
       $and282 = $18 & $sub281;
       $shr283 = $18 >>> $cond271;
       $add284 = (($shr283) + ($carry262$0462))|0;
       store4($d$1461,$add284);
       $mul286 = Math_imul($and282, $shr285)|0;
       $incdec$ptr288 = ((($d$1461)) + 4|0);
       $cmp277 = ($incdec$ptr288>>>0)<($z$3465>>>0);
       if ($cmp277) {
        $carry262$0462 = $mul286;$d$1461 = $incdec$ptr288;
       } else {
        break;
       }
      }
      $19 = load4($a$3466);
      $tobool290 = ($19|0)==(0);
      $incdec$ptr292 = ((($a$3466)) + 4|0);
      $incdec$ptr292$a$3 = $tobool290 ? $incdec$ptr292 : $a$3466;
      $tobool294 = ($mul286|0)==(0);
      if ($tobool294) {
       $incdec$ptr292$a$3494 = $incdec$ptr292$a$3;$z$4 = $z$3465;
      } else {
       $incdec$ptr296 = ((($z$3465)) + 4|0);
       store4($z$3465,$mul286);
       $incdec$ptr292$a$3494 = $incdec$ptr292$a$3;$z$4 = $incdec$ptr296;
      }
     } else {
      $17 = load4($a$3466);
      $tobool290490 = ($17|0)==(0);
      $incdec$ptr292491 = ((($a$3466)) + 4|0);
      $incdec$ptr292$a$3492 = $tobool290490 ? $incdec$ptr292491 : $a$3466;
      $incdec$ptr292$a$3494 = $incdec$ptr292$a$3492;$z$4 = $z$3465;
     }
     $cond304 = $cmp299 ? $arraydecay208$add$ptr213 : $incdec$ptr292$a$3494;
     $sub$ptr$lhs$cast305 = $z$4;
     $sub$ptr$rhs$cast306 = $cond304;
     $sub$ptr$sub307 = (($sub$ptr$lhs$cast305) - ($sub$ptr$rhs$cast306))|0;
     $sub$ptr$div = $sub$ptr$sub307 >> 2;
     $cmp308 = ($sub$ptr$div|0)>($add275|0);
     $add$ptr311 = (($cond304) + ($add275<<2)|0);
     $add$ptr311$z$4 = $cmp308 ? $add$ptr311 : $z$4;
     $20 = load4($e2);
     $add313 = (($20) + ($cond271))|0;
     store4($e2,$add313);
     $cmp259 = ($add313|0)<(0);
     if ($cmp259) {
      $15 = $add313;$a$3466 = $incdec$ptr292$a$3494;$z$3465 = $add$ptr311$z$4;
     } else {
      $a$3$lcssa = $incdec$ptr292$a$3494;$z$3$lcssa = $add$ptr311$z$4;
      break;
     }
    }
   } else {
    $a$3$lcssa = $a$1$lcssa;$z$3$lcssa = $z$1$lcssa;
   }
   $cmp315 = ($a$3$lcssa>>>0)<($z$3$lcssa>>>0);
   $sub$ptr$lhs$cast318 = $arraydecay208$add$ptr213;
   if ($cmp315) {
    $sub$ptr$rhs$cast319 = $a$3$lcssa;
    $sub$ptr$sub320 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast319))|0;
    $sub$ptr$div321 = $sub$ptr$sub320 >> 2;
    $mul322 = ($sub$ptr$div321*9)|0;
    $21 = load4($a$3$lcssa);
    $cmp324456 = ($21>>>0)<(10);
    if ($cmp324456) {
     $e$1 = $mul322;
    } else {
     $e$0458 = $mul322;$i$0457 = 10;
     while(1) {
      $mul328 = ($i$0457*10)|0;
      $inc = (($e$0458) + 1)|0;
      $cmp324 = ($21>>>0)<($mul328>>>0);
      if ($cmp324) {
       $e$1 = $inc;
       break;
      } else {
       $e$0458 = $inc;$i$0457 = $mul328;
      }
     }
    }
   } else {
    $e$1 = 0;
   }
   $cmp333 = ($or|0)!=(102);
   $mul335 = $cmp333 ? $e$1 : 0;
   $sub336 = (($$p) - ($mul335))|0;
   $cmp338 = ($or|0)==(103);
   $tobool341 = ($$p|0)!=(0);
   $22 = $tobool341 & $cmp338;
   $land$ext$neg = $22 << 31 >> 31;
   $sub343 = (($sub336) + ($land$ext$neg))|0;
   $sub$ptr$lhs$cast344 = $z$3$lcssa;
   $sub$ptr$sub346 = (($sub$ptr$lhs$cast344) - ($sub$ptr$lhs$cast318))|0;
   $sub$ptr$div347 = $sub$ptr$sub346 >> 2;
   $23 = ($sub$ptr$div347*9)|0;
   $mul349 = (($23) + -9)|0;
   $cmp350 = ($sub343|0)<($mul349|0);
   if ($cmp350) {
    $add$ptr354 = ((($arraydecay208$add$ptr213)) + 4|0);
    $add355 = (($sub343) + 9216)|0;
    $div356 = (($add355|0) / 9)&-1;
    $sub357 = (($div356) + -1024)|0;
    $add$ptr358 = (($add$ptr354) + ($sub357<<2)|0);
    $rem360 = (($add355|0) % 9)&-1;
    $j$0451 = (($rem360) + 1)|0;
    $cmp363452 = ($j$0451|0)<(9);
    if ($cmp363452) {
     $i$1453 = 10;$j$0454 = $j$0451;
     while(1) {
      $mul367 = ($i$1453*10)|0;
      $j$0 = (($j$0454) + 1)|0;
      $exitcond = ($j$0|0)==(9);
      if ($exitcond) {
       $i$1$lcssa = $mul367;
       break;
      } else {
       $i$1453 = $mul367;$j$0454 = $j$0;
      }
     }
    } else {
     $i$1$lcssa = 10;
    }
    $24 = load4($add$ptr358);
    $rem370 = (($24>>>0) % ($i$1$lcssa>>>0))&-1;
    $tobool371 = ($rem370|0)==(0);
    $add$ptr373 = ((($add$ptr358)) + 4|0);
    $cmp374 = ($add$ptr373|0)==($z$3$lcssa|0);
    $or$cond396 = $cmp374 & $tobool371;
    if ($or$cond396) {
     $a$8 = $a$3$lcssa;$d$4 = $add$ptr358;$e$4 = $e$1;
    } else {
     $div378 = (($24>>>0) / ($i$1$lcssa>>>0))&-1;
     $and379 = $div378 & 1;
     $tobool380 = ($and379|0)==(0);
     $$397 = $tobool380 ? 9007199254740992.0 : 9007199254740994.0;
     $div384 = (($i$1$lcssa|0) / 2)&-1;
     $cmp385 = ($rem370>>>0)<($div384>>>0);
     $cmp390 = ($rem370|0)==($div384|0);
     $or$cond398 = $cmp374 & $cmp390;
     $$405 = $or$cond398 ? 1.0 : 1.5;
     $$$405 = $cmp385 ? 0.5 : $$405;
     $tobool400 = ($pl$0|0)==(0);
     if ($tobool400) {
      $round377$1 = $$397;$small$1 = $$$405;
     } else {
      $mul407 = -$$$405;
      $mul406 = -$$397;
      $25 = load1($prefix$0);
      $cmp403 = ($25<<24>>24)==(45);
      $mul406$$397 = $cmp403 ? $mul406 : $$397;
      $mul407$$$405 = $cmp403 ? $mul407 : $$$405;
      $round377$1 = $mul406$$397;$small$1 = $mul407$$$405;
     }
     $sub409 = (($24) - ($rem370))|0;
     store4($add$ptr358,$sub409);
     $add410 = $round377$1 + $small$1;
     $cmp411 = $add410 != $round377$1;
     if ($cmp411) {
      $add414 = (($sub409) + ($i$1$lcssa))|0;
      store4($add$ptr358,$add414);
      $cmp416446 = ($add414>>>0)>(999999999);
      if ($cmp416446) {
       $a$5448 = $a$3$lcssa;$incdec$ptr419$sink447 = $add$ptr358;
       while(1) {
        $incdec$ptr419 = ((($incdec$ptr419$sink447)) + -4|0);
        store4($incdec$ptr419$sink447,0);
        $cmp420 = ($incdec$ptr419>>>0)<($a$5448>>>0);
        if ($cmp420) {
         $incdec$ptr423 = ((($a$5448)) + -4|0);
         store4($incdec$ptr423,0);
         $a$6 = $incdec$ptr423;
        } else {
         $a$6 = $a$5448;
        }
        $26 = load4($incdec$ptr419);
        $inc425 = (($26) + 1)|0;
        store4($incdec$ptr419,$inc425);
        $cmp416 = ($inc425>>>0)>(999999999);
        if ($cmp416) {
         $a$5448 = $a$6;$incdec$ptr419$sink447 = $incdec$ptr419;
        } else {
         $a$5$lcssa = $a$6;$incdec$ptr419$sink$lcssa = $incdec$ptr419;
         break;
        }
       }
      } else {
       $a$5$lcssa = $a$3$lcssa;$incdec$ptr419$sink$lcssa = $add$ptr358;
      }
      $sub$ptr$rhs$cast428 = $a$5$lcssa;
      $sub$ptr$sub429 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast428))|0;
      $sub$ptr$div430 = $sub$ptr$sub429 >> 2;
      $mul431 = ($sub$ptr$div430*9)|0;
      $27 = load4($a$5$lcssa);
      $cmp433442 = ($27>>>0)<(10);
      if ($cmp433442) {
       $a$8 = $a$5$lcssa;$d$4 = $incdec$ptr419$sink$lcssa;$e$4 = $mul431;
      } else {
       $e$2444 = $mul431;$i$2443 = 10;
       while(1) {
        $mul437 = ($i$2443*10)|0;
        $inc438 = (($e$2444) + 1)|0;
        $cmp433 = ($27>>>0)<($mul437>>>0);
        if ($cmp433) {
         $a$8 = $a$5$lcssa;$d$4 = $incdec$ptr419$sink$lcssa;$e$4 = $inc438;
         break;
        } else {
         $e$2444 = $inc438;$i$2443 = $mul437;
        }
       }
      }
     } else {
      $a$8 = $a$3$lcssa;$d$4 = $add$ptr358;$e$4 = $e$1;
     }
    }
    $add$ptr442 = ((($d$4)) + 4|0);
    $cmp443 = ($z$3$lcssa>>>0)>($add$ptr442>>>0);
    $add$ptr442$z$3 = $cmp443 ? $add$ptr442 : $z$3$lcssa;
    $a$9$ph = $a$8;$e$5$ph = $e$4;$z$7$ph = $add$ptr442$z$3;
   } else {
    $a$9$ph = $a$3$lcssa;$e$5$ph = $e$1;$z$7$ph = $z$3$lcssa;
   }
   $z$7 = $z$7$ph;
   while(1) {
    $cmp450 = ($z$7>>>0)>($a$9$ph>>>0);
    if (!($cmp450)) {
     $cmp450$lcssa = 0;
     break;
    }
    $arrayidx453 = ((($z$7)) + -4|0);
    $28 = load4($arrayidx453);
    $lnot455 = ($28|0)==(0);
    if ($lnot455) {
     $z$7 = $arrayidx453;
    } else {
     $cmp450$lcssa = 1;
     break;
    }
   }
   $sub626$le = (0 - ($e$5$ph))|0;
   do {
    if ($cmp338) {
     $not$tobool341 = $tobool341 ^ 1;
     $inc468 = $not$tobool341&1;
     $$p$inc468 = (($inc468) + ($$p))|0;
     $cmp470 = ($$p$inc468|0)>($e$5$ph|0);
     $cmp473 = ($e$5$ph|0)>(-5);
     $or$cond2 = $cmp470 & $cmp473;
     $add477$neg = (($$p$inc468) + -1)|0;
     $t$addr$0$v = $or$cond2 ? -1 : -2;
     $t$addr$0 = (($t$addr$0$v) + ($t))|0;
     $sub478$neg = $or$cond2 ? $sub626$le : 0;
     $p$addr$2 = (($add477$neg) + ($sub478$neg))|0;
     $and483 = $fl & 8;
     $tobool484 = ($and483|0)==(0);
     if ($tobool484) {
      if ($cmp450$lcssa) {
       $arrayidx489 = ((($z$7)) + -4|0);
       $29 = load4($arrayidx489);
       $tobool490 = ($29|0)==(0);
       if ($tobool490) {
        $j$2 = 9;
       } else {
        $rem494437 = (($29>>>0) % 10)&-1;
        $cmp495438 = ($rem494437|0)==(0);
        if ($cmp495438) {
         $i$3439 = 10;$j$1440 = 0;
         while(1) {
          $mul499 = ($i$3439*10)|0;
          $inc500 = (($j$1440) + 1)|0;
          $rem494 = (($29>>>0) % ($mul499>>>0))&-1;
          $cmp495 = ($rem494|0)==(0);
          if ($cmp495) {
           $i$3439 = $mul499;$j$1440 = $inc500;
          } else {
           $j$2 = $inc500;
           break;
          }
         }
        } else {
         $j$2 = 0;
        }
       }
      } else {
       $j$2 = 9;
      }
      $or504 = $t$addr$0 | 32;
      $cmp505 = ($or504|0)==(102);
      $sub$ptr$lhs$cast508 = $z$7;
      $sub$ptr$sub510 = (($sub$ptr$lhs$cast508) - ($sub$ptr$lhs$cast318))|0;
      $sub$ptr$div511 = $sub$ptr$sub510 >> 2;
      $30 = ($sub$ptr$div511*9)|0;
      $mul513 = (($30) + -9)|0;
      if ($cmp505) {
       $sub514 = (($mul513) - ($j$2))|0;
       $31 = ($sub514|0)>(0);
       $$sub514 = $31 ? $sub514 : 0;
       $cmp528 = ($p$addr$2|0)<($$sub514|0);
       $p$addr$2$$sub514399 = $cmp528 ? $p$addr$2 : $$sub514;
       $and610$pre$phiZ2D = 0;$p$addr$3 = $p$addr$2$$sub514399;$t$addr$1 = $t$addr$0;
       break;
      } else {
       $add561 = (($mul513) + ($e$5$ph))|0;
       $sub562 = (($add561) - ($j$2))|0;
       $32 = ($sub562|0)>(0);
       $$sub562 = $32 ? $sub562 : 0;
       $cmp577 = ($p$addr$2|0)<($$sub562|0);
       $p$addr$2$$sub562400 = $cmp577 ? $p$addr$2 : $$sub562;
       $and610$pre$phiZ2D = 0;$p$addr$3 = $p$addr$2$$sub562400;$t$addr$1 = $t$addr$0;
       break;
      }
     } else {
      $and610$pre$phiZ2D = $and483;$p$addr$3 = $p$addr$2;$t$addr$1 = $t$addr$0;
     }
    } else {
     $$pre487 = $fl & 8;
     $and610$pre$phiZ2D = $$pre487;$p$addr$3 = $$p;$t$addr$1 = $t;
    }
   } while(0);
   $33 = $p$addr$3 | $and610$pre$phiZ2D;
   $34 = ($33|0)!=(0);
   $lor$ext = $34&1;
   $or613 = $t$addr$1 | 32;
   $cmp614 = ($or613|0)==(102);
   if ($cmp614) {
    $cmp617 = ($e$5$ph|0)>(0);
    $add620 = $cmp617 ? $e$5$ph : 0;
    $estr$2 = 0;$sub$ptr$sub650$pn = $add620;
   } else {
    $cmp623 = ($e$5$ph|0)<(0);
    $cond629 = $cmp623 ? $sub626$le : $e$5$ph;
    $conv630 = i64_sext($cond629);
    $call631 = (_fmt_u($conv630,$arrayidx)|0);
    $sub$ptr$lhs$cast633 = $arrayidx;
    $sub$ptr$rhs$cast634431 = $call631;
    $sub$ptr$sub635432 = (($sub$ptr$lhs$cast633) - ($sub$ptr$rhs$cast634431))|0;
    $cmp636433 = ($sub$ptr$sub635432|0)<(2);
    if ($cmp636433) {
     $estr$1434 = $call631;
     while(1) {
      $incdec$ptr639 = ((($estr$1434)) + -1|0);
      store1($incdec$ptr639,48);
      $sub$ptr$rhs$cast634 = $incdec$ptr639;
      $sub$ptr$sub635 = (($sub$ptr$lhs$cast633) - ($sub$ptr$rhs$cast634))|0;
      $cmp636 = ($sub$ptr$sub635|0)<(2);
      if ($cmp636) {
       $estr$1434 = $incdec$ptr639;
      } else {
       $estr$1$lcssa = $incdec$ptr639;
       break;
      }
     }
    } else {
     $estr$1$lcssa = $call631;
    }
    $35 = $e$5$ph >> 31;
    $36 = $35 & 2;
    $37 = (($36) + 43)|0;
    $conv644 = $37&255;
    $incdec$ptr645 = ((($estr$1$lcssa)) + -1|0);
    store1($incdec$ptr645,$conv644);
    $conv646 = $t$addr$1&255;
    $incdec$ptr647 = ((($estr$1$lcssa)) + -2|0);
    store1($incdec$ptr647,$conv646);
    $sub$ptr$rhs$cast649 = $incdec$ptr647;
    $sub$ptr$sub650 = (($sub$ptr$lhs$cast633) - ($sub$ptr$rhs$cast649))|0;
    $estr$2 = $incdec$ptr647;$sub$ptr$sub650$pn = $sub$ptr$sub650;
   }
   $add608 = (($pl$0) + 1)|0;
   $add612 = (($add608) + ($p$addr$3))|0;
   $l$1 = (($add612) + ($lor$ext))|0;
   $add653 = (($l$1) + ($sub$ptr$sub650$pn))|0;
   _pad_684($f,32,$w,$add653,$fl);
   _out($f,$prefix$0,$pl$0);
   $xor655 = $fl ^ 65536;
   _pad_684($f,48,$w,$add653,$xor655);
   if ($cmp614) {
    $cmp660 = ($a$9$ph>>>0)>($arraydecay208$add$ptr213>>>0);
    $r$0$a$9 = $cmp660 ? $arraydecay208$add$ptr213 : $a$9$ph;
    $add$ptr671 = ((($buf)) + 9|0);
    $sub$ptr$lhs$cast694 = $add$ptr671;
    $incdec$ptr689 = ((($buf)) + 8|0);
    $d$5422 = $r$0$a$9;
    while(1) {
     $38 = load4($d$5422);
     $conv669 = i64_zext($38>>>0);
     $call672 = (_fmt_u($conv669,$add$ptr671)|0);
     $cmp673 = ($d$5422|0)==($r$0$a$9|0);
     if ($cmp673) {
      $cmp686 = ($call672|0)==($add$ptr671|0);
      if ($cmp686) {
       store1($incdec$ptr689,48);
       $s668$1 = $incdec$ptr689;
      } else {
       $s668$1 = $call672;
      }
     } else {
      $cmp678419 = ($call672>>>0)>($buf>>>0);
      if ($cmp678419) {
       $39 = $call672;
       $40 = (($39) - ($sub$ptr$rhs$cast))|0;
       _memset(($buf|0),48,($40|0))|0;
       $s668$0420 = $call672;
       while(1) {
        $incdec$ptr681 = ((($s668$0420)) + -1|0);
        $cmp678 = ($incdec$ptr681>>>0)>($buf>>>0);
        if ($cmp678) {
         $s668$0420 = $incdec$ptr681;
        } else {
         $s668$1 = $incdec$ptr681;
         break;
        }
       }
      } else {
       $s668$1 = $call672;
      }
     }
     $sub$ptr$rhs$cast695 = $s668$1;
     $sub$ptr$sub696 = (($sub$ptr$lhs$cast694) - ($sub$ptr$rhs$cast695))|0;
     _out($f,$s668$1,$sub$ptr$sub696);
     $incdec$ptr698 = ((($d$5422)) + 4|0);
     $cmp665 = ($incdec$ptr698>>>0)>($arraydecay208$add$ptr213>>>0);
     if ($cmp665) {
      break;
     } else {
      $d$5422 = $incdec$ptr698;
     }
    }
    $41 = ($33|0)==(0);
    if (!($41)) {
     _out($f,10561,1);
    }
    $cmp707414 = ($incdec$ptr698>>>0)<($z$7>>>0);
    $cmp710415 = ($p$addr$3|0)>(0);
    $42 = $cmp710415 & $cmp707414;
    if ($42) {
     $d$6416 = $incdec$ptr698;$p$addr$4417 = $p$addr$3;
     while(1) {
      $43 = load4($d$6416);
      $conv716 = i64_zext($43>>>0);
      $call719 = (_fmt_u($conv716,$add$ptr671)|0);
      $cmp722411 = ($call719>>>0)>($buf>>>0);
      if ($cmp722411) {
       $44 = $call719;
       $45 = (($44) - ($sub$ptr$rhs$cast))|0;
       _memset(($buf|0),48,($45|0))|0;
       $s715$0412 = $call719;
       while(1) {
        $incdec$ptr725 = ((($s715$0412)) + -1|0);
        $cmp722 = ($incdec$ptr725>>>0)>($buf>>>0);
        if ($cmp722) {
         $s715$0412 = $incdec$ptr725;
        } else {
         $s715$0$lcssa = $incdec$ptr725;
         break;
        }
       }
      } else {
       $s715$0$lcssa = $call719;
      }
      $46 = ($p$addr$4417|0)<(9);
      $cond732 = $46 ? $p$addr$4417 : 9;
      _out($f,$s715$0$lcssa,$cond732);
      $incdec$ptr734 = ((($d$6416)) + 4|0);
      $sub735 = (($p$addr$4417) + -9)|0;
      $cmp707 = ($incdec$ptr734>>>0)<($z$7>>>0);
      $cmp710 = ($p$addr$4417|0)>(9);
      $47 = $cmp710 & $cmp707;
      if ($47) {
       $d$6416 = $incdec$ptr734;$p$addr$4417 = $sub735;
      } else {
       $p$addr$4$lcssa = $sub735;
       break;
      }
     }
    } else {
     $p$addr$4$lcssa = $p$addr$3;
    }
    $add737 = (($p$addr$4$lcssa) + 9)|0;
    _pad_684($f,48,$add737,9,0);
   } else {
    $add$ptr742 = ((($a$9$ph)) + 4|0);
    $z$7$add$ptr742 = $cmp450$lcssa ? $z$7 : $add$ptr742;
    $cmp748427 = ($p$addr$3|0)>(-1);
    if ($cmp748427) {
     $add$ptr756 = ((($buf)) + 9|0);
     $tobool781 = ($and610$pre$phiZ2D|0)==(0);
     $sub$ptr$lhs$cast787 = $add$ptr756;
     $48 = (0 - ($sub$ptr$rhs$cast))|0;
     $incdec$ptr763 = ((($buf)) + 8|0);
     $d$7428 = $a$9$ph;$p$addr$5429 = $p$addr$3;
     while(1) {
      $49 = load4($d$7428);
      $conv754 = i64_zext($49>>>0);
      $call757 = (_fmt_u($conv754,$add$ptr756)|0);
      $cmp760 = ($call757|0)==($add$ptr756|0);
      if ($cmp760) {
       store1($incdec$ptr763,48);
       $s753$0 = $incdec$ptr763;
      } else {
       $s753$0 = $call757;
      }
      $cmp765 = ($d$7428|0)==($a$9$ph|0);
      do {
       if ($cmp765) {
        $incdec$ptr776 = ((($s753$0)) + 1|0);
        _out($f,$s753$0,1);
        $cmp777 = ($p$addr$5429|0)<(1);
        $or$cond402 = $tobool781 & $cmp777;
        if ($or$cond402) {
         $s753$2 = $incdec$ptr776;
         break;
        }
        _out($f,10561,1);
        $s753$2 = $incdec$ptr776;
       } else {
        $cmp770423 = ($s753$0>>>0)>($buf>>>0);
        if (!($cmp770423)) {
         $s753$2 = $s753$0;
         break;
        }
        $scevgep483 = (($s753$0) + ($48)|0);
        $scevgep483484 = $scevgep483;
        _memset(($buf|0),48,($scevgep483484|0))|0;
        $s753$1424 = $s753$0;
        while(1) {
         $incdec$ptr773 = ((($s753$1424)) + -1|0);
         $cmp770 = ($incdec$ptr773>>>0)>($buf>>>0);
         if ($cmp770) {
          $s753$1424 = $incdec$ptr773;
         } else {
          $s753$2 = $incdec$ptr773;
          break;
         }
        }
       }
      } while(0);
      $sub$ptr$rhs$cast788 = $s753$2;
      $sub$ptr$sub789 = (($sub$ptr$lhs$cast787) - ($sub$ptr$rhs$cast788))|0;
      $cmp790 = ($p$addr$5429|0)>($sub$ptr$sub789|0);
      $cond800 = $cmp790 ? $sub$ptr$sub789 : $p$addr$5429;
      _out($f,$s753$2,$cond800);
      $sub806 = (($p$addr$5429) - ($sub$ptr$sub789))|0;
      $incdec$ptr808 = ((($d$7428)) + 4|0);
      $cmp745 = ($incdec$ptr808>>>0)<($z$7$add$ptr742>>>0);
      $cmp748 = ($sub806|0)>(-1);
      $50 = $cmp745 & $cmp748;
      if ($50) {
       $d$7428 = $incdec$ptr808;$p$addr$5429 = $sub806;
      } else {
       $p$addr$5$lcssa = $sub806;
       break;
      }
     }
    } else {
     $p$addr$5$lcssa = $p$addr$3;
    }
    $add810 = (($p$addr$5$lcssa) + 18)|0;
    _pad_684($f,48,$add810,18,0);
    $sub$ptr$lhs$cast811 = $arrayidx;
    $sub$ptr$rhs$cast812 = $estr$2;
    $sub$ptr$sub813 = (($sub$ptr$lhs$cast811) - ($sub$ptr$rhs$cast812))|0;
    _out($f,$estr$2,$sub$ptr$sub813);
   }
   $xor816 = $fl ^ 8192;
   _pad_684($f,32,$w,$add653,$xor816);
   $add653$sink406 = $add653;
  } else {
   $and36 = $t & 32;
   $tobool37 = ($and36|0)!=(0);
   $cond = $tobool37 ? 7169 : 7173;
   $cmp38 = ($y$addr$0 != $y$addr$0) | (0.0 != 0.0);
   $cond43 = $tobool37 ? 9089 : 7177;
   $s35$0 = $cmp38 ? $cond43 : $cond;
   $add = (($pl$0) + 3)|0;
   $and45 = $fl & -65537;
   _pad_684($f,32,$w,$add,$and45);
   _out($f,$prefix$0,$pl$0);
   _out($f,$s35$0,3);
   $xor = $fl ^ 8192;
   _pad_684($f,32,$w,$add,$xor);
   $add653$sink406 = $add;
  }
 } while(0);
 $cmp818 = ($add653$sink406|0)<($w|0);
 $w$add653 = $cmp818 ? $w : $add653$sink406;
 STACKTOP = sp;return ($w$add653|0);
}
function ___DOUBLE_BITS_685($__f) {
 $__f = +$__f;
 var $0 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($__f);
 return (i64($0));
}
function _frexpl($x,$e) {
 $x = +$x;
 $e = $e|0;
 var $call = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (+_frexp($x,$e));
 return (+$call);
}
function _frexp($x,$e) {
 $x = +$x;
 $e = $e|0;
 var $0 = i64(), $1 = 0, $2 = 0, $3 = 0.0, $and10 = i64(), $call = 0.0, $conv = 0, $mul = 0.0, $or = i64(), $retval$0 = 0.0, $shr = i64(), $storemerge = 0, $sub = 0, $sub8 = 0, $tobool1 = 0, $trunc = 0, $trunc$clear = 0, $x$addr$0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($x);
 $shr = i64_lshr($0,i64_const(52,0));
 $trunc = i64_trunc($shr)&65535;
 $trunc$clear = $trunc & 2047;
 switch ($trunc$clear<<16>>16) {
 case 0:  {
  $tobool1 = $x != 0.0;
  if ($tobool1) {
   $mul = $x * 1.8446744073709552E+19;
   $call = (+_frexp($mul,$e));
   $1 = load4($e);
   $sub = (($1) + -64)|0;
   $storemerge = $sub;$x$addr$0 = $call;
  } else {
   $storemerge = 0;$x$addr$0 = $x;
  }
  store4($e,$storemerge);
  $retval$0 = $x$addr$0;
  break;
 }
 case 2047:  {
  $retval$0 = $x;
  break;
 }
 default: {
  $2 = i64_trunc($shr);
  $conv = $2 & 2047;
  $sub8 = (($conv) + -1022)|0;
  store4($e,$sub8);
  $and10 = i64_and($0,i64_const(4294967295,2148532223));
  $or = i64_or($and10,i64_const(0,1071644672));
  $3 = i64_bc2d($or);
  $retval$0 = $3;
 }
 }
 return (+$retval$0);
}
function _wcrtomb($s,$wc) {
 $s = $s|0;
 $wc = $wc|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $and = 0, $and32 = 0, $and36 = 0, $and49 = 0, $and54 = 0, $and58 = 0, $cmp = 0, $cmp14 = 0, $cmp21 = 0, $cmp24 = 0, $cmp41 = 0, $cmp7 = 0, $conv = 0, $conv12 = 0, $conv17 = 0, $conv19 = 0;
 var $conv29 = 0, $conv34 = 0, $conv38 = 0, $conv46 = 0, $conv51 = 0, $conv56 = 0, $conv60 = 0, $incdec$ptr = 0, $incdec$ptr30 = 0, $incdec$ptr35 = 0, $incdec$ptr47 = 0, $incdec$ptr52 = 0, $incdec$ptr57 = 0, $not$tobool2 = 0, $or = 0, $or$cond = 0, $or18 = 0, $or28 = 0, $or33 = 0, $or37 = 0;
 var $or45 = 0, $or50 = 0, $or55 = 0, $or59 = 0, $retval$0 = 0, $shr2729 = 0, $shr3130 = 0, $shr32 = 0, $shr4426 = 0, $shr4827 = 0, $shr5328 = 0, $sub40 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($s|0)==(0|0);
 do {
  if ($tobool) {
   $retval$0 = 1;
  } else {
   $cmp = ($wc>>>0)<(128);
   if ($cmp) {
    $conv = $wc&255;
    store1($s,$conv);
    $retval$0 = 1;
    break;
   }
   $0 = load4(2864);
   $1 = load4($0);
   $not$tobool2 = ($1|0)==(0|0);
   if ($not$tobool2) {
    $2 = $wc & -128;
    $cmp7 = ($2|0)==(57216);
    if ($cmp7) {
     $conv12 = $wc&255;
     store1($s,$conv12);
     $retval$0 = 1;
     break;
    } else {
     store4(11324,84);
     $retval$0 = -1;
     break;
    }
   }
   $cmp14 = ($wc>>>0)<(2048);
   if ($cmp14) {
    $shr32 = $wc >>> 6;
    $or = $shr32 | 192;
    $conv17 = $or&255;
    $incdec$ptr = ((($s)) + 1|0);
    store1($s,$conv17);
    $and = $wc & 63;
    $or18 = $and | 128;
    $conv19 = $or18&255;
    store1($incdec$ptr,$conv19);
    $retval$0 = 2;
    break;
   }
   $cmp21 = ($wc>>>0)<(55296);
   $3 = $wc & -8192;
   $cmp24 = ($3|0)==(57344);
   $or$cond = $cmp21 | $cmp24;
   if ($or$cond) {
    $shr2729 = $wc >>> 12;
    $or28 = $shr2729 | 224;
    $conv29 = $or28&255;
    $incdec$ptr30 = ((($s)) + 1|0);
    store1($s,$conv29);
    $shr3130 = $wc >>> 6;
    $and32 = $shr3130 & 63;
    $or33 = $and32 | 128;
    $conv34 = $or33&255;
    $incdec$ptr35 = ((($s)) + 2|0);
    store1($incdec$ptr30,$conv34);
    $and36 = $wc & 63;
    $or37 = $and36 | 128;
    $conv38 = $or37&255;
    store1($incdec$ptr35,$conv38);
    $retval$0 = 3;
    break;
   }
   $sub40 = (($wc) + -65536)|0;
   $cmp41 = ($sub40>>>0)<(1048576);
   if ($cmp41) {
    $shr4426 = $wc >>> 18;
    $or45 = $shr4426 | 240;
    $conv46 = $or45&255;
    $incdec$ptr47 = ((($s)) + 1|0);
    store1($s,$conv46);
    $shr4827 = $wc >>> 12;
    $and49 = $shr4827 & 63;
    $or50 = $and49 | 128;
    $conv51 = $or50&255;
    $incdec$ptr52 = ((($s)) + 2|0);
    store1($incdec$ptr47,$conv51);
    $shr5328 = $wc >>> 6;
    $and54 = $shr5328 & 63;
    $or55 = $and54 | 128;
    $conv56 = $or55&255;
    $incdec$ptr57 = ((($s)) + 3|0);
    store1($incdec$ptr52,$conv56);
    $and58 = $wc & 63;
    $or59 = $and58 | 128;
    $conv60 = $or59&255;
    store1($incdec$ptr57,$conv60);
    $retval$0 = 4;
    break;
   } else {
    store4(11324,84);
    $retval$0 = -1;
    break;
   }
  }
 } while(0);
 return ($retval$0|0);
}
function ___strerror_l($e,$loc) {
 $e = $e|0;
 $loc = $loc|0;
 var $0 = 0, $1 = 0, $2 = 0, $arrayidx = 0, $arrayidx15 = 0, $call = 0, $cmp = 0, $conv = 0, $dec = 0, $i$012 = 0, $i$111 = 0, $inc = 0, $incdec$ptr = 0, $s$0$lcssa = 0, $s$010 = 0, $s$1 = 0, $tobool = 0, $tobool5 = 0, $tobool59 = 0, $tobool8 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $i$012 = 0;
 while(1) {
  $arrayidx = (7197 + ($i$012)|0);
  $0 = load1($arrayidx);
  $conv = $0&255;
  $cmp = ($conv|0)==($e|0);
  if ($cmp) {
   label = 2;
   break;
  }
  $inc = (($i$012) + 1)|0;
  $tobool = ($inc|0)==(87);
  if ($tobool) {
   $i$111 = 87;$s$010 = 7285;
   label = 5;
   break;
  } else {
   $i$012 = $inc;
  }
 }
 if ((label|0) == 2) {
  $tobool59 = ($i$012|0)==(0);
  if ($tobool59) {
   $s$0$lcssa = 7285;
  } else {
   $i$111 = $i$012;$s$010 = 7285;
   label = 5;
  }
 }
 if ((label|0) == 5) {
  while(1) {
   label = 0;
   $s$1 = $s$010;
   while(1) {
    $1 = load1($s$1);
    $tobool8 = ($1<<24>>24)==(0);
    $incdec$ptr = ((($s$1)) + 1|0);
    if ($tobool8) {
     break;
    } else {
     $s$1 = $incdec$ptr;
    }
   }
   $dec = (($i$111) + -1)|0;
   $tobool5 = ($dec|0)==(0);
   if ($tobool5) {
    $s$0$lcssa = $incdec$ptr;
    break;
   } else {
    $i$111 = $dec;$s$010 = $incdec$ptr;
    label = 5;
   }
  }
 }
 $arrayidx15 = ((($loc)) + 20|0);
 $2 = load4($arrayidx15);
 $call = (___lctrans($s$0$lcssa,$2)|0);
 return ($call|0);
}
function ___lctrans($msg,$lm) {
 $msg = $msg|0;
 $lm = $lm|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___lctrans_impl($msg,$lm)|0);
 return ($call|0);
}
function ___lctrans_impl($msg,$lm) {
 $msg = $msg|0;
 $lm = $lm|0;
 var $0 = 0, $1 = 0, $call = 0, $cond = 0, $map_size = 0, $tobool = 0, $tobool1 = 0, $trans$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($lm|0)==(0|0);
 if ($tobool) {
  $trans$0 = 0;
 } else {
  $0 = load4($lm);
  $map_size = ((($lm)) + 4|0);
  $1 = load4($map_size);
  $call = (___mo_lookup($0,$1,$msg)|0);
  $trans$0 = $call;
 }
 $tobool1 = ($trans$0|0)!=(0|0);
 $cond = $tobool1 ? $trans$0 : $msg;
 return ($cond|0);
}
function ___mo_lookup($p,$size,$s) {
 $p = $p|0;
 $size = $size|0;
 $s = $s|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr65 = 0, $add$ptr65$ = 0, $add16 = 0, $add23 = 0, $add31 = 0, $add42 = 0, $add49 = 0, $add59 = 0;
 var $arrayidx = 0, $arrayidx1 = 0, $arrayidx17 = 0, $arrayidx24 = 0, $arrayidx3 = 0, $arrayidx32 = 0, $arrayidx43 = 0, $arrayidx50 = 0, $arrayidx60 = 0, $b$0 = 0, $b$1 = 0, $call = 0, $call18 = 0, $call2 = 0, $call25 = 0, $call36 = 0, $call4 = 0, $call44 = 0, $call51 = 0, $cmp = 0;
 var $cmp10 = 0, $cmp26 = 0, $cmp29 = 0, $cmp52 = 0, $cmp56 = 0, $cmp6 = 0, $cmp67 = 0, $cmp71 = 0, $div = 0, $div12 = 0, $div13 = 0, $div14 = 0, $mul = 0, $mul15 = 0, $n$0 = 0, $n$1 = 0, $or = 0, $or$cond = 0, $or$cond66 = 0, $or$cond67 = 0;
 var $rem = 0, $retval$4 = 0, $sub = 0, $sub28 = 0, $sub5 = 0, $sub55 = 0, $sub79 = 0, $tobool = 0, $tobool33 = 0, $tobool37 = 0, $tobool62 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($p);
 $sub = (($0) + 1794895138)|0;
 $arrayidx = ((($p)) + 8|0);
 $1 = load4($arrayidx);
 $call = (_swapc($1,$sub)|0);
 $arrayidx1 = ((($p)) + 12|0);
 $2 = load4($arrayidx1);
 $call2 = (_swapc($2,$sub)|0);
 $arrayidx3 = ((($p)) + 16|0);
 $3 = load4($arrayidx3);
 $call4 = (_swapc($3,$sub)|0);
 $div = $size >>> 2;
 $cmp = ($call>>>0)<($div>>>0);
 L1: do {
  if ($cmp) {
   $mul = $call << 2;
   $sub5 = (($size) - ($mul))|0;
   $cmp6 = ($call2>>>0)<($sub5>>>0);
   $cmp10 = ($call4>>>0)<($sub5>>>0);
   $or$cond = $cmp6 & $cmp10;
   if ($or$cond) {
    $or = $call4 | $call2;
    $rem = $or & 3;
    $tobool = ($rem|0)==(0);
    if ($tobool) {
     $div12 = $call2 >>> 2;
     $div13 = $call4 >>> 2;
     $b$0 = 0;$n$0 = $call;
     while(1) {
      $div14 = $n$0 >>> 1;
      $add = (($b$0) + ($div14))|0;
      $mul15 = $add << 1;
      $add16 = (($mul15) + ($div12))|0;
      $arrayidx17 = (($p) + ($add16<<2)|0);
      $4 = load4($arrayidx17);
      $call18 = (_swapc($4,$sub)|0);
      $add23 = (($add16) + 1)|0;
      $arrayidx24 = (($p) + ($add23<<2)|0);
      $5 = load4($arrayidx24);
      $call25 = (_swapc($5,$sub)|0);
      $cmp26 = ($call25>>>0)<($size>>>0);
      $sub28 = (($size) - ($call25))|0;
      $cmp29 = ($call18>>>0)<($sub28>>>0);
      $or$cond66 = $cmp26 & $cmp29;
      if (!($or$cond66)) {
       $retval$4 = 0;
       break L1;
      }
      $add31 = (($call25) + ($call18))|0;
      $arrayidx32 = (($p) + ($add31)|0);
      $6 = load1($arrayidx32);
      $tobool33 = ($6<<24>>24)==(0);
      if (!($tobool33)) {
       $retval$4 = 0;
       break L1;
      }
      $add$ptr = (($p) + ($call25)|0);
      $call36 = (_strcmp($s,$add$ptr)|0);
      $tobool37 = ($call36|0)==(0);
      if ($tobool37) {
       break;
      }
      $cmp67 = ($n$0|0)==(1);
      $cmp71 = ($call36|0)<(0);
      $sub79 = (($n$0) - ($div14))|0;
      $n$1 = $cmp71 ? $div14 : $sub79;
      $b$1 = $cmp71 ? $b$0 : $add;
      if ($cmp67) {
       $retval$4 = 0;
       break L1;
      } else {
       $b$0 = $b$1;$n$0 = $n$1;
      }
     }
     $add42 = (($mul15) + ($div13))|0;
     $arrayidx43 = (($p) + ($add42<<2)|0);
     $7 = load4($arrayidx43);
     $call44 = (_swapc($7,$sub)|0);
     $add49 = (($add42) + 1)|0;
     $arrayidx50 = (($p) + ($add49<<2)|0);
     $8 = load4($arrayidx50);
     $call51 = (_swapc($8,$sub)|0);
     $cmp52 = ($call51>>>0)<($size>>>0);
     $sub55 = (($size) - ($call51))|0;
     $cmp56 = ($call44>>>0)<($sub55>>>0);
     $or$cond67 = $cmp52 & $cmp56;
     if ($or$cond67) {
      $add59 = (($call51) + ($call44))|0;
      $arrayidx60 = (($p) + ($add59)|0);
      $add$ptr65 = (($p) + ($call51)|0);
      $9 = load1($arrayidx60);
      $tobool62 = ($9<<24>>24)==(0);
      $add$ptr65$ = $tobool62 ? $add$ptr65 : 0;
      $retval$4 = $add$ptr65$;
     } else {
      $retval$4 = 0;
     }
    } else {
     $retval$4 = 0;
    }
   } else {
    $retval$4 = 0;
   }
  } else {
   $retval$4 = 0;
  }
 } while(0);
 return ($retval$4|0);
}
function _swapc($x,$c) {
 $x = $x|0;
 $c = $c|0;
 var $or5 = 0, $tobool = 0, $x$or5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($c|0)==(0);
 $or5 = (_llvm_bswap_i32(($x|0))|0);
 $x$or5 = $tobool ? $x : $or5;
 return ($x$or5|0);
}
function ___fwritex($s,$l,$f) {
 $s = $s|0;
 $l = $l|0;
 $f = $f|0;
 var $$pre = 0, $$pre33 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr = 0, $add$ptr26 = 0, $arrayidx = 0, $call = 0, $call16 = 0, $cmp = 0, $cmp11 = 0;
 var $cmp17 = 0, $cmp6 = 0, $i$0 = 0, $l$addr$0 = 0, $l$addr$1 = 0, $lbf = 0, $s$addr$1 = 0, $sub = 0, $sub$ptr$sub = 0, $tobool = 0, $tobool1 = 0, $tobool9 = 0, $wend = 0, $wpos = 0, $write = 0, $write15 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $wend = ((($f)) + 16|0);
 $0 = load4($wend);
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call = (___towrite($f)|0);
  $tobool1 = ($call|0)==(0);
  if ($tobool1) {
   $$pre = load4($wend);
   $3 = $$pre;
   label = 5;
  }
 } else {
  $1 = $0;
  $3 = $1;
  label = 5;
 }
 L5: do {
  if ((label|0) == 5) {
   $wpos = ((($f)) + 20|0);
   $2 = load4($wpos);
   $sub$ptr$sub = (($3) - ($2))|0;
   $cmp = ($sub$ptr$sub>>>0)<($l>>>0);
   $4 = $2;
   if ($cmp) {
    $write = ((($f)) + 36|0);
    $5 = load4($write);
    (FUNCTION_TABLE_iiii[$5 & 31]($f,$s,$l)|0);
    break;
   }
   $lbf = ((($f)) + 75|0);
   $6 = load1($lbf);
   $cmp6 = ($6<<24>>24)>(-1);
   L10: do {
    if ($cmp6) {
     $i$0 = $l;
     while(1) {
      $tobool9 = ($i$0|0)==(0);
      if ($tobool9) {
       $9 = $4;$l$addr$1 = $l;$s$addr$1 = $s;
       break L10;
      }
      $sub = (($i$0) + -1)|0;
      $arrayidx = (($s) + ($sub)|0);
      $7 = load1($arrayidx);
      $cmp11 = ($7<<24>>24)==(10);
      if ($cmp11) {
       break;
      } else {
       $i$0 = $sub;
      }
     }
     $write15 = ((($f)) + 36|0);
     $8 = load4($write15);
     $call16 = (FUNCTION_TABLE_iiii[$8 & 31]($f,$s,$i$0)|0);
     $cmp17 = ($call16>>>0)<($i$0>>>0);
     if ($cmp17) {
      break L5;
     }
     $add$ptr = (($s) + ($i$0)|0);
     $l$addr$0 = (($l) - ($i$0))|0;
     $$pre33 = load4($wpos);
     $9 = $$pre33;$l$addr$1 = $l$addr$0;$s$addr$1 = $add$ptr;
    } else {
     $9 = $4;$l$addr$1 = $l;$s$addr$1 = $s;
    }
   } while(0);
   _memcpy(($9|0),($s$addr$1|0),($l$addr$1|0))|0;
   $10 = load4($wpos);
   $add$ptr26 = (($10) + ($l$addr$1)|0);
   store4($wpos,$add$ptr26);
  }
 } while(0);
 return;
}
function ___towrite($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $add$ptr = 0, $and = 0, $buf = 0, $buf_size = 0, $conv = 0, $conv3 = 0, $mode = 0, $or = 0, $or5 = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $sub = 0, $tobool = 0, $wbase = 0, $wend = 0;
 var $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $mode = ((($f)) + 74|0);
 $0 = load1($mode);
 $conv = $0 << 24 >> 24;
 $sub = (($conv) + 255)|0;
 $or = $sub | $conv;
 $conv3 = $or&255;
 store1($mode,$conv3);
 $1 = load4($f);
 $and = $1 & 8;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $rend = ((($f)) + 8|0);
  store4($rend,0);
  $rpos = ((($f)) + 4|0);
  store4($rpos,0);
  $buf = ((($f)) + 44|0);
  $2 = load4($buf);
  $wbase = ((($f)) + 28|0);
  store4($wbase,$2);
  $wpos = ((($f)) + 20|0);
  store4($wpos,$2);
  $buf_size = ((($f)) + 48|0);
  $3 = load4($buf_size);
  $add$ptr = (($2) + ($3)|0);
  $wend = ((($f)) + 16|0);
  store4($wend,$add$ptr);
  $retval$0 = 0;
 } else {
  $or5 = $1 | 32;
  store4($f,$or5);
  $retval$0 = -1;
 }
 return ($retval$0|0);
}
function ___ctype_get_mb_cur_max() {
 var $0 = 0, $1 = 0, $cond = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(2864);
 $1 = load4($0);
 $tobool = ($1|0)!=(0|0);
 $cond = $tobool ? 4 : 1;
 return ($cond|0);
}
function _strlen($s) {
 $s = $s|0;
 var $$pn = 0, $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $and = 0, $and3 = 0, $incdec$ptr = 0, $incdec$ptr1323 = 0, $incdec$ptr7 = 0, $lnot = 0, $neg = 0, $rem = 0, $rem13 = 0, $s$addr$0$lcssa = 0, $s$addr$015 = 0, $s$addr$1$lcssa = 0;
 var $sub = 0, $sub$ptr$lhs$cast15 = 0, $sub$ptr$lhs$cast15$sink = 0, $sub$ptr$sub17 = 0, $tobool = 0, $tobool1 = 0, $tobool10 = 0, $tobool1021 = 0, $tobool14 = 0, $w$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $s;
 $rem13 = $0 & 3;
 $tobool14 = ($rem13|0)==(0);
 L1: do {
  if ($tobool14) {
   $s$addr$0$lcssa = $s;
   label = 4;
  } else {
   $5 = $0;$s$addr$015 = $s;
   while(1) {
    $1 = load1($s$addr$015);
    $tobool1 = ($1<<24>>24)==(0);
    if ($tobool1) {
     $sub$ptr$lhs$cast15$sink = $5;
     break L1;
    }
    $incdec$ptr = ((($s$addr$015)) + 1|0);
    $2 = $incdec$ptr;
    $rem = $2 & 3;
    $tobool = ($rem|0)==(0);
    if ($tobool) {
     $s$addr$0$lcssa = $incdec$ptr;
     label = 4;
     break;
    } else {
     $5 = $2;$s$addr$015 = $incdec$ptr;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $w$0 = $s$addr$0$lcssa;
  while(1) {
   $3 = load4($w$0);
   $sub = (($3) + -16843009)|0;
   $neg = $3 & -2139062144;
   $and = $neg ^ -2139062144;
   $and3 = $and & $sub;
   $lnot = ($and3|0)==(0);
   $incdec$ptr7 = ((($w$0)) + 4|0);
   if ($lnot) {
    $w$0 = $incdec$ptr7;
   } else {
    break;
   }
  }
  $4 = $3&255;
  $tobool1021 = ($4<<24>>24)==(0);
  if ($tobool1021) {
   $s$addr$1$lcssa = $w$0;
  } else {
   $$pn = $w$0;
   while(1) {
    $incdec$ptr1323 = ((($$pn)) + 1|0);
    $$pre = load1($incdec$ptr1323);
    $tobool10 = ($$pre<<24>>24)==(0);
    if ($tobool10) {
     $s$addr$1$lcssa = $incdec$ptr1323;
     break;
    } else {
     $$pn = $incdec$ptr1323;
    }
   }
  }
  $sub$ptr$lhs$cast15 = $s$addr$1$lcssa;
  $sub$ptr$lhs$cast15$sink = $sub$ptr$lhs$cast15;
 }
 $sub$ptr$sub17 = (($sub$ptr$lhs$cast15$sink) - ($0))|0;
 return ($sub$ptr$sub17|0);
}
function ___munmap($start,$len) {
 $start = $start|0;
 $len = $len|0;
 var $0 = 0, $call = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $0 = $start;
 store4($vararg_buffer,$0);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,$len);
 $call = (___syscall91(91,($vararg_buffer|0))|0);
 (___syscall_ret($call)|0);
 STACKTOP = sp;return;
}
function ___strchrnul($s) {
 $s = $s|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $and = 0, $and14 = 0, $and15 = 0, $and29 = 0, $and9 = 0, $and930 = 0, $incdec$ptr = 0, $incdec$ptr19 = 0, $incdec$ptr31 = 0, $lnot = 0, $neg = 0, $neg13 = 0, $neg28 = 0;
 var $rem = 0, $rem34 = 0, $retval$0 = 0, $s$addr$0$lcssa = 0, $s$addr$036 = 0, $s$addr$1 = 0, $sub = 0, $sub11 = 0, $sub27 = 0, $tobool10 = 0, $tobool1031 = 0, $tobool2 = 0, $tobool235 = 0, $w$0$lcssa = 0, $w$032 = 0, $xor = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $s;
 $rem34 = $0 & 3;
 $tobool235 = ($rem34|0)==(0);
 L1: do {
  if ($tobool235) {
   $s$addr$0$lcssa = $s;
   label = 4;
  } else {
   $s$addr$036 = $s;
   while(1) {
    $1 = load1($s$addr$036);
    switch ($1<<24>>24) {
    case 0: case 58:  {
     $retval$0 = $s$addr$036;
     break L1;
     break;
    }
    default: {
    }
    }
    $incdec$ptr = ((($s$addr$036)) + 1|0);
    $2 = $incdec$ptr;
    $rem = $2 & 3;
    $tobool2 = ($rem|0)==(0);
    if ($tobool2) {
     $s$addr$0$lcssa = $incdec$ptr;
     label = 4;
     break L1;
    } else {
     $s$addr$036 = $incdec$ptr;
    }
   }
  }
 } while(0);
 L5: do {
  if ((label|0) == 4) {
   $3 = load4($s$addr$0$lcssa);
   $sub27 = (($3) + -16843009)|0;
   $neg28 = $3 & -2139062144;
   $and29 = $neg28 ^ -2139062144;
   $and930 = $and29 & $sub27;
   $tobool1031 = ($and930|0)==(0);
   L7: do {
    if ($tobool1031) {
     $4 = $3;$w$032 = $s$addr$0$lcssa;
     while(1) {
      $xor = $4 ^ 976894522;
      $sub11 = (($xor) + -16843009)|0;
      $neg13 = $4 & -2139062144;
      $and14 = $neg13 ^ -2139062144;
      $and15 = $and14 & $sub11;
      $lnot = ($and15|0)==(0);
      if (!($lnot)) {
       $w$0$lcssa = $w$032;
       break L7;
      }
      $incdec$ptr19 = ((($w$032)) + 4|0);
      $5 = load4($incdec$ptr19);
      $sub = (($5) + -16843009)|0;
      $neg = $5 & -2139062144;
      $and = $neg ^ -2139062144;
      $and9 = $and & $sub;
      $tobool10 = ($and9|0)==(0);
      if ($tobool10) {
       $4 = $5;$w$032 = $incdec$ptr19;
      } else {
       $w$0$lcssa = $incdec$ptr19;
       break;
      }
     }
    } else {
     $w$0$lcssa = $s$addr$0$lcssa;
    }
   } while(0);
   $s$addr$1 = $w$0$lcssa;
   while(1) {
    $6 = load1($s$addr$1);
    $incdec$ptr31 = ((($s$addr$1)) + 1|0);
    switch ($6<<24>>24) {
    case 0: case 58:  {
     $retval$0 = $s$addr$1;
     break L5;
     break;
    }
    default: {
     $s$addr$1 = $incdec$ptr31;
    }
    }
   }
  }
 } while(0);
 return ($retval$0|0);
}
function _freelocale($l) {
 $l = $l|0;
 var $call = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___loc_is_allocated($l)|0);
 $tobool = ($call|0)==(0);
 if (!($tobool)) {
  _free($l);
 }
 return;
}
function ___loc_is_allocated($loc) {
 $loc = $loc|0;
 var $cmp = 0, $cmp1 = 0, $cmp1$ = 0, $land$ext = 0, $or$cond = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($loc|0)!=(0|0);
 $cmp = ($loc|0)!=(11264|0);
 $or$cond = $tobool & $cmp;
 $cmp1 = ($loc|0)!=(2184|0);
 $cmp1$ = $cmp1 & $or$cond;
 $land$ext = $cmp1$&1;
 return ($land$ext|0);
}
function _mbrtowc($wc,$src,$n,$st) {
 $wc = $wc|0;
 $src = $src|0;
 $n = $n|0;
 $st = $st|0;
 var $$st = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $add = 0, $and = 0, $arrayidx38 = 0, $c$036 = 0, $c$1 = 0, $c$2 = 0, $cmp = 0, $cmp32 = 0, $cmp65 = 0, $conv = 0;
 var $conv29 = 0, $conv31 = 0, $conv42 = 0, $conv52 = 0, $dec = 0, $dec55 = 0, $dummy = 0, $dummy$wc = 0, $incdec$ptr = 0, $incdec$ptr51 = 0, $lnot$ext = 0, $n$addr$035 = 0, $n$addr$1 = 0, $not$tobool21 = 0, $or = 0, $or54 = 0, $retval$0 = 0, $s$037 = 0, $s$1 = 0, $shl = 0;
 var $shr32 = 0, $shr46 = 0, $sub = 0, $sub43 = 0, $sub53 = 0, $sub59 = 0, $tobool = 0, $tobool1 = 0, $tobool10 = 0, $tobool13 = 0, $tobool18 = 0, $tobool3 = 0, $tobool40 = 0, $tobool48 = 0, $tobool57 = 0, $tobool6 = 0, $tobool61 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $dummy = sp;
 $tobool = ($st|0)==(0|0);
 $$st = $tobool ? 11288 : $st;
 $0 = load4($$st);
 $tobool1 = ($src|0)==(0|0);
 L1: do {
  if ($tobool1) {
   $tobool3 = ($0|0)==(0);
   if ($tobool3) {
    $retval$0 = 0;
   } else {
    label = 17;
   }
  } else {
   $tobool6 = ($wc|0)==(0|0);
   $dummy$wc = $tobool6 ? $dummy : $wc;
   $tobool10 = ($n|0)==(0);
   if ($tobool10) {
    $retval$0 = -2;
   } else {
    $tobool13 = ($0|0)==(0);
    if ($tobool13) {
     $1 = load1($src);
     $cmp = ($1<<24>>24)>(-1);
     if ($cmp) {
      $conv = $1&255;
      store4($dummy$wc,$conv);
      $tobool18 = ($1<<24>>24)!=(0);
      $lnot$ext = $tobool18&1;
      $retval$0 = $lnot$ext;
      break;
     }
     $2 = load4(2864);
     $3 = load4($2);
     $not$tobool21 = ($3|0)==(0|0);
     if ($not$tobool21) {
      $conv29 = $1 << 24 >> 24;
      $and = $conv29 & 57343;
      store4($dummy$wc,$and);
      $retval$0 = 1;
      break;
     }
     $conv31 = $1&255;
     $sub = (($conv31) + -194)|0;
     $cmp32 = ($sub>>>0)>(50);
     if ($cmp32) {
      label = 17;
      break;
     }
     $incdec$ptr = ((($src)) + 1|0);
     $arrayidx38 = (2208 + ($sub<<2)|0);
     $4 = load4($arrayidx38);
     $dec = (($n) + -1)|0;
     $tobool40 = ($dec|0)==(0);
     if ($tobool40) {
      $c$2 = $4;
     } else {
      $c$036 = $4;$n$addr$035 = $dec;$s$037 = $incdec$ptr;
      label = 11;
     }
    } else {
     $c$036 = $0;$n$addr$035 = $n;$s$037 = $src;
     label = 11;
    }
    L14: do {
     if ((label|0) == 11) {
      $5 = load1($s$037);
      $conv42 = $5&255;
      $shr32 = $conv42 >>> 3;
      $sub43 = (($shr32) + -16)|0;
      $shr46 = $c$036 >> 26;
      $add = (($shr32) + ($shr46))|0;
      $or = $sub43 | $add;
      $tobool48 = ($or>>>0)>(7);
      if ($tobool48) {
       label = 17;
       break L1;
      } else {
       $6 = $5;$c$1 = $c$036;$n$addr$1 = $n$addr$035;$s$1 = $s$037;
      }
      while(1) {
       $shl = $c$1 << 6;
       $incdec$ptr51 = ((($s$1)) + 1|0);
       $conv52 = $6&255;
       $sub53 = (($conv52) + -128)|0;
       $or54 = $shl | $sub53;
       $dec55 = (($n$addr$1) + -1)|0;
       $tobool57 = ($or54|0)<(0);
       if (!($tobool57)) {
        break;
       }
       $tobool61 = ($dec55|0)==(0);
       if ($tobool61) {
        $c$2 = $or54;
        break L14;
       }
       $7 = load1($incdec$ptr51);
       $8 = $7 & -64;
       $cmp65 = ($8<<24>>24)==(-128);
       if ($cmp65) {
        $6 = $7;$c$1 = $or54;$n$addr$1 = $dec55;$s$1 = $incdec$ptr51;
       } else {
        label = 17;
        break L1;
       }
      }
      store4($$st,0);
      store4($dummy$wc,$or54);
      $sub59 = (($n) - ($dec55))|0;
      $retval$0 = $sub59;
      break L1;
     }
    } while(0);
    store4($$st,$c$2);
    $retval$0 = -2;
   }
  }
 } while(0);
 if ((label|0) == 17) {
  store4($$st,0);
  store4(11324,84);
  $retval$0 = -1;
 }
 STACKTOP = sp;return ($retval$0|0);
}
function ___get_locale($cat,$val) {
 $cat = $cat|0;
 $val = $val|0;
 var $$pre88 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $__c_dot_utf8$new$4 = 0, $add = 0, $add$ptr104 = 0, $add$ptr131 = 0, $add105 = 0, $arraydecay = 0, $arraydecay63 = 0, $arraydecay74 = 0, $arrayidx102 = 0, $arrayidx106 = 0, $arrayidx121 = 0, $arrayidx144 = 0, $arrayidx16 = 0, $arrayidx28 = 0, $arrayidx38 = 0, $arrayidx53 = 0, $buf = 0, $call = 0;
 var $call108 = 0, $call111 = 0, $call136 = 0, $call3 = 0, $call41 = 0, $call44 = 0, $call64 = 0, $call75 = 0, $call84 = 0, $call9 = 0, $call91 = 0, $cmp = 0, $cmp149 = 0, $cmp25 = 0, $cmp35 = 0, $cmp50 = 0, $cmp55 = 0, $cmp97 = 0, $inc = 0, $lnot = 0;
 var $lnot$ext$neg = 0, $lnot$ext130 = 0, $map_size = 0, $map_size117 = 0, $map_size140 = 0, $n$0$lcssa = 0, $n$085 = 0, $name118 = 0, $name141 = 0, $new$4 = 0, $next = 0, $next122 = 0, $next145 = 0, $next80 = 0, $or$cond = 0, $p$084 = 0, $p$182 = 0, $path$180 = 0, $retval$0 = 0, $sub = 0;
 var $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $sub96 = 0, $tobool = 0, $tobool1 = 0, $tobool10 = 0, $tobool109 = 0, $tobool112 = 0, $tobool126 = 0, $tobool13 = 0, $tobool137 = 0, $tobool147 = 0, $tobool2 = 0, $tobool30 = 0, $tobool39 = 0, $tobool4 = 0, $tobool42 = 0, $tobool61 = 0, $tobool6183 = 0;
 var $tobool65 = 0, $tobool7 = 0, $tobool71 = 0, $tobool7181 = 0, $tobool76 = 0, $tobool82 = 0, $tobool86 = 0, $tobool89 = 0, $tobool8979 = 0, $tobool92 = 0, $val$addr$1 = 0, $val$addr$290 = 0, $val$addr$291 = 0, $val$addr$292 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 272|0;
 $buf = sp + 8|0;
 $map_size = sp;
 $0 = load1($val);
 $tobool = ($0<<24>>24)==(0);
 do {
  if ($tobool) {
   $call = (_getenv((9165|0))|0);
   $tobool1 = ($call|0)==(0|0);
   if (!($tobool1)) {
    $1 = load1($call);
    $tobool2 = ($1<<24>>24)==(0);
    if (!($tobool2)) {
     $val$addr$1 = $call;
     break;
    }
   }
   $arraydecay = (9093 + (($cat*12)|0)|0);
   $call3 = (_getenv(($arraydecay|0))|0);
   $tobool4 = ($call3|0)==(0|0);
   if (!($tobool4)) {
    $2 = load1($call3);
    $tobool7 = ($2<<24>>24)==(0);
    if (!($tobool7)) {
     $val$addr$1 = $call3;
     break;
    }
   }
   $call9 = (_getenv((9172|0))|0);
   $tobool10 = ($call9|0)==(0|0);
   if (!($tobool10)) {
    $3 = load1($call9);
    $tobool13 = ($3<<24>>24)==(0);
    if (!($tobool13)) {
     $val$addr$1 = $call9;
     break;
    }
   }
   $val$addr$1 = 9177;
  } else {
   $val$addr$1 = $val;
  }
 } while(0);
 $n$085 = 0;
 L13: while(1) {
  $arrayidx16 = (($val$addr$1) + ($n$085)|0);
  $4 = load1($arrayidx16);
  switch ($4<<24>>24) {
  case 47: case 0:  {
   $n$0$lcssa = $n$085;
   break L13;
   break;
  }
  default: {
  }
  }
  $inc = (($n$085) + 1)|0;
  $cmp = ($inc>>>0)<(15);
  if ($cmp) {
   $n$085 = $inc;
  } else {
   $n$0$lcssa = $inc;
   break;
  }
 }
 $5 = load1($val$addr$1);
 $cmp25 = ($5<<24>>24)==(46);
 if ($cmp25) {
  $val$addr$290 = 9177;
  label = 15;
 } else {
  $arrayidx28 = (($val$addr$1) + ($n$0$lcssa)|0);
  $6 = load1($arrayidx28);
  $tobool30 = ($6<<24>>24)==(0);
  if ($tobool30) {
   $cmp35 = ($5<<24>>24)==(67);
   if ($cmp35) {
    $val$addr$290 = $val$addr$1;
    label = 15;
   } else {
    $val$addr$291 = $val$addr$1;
    label = 16;
   }
  } else {
   $val$addr$290 = 9177;
   label = 15;
  }
 }
 if ((label|0) == 15) {
  $arrayidx38 = ((($val$addr$290)) + 1|0);
  $7 = load1($arrayidx38);
  $tobool39 = ($7<<24>>24)==(0);
  if ($tobool39) {
   $val$addr$292 = $val$addr$290;
   label = 18;
  } else {
   $val$addr$291 = $val$addr$290;
   label = 16;
  }
 }
 L22: do {
  if ((label|0) == 16) {
   $call41 = (_strcmp($val$addr$291,9177)|0);
   $tobool42 = ($call41|0)==(0);
   if ($tobool42) {
    $val$addr$292 = $val$addr$291;
    label = 18;
   } else {
    $call44 = (_strcmp($val$addr$291,9185)|0);
    $lnot = ($call44|0)==(0);
    if ($lnot) {
     $val$addr$292 = $val$addr$291;
     label = 18;
    } else {
     $9 = load4(11292);
     $tobool6183 = ($9|0)==(0|0);
     if (!($tobool6183)) {
      $p$084 = $9;
      while(1) {
       $arraydecay63 = ((($p$084)) + 8|0);
       $call64 = (_strcmp($val$addr$291,$arraydecay63)|0);
       $tobool65 = ($call64|0)==(0);
       if ($tobool65) {
        $retval$0 = $p$084;
        break L22;
       }
       $next = ((($p$084)) + 24|0);
       $10 = load4($next);
       $tobool61 = ($10|0)==(0|0);
       if ($tobool61) {
        break;
       } else {
        $p$084 = $10;
       }
      }
     }
     ___lock((11296|0));
     $11 = load4(11292);
     $tobool7181 = ($11|0)==(0|0);
     L32: do {
      if (!($tobool7181)) {
       $p$182 = $11;
       while(1) {
        $arraydecay74 = ((($p$182)) + 8|0);
        $call75 = (_strcmp($val$addr$291,$arraydecay74)|0);
        $tobool76 = ($call75|0)==(0);
        if ($tobool76) {
         break;
        }
        $next80 = ((($p$182)) + 24|0);
        $12 = load4($next80);
        $tobool71 = ($12|0)==(0|0);
        if ($tobool71) {
         break L32;
        } else {
         $p$182 = $12;
        }
       }
       ___unlock((11296|0));
       $retval$0 = $p$182;
       break L22;
      }
     } while(0);
     $13 = load4((11208));
     $tobool82 = ($13|0)==(0);
     L39: do {
      if ($tobool82) {
       $call84 = (_getenv((9191|0))|0);
       $tobool86 = ($call84|0)==(0|0);
       if ($tobool86) {
        label = 41;
       } else {
        $14 = load1($call84);
        $tobool8979 = ($14<<24>>24)==(0);
        if ($tobool8979) {
         label = 41;
        } else {
         $sub96 = (254 - ($n$0$lcssa))|0;
         $add = (($n$0$lcssa) + 1)|0;
         $path$180 = $call84;
         while(1) {
          $call91 = (___strchrnul($path$180)|0);
          $sub$ptr$lhs$cast = $call91;
          $sub$ptr$rhs$cast = $path$180;
          $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
          $15 = load1($call91);
          $tobool92 = ($15<<24>>24)!=(0);
          $lnot$ext$neg = $tobool92 << 31 >> 31;
          $sub = (($lnot$ext$neg) + ($sub$ptr$sub))|0;
          $cmp97 = ($sub>>>0)<($sub96>>>0);
          if ($cmp97) {
           _memcpy(($buf|0),($path$180|0),($sub|0))|0;
           $arrayidx102 = (($buf) + ($sub)|0);
           store1($arrayidx102,47);
           $add$ptr104 = ((($arrayidx102)) + 1|0);
           _memcpy(($add$ptr104|0),($val$addr$291|0),($n$0$lcssa|0))|0;
           $add105 = (($add) + ($sub))|0;
           $arrayidx106 = (($buf) + ($add105)|0);
           store1($arrayidx106,0);
           $call108 = (___map_file(($buf|0),($map_size|0))|0);
           $tobool109 = ($call108|0)==(0|0);
           if (!($tobool109)) {
            break;
           }
           $$pre88 = load1($call91);
           $18 = $$pre88;
          } else {
           $18 = $15;
          }
          $tobool126 = ($18<<24>>24)!=(0);
          $lnot$ext130 = $tobool126&1;
          $add$ptr131 = (($call91) + ($lnot$ext130)|0);
          $19 = load1($add$ptr131);
          $tobool89 = ($19<<24>>24)==(0);
          if ($tobool89) {
           label = 41;
           break L39;
          } else {
           $path$180 = $add$ptr131;
          }
         }
         $call111 = (_malloc(28)|0);
         $tobool112 = ($call111|0)==(0|0);
         $16 = load4($map_size);
         if ($tobool112) {
          ___munmap($call108,$16);
          label = 41;
          break;
         } else {
          store4($call111,$call108);
          $map_size117 = ((($call111)) + 4|0);
          store4($map_size117,$16);
          $name118 = ((($call111)) + 8|0);
          _memcpy(($name118|0),($val$addr$291|0),($n$0$lcssa|0))|0;
          $arrayidx121 = (($name118) + ($n$0$lcssa)|0);
          store1($arrayidx121,0);
          $17 = load4(11292);
          $next122 = ((($call111)) + 24|0);
          store4($next122,$17);
          store4(11292,$call111);
          $new$4 = $call111;
          break;
         }
        }
       }
      } else {
       label = 41;
      }
     } while(0);
     if ((label|0) == 41) {
      $call136 = (_malloc(28)|0);
      $tobool137 = ($call136|0)==(0|0);
      if ($tobool137) {
       $new$4 = $call136;
      } else {
       store4($call136,(2164));
       $map_size140 = ((($call136)) + 4|0);
       store4($map_size140,20);
       $name141 = ((($call136)) + 8|0);
       _memcpy(($name141|0),($val$addr$291|0),($n$0$lcssa|0))|0;
       $arrayidx144 = (($name141) + ($n$0$lcssa)|0);
       store1($arrayidx144,0);
       $20 = load4(11292);
       $next145 = ((($call136)) + 24|0);
       store4($next145,$20);
       store4(11292,$call136);
       $new$4 = $call136;
      }
     }
     $tobool147 = ($new$4|0)==(0|0);
     $cmp149 = ($cat|0)==(0);
     $or$cond = $cmp149 & $tobool147;
     $__c_dot_utf8$new$4 = $or$cond ? 2136 : $new$4;
     ___unlock((11296|0));
     $retval$0 = $__c_dot_utf8$new$4;
    }
   }
  }
 } while(0);
 do {
  if ((label|0) == 18) {
   $cmp50 = ($cat|0)==(0);
   if ($cmp50) {
    $arrayidx53 = ((($val$addr$292)) + 1|0);
    $8 = load1($arrayidx53);
    $cmp55 = ($8<<24>>24)==(46);
    if ($cmp55) {
     $retval$0 = 2136;
     break;
    }
   }
   $retval$0 = 0;
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function ___newlocale($mask,$name,$loc) {
 $mask = $mask|0;
 $name = $name|0;
 $loc = $loc|0;
 var $0 = 0, $1 = 0, $and = 0, $and11 = 0, $arrayidx = 0, $arrayidx15 = 0, $arrayidx26 = 0, $brmerge = 0, $call = 0, $call19 = 0, $call4 = 0, $cmp37 = 0, $cond = 0, $exitcond = 0, $exitcond29 = 0, $i$028 = 0, $i$126 = 0, $inc = 0, $inc23 = 0, $inc28 = 0;
 var $j$0$inc23 = 0, $j$027 = 0, $lm$0 = 0, $not$tobool21 = 0, $retval$0 = 0, $shl = 0, $shl10 = 0, $tmp = 0, $tobool = 0, $tobool12 = 0, $tobool2 = 0, $tobool9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $tmp = sp;
 $call = (___loc_is_allocated($loc)|0);
 $tobool = ($call|0)==(0);
 L1: do {
  if ($tobool) {
   $tobool9 = ($loc|0)==(0|0);
   $i$126 = 0;$j$027 = 0;
   while(1) {
    $shl10 = 1 << $i$126;
    $and11 = $shl10 & $mask;
    $tobool12 = ($and11|0)!=(0);
    $brmerge = $tobool9 | $tobool12;
    if ($brmerge) {
     $cond = $tobool12 ? $name : 11336;
     $call19 = (___get_locale($i$126,$cond)|0);
     $lm$0 = $call19;
    } else {
     $arrayidx15 = (($loc) + ($i$126<<2)|0);
     $0 = load4($arrayidx15);
     $lm$0 = $0;
    }
    $not$tobool21 = ($lm$0|0)!=(0|0);
    $inc23 = $not$tobool21&1;
    $j$0$inc23 = (($inc23) + ($j$027))|0;
    $arrayidx26 = (($tmp) + ($i$126<<2)|0);
    store4($arrayidx26,$lm$0);
    $inc28 = (($i$126) + 1)|0;
    $exitcond = ($inc28|0)==(6);
    if ($exitcond) {
     break;
    } else {
     $i$126 = $inc28;$j$027 = $j$0$inc23;
    }
   }
   switch ($j$0$inc23|0) {
   case 0:  {
    $retval$0 = 11264;
    break L1;
    break;
   }
   case 1:  {
    $1 = load4($tmp);
    $cmp37 = ($1|0)==(2136|0);
    if ($cmp37) {
     $retval$0 = 2184;
     break L1;
    }
    break;
   }
   default: {
   }
   }
   $retval$0 = $loc;
  } else {
   $i$028 = 0;
   while(1) {
    $shl = 1 << $i$028;
    $and = $shl & $mask;
    $tobool2 = ($and|0)==(0);
    if (!($tobool2)) {
     $arrayidx = (($loc) + ($i$028<<2)|0);
     $call4 = (___get_locale($i$028,$name)|0);
     store4($arrayidx,$call4);
    }
    $inc = (($i$028) + 1)|0;
    $exitcond29 = ($inc|0)==(6);
    if ($exitcond29) {
     $retval$0 = $loc;
     break;
    } else {
     $i$028 = $inc;
    }
   }
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function ___uselocale($new) {
 $new = $new|0;
 var $0 = 0, $cmp = 0, $cmp2 = 0, $cond = 0, $cond6 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(2864);
 $tobool = ($new|0)==(0|0);
 if (!($tobool)) {
  $cmp = ($new|0)==((-1)|0);
  $cond = $cmp ? (11240) : $new;
  store4(2864,$cond);
 }
 $cmp2 = ($0|0)==((11240)|0);
 $cond6 = $cmp2 ? (-1) : $0;
 return ($cond6|0);
}
function _wmemcpy($d,$s,$n) {
 $d = $d|0;
 $s = $s|0;
 $n = $n|0;
 var $0 = 0, $d$addr$06 = 0, $dec = 0, $incdec$ptr = 0, $incdec$ptr1 = 0, $n$addr$05 = 0, $s$addr$04 = 0, $tobool = 0, $tobool3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool3 = ($n|0)==(0);
 if (!($tobool3)) {
  $d$addr$06 = $d;$n$addr$05 = $n;$s$addr$04 = $s;
  while(1) {
   $dec = (($n$addr$05) + -1)|0;
   $incdec$ptr = ((($s$addr$04)) + 4|0);
   $0 = load4($s$addr$04);
   $incdec$ptr1 = ((($d$addr$06)) + 4|0);
   store4($d$addr$06,$0);
   $tobool = ($dec|0)==(0);
   if ($tobool) {
    break;
   } else {
    $d$addr$06 = $incdec$ptr1;$n$addr$05 = $dec;$s$addr$04 = $incdec$ptr;
   }
  }
 }
 return ($d|0);
}
function ___strdup($s) {
 $s = $s|0;
 var $add = 0, $call = 0, $call1 = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_strlen($s)|0);
 $add = (($call) + 1)|0;
 $call1 = (_malloc($add)|0);
 $tobool = ($call1|0)==(0|0);
 if ($tobool) {
  $retval$0 = 0;
 } else {
  _memcpy(($call1|0),($s|0),($add|0))|0;
  $retval$0 = $call1;
 }
 return ($retval$0|0);
}
function ___overflow() {
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $c = 0, $call = 0, $call13 = 0, $cmp = 0, $cmp14 = 0, $cmp7 = 0, $conv18 = 0, $incdec$ptr = 0, $or$cond = 0, $retval$0 = 0, $tobool = 0, $tobool1 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $c = sp;
 store1($c,10);
 $0 = load4((2428));
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call = (___towrite(2412)|0);
  $tobool1 = ($call|0)==(0);
  if ($tobool1) {
   $$pre = load4((2428));
   $2 = $$pre;
   label = 4;
  } else {
   $retval$0 = -1;
  }
 } else {
  $2 = $0;
  label = 4;
 }
 do {
  if ((label|0) == 4) {
   $1 = load4((2432));
   $cmp = ($1>>>0)>=($2>>>0);
   $3 = load1((2487));
   $cmp7 = ($3<<24>>24)==(10);
   $or$cond = $cmp | $cmp7;
   if (!($or$cond)) {
    $incdec$ptr = ((($1)) + 1|0);
    store4((2432),$incdec$ptr);
    store1($1,10);
    $retval$0 = 10;
    break;
   }
   $4 = load4((2448));
   $call13 = (FUNCTION_TABLE_iiii[$4 & 31](2412,$c,1)|0);
   $cmp14 = ($call13|0)==(1);
   if ($cmp14) {
    $5 = load1($c);
    $conv18 = $5&255;
    $retval$0 = $conv18;
   } else {
    $retval$0 = -1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function _mbrlen($s,$n,$st) {
 $s = $s|0;
 $n = $n|0;
 $st = $st|0;
 var $call = 0, $cond = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($st|0)!=(0|0);
 $cond = $tobool ? $st : 11304;
 $call = (_mbrtowc(0,$s,$n,$cond)|0);
 return ($call|0);
}
function _mbsnrtowcs($wcs,$src,$n,$wn,$st) {
 $wcs = $wcs|0;
 $src = $src|0;
 $n = $n|0;
 $wn = $wn|0;
 $st = $st|0;
 var $$cast = 0, $$pr$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr = 0, $add$ptr36 = 0, $add$ptr364 = 0, $add15 = 0, $add25 = 0, $call = 0;
 var $call24 = 0, $cmp = 0, $cmp11 = 0, $cmp26 = 0, $cmp3 = 0, $cnt$055 = 0, $cnt$1 = 0, $cnt$248 = 0, $cnt$3 = 0, $dec = 0, $div = 0, $inc = 0, $incdec$ptr = 0, $n$addr$054 = 0, $n$addr$1 = 0, $n$addr$247 = 0, $or$cond = 0, $or$cond52 = 0, $s = 0, $s$promoted = 0;
 var $s$promoted11 = 0, $sub = 0, $sub13 = 0, $sub37 = 0, $tobool = 0, $tobool1 = 0, $tobool150 = 0, $tobool16 = 0, $tobool19 = 0, $tobool1944 = 0, $tobool2 = 0, $tobool21 = 0, $tobool2145 = 0, $tobool251 = 0, $tobool7 = 0, $wbuf = 0, $wcs$arraydecay = 0, $wn$ = 0, $wn$addr$0$div = 0, $wn$addr$053 = 0;
 var $wn$addr$1 = 0, $wn$addr$2 = 0, $wn$addr$346 = 0, $ws$040 = 0, $ws$056 = 0, $ws$1 = 0, $ws$249 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1040|0;
 $wbuf = sp + 8|0;
 $s = sp;
 $0 = load4($src);
 store4($s,$0);
 $tobool = ($wcs|0)!=(0|0);
 $wn$ = $tobool ? $wn : 256;
 $wcs$arraydecay = $tobool ? $wcs : $wbuf;
 $$cast = $0;
 $tobool150 = ($0|0)!=(0);
 $tobool251 = ($wn$|0)!=(0);
 $or$cond52 = $tobool251 & $tobool150;
 L1: do {
  if ($or$cond52) {
   $10 = $0;$cnt$055 = 0;$n$addr$054 = $n;$s$promoted11 = $$cast;$wn$addr$053 = $wn$;$ws$056 = $wcs$arraydecay;
   while(1) {
    $div = $n$addr$054 >>> 2;
    $cmp = ($div>>>0)>=($wn$addr$053>>>0);
    $cmp3 = ($n$addr$054>>>0)>(131);
    $1 = $cmp3 | $cmp;
    if (!($1)) {
     $11 = $10;$cnt$1 = $cnt$055;$n$addr$1 = $n$addr$054;$s$promoted = $s$promoted11;$wn$addr$2 = $wn$addr$053;$ws$040 = $ws$056;
     break L1;
    }
    $wn$addr$0$div = $cmp ? $wn$addr$053 : $div;
    $sub = (($n$addr$054) - ($wn$addr$0$div))|0;
    $call = (_mbsrtowcs($ws$056,$s,$wn$addr$0$div,$st)|0);
    $tobool7 = ($call|0)==(-1);
    if ($tobool7) {
     break;
    }
    $cmp11 = ($ws$056|0)==($wbuf|0);
    $add$ptr = (($ws$056) + ($call<<2)|0);
    $sub13 = $cmp11 ? 0 : $call;
    $wn$addr$1 = (($wn$addr$053) - ($sub13))|0;
    $ws$1 = $cmp11 ? $ws$056 : $add$ptr;
    $add15 = (($call) + ($cnt$055))|0;
    $3 = load4($s);
    $tobool1 = ($3|0)!=(0|0);
    $tobool2 = ($wn$addr$1|0)!=(0);
    $or$cond = $tobool2 & $tobool1;
    $4 = $3;
    if ($or$cond) {
     $10 = $4;$cnt$055 = $add15;$n$addr$054 = $sub;$s$promoted11 = $3;$wn$addr$053 = $wn$addr$1;$ws$056 = $ws$1;
    } else {
     $11 = $4;$cnt$1 = $add15;$n$addr$1 = $sub;$s$promoted = $3;$wn$addr$2 = $wn$addr$1;$ws$040 = $ws$1;
     break L1;
    }
   }
   $$pr$pre = load4($s);
   $2 = $$pr$pre;
   $11 = $2;$cnt$1 = -1;$n$addr$1 = $sub;$s$promoted = $$pr$pre;$wn$addr$2 = 0;$ws$040 = $ws$056;
  } else {
   $11 = $0;$cnt$1 = 0;$n$addr$1 = $n;$s$promoted = $$cast;$wn$addr$2 = $wn$;$ws$040 = $wcs$arraydecay;
  }
 } while(0);
 $tobool16 = ($s$promoted|0)==(0|0);
 L8: do {
  if ($tobool16) {
   $9 = $11;$cnt$3 = $cnt$1;
  } else {
   $tobool1944 = ($wn$addr$2|0)!=(0);
   $tobool2145 = ($n$addr$1|0)!=(0);
   $5 = $tobool1944 & $tobool2145;
   if ($5) {
    $add$ptr364 = $s$promoted;$cnt$248 = $cnt$1;$n$addr$247 = $n$addr$1;$wn$addr$346 = $wn$addr$2;$ws$249 = $ws$040;
    while(1) {
     $call24 = (_mbrtowc($ws$249,$add$ptr364,$n$addr$247,$st)|0);
     $add25 = (($call24) + 2)|0;
     $cmp26 = ($add25>>>0)<(3);
     if ($cmp26) {
      break;
     }
     $add$ptr36 = (($add$ptr364) + ($call24)|0);
     $sub37 = (($n$addr$247) - ($call24))|0;
     $incdec$ptr = ((($ws$249)) + 4|0);
     $dec = (($wn$addr$346) + -1)|0;
     $inc = (($cnt$248) + 1)|0;
     $tobool19 = ($dec|0)!=(0);
     $tobool21 = ($sub37|0)!=(0);
     $7 = $tobool19 & $tobool21;
     if ($7) {
      $add$ptr364 = $add$ptr36;$cnt$248 = $inc;$n$addr$247 = $sub37;$wn$addr$346 = $dec;$ws$249 = $incdec$ptr;
     } else {
      label = 13;
      break;
     }
    }
    if ((label|0) == 13) {
     store4($s,$add$ptr36);
     $8 = $add$ptr36;
     $9 = $8;$cnt$3 = $inc;
     break;
    }
    store4($s,$add$ptr364);
    $6 = $add$ptr364;
    switch ($call24|0) {
    case -1:  {
     $9 = $6;$cnt$3 = -1;
     break L8;
     break;
    }
    case 0:  {
     store4($s,0);
     $9 = 0;$cnt$3 = $cnt$248;
     break L8;
     break;
    }
    default: {
     store4($st,0);
     $9 = $6;$cnt$3 = $cnt$248;
     break L8;
    }
    }
   } else {
    $9 = $11;$cnt$3 = $cnt$1;
   }
  }
 } while(0);
 if ($tobool) {
  store4($src,$9);
 }
 STACKTOP = sp;return ($cnt$3|0);
}
function _mbsrtowcs($ws,$src,$wn,$st) {
 $ws = $ws|0;
 $src = $src|0;
 $wn = $wn|0;
 $st = $st|0;
 var $$pre = 0, $$pre$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr177 = 0, $add$ptr192 = 0, $add158 = 0, $and = 0, $and113 = 0;
 var $and33 = 0, $and33110 = 0, $and68 = 0, $and79 = 0, $arrayidx151 = 0, $arrayidx55 = 0, $c$2 = 0, $c$4 = 0, $c$5 = 0, $c$6 = 0, $call9 = 0, $cmp101 = 0, $cmp105 = 0, $cmp109 = 0, $cmp109$old = 0, $cmp134 = 0, $cmp144 = 0, $cmp174 = 0, $cmp189 = 0, $cmp26 = 0;
 var $cmp29 = 0, $cmp40 = 0, $cmp48 = 0, $cmp73 = 0, $cmp84 = 0, $conv118 = 0, $conv121 = 0, $conv124 = 0, $conv127 = 0, $conv132 = 0, $conv152 = 0, $conv172 = 0, $conv18 = 0, $conv187 = 0, $conv24 = 0, $conv38 = 0, $conv56 = 0, $conv99 = 0, $dec = 0, $dec140 = 0;
 var $dec202 = 0, $dec44 = 0, $dec92 = 0, $incdec$ptr = 0, $incdec$ptr117 = 0, $incdec$ptr119 = 0, $incdec$ptr120 = 0, $incdec$ptr122 = 0, $incdec$ptr123 = 0, $incdec$ptr125 = 0, $incdec$ptr126 = 0, $incdec$ptr128 = 0, $incdec$ptr137 = 0, $incdec$ptr139 = 0, $incdec$ptr148 = 0, $incdec$ptr163 = 0, $incdec$ptr165 = 0, $incdec$ptr180 = 0, $incdec$ptr19 = 0, $incdec$ptr195 = 0;
 var $incdec$ptr201 = 0, $incdec$ptr43 = 0, $incdec$ptr52 = 0, $incdec$ptr67 = 0, $incdec$ptr78 = 0, $incdec$ptr89 = 0, $lnot115 = 0, $lnot35 = 0, $lnot35111 = 0, $not$tobool4 = 0, $or = 0, $or$cond = 0, $or109 = 0, $or112 = 0, $or159 = 0, $or168 = 0, $or183 = 0, $or198 = 0, $or61 = 0, $rem = 0;
 var $rem104 = 0, $retval$0 = 0, $s$0$lcssa = 0, $s$0102 = 0, $s$1 = 0, $s$1$ph = 0, $s$10 = 0, $s$11126 = 0, $s$1194 = 0, $s$2113 = 0, $s$3 = 0, $s$4 = 0, $s$5 = 0, $s$6$lcssa = 0, $s$6$ph = 0, $s$6106 = 0, $s$7 = 0, $s$8 = 0, $s$9 = 0, $s$9$sink = 0;
 var $shl = 0, $shl179 = 0, $shl194 = 0, $shr15391 = 0, $shr157 = 0, $shr60 = 0, $shr90 = 0, $sub = 0, $sub100 = 0, $sub111 = 0, $sub129 = 0, $sub133 = 0, $sub143 = 0, $sub154 = 0, $sub167 = 0, $sub173 = 0, $sub188 = 0, $sub212 = 0, $sub25 = 0, $sub32 = 0;
 var $sub32108 = 0, $sub36 = 0, $sub39 = 0, $sub47 = 0, $sub57 = 0, $tobool = 0, $tobool1 = 0, $tobool11 = 0, $tobool1199 = 0, $tobool14 = 0, $tobool161 = 0, $tobool170 = 0, $tobool185 = 0, $tobool2 = 0, $tobool205 = 0, $tobool207 = 0, $tobool209 = 0, $tobool215 = 0, $tobool63 = 0, $tobool69 = 0;
 var $tobool7 = 0, $tobool80 = 0, $tobool96 = 0, $tobool96103 = 0, $wn$addr$0100 = 0, $wn$addr$1 = 0, $wn$addr$1$ph = 0, $wn$addr$2112 = 0, $wn$addr$3 = 0, $wn$addr$4 = 0, $wn$addr$5$ph = 0, $wn$addr$5104 = 0, $wn$addr$6 = 0, $wn$addr$7 = 0, $wn$addr$8 = 0, $wn$addr$9 = 0, $wn$addr$9124 = 0, $ws$addr$0101 = 0, $ws$addr$1$ph = 0, $ws$addr$1105 = 0;
 var $ws$addr$2 = 0, $ws$addr$3 = 0, $ws$addr$4 = 0, $ws$addr$5 = 0, $ws$addr$5125 = 0, $ws$addr$593 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($src);
 $tobool = ($st|0)==(0|0);
 if ($tobool) {
  label = 5;
 } else {
  $1 = load4($st);
  $tobool1 = ($1|0)==(0);
  if ($tobool1) {
   label = 5;
  } else {
   $tobool2 = ($ws|0)==(0|0);
   if ($tobool2) {
    $c$2 = $1;$s$4 = $0;$wn$addr$4 = $wn;
    label = 25;
   } else {
    store4($st,0);
    $c$4 = $1;$s$9 = $0;$wn$addr$8 = $wn;$ws$addr$4 = $ws;
    label = 43;
   }
  }
 }
 L5: do {
  if ((label|0) == 5) {
   $2 = load4(2864);
   $3 = load4($2);
   $not$tobool4 = ($3|0)==(0|0);
   $tobool7 = ($ws|0)!=(0|0);
   if (!($not$tobool4)) {
    if ($tobool7) {
     $s$6$ph = $0;$wn$addr$5$ph = $wn;$ws$addr$1$ph = $ws;
     label = 15;
     break;
    } else {
     $s$1$ph = $0;$wn$addr$1$ph = $wn;
     label = 14;
     break;
    }
   }
   if (!($tobool7)) {
    $call9 = (_strlen($0)|0);
    $retval$0 = $call9;
    label = 60;
    break;
   }
   $tobool1199 = ($wn|0)==(0);
   L13: do {
    if ($tobool1199) {
     $s$0$lcssa = $0;
    } else {
     $s$0102 = $0;$wn$addr$0100 = $wn;$ws$addr$0101 = $ws;
     while(1) {
      $4 = load1($s$0102);
      $tobool14 = ($4<<24>>24)==(0);
      if ($tobool14) {
       break;
      }
      $incdec$ptr = ((($s$0102)) + 1|0);
      $conv18 = $4 << 24 >> 24;
      $and = $conv18 & 57343;
      $incdec$ptr19 = ((($ws$addr$0101)) + 4|0);
      store4($ws$addr$0101,$and);
      $dec = (($wn$addr$0100) + -1)|0;
      $tobool11 = ($dec|0)==(0);
      if ($tobool11) {
       $s$0$lcssa = $incdec$ptr;
       break L13;
      } else {
       $s$0102 = $incdec$ptr;$wn$addr$0100 = $dec;$ws$addr$0101 = $incdec$ptr19;
      }
     }
     store4($ws$addr$0101,0);
     store4($src,0);
     $sub = (($wn) - ($wn$addr$0100))|0;
     $retval$0 = $sub;
     label = 60;
     break L5;
    }
   } while(0);
   store4($src,$s$0$lcssa);
   $retval$0 = $wn;
   label = 60;
  }
 } while(0);
 L19: while(1) {
  L20: do {
   if ((label|0) == 14) {
    label = 0;
    $s$1 = $s$1$ph;$wn$addr$1 = $wn$addr$1$ph;
    while(1) {
     $5 = load1($s$1);
     $conv24 = $5&255;
     $sub25 = (($conv24) + -1)|0;
     $cmp26 = ($sub25>>>0)<(127);
     if ($cmp26) {
      $6 = $s$1;
      $rem = $6 & 3;
      $cmp29 = ($rem|0)==(0);
      if ($cmp29) {
       $7 = load4($s$1);
       $sub32108 = (($7) + -16843009)|0;
       $or109 = $sub32108 | $7;
       $and33110 = $or109 & -2139062144;
       $lnot35111 = ($and33110|0)==(0);
       $8 = $7&255;
       if ($lnot35111) {
        $s$2113 = $s$1;$wn$addr$2112 = $wn$addr$1;
        while(1) {
         $add$ptr = ((($s$2113)) + 4|0);
         $sub36 = (($wn$addr$2112) + -4)|0;
         $9 = load4($add$ptr);
         $sub32 = (($9) + -16843009)|0;
         $or = $sub32 | $9;
         $and33 = $or & -2139062144;
         $lnot35 = ($and33|0)==(0);
         if ($lnot35) {
          $s$2113 = $add$ptr;$wn$addr$2112 = $sub36;
         } else {
          break;
         }
        }
        $10 = $9&255;
        $11 = $10;$s$3 = $add$ptr;$wn$addr$3 = $sub36;
       } else {
        $11 = $8;$s$3 = $s$1;$wn$addr$3 = $wn$addr$1;
       }
      } else {
       $11 = $5;$s$3 = $s$1;$wn$addr$3 = $wn$addr$1;
      }
     } else {
      $11 = $5;$s$3 = $s$1;$wn$addr$3 = $wn$addr$1;
     }
     $conv38 = $11&255;
     $sub39 = (($conv38) + -1)|0;
     $cmp40 = ($sub39>>>0)<(127);
     if (!($cmp40)) {
      break;
     }
     $incdec$ptr43 = ((($s$3)) + 1|0);
     $dec44 = (($wn$addr$3) + -1)|0;
     $s$1 = $incdec$ptr43;$wn$addr$1 = $dec44;
    }
    $sub47 = (($conv38) + -194)|0;
    $cmp48 = ($sub47>>>0)>(50);
    if ($cmp48) {
     $30 = $11;$s$11126 = $s$3;$wn$addr$9124 = $wn$addr$3;$ws$addr$5125 = $ws;
     label = 54;
    } else {
     $incdec$ptr52 = ((($s$3)) + 1|0);
     $arrayidx55 = (2208 + ($sub47<<2)|0);
     $12 = load4($arrayidx55);
     $c$2 = $12;$s$4 = $incdec$ptr52;$wn$addr$4 = $wn$addr$3;
     label = 25;
     continue L19;
    }
   }
   else if ((label|0) == 15) {
    label = 0;
    $tobool96103 = ($wn$addr$5$ph|0)==(0);
    L22: do {
     if ($tobool96103) {
      $s$6$lcssa = $s$6$ph;
     } else {
      $s$6106 = $s$6$ph;$wn$addr$5104 = $wn$addr$5$ph;$ws$addr$1105 = $ws$addr$1$ph;
      while(1) {
       $18 = load1($s$6106);
       $conv99 = $18&255;
       $sub100 = (($conv99) + -1)|0;
       $cmp101 = ($sub100>>>0)<(127);
       do {
        if ($cmp101) {
         $19 = $s$6106;
         $rem104 = $19 & 3;
         $cmp105 = ($rem104|0)==(0);
         $cmp109 = ($wn$addr$5104>>>0)>(4);
         $or$cond = $cmp109 & $cmp105;
         if ($or$cond) {
          $s$7 = $s$6106;$wn$addr$6 = $wn$addr$5104;$ws$addr$2 = $ws$addr$1105;
          while(1) {
           $20 = load4($s$7);
           $sub111 = (($20) + -16843009)|0;
           $or112 = $sub111 | $20;
           $and113 = $or112 & -2139062144;
           $lnot115 = ($and113|0)==(0);
           if (!($lnot115)) {
            label = 38;
            break;
           }
           $incdec$ptr117 = ((($s$7)) + 1|0);
           $conv118 = $20 & 255;
           $incdec$ptr119 = ((($ws$addr$2)) + 4|0);
           store4($ws$addr$2,$conv118);
           $incdec$ptr120 = ((($s$7)) + 2|0);
           $21 = load1($incdec$ptr117);
           $conv121 = $21&255;
           $incdec$ptr122 = ((($ws$addr$2)) + 8|0);
           store4($incdec$ptr119,$conv121);
           $incdec$ptr123 = ((($s$7)) + 3|0);
           $22 = load1($incdec$ptr120);
           $conv124 = $22&255;
           $incdec$ptr125 = ((($ws$addr$2)) + 12|0);
           store4($incdec$ptr122,$conv124);
           $incdec$ptr126 = ((($s$7)) + 4|0);
           $23 = load1($incdec$ptr123);
           $conv127 = $23&255;
           $incdec$ptr128 = ((($ws$addr$2)) + 16|0);
           store4($incdec$ptr125,$conv127);
           $sub129 = (($wn$addr$6) + -4)|0;
           $cmp109$old = ($sub129>>>0)>(4);
           if ($cmp109$old) {
            $s$7 = $incdec$ptr126;$wn$addr$6 = $sub129;$ws$addr$2 = $incdec$ptr128;
           } else {
            label = 37;
            break;
           }
          }
          if ((label|0) == 37) {
           label = 0;
           $$pre$pre = load1($incdec$ptr126);
           $25 = $$pre$pre;$s$8 = $incdec$ptr126;$wn$addr$7 = $sub129;$ws$addr$3 = $incdec$ptr128;
           break;
          }
          else if ((label|0) == 38) {
           label = 0;
           $24 = $20&255;
           $25 = $24;$s$8 = $s$7;$wn$addr$7 = $wn$addr$6;$ws$addr$3 = $ws$addr$2;
           break;
          }
         } else {
          $25 = $18;$s$8 = $s$6106;$wn$addr$7 = $wn$addr$5104;$ws$addr$3 = $ws$addr$1105;
         }
        } else {
         $25 = $18;$s$8 = $s$6106;$wn$addr$7 = $wn$addr$5104;$ws$addr$3 = $ws$addr$1105;
        }
       } while(0);
       $conv132 = $25&255;
       $sub133 = (($conv132) + -1)|0;
       $cmp134 = ($sub133>>>0)<(127);
       if (!($cmp134)) {
        break;
       }
       $incdec$ptr137 = ((($s$8)) + 1|0);
       $incdec$ptr139 = ((($ws$addr$3)) + 4|0);
       store4($ws$addr$3,$conv132);
       $dec140 = (($wn$addr$7) + -1)|0;
       $tobool96 = ($dec140|0)==(0);
       if ($tobool96) {
        $s$6$lcssa = $incdec$ptr137;
        break L22;
       } else {
        $s$6106 = $incdec$ptr137;$wn$addr$5104 = $dec140;$ws$addr$1105 = $incdec$ptr139;
       }
      }
      $sub143 = (($conv132) + -194)|0;
      $cmp144 = ($sub143>>>0)>(50);
      if ($cmp144) {
       $30 = $25;$s$11126 = $s$8;$wn$addr$9124 = $wn$addr$7;$ws$addr$5125 = $ws$addr$3;
       label = 54;
       break L20;
      }
      $incdec$ptr148 = ((($s$8)) + 1|0);
      $arrayidx151 = (2208 + ($sub143<<2)|0);
      $26 = load4($arrayidx151);
      $c$4 = $26;$s$9 = $incdec$ptr148;$wn$addr$8 = $wn$addr$7;$ws$addr$4 = $ws$addr$3;
      label = 43;
      continue L19;
     }
    } while(0);
    store4($src,$s$6$lcssa);
    $retval$0 = $wn;
    label = 60;
    continue L19;
   }
   else if ((label|0) == 25) {
    label = 0;
    $13 = load1($s$4);
    $conv56 = $13&255;
    $shr90 = $conv56 >>> 3;
    $sub57 = (($shr90) + -16)|0;
    $shr60 = $c$2 >> 26;
    $add = (($shr90) + ($shr60))|0;
    $or61 = $sub57 | $add;
    $tobool63 = ($or61>>>0)>(7);
    if ($tobool63) {
     $c$6 = $c$2;$s$9$sink = $s$4;$wn$addr$9 = $wn$addr$4;$ws$addr$5 = $ws;
     label = 52;
    } else {
     $incdec$ptr67 = ((($s$4)) + 1|0);
     $and68 = $c$2 & 33554432;
     $tobool69 = ($and68|0)==(0);
     if ($tobool69) {
      $s$5 = $incdec$ptr67;
     } else {
      $14 = load1($incdec$ptr67);
      $15 = $14 & -64;
      $cmp73 = ($15<<24>>24)==(-128);
      if (!($cmp73)) {
       $c$6 = $c$2;$s$9$sink = $s$4;$wn$addr$9 = $wn$addr$4;$ws$addr$5 = $ws;
       label = 52;
       break;
      }
      $incdec$ptr78 = ((($s$4)) + 2|0);
      $and79 = $c$2 & 524288;
      $tobool80 = ($and79|0)==(0);
      if ($tobool80) {
       $s$5 = $incdec$ptr78;
      } else {
       $16 = load1($incdec$ptr78);
       $17 = $16 & -64;
       $cmp84 = ($17<<24>>24)==(-128);
       if (!($cmp84)) {
        $c$6 = $c$2;$s$9$sink = $s$4;$wn$addr$9 = $wn$addr$4;$ws$addr$5 = $ws;
        label = 52;
        break;
       }
       $incdec$ptr89 = ((($s$4)) + 3|0);
       $s$5 = $incdec$ptr89;
      }
     }
     $dec92 = (($wn$addr$4) + -1)|0;
     $s$1$ph = $s$5;$wn$addr$1$ph = $dec92;
     label = 14;
     continue L19;
    }
   }
   else if ((label|0) == 43) {
    label = 0;
    $27 = load1($s$9);
    $conv152 = $27&255;
    $shr15391 = $conv152 >>> 3;
    $sub154 = (($shr15391) + -16)|0;
    $shr157 = $c$4 >> 26;
    $add158 = (($shr15391) + ($shr157))|0;
    $or159 = $sub154 | $add158;
    $tobool161 = ($or159>>>0)>(7);
    if ($tobool161) {
     $c$6 = $c$4;$s$9$sink = $s$9;$wn$addr$9 = $wn$addr$8;$ws$addr$5 = $ws$addr$4;
     label = 52;
    } else {
     $shl = $c$4 << 6;
     $incdec$ptr165 = ((($s$9)) + 1|0);
     $sub167 = (($conv152) + -128)|0;
     $or168 = $sub167 | $shl;
     $tobool170 = ($or168|0)<(0);
     do {
      if ($tobool170) {
       $28 = load1($incdec$ptr165);
       $conv172 = $28&255;
       $sub173 = (($conv172) + -128)|0;
       $cmp174 = ($sub173>>>0)>(63);
       if ($cmp174) {
        $add$ptr177 = ((($s$9)) + -1|0);
        $s$1194 = $add$ptr177;$ws$addr$593 = $ws$addr$4;
        break L20;
       }
       $shl179 = $or168 << 6;
       $incdec$ptr180 = ((($s$9)) + 2|0);
       $or183 = $sub173 | $shl179;
       $tobool185 = ($or183|0)<(0);
       if ($tobool185) {
        $29 = load1($incdec$ptr180);
        $conv187 = $29&255;
        $sub188 = (($conv187) + -128)|0;
        $cmp189 = ($sub188>>>0)>(63);
        if ($cmp189) {
         $add$ptr192 = ((($s$9)) + -1|0);
         $s$1194 = $add$ptr192;$ws$addr$593 = $ws$addr$4;
         break L20;
        } else {
         $shl194 = $or183 << 6;
         $incdec$ptr195 = ((($s$9)) + 3|0);
         $or198 = $sub188 | $shl194;
         $c$5 = $or198;$s$10 = $incdec$ptr195;
         break;
        }
       } else {
        $c$5 = $or183;$s$10 = $incdec$ptr180;
       }
      } else {
       $c$5 = $or168;$s$10 = $incdec$ptr165;
      }
     } while(0);
     $incdec$ptr201 = ((($ws$addr$4)) + 4|0);
     store4($ws$addr$4,$c$5);
     $dec202 = (($wn$addr$8) + -1)|0;
     $s$6$ph = $s$10;$wn$addr$5$ph = $dec202;$ws$addr$1$ph = $incdec$ptr201;
     label = 15;
     continue L19;
    }
   }
   else if ((label|0) == 60) {
    label = 0;
    return ($retval$0|0);
   }
  } while(0);
  if ((label|0) == 52) {
   label = 0;
   $incdec$ptr163 = ((($s$9$sink)) + -1|0);
   $tobool205 = ($c$6|0)==(0);
   if ($tobool205) {
    $$pre = load1($incdec$ptr163);
    $30 = $$pre;$s$11126 = $incdec$ptr163;$wn$addr$9124 = $wn$addr$9;$ws$addr$5125 = $ws$addr$5;
    label = 54;
   } else {
    $s$1194 = $incdec$ptr163;$ws$addr$593 = $ws$addr$5;
   }
  }
  if ((label|0) == 54) {
   label = 0;
   $tobool207 = ($30<<24>>24)==(0);
   if ($tobool207) {
    $tobool209 = ($ws$addr$5125|0)==(0|0);
    if (!($tobool209)) {
     store4($ws$addr$5125,0);
     store4($src,0);
    }
    $sub212 = (($wn) - ($wn$addr$9124))|0;
    $retval$0 = $sub212;
    label = 60;
    continue;
   } else {
    $s$1194 = $s$11126;$ws$addr$593 = $ws$addr$5125;
   }
  }
  store4(11324,84);
  $tobool215 = ($ws$addr$593|0)==(0|0);
  if ($tobool215) {
   $retval$0 = -1;
   label = 60;
   continue;
  }
  store4($src,$s$1194);
  $retval$0 = -1;
  label = 60;
 }
 return (0)|0;
}
function _wcsnrtombs($dst,$wcs,$wn,$n) {
 $dst = $dst|0;
 $wcs = $wcs|0;
 $wn = $wn|0;
 $n = $n|0;
 var $$cast = 0, $$incdec$ptr4$lcssa = 0, $$pr$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr = 0, $add$ptr33 = 0, $add15 = 0, $add25 = 0;
 var $add35 = 0, $buf = 0, $call = 0, $call24 = 0, $cmp = 0, $cmp11 = 0, $cmp26 = 0, $cmp3 = 0, $cnt$054 = 0, $cnt$1 = 0, $cnt$247 = 0, $cnt$247$lcssa$ = 0, $cnt$3 = 0, $dec = 0, $dst$arraydecay = 0, $incdec$ptr = 0, $incdec$ptr4 = 0, $n$ = 0, $n$addr$0$wn$addr$0 = 0, $n$addr$052 = 0;
 var $n$addr$1 = 0, $n$addr$2 = 0, $n$addr$345 = 0, $or$cond = 0, $or$cond51 = 0, $s$039 = 0, $s$055 = 0, $s$1 = 0, $s$248 = 0, $sub = 0, $sub13 = 0, $sub34 = 0, $tobool = 0, $tobool1 = 0, $tobool149 = 0, $tobool16 = 0, $tobool19 = 0, $tobool1943 = 0, $tobool2 = 0, $tobool21 = 0;
 var $tobool2144 = 0, $tobool250 = 0, $tobool28 = 0, $tobool7 = 0, $wn$addr$053 = 0, $wn$addr$1 = 0, $wn$addr$246 = 0, $ws = 0, $ws$promoted = 0, $ws$promoted11 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 272|0;
 $buf = sp + 8|0;
 $ws = sp;
 $0 = load4($wcs);
 store4($ws,$0);
 $tobool = ($dst|0)!=(0|0);
 $n$ = $tobool ? $n : 256;
 $dst$arraydecay = $tobool ? $dst : $buf;
 $$cast = $0;
 $tobool149 = ($0|0)!=(0);
 $tobool250 = ($n$|0)!=(0);
 $or$cond51 = $tobool250 & $tobool149;
 L1: do {
  if ($or$cond51) {
   $11 = $0;$cnt$054 = 0;$n$addr$052 = $n$;$s$055 = $dst$arraydecay;$wn$addr$053 = $wn;$ws$promoted11 = $$cast;
   while(1) {
    $cmp = ($wn$addr$053>>>0)>=($n$addr$052>>>0);
    $cmp3 = ($wn$addr$053>>>0)>(32);
    $1 = $cmp3 | $cmp;
    if (!($1)) {
     $12 = $11;$cnt$1 = $cnt$054;$n$addr$2 = $n$addr$052;$s$039 = $s$055;$wn$addr$1 = $wn$addr$053;$ws$promoted = $ws$promoted11;
     break L1;
    }
    $n$addr$0$wn$addr$0 = $cmp ? $n$addr$052 : $wn$addr$053;
    $sub = (($wn$addr$053) - ($n$addr$0$wn$addr$0))|0;
    $call = (_wcsrtombs($s$055,$ws,$n$addr$0$wn$addr$0)|0);
    $tobool7 = ($call|0)==(-1);
    if ($tobool7) {
     break;
    }
    $cmp11 = ($s$055|0)==($buf|0);
    $add$ptr = (($s$055) + ($call)|0);
    $sub13 = $cmp11 ? 0 : $call;
    $n$addr$1 = (($n$addr$052) - ($sub13))|0;
    $s$1 = $cmp11 ? $s$055 : $add$ptr;
    $add15 = (($call) + ($cnt$054))|0;
    $3 = load4($ws);
    $tobool1 = ($3|0)!=(0|0);
    $tobool2 = ($n$addr$1|0)!=(0);
    $or$cond = $tobool2 & $tobool1;
    $4 = $3;
    if ($or$cond) {
     $11 = $4;$cnt$054 = $add15;$n$addr$052 = $n$addr$1;$s$055 = $s$1;$wn$addr$053 = $sub;$ws$promoted11 = $3;
    } else {
     $12 = $4;$cnt$1 = $add15;$n$addr$2 = $n$addr$1;$s$039 = $s$1;$wn$addr$1 = $sub;$ws$promoted = $3;
     break L1;
    }
   }
   $$pr$pre = load4($ws);
   $2 = $$pr$pre;
   $12 = $2;$cnt$1 = -1;$n$addr$2 = 0;$s$039 = $s$055;$wn$addr$1 = $sub;$ws$promoted = $$pr$pre;
  } else {
   $12 = $0;$cnt$1 = 0;$n$addr$2 = $n$;$s$039 = $dst$arraydecay;$wn$addr$1 = $wn;$ws$promoted = $$cast;
  }
 } while(0);
 $tobool16 = ($ws$promoted|0)==(0|0);
 do {
  if ($tobool16) {
   $10 = $12;$cnt$3 = $cnt$1;
  } else {
   $tobool1943 = ($n$addr$2|0)!=(0);
   $tobool2144 = ($wn$addr$1|0)!=(0);
   $5 = $tobool1943 & $tobool2144;
   if ($5) {
    $cnt$247 = $cnt$1;$incdec$ptr4 = $ws$promoted;$n$addr$345 = $n$addr$2;$s$248 = $s$039;$wn$addr$246 = $wn$addr$1;
    while(1) {
     $6 = load4($incdec$ptr4);
     $call24 = (_wcrtomb($s$248,$6)|0);
     $add25 = (($call24) + 1)|0;
     $cmp26 = ($add25>>>0)<(2);
     if ($cmp26) {
      label = 9;
      break;
     }
     $incdec$ptr = ((($incdec$ptr4)) + 4|0);
     $dec = (($wn$addr$246) + -1)|0;
     $add$ptr33 = (($s$248) + ($call24)|0);
     $sub34 = (($n$addr$345) - ($call24))|0;
     $add35 = (($call24) + ($cnt$247))|0;
     $tobool19 = ($sub34|0)!=(0);
     $tobool21 = ($dec|0)!=(0);
     $8 = $tobool21 & $tobool19;
     if ($8) {
      $cnt$247 = $add35;$incdec$ptr4 = $incdec$ptr;$n$addr$345 = $sub34;$s$248 = $add$ptr33;$wn$addr$246 = $dec;
     } else {
      label = 11;
      break;
     }
    }
    if ((label|0) == 9) {
     $tobool28 = ($call24|0)==(0);
     $$incdec$ptr4$lcssa = $tobool28 ? 0 : $incdec$ptr4;
     store4($ws,$$incdec$ptr4$lcssa);
     $cnt$247$lcssa$ = $tobool28 ? $cnt$247 : -1;
     $7 = $$incdec$ptr4$lcssa;
     $10 = $7;$cnt$3 = $cnt$247$lcssa$;
     break;
    }
    else if ((label|0) == 11) {
     store4($ws,$incdec$ptr);
     $9 = $incdec$ptr;
     $10 = $9;$cnt$3 = $add35;
     break;
    }
   } else {
    $10 = $12;$cnt$3 = $cnt$1;
   }
  }
 } while(0);
 if ($tobool) {
  store4($wcs,$10);
 }
 STACKTOP = sp;return ($cnt$3|0);
}
function _wcsrtombs($s,$ws,$n) {
 $s = $s|0;
 $ws = $ws|0;
 $n = $n|0;
 var $$pre = 0, $$pre85 = 0, $$pre86 = 0, $$pre87 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr = 0, $add$ptr48 = 0, $buf = 0, $call = 0, $call$pn = 0;
 var $call15 = 0, $call37 = 0, $cmp = 0, $cmp29 = 0, $cmp42 = 0, $cmp8 = 0, $cmp869 = 0, $cmp9 = 0, $conv = 0, $conv51 = 0, $dec = 0, $dec53 = 0, $incdec$ptr = 0, $incdec$ptr22 = 0, $incdec$ptr24 = 0, $incdec$ptr52 = 0, $incdec$ptr55 = 0, $n$addr$061 = 0, $n$addr$1 = 0, $n$addr$2$lcssa = 0;
 var $n$addr$270 = 0, $n$addr$3 = 0, $n$addr$465 = 0, $n$addr$5 = 0, $retval$0 = 0, $s$addr$0$lcssa = 0, $s$addr$071 = 0, $s$addr$1 = 0, $s$addr$266 = 0, $s$addr$3 = 0, $sub = 0, $sub13 = 0, $sub20 = 0, $sub28 = 0, $sub34 = 0, $sub45 = 0, $sub49 = 0, $tobool = 0, $tobool1 = 0, $tobool11 = 0;
 var $tobool160 = 0, $tobool17 = 0, $tobool26 = 0, $tobool2664 = 0, $tobool3 = 0, $tobool32 = 0, $tobool39 = 0, $ws2$062 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $buf = sp;
 $tobool = ($s|0)==(0|0);
 L1: do {
  if ($tobool) {
   $0 = load4($ws);
   $1 = load4($0);
   $tobool160 = ($1|0)==(0);
   if ($tobool160) {
    $retval$0 = 0;
   } else {
    $2 = $1;$n$addr$061 = 0;$ws2$062 = $0;
    while(1) {
     $cmp = ($2>>>0)>(127);
     if ($cmp) {
      $call = (_wcrtomb($buf,$2)|0);
      $tobool3 = ($call|0)==(-1);
      if ($tobool3) {
       $retval$0 = -1;
       break L1;
      } else {
       $call$pn = $call;
      }
     } else {
      $call$pn = 1;
     }
     $n$addr$1 = (($call$pn) + ($n$addr$061))|0;
     $incdec$ptr = ((($ws2$062)) + 4|0);
     $3 = load4($incdec$ptr);
     $tobool1 = ($3|0)==(0);
     if ($tobool1) {
      $retval$0 = $n$addr$1;
      break;
     } else {
      $2 = $3;$n$addr$061 = $n$addr$1;$ws2$062 = $incdec$ptr;
     }
    }
   }
  } else {
   $cmp869 = ($n>>>0)>(3);
   L9: do {
    if ($cmp869) {
     $$pre = load4($ws);
     $5 = $$pre;$n$addr$270 = $n;$s$addr$071 = $s;
     while(1) {
      $4 = load4($5);
      $sub = (($4) + -1)|0;
      $cmp9 = ($sub>>>0)>(126);
      if ($cmp9) {
       $tobool11 = ($4|0)==(0);
       if ($tobool11) {
        break;
       }
       $call15 = (_wcrtomb($s$addr$071,$4)|0);
       $tobool17 = ($call15|0)==(-1);
       if ($tobool17) {
        $retval$0 = -1;
        break L1;
       }
       $add$ptr = (($s$addr$071) + ($call15)|0);
       $sub20 = (($n$addr$270) - ($call15))|0;
       $6 = $5;$n$addr$3 = $sub20;$s$addr$1 = $add$ptr;
      } else {
       $conv = $4&255;
       $incdec$ptr22 = ((($s$addr$071)) + 1|0);
       store1($s$addr$071,$conv);
       $dec = (($n$addr$270) + -1)|0;
       $$pre85 = load4($ws);
       $6 = $$pre85;$n$addr$3 = $dec;$s$addr$1 = $incdec$ptr22;
      }
      $incdec$ptr24 = ((($6)) + 4|0);
      store4($ws,$incdec$ptr24);
      $cmp8 = ($n$addr$3>>>0)>(3);
      if ($cmp8) {
       $5 = $incdec$ptr24;$n$addr$270 = $n$addr$3;$s$addr$071 = $s$addr$1;
      } else {
       $n$addr$2$lcssa = $n$addr$3;$s$addr$0$lcssa = $s$addr$1;
       break L9;
      }
     }
     store1($s$addr$071,0);
     store4($ws,0);
     $sub13 = (($n) - ($n$addr$270))|0;
     $retval$0 = $sub13;
     break L1;
    } else {
     $n$addr$2$lcssa = $n;$s$addr$0$lcssa = $s;
    }
   } while(0);
   $tobool2664 = ($n$addr$2$lcssa|0)==(0);
   if ($tobool2664) {
    $retval$0 = $n;
   } else {
    $$pre86 = load4($ws);
    $8 = $$pre86;$n$addr$465 = $n$addr$2$lcssa;$s$addr$266 = $s$addr$0$lcssa;
    while(1) {
     $7 = load4($8);
     $sub28 = (($7) + -1)|0;
     $cmp29 = ($sub28>>>0)>(126);
     if ($cmp29) {
      $tobool32 = ($7|0)==(0);
      if ($tobool32) {
       label = 19;
       break;
      }
      $call37 = (_wcrtomb($buf,$7)|0);
      $tobool39 = ($call37|0)==(-1);
      if ($tobool39) {
       $retval$0 = -1;
       break L1;
      }
      $cmp42 = ($n$addr$465>>>0)<($call37>>>0);
      if ($cmp42) {
       label = 22;
       break;
      }
      $9 = load4($8);
      (_wcrtomb($s$addr$266,$9)|0);
      $add$ptr48 = (($s$addr$266) + ($call37)|0);
      $sub49 = (($n$addr$465) - ($call37))|0;
      $10 = $8;$n$addr$5 = $sub49;$s$addr$3 = $add$ptr48;
     } else {
      $conv51 = $7&255;
      $incdec$ptr52 = ((($s$addr$266)) + 1|0);
      store1($s$addr$266,$conv51);
      $dec53 = (($n$addr$465) + -1)|0;
      $$pre87 = load4($ws);
      $10 = $$pre87;$n$addr$5 = $dec53;$s$addr$3 = $incdec$ptr52;
     }
     $incdec$ptr55 = ((($10)) + 4|0);
     store4($ws,$incdec$ptr55);
     $tobool26 = ($n$addr$5|0)==(0);
     if ($tobool26) {
      $retval$0 = $n;
      break L1;
     } else {
      $8 = $incdec$ptr55;$n$addr$465 = $n$addr$5;$s$addr$266 = $s$addr$3;
     }
    }
    if ((label|0) == 19) {
     store1($s$addr$266,0);
     store4($ws,0);
     $sub34 = (($n) - ($n$addr$465))|0;
     $retval$0 = $sub34;
     break;
    }
    else if ((label|0) == 22) {
     $sub45 = (($n) - ($n$addr$465))|0;
     $retval$0 = $sub45;
     break;
    }
   }
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function _fputc() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $cmp = 0, $cmp20 = 0, $cmp3 = 0, $cmp5 = 0, $incdec$ptr = 0, $incdec$ptr25 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4((2488));
 $cmp = ($0|0)<(0);
 $1 = load1((2487));
 $cmp3 = ($1<<24>>24)==(10);
 do {
  if ($cmp) {
   if (!($cmp3)) {
    $2 = load4((2432));
    $3 = load4((2428));
    $cmp5 = ($2>>>0)<($3>>>0);
    if ($cmp5) {
     $incdec$ptr = ((($2)) + 1|0);
     store4((2432),$incdec$ptr);
     store1($2,10);
     break;
    }
   }
   (___overflow()|0);
  } else {
   if (!($cmp3)) {
    $4 = load4((2432));
    $5 = load4((2428));
    $cmp20 = ($4>>>0)<($5>>>0);
    if ($cmp20) {
     $incdec$ptr25 = ((($4)) + 1|0);
     store4((2432),$incdec$ptr25);
     store1($4,10);
     break;
    }
   }
   (___overflow()|0);
  }
 } while(0);
 return;
}
function __ZNSt3__26locale5facet16__on_zero_sharedEv($this) {
 $this = $this|0;
 var $0 = 0, $isnull = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $isnull = ($this|0)==(0|0);
 if (!($isnull)) {
  $vtable = load4($this);
  $vfn = ((($vtable)) + 4|0);
  $0 = load4($vfn);
  FUNCTION_TABLE_vi[$0 & 31]($this);
 }
 return;
}
function __ZNSt3__211char_traitsIcE6assignERcRKc($__c1,$__c2$val) {
 $__c1 = $__c1|0;
 $__c2$val = $__c2$val|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 store1($__c1,$__c2$val);
 return;
}
function __ZNSt3__211char_traitsIwE6assignERwRKw($__c1,$__c2$val) {
 $__c1 = $__c1|0;
 $__c2$val = $__c2$val|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 store4($__c1,$__c2$val);
 return;
}
function __ZNSt3__26__clocEv() {
 var $0 = 0, $1 = 0, $2 = 0, $call = 0, $guard$uninitialized = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load1(10688);
 $guard$uninitialized = ($0<<24>>24)==(0);
 if ($guard$uninitialized) {
  $1 = (___cxa_guard_acquire()|0);
  $tobool = ($1|0)==(0);
  if (!($tobool)) {
   $call = (___newlocale(2147483647,9233,0)|0);
   store4(11308,$call);
  }
 }
 $2 = load4(11308);
 return ($2|0);
}
function __ZNSt3__211char_traitsIcE6lengthEPKc($__s) {
 $__s = $__s|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_strlen($__s)|0);
 return ($call|0);
}
function __ZNSt3__2L19utf8_to_ucs4_lengthEPKhS1_jmNS_12codecvt_modeE($frm,$frm_end,$mx,$Maxcode,$mode) {
 $frm = $frm|0;
 $frm_end = $frm_end|0;
 $mx = $mx|0;
 $Maxcode = $Maxcode|0;
 $mode = $mode|0;
 var $$off = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr = 0, $add$ptr$frm = 0, $add$ptr103 = 0, $add$ptr177 = 0, $add$ptr46 = 0, $and = 0, $and134 = 0, $and143 = 0;
 var $and152 = 0, $and156 = 0, $and161 = 0, $and164 = 0, $and168 = 0, $and172 = 0, $and34 = 0, $and39 = 0, $and42 = 0, $and61 = 0, $and78 = 0, $and86 = 0, $and91 = 0, $and94 = 0, $and98 = 0, $arrayidx3 = 0, $arrayidx7 = 0, $cmp = 0, $cmp1 = 0, $cmp100 = 0;
 var $cmp107 = 0, $cmp112 = 0, $cmp12 = 0, $cmp121 = 0, $cmp13 = 0, $cmp132 = 0, $cmp135 = 0, $cmp144 = 0, $cmp15 = 0, $cmp153 = 0, $cmp157 = 0, $cmp174 = 0, $cmp18 = 0, $cmp22 = 0, $cmp26 = 0, $cmp31 = 0, $cmp35 = 0, $cmp43 = 0, $cmp49 = 0, $cmp5 = 0;
 var $cmp54 = 0, $cmp62 = 0, $cmp71 = 0, $cmp79 = 0, $cmp87 = 0, $cmp9 = 0, $conv14 = 0, $conv142 = 0, $conv151 = 0, $conv155 = 0, $conv33 = 0, $conv77 = 0, $conv85 = 0, $frm_nxt$1$ph = 0, $frm_nxt$16 = 0, $frm_nxt$4 = 0, $inc = 0, $incdec$ptr = 0, $nchar32_t$05 = 0, $or = 0;
 var $or$cond = 0, $or$cond70 = 0, $or$cond703 = 0, $or$cond72 = 0, $or166 = 0, $or170 = 0, $or173 = 0, $or96 = 0, $or99 = 0, $shl = 0, $shl162 = 0, $shl165 = 0, $shl169 = 0, $shl92 = 0, $shl95 = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast19478 = 0, $sub$ptr$lhs$cast19478$lcssa = 0, $sub$ptr$lhs$cast194784 = 0, $sub$ptr$lhs$cast194787 = 0;
 var $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $sub$ptr$sub30 = 0, $sub$ptr$sub83$le = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $and = $mode & 4;
 $tobool = ($and|0)!=(0);
 $sub$ptr$lhs$cast = $frm_end;
 $sub$ptr$rhs$cast = $frm;
 $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
 $cmp = ($sub$ptr$sub|0)>(2);
 $or$cond = $cmp & $tobool;
 if ($or$cond) {
  $0 = load1($frm);
  $cmp1 = ($0<<24>>24)==(-17);
  if ($cmp1) {
   $arrayidx3 = ((($frm)) + 1|0);
   $1 = load1($arrayidx3);
   $cmp5 = ($1<<24>>24)==(-69);
   if ($cmp5) {
    $arrayidx7 = ((($frm)) + 2|0);
    $2 = load1($arrayidx7);
    $cmp9 = ($2<<24>>24)==(-65);
    $add$ptr = ((($frm)) + 3|0);
    $add$ptr$frm = $cmp9 ? $add$ptr : $frm;
    $frm_nxt$1$ph = $add$ptr$frm;
   } else {
    $frm_nxt$1$ph = $frm;
   }
  } else {
   $frm_nxt$1$ph = $frm;
  }
 } else {
  $frm_nxt$1$ph = $frm;
 }
 $cmp121 = ($frm_nxt$1$ph>>>0)<($frm_end>>>0);
 $cmp132 = ($mx|0)!=(0);
 $or$cond703 = $cmp132 & $cmp121;
 $sub$ptr$lhs$cast194784 = $frm_nxt$1$ph;
 L6: do {
  if ($or$cond703) {
   $frm_nxt$16 = $frm_nxt$1$ph;$nchar32_t$05 = 0;$sub$ptr$lhs$cast194787 = $sub$ptr$lhs$cast194784;
   while(1) {
    $3 = load1($frm_nxt$16);
    $conv14 = $3&255;
    $cmp15 = ($3<<24>>24)>(-1);
    $incdec$ptr = ((($frm_nxt$16)) + 1|0);
    do {
     if ($cmp15) {
      $cmp18 = ($conv14>>>0)>($Maxcode>>>0);
      if ($cmp18) {
       $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
       break L6;
      } else {
       $frm_nxt$4 = $incdec$ptr;
      }
     } else {
      $cmp22 = ($3&255)<(194);
      if ($cmp22) {
       $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
       break L6;
      }
      $cmp26 = ($3&255)<(224);
      $add$ptr46 = ((($frm_nxt$16)) + 2|0);
      $sub$ptr$sub30 = (($sub$ptr$lhs$cast) - ($sub$ptr$lhs$cast194787))|0;
      if ($cmp26) {
       $cmp31 = ($sub$ptr$sub30|0)<(2);
       if ($cmp31) {
        $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
        break L6;
       }
       $4 = load1($incdec$ptr);
       $conv33 = $4&255;
       $and34 = $conv33 & 192;
       $cmp35 = ($and34|0)==(128);
       if (!($cmp35)) {
        $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
        break L6;
       }
       $and39 = $conv14 << 6;
       $shl = $and39 & 1984;
       $and42 = $conv33 & 63;
       $or = $and42 | $shl;
       $cmp43 = ($or>>>0)>($Maxcode>>>0);
       if ($cmp43) {
        $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
        break L6;
       } else {
        $frm_nxt$4 = $add$ptr46;
        break;
       }
      }
      $cmp49 = ($3&255)<(240);
      $add$ptr103 = ((($frm_nxt$16)) + 3|0);
      if ($cmp49) {
       $cmp54 = ($sub$ptr$sub30|0)<(3);
       if ($cmp54) {
        $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
        break L6;
       }
       $5 = load1($incdec$ptr);
       $6 = load1($add$ptr46);
       $conv77 = $5&255;
       $and61 = $conv77 & 224;
       switch ($3<<24>>24) {
       case -32:  {
        $cmp62 = ($and61|0)==(160);
        if (!($cmp62)) {
         $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
         break L6;
        }
        break;
       }
       case -19:  {
        $cmp71 = ($and61|0)==(128);
        if (!($cmp71)) {
         $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
         break L6;
        }
        break;
       }
       default: {
        $and78 = $conv77 & 192;
        $cmp79 = ($and78|0)==(128);
        if (!($cmp79)) {
         $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
         break L6;
        }
       }
       }
       $conv85 = $6&255;
       $and86 = $conv85 & 192;
       $cmp87 = ($and86|0)==(128);
       if (!($cmp87)) {
        $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
        break L6;
       }
       $and91 = $conv14 << 12;
       $shl92 = $and91 & 61440;
       $and94 = $conv77 << 6;
       $shl95 = $and94 & 4032;
       $or96 = $shl95 | $shl92;
       $and98 = $conv85 & 63;
       $or99 = $or96 | $and98;
       $cmp100 = ($or99>>>0)>($Maxcode>>>0);
       if ($cmp100) {
        $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
        break L6;
       } else {
        $frm_nxt$4 = $add$ptr103;
        break;
       }
      }
      $cmp107 = ($3&255)>(244);
      $cmp112 = ($sub$ptr$sub30|0)<(4);
      $or$cond72 = $cmp112 | $cmp107;
      if ($or$cond72) {
       $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
       break L6;
      }
      $7 = load1($incdec$ptr);
      $8 = load1($add$ptr46);
      $9 = load1($add$ptr103);
      $conv142 = $7&255;
      switch ($3<<24>>24) {
      case -16:  {
       $$off = (($7) + 112)<<24>>24;
       $10 = ($$off&255)<(48);
       if (!($10)) {
        $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
        break L6;
       }
       break;
      }
      case -12:  {
       $and134 = $conv142 & 240;
       $cmp135 = ($and134|0)==(128);
       if (!($cmp135)) {
        $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
        break L6;
       }
       break;
      }
      default: {
       $and143 = $conv142 & 192;
       $cmp144 = ($and143|0)==(128);
       if (!($cmp144)) {
        $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
        break L6;
       }
      }
      }
      $conv151 = $8&255;
      $and152 = $conv151 & 192;
      $cmp153 = ($and152|0)==(128);
      if (!($cmp153)) {
       $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
       break L6;
      }
      $conv155 = $9&255;
      $and156 = $conv155 & 192;
      $cmp157 = ($and156|0)==(128);
      if (!($cmp157)) {
       $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
       break L6;
      }
      $and161 = $conv14 << 18;
      $shl162 = $and161 & 1835008;
      $and164 = $conv142 << 12;
      $shl165 = $and164 & 258048;
      $or166 = $shl165 | $shl162;
      $and168 = $conv151 << 6;
      $shl169 = $and168 & 4032;
      $or170 = $or166 | $shl169;
      $and172 = $conv155 & 63;
      $or173 = $or170 | $and172;
      $cmp174 = ($or173>>>0)>($Maxcode>>>0);
      $add$ptr177 = ((($frm_nxt$16)) + 4|0);
      if ($cmp174) {
       $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194787;
       break L6;
      } else {
       $frm_nxt$4 = $add$ptr177;
      }
     }
    } while(0);
    $inc = (($nchar32_t$05) + 1)|0;
    $cmp12 = ($frm_nxt$4>>>0)<($frm_end>>>0);
    $cmp13 = ($inc>>>0)<($mx>>>0);
    $or$cond70 = $cmp13 & $cmp12;
    $sub$ptr$lhs$cast19478 = $frm_nxt$4;
    if ($or$cond70) {
     $frm_nxt$16 = $frm_nxt$4;$nchar32_t$05 = $inc;$sub$ptr$lhs$cast194787 = $sub$ptr$lhs$cast19478;
    } else {
     $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast19478;
     break;
    }
   }
  } else {
   $sub$ptr$lhs$cast19478$lcssa = $sub$ptr$lhs$cast194784;
  }
 } while(0);
 $sub$ptr$sub83$le = (($sub$ptr$lhs$cast19478$lcssa) - ($sub$ptr$rhs$cast))|0;
 return ($sub$ptr$sub83$le|0);
}
function __ZNSt3__2L12utf8_to_ucs4EPKhS1_RS1_PjS3_RS3_mNS_12codecvt_modeE($frm,$frm_end,$frm_nxt,$to,$to_end,$to_nxt,$Maxcode,$mode) {
 $frm = $frm|0;
 $frm_end = $frm_end|0;
 $frm_nxt = $frm_nxt|0;
 $to = $to|0;
 $to_end = $to_end|0;
 $to_nxt = $to_nxt|0;
 $Maxcode = $Maxcode|0;
 $mode = $mode|0;
 var $$off = 0, $$pre = 0, $$pre22 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr = 0;
 var $add$ptr168 = 0, $add$ptr168$sink = 0, $add$ptr48 = 0, $add$ptr99 = 0, $and = 0, $and131 = 0, $and137 = 0, $and143 = 0, $and146 = 0, $and152 = 0, $and155 = 0, $and159 = 0, $and163 = 0, $and37 = 0, $and42 = 0, $and44 = 0, $and65 = 0, $and76 = 0, $and81 = 0, $and87 = 0;
 var $and90 = 0, $and94 = 0, $arrayidx3 = 0, $arrayidx7 = 0, $cmp = 0, $cmp1 = 0, $cmp107 = 0, $cmp112 = 0, $cmp12 = 0, $cmp121 = 0, $cmp13 = 0, $cmp132 = 0, $cmp138 = 0, $cmp144 = 0, $cmp147 = 0, $cmp15 = 0, $cmp165 = 0, $cmp18 = 0, $cmp23 = 0, $cmp27 = 0;
 var $cmp32 = 0, $cmp38 = 0, $cmp45 = 0, $cmp5 = 0, $cmp52 = 0, $cmp57 = 0, $cmp66 = 0, $cmp72 = 0, $cmp77 = 0, $cmp82 = 0, $cmp9 = 0, $cmp96 = 0, $conv136 = 0, $conv14 = 0, $conv142 = 0, $conv145 = 0, $conv36 = 0, $conv75 = 0, $conv80 = 0, $incdec$ptr = 0;
 var $incdec$ptr184 = 0, $or = 0, $or157 = 0, $or161 = 0, $or164 = 0, $or92 = 0, $or95 = 0, $retval$9 = 0, $shl = 0, $shl153 = 0, $shl156 = 0, $shl160 = 0, $shl88 = 0, $shl91 = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast30 = 0, $sub$ptr$sub = 0, $sub$ptr$sub31 = 0, $tobool = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 store4($frm_nxt,$frm);
 store4($to_nxt,$to);
 $and = $mode & 4;
 $tobool = ($and|0)==(0);
 $sub$ptr$lhs$cast = $frm_end;
 $$pre = load4($frm_nxt);
 if ($tobool) {
  $3 = $$pre;
 } else {
  $sub$ptr$rhs$cast = $$pre;
  $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
  $cmp = ($sub$ptr$sub|0)>(2);
  if ($cmp) {
   $0 = load1($$pre);
   $cmp1 = ($0<<24>>24)==(-17);
   if ($cmp1) {
    $arrayidx3 = ((($$pre)) + 1|0);
    $1 = load1($arrayidx3);
    $cmp5 = ($1<<24>>24)==(-69);
    if ($cmp5) {
     $arrayidx7 = ((($$pre)) + 2|0);
     $2 = load1($arrayidx7);
     $cmp9 = ($2<<24>>24)==(-65);
     if ($cmp9) {
      $add$ptr = ((($$pre)) + 3|0);
      store4($frm_nxt,$add$ptr);
      $3 = $add$ptr;
     } else {
      $3 = $$pre;
     }
    } else {
     $3 = $$pre;
    }
   } else {
    $3 = $$pre;
   }
  } else {
   $3 = $$pre;
  }
 }
 $cmp121 = ($3>>>0)<($frm_end>>>0);
 L8: do {
  if ($cmp121) {
   $$pre22 = load4($to_nxt);
   $4 = $$pre22;$6 = $3;
   while(1) {
    $cmp13 = ($4>>>0)<($to_end>>>0);
    if (!($cmp13)) {
     $retval$9 = 1;
     break L8;
    }
    $5 = load1($6);
    $conv14 = $5&255;
    $cmp15 = ($5<<24>>24)>(-1);
    $incdec$ptr = ((($6)) + 1|0);
    do {
     if ($cmp15) {
      $cmp18 = ($conv14>>>0)>($Maxcode>>>0);
      if ($cmp18) {
       $retval$9 = 2;
       break L8;
      }
      store4($4,$conv14);
      $add$ptr168$sink = $incdec$ptr;
     } else {
      $cmp23 = ($5&255)<(194);
      if ($cmp23) {
       $retval$9 = 2;
       break L8;
      }
      $cmp27 = ($5&255)<(224);
      $sub$ptr$rhs$cast30 = $6;
      $add$ptr48 = ((($6)) + 2|0);
      $sub$ptr$sub31 = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast30))|0;
      if ($cmp27) {
       $cmp32 = ($sub$ptr$sub31|0)<(2);
       if ($cmp32) {
        $retval$9 = 1;
        break L8;
       }
       $7 = load1($incdec$ptr);
       $conv36 = $7&255;
       $and37 = $conv36 & 192;
       $cmp38 = ($and37|0)==(128);
       if (!($cmp38)) {
        $retval$9 = 2;
        break L8;
       }
       $and42 = $conv14 << 6;
       $shl = $and42 & 1984;
       $and44 = $conv36 & 63;
       $or = $and44 | $shl;
       $cmp45 = ($or>>>0)>($Maxcode>>>0);
       if ($cmp45) {
        $retval$9 = 2;
        break L8;
       }
       store4($4,$or);
       $add$ptr168$sink = $add$ptr48;
       break;
      }
      $cmp52 = ($5&255)<(240);
      $add$ptr99 = ((($6)) + 3|0);
      if ($cmp52) {
       $cmp57 = ($sub$ptr$sub31|0)<(3);
       if ($cmp57) {
        $retval$9 = 1;
        break L8;
       }
       $8 = load1($incdec$ptr);
       $9 = load1($add$ptr48);
       $conv75 = $8&255;
       $and65 = $conv75 & 224;
       switch ($5<<24>>24) {
       case -32:  {
        $cmp66 = ($and65|0)==(160);
        if (!($cmp66)) {
         $retval$9 = 2;
         break L8;
        }
        break;
       }
       case -19:  {
        $cmp72 = ($and65|0)==(128);
        if (!($cmp72)) {
         $retval$9 = 2;
         break L8;
        }
        break;
       }
       default: {
        $and76 = $conv75 & 192;
        $cmp77 = ($and76|0)==(128);
        if (!($cmp77)) {
         $retval$9 = 2;
         break L8;
        }
       }
       }
       $conv80 = $9&255;
       $and81 = $conv80 & 192;
       $cmp82 = ($and81|0)==(128);
       if (!($cmp82)) {
        $retval$9 = 2;
        break L8;
       }
       $and87 = $conv14 << 12;
       $shl88 = $and87 & 61440;
       $and90 = $conv75 << 6;
       $shl91 = $and90 & 4032;
       $or92 = $shl91 | $shl88;
       $and94 = $conv80 & 63;
       $or95 = $or92 | $and94;
       $cmp96 = ($or95>>>0)>($Maxcode>>>0);
       if ($cmp96) {
        $retval$9 = 2;
        break L8;
       }
       store4($4,$or95);
       $add$ptr168$sink = $add$ptr99;
       break;
      }
      $cmp107 = ($5&255)<(245);
      if (!($cmp107)) {
       $retval$9 = 2;
       break L8;
      }
      $cmp112 = ($sub$ptr$sub31|0)<(4);
      if ($cmp112) {
       $retval$9 = 1;
       break L8;
      }
      $10 = load1($incdec$ptr);
      $11 = load1($add$ptr48);
      $12 = load1($add$ptr99);
      $conv136 = $10&255;
      switch ($5<<24>>24) {
      case -16:  {
       $$off = (($10) + 112)<<24>>24;
       $13 = ($$off&255)<(48);
       if (!($13)) {
        $retval$9 = 2;
        break L8;
       }
       break;
      }
      case -12:  {
       $and131 = $conv136 & 240;
       $cmp132 = ($and131|0)==(128);
       if (!($cmp132)) {
        $retval$9 = 2;
        break L8;
       }
       break;
      }
      default: {
       $and137 = $conv136 & 192;
       $cmp138 = ($and137|0)==(128);
       if (!($cmp138)) {
        $retval$9 = 2;
        break L8;
       }
      }
      }
      $conv142 = $11&255;
      $and143 = $conv142 & 192;
      $cmp144 = ($and143|0)==(128);
      if (!($cmp144)) {
       $retval$9 = 2;
       break L8;
      }
      $conv145 = $12&255;
      $and146 = $conv145 & 192;
      $cmp147 = ($and146|0)==(128);
      if (!($cmp147)) {
       $retval$9 = 2;
       break L8;
      }
      $and152 = $conv14 << 18;
      $shl153 = $and152 & 1835008;
      $and155 = $conv136 << 12;
      $shl156 = $and155 & 258048;
      $or157 = $shl156 | $shl153;
      $and159 = $conv142 << 6;
      $shl160 = $and159 & 4032;
      $or161 = $or157 | $shl160;
      $and163 = $conv145 & 63;
      $or164 = $or161 | $and163;
      $cmp165 = ($or164>>>0)>($Maxcode>>>0);
      if ($cmp165) {
       $retval$9 = 2;
       break L8;
      }
      store4($4,$or164);
      $add$ptr168 = ((($6)) + 4|0);
      $add$ptr168$sink = $add$ptr168;
     }
    } while(0);
    store4($frm_nxt,$add$ptr168$sink);
    $14 = load4($to_nxt);
    $incdec$ptr184 = ((($14)) + 4|0);
    store4($to_nxt,$incdec$ptr184);
    $15 = load4($frm_nxt);
    $cmp12 = ($15>>>0)<($frm_end>>>0);
    if ($cmp12) {
     $4 = $incdec$ptr184;$6 = $15;
    } else {
     $retval$9 = 0;
     break;
    }
   }
  } else {
   $retval$9 = 0;
  }
 } while(0);
 return ($retval$9|0);
}
function __ZNSt3__2L12ucs4_to_utf8EPKjS1_RS1_PhS3_RS3_mNS_12codecvt_modeE($frm,$frm_end,$frm_nxt,$to,$to_end,$to_nxt,$Maxcode,$mode) {
 $frm = $frm|0;
 $frm_end = $frm_end|0;
 $frm_nxt = $frm_nxt|0;
 $to = $to|0;
 $to_end = $to_end|0;
 $to_nxt = $to_nxt|0;
 $Maxcode = $Maxcode|0;
 $mode = $mode|0;
 var $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $and = 0, $and30 = 0, $and6 = 0, $cmp = 0, $cmp11 = 0;
 var $cmp16 = 0, $cmp20 = 0, $cmp25 = 0, $cmp35 = 0, $cmp40 = 0, $cmp5 = 0, $cmp51 = 0, $cmp60 = 0, $cmp7 = 0, $cmp8 = 0, $conv = 0, $conv28 = 0, $conv32 = 0, $conv45 = 0, $conv50 = 0, $conv65 = 0, $conv70 = 0, $incdec$ptr = 0, $incdec$ptr19 = 0, $incdec$ptr2 = 0;
 var $incdec$ptr29 = 0, $incdec$ptr3 = 0, $incdec$ptr33 = 0, $incdec$ptr46 = 0, $incdec$ptr51 = 0, $incdec$ptr55 = 0, $incdec$ptr71 = 0, $incdec$ptr76 = 0, $incdec$ptr80 = 0, $incdec$ptr84 = 0, $or = 0, $or$cond = 0, $or31 = 0, $or44 = 0, $or49 = 0, $or64 = 0, $or69 = 0, $retval$2 = 0, $shr = 0, $shr43 = 0;
 var $shr48 = 0, $shr63 = 0, $shr68 = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast14 = 0, $sub$ptr$rhs$cast23 = 0, $sub$ptr$rhs$cast38 = 0, $sub$ptr$sub = 0, $sub$ptr$sub15 = 0, $sub$ptr$sub24 = 0, $sub$ptr$sub39 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($frm_nxt,$frm);
 store4($to_nxt,$to);
 $and = $mode & 2;
 $tobool = ($and|0)==(0);
 $sub$ptr$lhs$cast = $to_end;
 if ($tobool) {
  label = 4;
 } else {
  $sub$ptr$rhs$cast = $to;
  $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
  $cmp = ($sub$ptr$sub|0)<(3);
  if ($cmp) {
   $retval$2 = 1;
  } else {
   $incdec$ptr = ((($to)) + 1|0);
   store4($to_nxt,$incdec$ptr);
   store1($to,-17);
   $0 = load4($to_nxt);
   $incdec$ptr2 = ((($0)) + 1|0);
   store4($to_nxt,$incdec$ptr2);
   store1($0,-69);
   $1 = load4($to_nxt);
   $incdec$ptr3 = ((($1)) + 1|0);
   store4($to_nxt,$incdec$ptr3);
   store1($1,-65);
   label = 4;
  }
 }
 L4: do {
  if ((label|0) == 4) {
   $$pre = load4($frm_nxt);
   $cmp51 = ($$pre>>>0)<($frm_end>>>0);
   if ($cmp51) {
    $3 = $$pre;
    while(1) {
     $2 = load4($3);
     $and6 = $2 & -2048;
     $cmp7 = ($and6|0)==(55296);
     $cmp8 = ($2>>>0)>($Maxcode>>>0);
     $or$cond = $cmp8 | $cmp7;
     if ($or$cond) {
      $retval$2 = 2;
      break L4;
     }
     $cmp11 = ($2>>>0)<(128);
     do {
      if ($cmp11) {
       $4 = load4($to_nxt);
       $sub$ptr$rhs$cast14 = $4;
       $sub$ptr$sub15 = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast14))|0;
       $cmp16 = ($sub$ptr$sub15|0)<(1);
       if ($cmp16) {
        $retval$2 = 1;
        break L4;
       }
       $conv = $2&255;
       $incdec$ptr19 = ((($4)) + 1|0);
       store4($to_nxt,$incdec$ptr19);
       store1($4,$conv);
      } else {
       $cmp20 = ($2>>>0)<(2048);
       $and30 = $2 & 63;
       $or31 = $and30 | 128;
       $conv32 = $or31&255;
       $shr = $2 >>> 6;
       if ($cmp20) {
        $5 = load4($to_nxt);
        $sub$ptr$rhs$cast23 = $5;
        $sub$ptr$sub24 = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast23))|0;
        $cmp25 = ($sub$ptr$sub24|0)<(2);
        if ($cmp25) {
         $retval$2 = 1;
         break L4;
        }
        $or = $shr | 192;
        $conv28 = $or&255;
        $incdec$ptr29 = ((($5)) + 1|0);
        store4($to_nxt,$incdec$ptr29);
        store1($5,$conv28);
        $6 = load4($to_nxt);
        $incdec$ptr33 = ((($6)) + 1|0);
        store4($to_nxt,$incdec$ptr33);
        store1($6,$conv32);
        break;
       }
       $cmp35 = ($2>>>0)<(65536);
       $7 = load4($to_nxt);
       $sub$ptr$rhs$cast38 = $7;
       $sub$ptr$sub39 = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast38))|0;
       $shr48 = $shr & 63;
       $or49 = $shr48 | 128;
       $incdec$ptr46 = ((($7)) + 1|0);
       $conv50 = $or49&255;
       $shr43 = $2 >>> 12;
       if ($cmp35) {
        $cmp40 = ($sub$ptr$sub39|0)<(3);
        if ($cmp40) {
         $retval$2 = 1;
         break L4;
        }
        $or44 = $shr43 | 224;
        $conv45 = $or44&255;
        store4($to_nxt,$incdec$ptr46);
        store1($7,$conv45);
        $8 = load4($to_nxt);
        $incdec$ptr51 = ((($8)) + 1|0);
        store4($to_nxt,$incdec$ptr51);
        store1($8,$conv50);
        $9 = load4($to_nxt);
        $incdec$ptr55 = ((($9)) + 1|0);
        store4($to_nxt,$incdec$ptr55);
        store1($9,$conv32);
        break;
       } else {
        $cmp60 = ($sub$ptr$sub39|0)<(4);
        if ($cmp60) {
         $retval$2 = 1;
         break L4;
        }
        $shr63 = $2 >>> 18;
        $or64 = $shr63 | 240;
        $conv65 = $or64&255;
        store4($to_nxt,$incdec$ptr46);
        store1($7,$conv65);
        $shr68 = $shr43 & 63;
        $or69 = $shr68 | 128;
        $conv70 = $or69&255;
        $10 = load4($to_nxt);
        $incdec$ptr71 = ((($10)) + 1|0);
        store4($to_nxt,$incdec$ptr71);
        store1($10,$conv70);
        $11 = load4($to_nxt);
        $incdec$ptr76 = ((($11)) + 1|0);
        store4($to_nxt,$incdec$ptr76);
        store1($11,$conv50);
        $12 = load4($to_nxt);
        $incdec$ptr80 = ((($12)) + 1|0);
        store4($to_nxt,$incdec$ptr80);
        store1($12,$conv32);
        break;
       }
      }
     } while(0);
     $13 = load4($frm_nxt);
     $incdec$ptr84 = ((($13)) + 4|0);
     store4($frm_nxt,$incdec$ptr84);
     $cmp5 = ($incdec$ptr84>>>0)<($frm_end>>>0);
     if ($cmp5) {
      $3 = $incdec$ptr84;
     } else {
      $retval$2 = 0;
      break;
     }
    }
   } else {
    $retval$2 = 0;
   }
  }
 } while(0);
 return ($retval$2|0);
}
function __ZNKSt3__27codecvtIwc11__mbstate_tE6do_outERS1_PKwS5_RS5_PcS7_RS7_($this,$st,$frm,$frm_end,$frm_nxt,$to,$to_end,$to_nxt) {
 $this = $this|0;
 $st = $st|0;
 $frm = $frm|0;
 $frm_end = $frm_end|0;
 $frm_nxt = $frm_nxt|0;
 $to = $to|0;
 $to_end = $to_end|0;
 $to_nxt = $to_nxt|0;
 var $$pre = 0, $$pre38 = 0, $$pre96 = 0, $$pre97 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $__l = 0, $add$ptr = 0, $add$ptr27 = 0, $call$i = 0, $call$i56 = 0, $call$i61 = 0, $call1$i = 0, $call1$i57 = 0, $call1$i62 = 0, $cmp = 0, $cmp13 = 0, $cmp139 = 0, $cmp17 = 0, $cmp2 = 0, $cmp26 = 0, $cmp28 = 0, $cmp31 = 0;
 var $cmp35 = 0, $cmp4 = 0, $cmp41 = 0, $cmp5 = 0, $cmp520 = 0, $cmp54 = 0, $cmp5415 = 0, $cmp56 = 0, $cond = 0, $dec = 0, $dec56 = 0, $dec59 = 0, $fend$0$lcssa = 0, $fend$027 = 0, $fend$124 = 0, $fend$2$lcssa = 0, $fend$216 = 0, $fend$5$ph69 = 0, $frm$addr$023 = 0, $frm$addr$1$lcssa = 0;
 var $frm$addr$110 = 0, $incdec$ptr = 0, $incdec$ptr21 = 0, $incdec$ptr48 = 0, $incdec$ptr49 = 0, $incdec$ptr4955 = 0, $incdec$ptr52 = 0, $incdec$ptr60 = 0, $not$cmp69 = 0, $or$cond = 0, $or$cond21 = 0, $p$01458 = 0, $retval$1 = 0, $retval$4 = 0, $sub$ptr$div = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast7 = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast8 = 0, $sub$ptr$sub = 0;
 var $sub$ptr$sub40 = 0, $sub$ptr$sub9 = 0, $tmp = 0, $to$addr$022 = 0, $tobool = 0, $tobool$i$i$i = 0, $tobool$i$i$i58 = 0, $tobool$i$i$i63 = 0, $tobool12 = 0, $tobool57 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $tmp = sp;
 $cmp26 = ($frm|0)==($frm_end|0);
 L1: do {
  if ($cmp26) {
   $fend$0$lcssa = $frm;
  } else {
   $fend$027 = $frm;
   while(1) {
    $0 = load4($fend$027);
    $cmp2 = ($0|0)==(0);
    if ($cmp2) {
     $fend$0$lcssa = $fend$027;
     break L1;
    }
    $incdec$ptr = ((($fend$027)) + 4|0);
    $cmp = ($incdec$ptr|0)==($frm_end|0);
    if ($cmp) {
     $fend$0$lcssa = $frm_end;
     break;
    } else {
     $fend$027 = $incdec$ptr;
    }
   }
  }
 } while(0);
 store4($to_nxt,$to);
 store4($frm_nxt,$frm);
 $sub$ptr$lhs$cast7 = $to_end;
 $__l = ((($this)) + 8|0);
 $cmp520 = ($to|0)==($to_end|0);
 $or$cond21 = $cmp520 | $cmp26;
 L6: do {
  if ($or$cond21) {
   $18 = $frm;
   label = 31;
  } else {
   $fend$124 = $fend$0$lcssa;$frm$addr$023 = $frm;$to$addr$022 = $to;
   L7: while(1) {
    $sub$ptr$lhs$cast = $fend$124;
    $sub$ptr$rhs$cast = $frm$addr$023;
    $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
    $sub$ptr$div = $sub$ptr$sub >> 2;
    $sub$ptr$rhs$cast8 = $to$addr$022;
    $sub$ptr$sub9 = (($sub$ptr$lhs$cast7) - ($sub$ptr$rhs$cast8))|0;
    $1 = load4($__l);
    $call$i = (___uselocale($1)|0);
    $call1$i = (_wcsnrtombs($to$addr$022,$frm_nxt,$sub$ptr$div,$sub$ptr$sub9)|0);
    $tobool$i$i$i = ($call$i|0)==(0|0);
    if (!($tobool$i$i$i)) {
     (___uselocale($call$i)|0);
    }
    switch ($call1$i|0) {
    case 0:  {
     $retval$4 = 1;
     break L6;
     break;
    }
    case -1:  {
     label = 8;
     break L7;
     break;
    }
    default: {
    }
    }
    $8 = load4($to_nxt);
    $add$ptr27 = (($8) + ($call1$i)|0);
    store4($to_nxt,$add$ptr27);
    $cmp28 = ($add$ptr27|0)==($to_end|0);
    if ($cmp28) {
     label = 29;
     break;
    }
    $cmp31 = ($fend$124|0)==($frm_end|0);
    if ($cmp31) {
     $$pre = load4($frm_nxt);
     $16 = $$pre;$17 = $add$ptr27;$fend$5$ph69 = $frm_end;
    } else {
     $9 = load4($__l);
     $call$i61 = (___uselocale($9)|0);
     $call1$i62 = (_wcrtomb($tmp,0)|0);
     $tobool$i$i$i63 = ($call$i61|0)==(0|0);
     if (!($tobool$i$i$i63)) {
      (___uselocale($call$i61)|0);
     }
     $cmp35 = ($call1$i62|0)==(-1);
     if ($cmp35) {
      $retval$1 = 2;
      label = 28;
      break;
     }
     $10 = load4($to_nxt);
     $sub$ptr$sub40 = (($sub$ptr$lhs$cast7) - ($10))|0;
     $cmp41 = ($call1$i62>>>0)>($sub$ptr$sub40>>>0);
     if ($cmp41) {
      $retval$1 = 1;
      label = 28;
      break;
     }
     $11 = $10;
     $tobool12 = ($call1$i62|0)==(0);
     if (!($tobool12)) {
      $12 = load1($tmp);
      $incdec$ptr4955 = ((($11)) + 1|0);
      store4($to_nxt,$incdec$ptr4955);
      store1($11,$12);
      $dec56 = (($call1$i62) + -1)|0;
      $tobool57 = ($dec56|0)==(0);
      if (!($tobool57)) {
       $dec59 = $dec56;$p$01458 = $tmp;
       while(1) {
        $incdec$ptr48 = ((($p$01458)) + 1|0);
        $$pre38 = load4($to_nxt);
        $14 = load1($incdec$ptr48);
        $incdec$ptr49 = ((($$pre38)) + 1|0);
        store4($to_nxt,$incdec$ptr49);
        store1($$pre38,$14);
        $dec = (($dec59) + -1)|0;
        $tobool = ($dec|0)==(0);
        if ($tobool) {
         break;
        } else {
         $dec59 = $dec;$p$01458 = $incdec$ptr48;
        }
       }
      }
     }
     $13 = load4($frm_nxt);
     $incdec$ptr52 = ((($13)) + 4|0);
     store4($frm_nxt,$incdec$ptr52);
     $cmp5415 = ($incdec$ptr52|0)==($frm_end|0);
     L27: do {
      if ($cmp5415) {
       $fend$2$lcssa = $frm_end;
      } else {
       $fend$216 = $incdec$ptr52;
       while(1) {
        $15 = load4($fend$216);
        $cmp56 = ($15|0)==(0);
        if ($cmp56) {
         $fend$2$lcssa = $fend$216;
         break L27;
        }
        $incdec$ptr60 = ((($fend$216)) + 4|0);
        $cmp54 = ($incdec$ptr60|0)==($frm_end|0);
        if ($cmp54) {
         $fend$2$lcssa = $frm_end;
         break;
        } else {
         $fend$216 = $incdec$ptr60;
        }
       }
      }
     } while(0);
     $$pre96 = load4($to_nxt);
     $16 = $incdec$ptr52;$17 = $$pre96;$fend$5$ph69 = $fend$2$lcssa;
    }
    $cmp4 = ($16|0)==($frm_end|0);
    $cmp5 = ($17|0)==($to_end|0);
    $or$cond = $cmp5 | $cmp4;
    if ($or$cond) {
     $18 = $16;
     label = 31;
     break L6;
    } else {
     $fend$124 = $fend$5$ph69;$frm$addr$023 = $16;$to$addr$022 = $17;
    }
   }
   if ((label|0) == 8) {
    store4($to_nxt,$to$addr$022);
    $2 = load4($frm_nxt);
    $cmp139 = ($frm$addr$023|0)==($2|0);
    L36: do {
     if ($cmp139) {
      $frm$addr$1$lcssa = $frm$addr$023;
     } else {
      $5 = $to$addr$022;$frm$addr$110 = $frm$addr$023;
      while(1) {
       $3 = load4($frm$addr$110);
       $4 = load4($__l);
       $call$i56 = (___uselocale($4)|0);
       $call1$i57 = (_wcrtomb($5,$3)|0);
       $tobool$i$i$i58 = ($call$i56|0)==(0|0);
       if (!($tobool$i$i$i58)) {
        (___uselocale($call$i56)|0);
       }
       $cmp17 = ($call1$i57|0)==(-1);
       if ($cmp17) {
        $frm$addr$1$lcssa = $frm$addr$110;
        break L36;
       }
       $6 = load4($to_nxt);
       $add$ptr = (($6) + ($call1$i57)|0);
       store4($to_nxt,$add$ptr);
       $incdec$ptr21 = ((($frm$addr$110)) + 4|0);
       $7 = load4($frm_nxt);
       $cmp13 = ($incdec$ptr21|0)==($7|0);
       if ($cmp13) {
        $frm$addr$1$lcssa = $incdec$ptr21;
        break;
       } else {
        $5 = $add$ptr;$frm$addr$110 = $incdec$ptr21;
       }
      }
     }
    } while(0);
    store4($frm_nxt,$frm$addr$1$lcssa);
    $retval$4 = 2;
    break;
   }
   else if ((label|0) == 28) {
    $retval$4 = $retval$1;
    break;
   }
   else if ((label|0) == 29) {
    $$pre97 = load4($frm_nxt);
    $18 = $$pre97;
    label = 31;
    break;
   }
  }
 } while(0);
 if ((label|0) == 31) {
  $not$cmp69 = ($18|0)!=($frm_end|0);
  $cond = $not$cmp69&1;
  $retval$4 = $cond;
 }
 STACKTOP = sp;return ($retval$4|0);
}
function __ZNKSt3__27codecvtIwc11__mbstate_tE5do_inERS1_PKcS5_RS5_PwS7_RS7_($this,$st,$frm,$frm_end,$frm_nxt,$to,$to_end,$to_nxt) {
 $this = $this|0;
 $st = $st|0;
 $frm = $frm|0;
 $frm_end = $frm_end|0;
 $frm_nxt = $frm_nxt|0;
 $to = $to|0;
 $to_end = $to_end|0;
 $to_nxt = $to_nxt|0;
 var $$pre98 = 0, $$pre99 = 0, $$sink = 0, $0 = 0, $1 = i64(), $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__l = 0, $add$ptr31 = 0;
 var $call$i = 0, $call$i59 = 0, $call$i64 = 0, $call1$i = 0, $call1$i60 = 0, $call1$i65 = 0, $cmp = 0, $cmp10 = 0, $cmp13 = 0, $cmp1312 = 0, $cmp2 = 0, $cmp26 = 0, $cmp32 = 0, $cmp35 = 0, $cmp39 = 0, $cmp4 = 0, $cmp45 = 0, $cmp4515 = 0, $cmp48 = 0, $cmp5 = 0;
 var $cmp520 = 0, $cond = 0, $cond59 = 0, $fend$0$lcssa = 0, $fend$027 = 0, $fend$124 = 0, $fend$2$lcssa = 0, $fend$216 = 0, $fend$4$ph = 0, $frm$addr$023 = 0, $frm$addr$1$lcssa = 0, $frm$addr$114 = 0, $incdec$ptr = 0, $incdec$ptr20 = 0, $incdec$ptr24 = 0, $incdec$ptr42 = 0, $incdec$ptr43 = 0, $incdec$ptr52 = 0, $not$cmp26 = 0, $not$cmp58 = 0;
 var $or$cond = 0, $retval$1$ph = 0, $retval$2 = 0, $save_state = 0, $storemerge13 = 0, $sub$ptr$div = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast7 = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast16 = 0, $sub$ptr$rhs$cast8 = 0, $sub$ptr$sub = 0, $sub$ptr$sub17 = 0, $sub$ptr$sub9 = 0, $to$addr$022 = 0, $tobool$i$i$i = 0, $tobool$i$i$i61 = 0, $tobool$i$i$i66 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $save_state = sp;
 $cmp26 = ($frm|0)==($frm_end|0);
 L1: do {
  if ($cmp26) {
   store4($to_nxt,$to);
   store4($frm_nxt,$frm);
   $14 = $frm;
   label = 32;
  } else {
   $fend$027 = $frm;
   while(1) {
    $0 = load1($fend$027);
    $cmp2 = ($0<<24>>24)==(0);
    if ($cmp2) {
     $fend$0$lcssa = $fend$027;
     break;
    }
    $incdec$ptr = ((($fend$027)) + 1|0);
    $cmp = ($incdec$ptr|0)==($frm_end|0);
    if ($cmp) {
     $fend$0$lcssa = $frm_end;
     break;
    } else {
     $fend$027 = $incdec$ptr;
    }
   }
   store4($to_nxt,$to);
   store4($frm_nxt,$frm);
   $sub$ptr$lhs$cast7 = $to_end;
   $__l = ((($this)) + 8|0);
   $cmp520 = ($to|0)==($to_end|0);
   if ($cmp520) {
    $14 = $frm;
    label = 32;
   } else {
    $fend$124 = $fend$0$lcssa;$frm$addr$023 = $frm;$to$addr$022 = $to;
    while(1) {
     $1 = load8($st,4);
     store8($save_state,$1);
     $sub$ptr$lhs$cast = $fend$124;
     $sub$ptr$rhs$cast = $frm$addr$023;
     $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
     $sub$ptr$rhs$cast8 = $to$addr$022;
     $sub$ptr$sub9 = (($sub$ptr$lhs$cast7) - ($sub$ptr$rhs$cast8))|0;
     $sub$ptr$div = $sub$ptr$sub9 >> 2;
     $2 = load4($__l);
     $call$i = (___uselocale($2)|0);
     $call1$i = (_mbsnrtowcs($to$addr$022,$frm_nxt,$sub$ptr$sub,$sub$ptr$div,$st)|0);
     $tobool$i$i$i = ($call$i|0)==(0|0);
     if (!($tobool$i$i$i)) {
      (___uselocale($call$i)|0);
     }
     $cmp10 = ($call1$i|0)==(-1);
     if ($cmp10) {
      label = 10;
      break;
     }
     $7 = load4($to_nxt);
     $add$ptr31 = (($7) + ($call1$i<<2)|0);
     store4($to_nxt,$add$ptr31);
     $cmp32 = ($add$ptr31|0)==($to_end|0);
     $$pre99 = load4($frm_nxt);
     if ($cmp32) {
      label = 29;
      break;
     }
     $cmp35 = ($fend$124|0)==($frm_end|0);
     if ($cmp35) {
      $12 = $$pre99;$13 = $add$ptr31;$fend$4$ph = $frm_end;
     } else {
      $8 = load4($__l);
      $call$i64 = (___uselocale($8)|0);
      $call1$i65 = (_mbrtowc($add$ptr31,$$pre99,1,$st)|0);
      $tobool$i$i$i66 = ($call$i64|0)==(0|0);
      if (!($tobool$i$i$i66)) {
       (___uselocale($call$i64)|0);
      }
      $cmp39 = ($call1$i65|0)==(0);
      if (!($cmp39)) {
       $retval$1$ph = 2;
       break;
      }
      $9 = load4($to_nxt);
      $incdec$ptr42 = ((($9)) + 4|0);
      store4($to_nxt,$incdec$ptr42);
      $10 = load4($frm_nxt);
      $incdec$ptr43 = ((($10)) + 1|0);
      store4($frm_nxt,$incdec$ptr43);
      $cmp4515 = ($incdec$ptr43|0)==($frm_end|0);
      L21: do {
       if ($cmp4515) {
        $fend$2$lcssa = $frm_end;
       } else {
        $fend$216 = $incdec$ptr43;
        while(1) {
         $11 = load1($fend$216);
         $cmp48 = ($11<<24>>24)==(0);
         if ($cmp48) {
          $fend$2$lcssa = $fend$216;
          break L21;
         }
         $incdec$ptr52 = ((($fend$216)) + 1|0);
         $cmp45 = ($incdec$ptr52|0)==($frm_end|0);
         if ($cmp45) {
          $fend$2$lcssa = $frm_end;
          break;
         } else {
          $fend$216 = $incdec$ptr52;
         }
        }
       }
      } while(0);
      $$pre98 = load4($to_nxt);
      $12 = $incdec$ptr43;$13 = $$pre98;$fend$4$ph = $fend$2$lcssa;
     }
     $cmp4 = ($12|0)==($frm_end|0);
     $cmp5 = ($13|0)==($to_end|0);
     $or$cond = $cmp5 | $cmp4;
     if ($or$cond) {
      $14 = $12;
      label = 32;
      break L1;
     } else {
      $fend$124 = $fend$4$ph;$frm$addr$023 = $12;$to$addr$022 = $13;
     }
    }
    if ((label|0) == 29) {
     $14 = $$pre99;
     label = 32;
     break;
    }
    L29: do {
     if ((label|0) == 10) {
      store4($to_nxt,$to$addr$022);
      $3 = load4($frm_nxt);
      $cmp1312 = ($frm$addr$023|0)==($3|0);
      L31: do {
       if ($cmp1312) {
        $frm$addr$1$lcssa = $frm$addr$023;
       } else {
        $frm$addr$114 = $frm$addr$023;$storemerge13 = $to$addr$022;
        L33: while(1) {
         $sub$ptr$rhs$cast16 = $frm$addr$114;
         $sub$ptr$sub17 = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast16))|0;
         $4 = load4($__l);
         $call$i59 = (___uselocale($4)|0);
         $call1$i60 = (_mbrtowc($storemerge13,$frm$addr$114,$sub$ptr$sub17,$save_state)|0);
         $tobool$i$i$i61 = ($call$i59|0)==(0|0);
         if (!($tobool$i$i$i61)) {
          (___uselocale($call$i59)|0);
         }
         switch ($call1$i60|0) {
         case -1:  {
          label = 16;
          break L33;
          break;
         }
         case -2:  {
          label = 17;
          break L33;
          break;
         }
         case 0:  {
          $$sink = 1;
          break;
         }
         default: {
          $$sink = $call1$i60;
         }
         }
         $incdec$ptr20 = (($frm$addr$114) + ($$sink)|0);
         $5 = load4($to_nxt);
         $incdec$ptr24 = ((($5)) + 4|0);
         store4($to_nxt,$incdec$ptr24);
         $6 = load4($frm_nxt);
         $cmp13 = ($incdec$ptr20|0)==($6|0);
         if ($cmp13) {
          $frm$addr$1$lcssa = $incdec$ptr20;
          break L31;
         } else {
          $frm$addr$114 = $incdec$ptr20;$storemerge13 = $incdec$ptr24;
         }
        }
        if ((label|0) == 16) {
         store4($frm_nxt,$frm$addr$114);
         $retval$1$ph = 2;
         break L29;
        }
        else if ((label|0) == 17) {
         store4($frm_nxt,$frm$addr$114);
         $retval$1$ph = 1;
         break L29;
        }
       }
      } while(0);
      store4($frm_nxt,$frm$addr$1$lcssa);
      $not$cmp26 = ($frm$addr$1$lcssa|0)!=($frm_end|0);
      $cond = $not$cmp26&1;
      $retval$1$ph = $cond;
     }
    } while(0);
    $retval$2 = $retval$1$ph;
   }
  }
 } while(0);
 if ((label|0) == 32) {
  $not$cmp58 = ($14|0)!=($frm_end|0);
  $cond59 = $not$cmp58&1;
  $retval$2 = $cond59;
 }
 STACKTOP = sp;return ($retval$2|0);
}
function __ZNKSt3__27codecvtIwc11__mbstate_tE10do_unshiftERS1_PcS4_RS4_($this,$st,$to,$to_end,$to_nxt) {
 $this = $this|0;
 $st = $st|0;
 $to = $to|0;
 $to_end = $to_end|0;
 $to_nxt = $to_nxt|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $__l = 0, $call$i = 0, $call1$i = 0, $cmp4 = 0, $dec = 0, $dec10 = 0, $dec105 = 0, $dec108 = 0, $incdec$ptr = 0, $incdec$ptr9 = 0, $incdec$ptr94 = 0, $p$037 = 0, $retval$0 = 0, $sub$ptr$lhs$cast = 0;
 var $sub$ptr$sub = 0, $tmp = 0, $tobool = 0, $tobool$i$i$i = 0, $tobool1 = 0, $tobool6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $tmp = sp;
 store4($to_nxt,$to);
 $__l = ((($this)) + 8|0);
 $0 = load4($__l);
 $call$i = (___uselocale($0)|0);
 $call1$i = (_wcrtomb($tmp,0)|0);
 $tobool$i$i$i = ($call$i|0)==(0|0);
 if (!($tobool$i$i$i)) {
  (___uselocale($call$i)|0);
 }
 switch ($call1$i|0) {
 case 0: case -1:  {
  $retval$0 = 2;
  break;
 }
 default: {
  $dec = (($call1$i) + -1)|0;
  $1 = load4($to_nxt);
  $sub$ptr$lhs$cast = $to_end;
  $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($1))|0;
  $cmp4 = ($dec>>>0)>($sub$ptr$sub>>>0);
  if ($cmp4) {
   $retval$0 = 1;
  } else {
   $2 = $1;
   $tobool1 = ($dec|0)==(0);
   if ($tobool1) {
    $retval$0 = 0;
   } else {
    $3 = load1($tmp);
    $incdec$ptr94 = ((($2)) + 1|0);
    store4($to_nxt,$incdec$ptr94);
    store1($2,$3);
    $dec105 = (($call1$i) + -2)|0;
    $tobool6 = ($dec105|0)==(0);
    if ($tobool6) {
     $retval$0 = 0;
    } else {
     $dec108 = $dec105;$p$037 = $tmp;
     while(1) {
      $incdec$ptr = ((($p$037)) + 1|0);
      $$pre = load4($to_nxt);
      $4 = load1($incdec$ptr);
      $incdec$ptr9 = ((($$pre)) + 1|0);
      store4($to_nxt,$incdec$ptr9);
      store1($$pre,$4);
      $dec10 = (($dec108) + -1)|0;
      $tobool = ($dec10|0)==(0);
      if ($tobool) {
       $retval$0 = 0;
       break;
      } else {
       $dec108 = $dec10;$p$037 = $incdec$ptr;
      }
     }
    }
   }
  }
 }
 }
 STACKTOP = sp;return ($retval$0|0);
}
function __ZNKSt3__27codecvtIwc11__mbstate_tE11do_encodingEv($this) {
 $this = $this|0;
 var $$ = 0, $0 = 0, $1 = 0, $__l = 0, $call$i = 0, $call$i1 = 0, $call1$i2 = 0, $cmp3 = 0, $cmp6 = 0, $tobool$i$i$i = 0, $tobool$i$i$i3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__l = ((($this)) + 8|0);
 $0 = load4($__l);
 $call$i = (___uselocale($0)|0);
 $tobool$i$i$i = ($call$i|0)==(0|0);
 if (!($tobool$i$i$i)) {
  (___uselocale($call$i)|0);
 }
 $1 = load4($__l);
 $cmp3 = ($1|0)==(0|0);
 if ($cmp3) {
  return 1;
 }
 $call$i1 = (___uselocale($1)|0);
 $call1$i2 = (___ctype_get_mb_cur_max()|0);
 $tobool$i$i$i3 = ($call$i1|0)==(0|0);
 if (!($tobool$i$i$i3)) {
  (___uselocale($call$i1)|0);
 }
 $cmp6 = ($call1$i2|0)==(1);
 $$ = $cmp6&1;
 return ($$|0);
}
function __ZNKSt3__27codecvtIwc11__mbstate_tE16do_always_noconvEv($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function __ZNKSt3__27codecvtIwc11__mbstate_tE9do_lengthERS1_PKcS5_j($this,$st,$frm,$frm_end,$mx) {
 $this = $this|0;
 $st = $st|0;
 $frm = $frm|0;
 $frm_end = $frm_end|0;
 $mx = $mx|0;
 var $0 = 0, $__l = 0, $add$ptr = 0, $call$i = 0, $call$sink = 0, $call1$i = 0, $cmp = 0, $cmp1 = 0, $cmp2 = 0, $cmp22 = 0, $frm$addr$04 = 0, $inc4 = 0, $nbytes$0$lcssa = 0, $nbytes$05 = 0, $nbytes$1 = 0, $nwchar_t$06 = 0, $or$cond = 0, $or$cond3 = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0;
 var $sub$ptr$sub = 0, $tobool$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $sub$ptr$lhs$cast = $frm_end;
 $__l = ((($this)) + 8|0);
 $cmp1 = ($mx|0)==(0);
 $cmp22 = ($frm|0)==($frm_end|0);
 $or$cond3 = $cmp22 | $cmp1;
 L1: do {
  if ($or$cond3) {
   $nbytes$0$lcssa = 0;
  } else {
   $frm$addr$04 = $frm;$nbytes$05 = 0;$nwchar_t$06 = 0;
   while(1) {
    $sub$ptr$rhs$cast = $frm$addr$04;
    $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
    $0 = load4($__l);
    $call$i = (___uselocale($0)|0);
    $call1$i = (_mbrlen($frm$addr$04,$sub$ptr$sub,$st)|0);
    $tobool$i$i$i = ($call$i|0)==(0|0);
    if (!($tobool$i$i$i)) {
     (___uselocale($call$i)|0);
    }
    switch ($call1$i|0) {
    case -2: case -1:  {
     $nbytes$0$lcssa = $nbytes$05;
     break L1;
     break;
    }
    case 0:  {
     $call$sink = 1;
     break;
    }
    default: {
     $call$sink = $call1$i;
    }
    }
    $add$ptr = (($frm$addr$04) + ($call$sink)|0);
    $nbytes$1 = (($call$sink) + ($nbytes$05))|0;
    $inc4 = (($nwchar_t$06) + 1)|0;
    $cmp = ($inc4>>>0)>=($mx>>>0);
    $cmp2 = ($add$ptr|0)==($frm_end|0);
    $or$cond = $cmp2 | $cmp;
    if ($or$cond) {
     $nbytes$0$lcssa = $nbytes$1;
     break L1;
    } else {
     $frm$addr$04 = $add$ptr;$nbytes$05 = $nbytes$1;$nwchar_t$06 = $inc4;
    }
   }
  }
 } while(0);
 return ($nbytes$0$lcssa|0);
}
function __ZNKSt3__27codecvtIwc11__mbstate_tE13do_max_lengthEv($this) {
 $this = $this|0;
 var $0 = 0, $__l = 0, $call$i = 0, $call1$i = 0, $cmp = 0, $cond = 0, $tobool$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__l = ((($this)) + 8|0);
 $0 = load4($__l);
 $cmp = ($0|0)==(0|0);
 if ($cmp) {
  $cond = 1;
 } else {
  $call$i = (___uselocale($0)|0);
  $call1$i = (___ctype_get_mb_cur_max()|0);
  $tobool$i$i$i = ($call$i|0)==(0|0);
  if ($tobool$i$i$i) {
   $cond = $call1$i;
  } else {
   (___uselocale($call$i)|0);
   $cond = $call1$i;
  }
 }
 return ($cond|0);
}
function __ZNSt3__27codecvtIwc11__mbstate_tED2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $__l = 0, $call = 0, $cmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(2544));
 $__l = ((($this)) + 8|0);
 $0 = load4($__l);
 $call = (__ZNSt3__26__clocEv()|0);
 $cmp = ($0|0)==($call|0);
 if (!($cmp)) {
  $1 = load4($__l);
  _freelocale($1);
 }
 return;
}
function __ZNSt3__27codecvtIwc11__mbstate_tED0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt3__27codecvtIwc11__mbstate_tED2Ev($this);
 __ZdlPv($this);
 return;
}
function __ZNKSt3__214__codecvt_utf8IwE6do_outER11__mbstate_tPKwS5_RS5_PcS7_RS7_($this,$0,$frm,$frm_end,$frm_nxt,$to,$to_end,$to_nxt) {
 $this = $this|0;
 $0 = $0|0;
 $frm = $frm|0;
 $frm_end = $frm_end|0;
 $frm_nxt = $frm_nxt|0;
 $to = $to|0;
 $to_end = $to_end|0;
 $to_nxt = $to_nxt|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $_Maxcode_ = 0, $_Mode_ = 0, $_frm_nxt = 0, $_to_nxt = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $_frm_nxt = sp + 4|0;
 $_to_nxt = sp;
 store4($_frm_nxt,$frm);
 store4($_to_nxt,$to);
 $_Maxcode_ = ((($this)) + 12|0);
 $1 = load4($_Maxcode_);
 $_Mode_ = ((($this)) + 16|0);
 $2 = load4($_Mode_);
 $call = (__ZNSt3__2L12ucs4_to_utf8EPKjS1_RS1_PhS3_RS3_mNS_12codecvt_modeE($frm,$frm_end,$_frm_nxt,$to,$to_end,$_to_nxt,$1,$2)|0);
 $3 = load4($_frm_nxt);
 store4($frm_nxt,$3);
 $4 = load4($_to_nxt);
 store4($to_nxt,$4);
 STACKTOP = sp;return ($call|0);
}
function __ZNKSt3__214__codecvt_utf8IwE5do_inER11__mbstate_tPKcS5_RS5_PwS7_RS7_($this,$0,$frm,$frm_end,$frm_nxt,$to,$to_end,$to_nxt) {
 $this = $this|0;
 $0 = $0|0;
 $frm = $frm|0;
 $frm_end = $frm_end|0;
 $frm_nxt = $frm_nxt|0;
 $to = $to|0;
 $to_end = $to_end|0;
 $to_nxt = $to_nxt|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $_Maxcode_ = 0, $_Mode_ = 0, $_frm_nxt = 0, $_to_nxt = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $_frm_nxt = sp + 4|0;
 $_to_nxt = sp;
 store4($_frm_nxt,$frm);
 store4($_to_nxt,$to);
 $_Maxcode_ = ((($this)) + 12|0);
 $1 = load4($_Maxcode_);
 $_Mode_ = ((($this)) + 16|0);
 $2 = load4($_Mode_);
 $call = (__ZNSt3__2L12utf8_to_ucs4EPKhS1_RS1_PjS3_RS3_mNS_12codecvt_modeE($frm,$frm_end,$_frm_nxt,$to,$to_end,$_to_nxt,$1,$2)|0);
 $3 = load4($_frm_nxt);
 store4($frm_nxt,$3);
 $4 = load4($_to_nxt);
 store4($to_nxt,$4);
 STACKTOP = sp;return ($call|0);
}
function __ZNKSt3__214__codecvt_utf8IwE10do_unshiftER11__mbstate_tPcS4_RS4_($this,$0,$to,$1,$to_nxt) {
 $this = $this|0;
 $0 = $0|0;
 $to = $to|0;
 $1 = $1|0;
 $to_nxt = $to_nxt|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 store4($to_nxt,$to);
 return 3;
}
function __ZNKSt3__214__codecvt_utf8IwE11do_encodingEv($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function __ZNKSt3__214__codecvt_utf8IwE16do_always_noconvEv($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function __ZNKSt3__214__codecvt_utf8IwE9do_lengthER11__mbstate_tPKcS5_j($this,$0,$frm,$frm_end,$mx) {
 $this = $this|0;
 $0 = $0|0;
 $frm = $frm|0;
 $frm_end = $frm_end|0;
 $mx = $mx|0;
 var $1 = 0, $2 = 0, $_Maxcode_ = 0, $_Mode_ = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $_Maxcode_ = ((($this)) + 12|0);
 $1 = load4($_Maxcode_);
 $_Mode_ = ((($this)) + 16|0);
 $2 = load4($_Mode_);
 $call = (__ZNSt3__2L19utf8_to_ucs4_lengthEPKhS1_jmNS_12codecvt_modeE($frm,$frm_end,$mx,$1,$2)|0);
 return ($call|0);
}
function __ZNKSt3__214__codecvt_utf8IwE13do_max_lengthEv($this) {
 $this = $this|0;
 var $$ = 0, $0 = 0, $_Mode_ = 0, $and = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $_Mode_ = ((($this)) + 16|0);
 $0 = load4($_Mode_);
 $and = $0 & 4;
 $tobool = ($and|0)==(0);
 $$ = $tobool ? 4 : 7;
 return ($$|0);
}
function __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((9320|0),(9343|0),304,(9591|0));
 // unreachable;
}
function __ZNSt3__27codecvtIwc11__mbstate_tEC2Ej($this) {
 $this = $this|0;
 var $__l = 0, $__shared_owners_$i$i = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__shared_owners_$i$i = ((($this)) + 4|0);
 store4($__shared_owners_$i$i,-1);
 store4($this,(2544));
 $__l = ((($this)) + 8|0);
 $call = (__ZNSt3__26__clocEv()|0);
 store4($__l,$call);
 return;
}
function __ZNSt3__211char_traitsIcE7compareEPKcS3_j($__s1,$__s2,$__n) {
 $__s1 = $__s1|0;
 $__s2 = $__s2|0;
 $__n = $__n|0;
 var $call = 0, $cmp = 0, $cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__n|0)==(0);
 if ($cmp) {
  $cond = 0;
 } else {
  $call = (_memcmp($__s1,$__s2,$__n)|0);
  $cond = $call;
 }
 return ($cond|0);
}
function __Znwj($size) {
 $size = $size|0;
 var $$size = 0, $call = 0, $call$lcssa = 0, $call1 = 0, $call2 = 0, $cmp = 0, $cmp1 = 0, $cmp12 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($size|0)==(0);
 $$size = $cmp ? 1 : $size;
 $call1 = (_malloc($$size)|0);
 $cmp12 = ($call1|0)==(0|0);
 L1: do {
  if ($cmp12) {
   while(1) {
    $call2 = (__ZSt15get_new_handlerv()|0);
    $tobool = ($call2|0)==(0|0);
    if ($tobool) {
     $call$lcssa = 0;
     break L1;
    }
    FUNCTION_TABLE_v[$call2 & 3]();
    $call = (_malloc($$size)|0);
    $cmp1 = ($call|0)==(0|0);
    if (!($cmp1)) {
     $call$lcssa = $call;
     break;
    }
   }
  } else {
   $call$lcssa = $call1;
  }
 } while(0);
 return ($call$lcssa|0);
}
function __ZdlPv($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($ptr);
 return;
}
function __ZNSt3__218__libcpp_refstringC2EPKc($this,$msg) {
 $this = $this|0;
 $msg = $msg|0;
 var $add2 = 0, $add6 = 0, $call = 0, $call3 = 0, $call5 = 0, $cap = 0, $count = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_strlen($msg)|0);
 $add2 = (($call) + 13)|0;
 $call3 = (__Znwj($add2)|0);
 store4($call3,$call);
 $cap = ((($call3)) + 4|0);
 store4($cap,$call);
 $count = ((($call3)) + 8|0);
 store4($count,0);
 $call5 = (__ZNSt3__218__libcpp_refstring13data_from_repEPNS0_9_Rep_baseE($call3)|0);
 $add6 = (($call) + 1)|0;
 _memcpy(($call5|0),($msg|0),($add6|0))|0;
 store4($this,$call5);
 return;
}
function __ZNSt3__218__libcpp_refstring13data_from_repEPNS0_9_Rep_baseE($rep) {
 $rep = $rep|0;
 var $add$ptr2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $add$ptr2 = ((($rep)) + 12|0);
 return ($add$ptr2|0);
}
function __ZNSt11logic_errorC2EPKc($this) {
 $this = $this|0;
 var $__imp_ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(2696));
 $__imp_ = ((($this)) + 4|0);
 __ZNSt3__218__libcpp_refstringC2EPKc($__imp_,2891);
 return;
}
function __ZNSt13runtime_errorC2EPKc($this) {
 $this = $this|0;
 var $__imp_ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(2716));
 $__imp_ = ((($this)) + 4|0);
 __ZNSt3__218__libcpp_refstringC2EPKc($__imp_,5415);
 return;
}
function __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((9465|0),(9494|0),1183,(9591|0));
 // unreachable;
}
function __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((9612|0),(9494|0),1194,(9641|0));
 // unreachable;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($this,$__str) {
 $this = $this|0;
 $__str = $__str|0;
 var $0 = 0, $1 = 0, $2 = 0, $__size_$i = 0, $__size_$i5 = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 ; store8($this,i64_const(0,0),4); store4($this+8|0,0,4);
 $__size_$i5 = ((($__str)) + 11|0);
 $0 = load1($__size_$i5);
 $tobool$i = ($0<<24>>24)<(0);
 if ($tobool$i) {
  $1 = load4($__str);
  $__size_$i = ((($__str)) + 4|0);
  $2 = load4($__size_$i);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($this,$1,$2);
 } else {
  ; store8($this,load8($__str,4),4); store4($this+8 | 0,load4($__str+8 | 0,4),4);
 }
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($this,$__s,$__sz) {
 $this = $this|0;
 $__s = $__s|0;
 $__sz = $__sz|0;
 var $__cap_$i = 0, $__p$0 = 0, $__size_$i = 0, $__size_$i12 = 0, $add$i$i = 0, $and$i$i = 0, $arrayidx = 0, $call$i$i$i = 0, $cmp = 0, $cmp2 = 0, $conv$i = 0, $or$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__sz>>>0)>(4294967279);
 if ($cmp) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $cmp2 = ($__sz>>>0)<(11);
 if ($cmp2) {
  $conv$i = $__sz&255;
  $__size_$i = ((($this)) + 11|0);
  store1($__size_$i,$conv$i);
  $__p$0 = $this;
 } else {
  $add$i$i = (($__sz) + 16)|0;
  $and$i$i = $add$i$i & -16;
  $call$i$i$i = (__Znwj($and$i$i)|0);
  store4($this,$call$i$i$i);
  $or$i = $and$i$i | -2147483648;
  $__cap_$i = ((($this)) + 8|0);
  store4($__cap_$i,$or$i);
  $__size_$i12 = ((($this)) + 4|0);
  store4($__size_$i12,$__sz);
  $__p$0 = $call$i$i$i;
 }
 (__ZNSt3__211char_traitsIcE4copyEPcPKcj($__p$0,$__s,$__sz)|0);
 $arrayidx = (($__p$0) + ($__sz)|0);
 __ZNSt3__211char_traitsIcE6assignERcRKc($arrayidx,0);
 return;
}
function __ZNSt3__211char_traitsIcE4copyEPcPKcj($__s1,$__s2,$__n) {
 $__s1 = $__s1|0;
 $__s2 = $__s2|0;
 $__n = $__n|0;
 var $cmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__n|0)==(0);
 if (!($cmp)) {
  _memcpy(($__s1|0),($__s2|0),($__n|0))|0;
 }
 return ($__s1|0);
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEjc($this,$__n) {
 $this = $this|0;
 $__n = $__n|0;
 var $__cap_$i = 0, $__p$0 = 0, $__size_$i = 0, $__size_$i12 = 0, $add$i$i = 0, $and$i$i = 0, $arrayidx = 0, $call$i$i$i = 0, $cmp = 0, $cmp2 = 0, $conv$i = 0, $or$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__n>>>0)>(4294967279);
 if ($cmp) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $cmp2 = ($__n>>>0)<(11);
 if ($cmp2) {
  $conv$i = $__n&255;
  $__size_$i = ((($this)) + 11|0);
  store1($__size_$i,$conv$i);
  $__p$0 = $this;
 } else {
  $add$i$i = (($__n) + 16)|0;
  $and$i$i = $add$i$i & -16;
  $call$i$i$i = (__Znwj($and$i$i)|0);
  store4($this,$call$i$i$i);
  $or$i = $and$i$i | -2147483648;
  $__cap_$i = ((($this)) + 8|0);
  store4($__cap_$i,$or$i);
  $__size_$i12 = ((($this)) + 4|0);
  store4($__size_$i12,$__n);
  $__p$0 = $call$i$i$i;
 }
 (__ZNSt3__211char_traitsIcE6assignEPcjc($__p$0,$__n)|0);
 $arrayidx = (($__p$0) + ($__n)|0);
 __ZNSt3__211char_traitsIcE6assignERcRKc($arrayidx,0);
 return;
}
function __ZNSt3__211char_traitsIcE6assignEPcjc($__s,$__n) {
 $__s = $__s|0;
 $__n = $__n|0;
 var $cmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__n|0)==(0);
 if (!($cmp)) {
  _memset(($__s|0),0,($__n|0))|0;
 }
 return ($__s|0);
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $__size_$i = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__size_$i = ((($this)) + 11|0);
 $0 = load1($__size_$i);
 $tobool$i = ($0<<24>>24)<(0);
 if ($tobool$i) {
  $1 = load4($this);
  __ZdlPv($1);
 }
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_($this,$__str) {
 $this = $this|0;
 $__str = $__str|0;
 var $0 = 0, $1 = 0, $2 = 0, $__size_$i$i$i = 0, $__size_$i3$i = 0, $cmp = 0, $cond$i = 0, $cond$i$i = 0, $conv$i$i = 0, $tobool$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($this|0)==($__str|0);
 if (!($cmp)) {
  $__size_$i$i$i = ((($__str)) + 11|0);
  $0 = load1($__size_$i$i$i);
  $tobool$i$i$i = ($0<<24>>24)<(0);
  $1 = load4($__str);
  $cond$i$i = $tobool$i$i$i ? $1 : $__str;
  $__size_$i3$i = ((($__str)) + 4|0);
  $2 = load4($__size_$i3$i);
  $conv$i$i = $0&255;
  $cond$i = $tobool$i$i$i ? $2 : $conv$i$i;
  (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj($this,$cond$i$i,$cond$i)|0);
 }
 return ($this|0);
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj($this,$__s,$__n) {
 $this = $this|0;
 $__s = $__s|0;
 $__n = $__n|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $__cap_$i$i = 0, $__size_$i$i = 0, $__size_$i3$i = 0, $and$i$i = 0, $arrayidx = 0, $cmp = 0, $cond$i = 0, $cond$i19 = 0, $cond$i25 = 0, $conv$i$i = 0, $conv$i$i29 = 0, $phitmp$i = 0, $sub = 0, $tobool$i$i = 0, $tobool$i$i28 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $__size_$i$i = ((($this)) + 11|0);
 $0 = load1($__size_$i$i);
 $tobool$i$i = ($0<<24>>24)<(0);
 if ($tobool$i$i) {
  $__cap_$i$i = ((($this)) + 8|0);
  $1 = load4($__cap_$i$i);
  $and$i$i = $1 & 2147483647;
  $phitmp$i = (($and$i$i) + -1)|0;
  $cond$i = $phitmp$i;
 } else {
  $cond$i = 10;
 }
 $cmp = ($cond$i>>>0)<($__n>>>0);
 $__size_$i3$i = ((($this)) + 4|0);
 do {
  if ($cmp) {
   if ($tobool$i$i) {
    $4 = load4($__size_$i3$i);
    $cond$i25 = $4;
   } else {
    $conv$i$i = $0&255;
    $cond$i25 = $conv$i$i;
   }
   $sub = (($__n) - ($cond$i))|0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc($this,$cond$i,$sub,$cond$i25,$cond$i25,$__n,$__s);
  } else {
   if ($tobool$i$i) {
    $2 = load4($this);
    $cond$i19 = $2;
   } else {
    $cond$i19 = $this;
   }
   (__ZNSt3__211char_traitsIcE4moveEPcPKcj($cond$i19,$__s,$__n)|0);
   $arrayidx = (($cond$i19) + ($__n)|0);
   __ZNSt3__211char_traitsIcE6assignERcRKc($arrayidx,0);
   $3 = load1($__size_$i$i);
   $tobool$i$i28 = ($3<<24>>24)<(0);
   if ($tobool$i$i28) {
    store4($__size_$i3$i,$__n);
    break;
   } else {
    $conv$i$i29 = $__n&255;
    store1($__size_$i$i,$conv$i$i29);
    break;
   }
  }
 } while(0);
 return ($this|0);
}
function __ZNSt3__211char_traitsIcE4moveEPcPKcj($__s1,$__s2,$__n) {
 $__s1 = $__s1|0;
 $__s2 = $__s2|0;
 $__n = $__n|0;
 var $cmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__n|0)==(0);
 if (!($cmp)) {
  _memmove(($__s1|0),($__s2|0),($__n|0))|0;
 }
 return ($__s1|0);
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc($this,$__old_cap,$__delta_cap,$__old_sz,$__n_del,$__n_add,$__p_new_stuff) {
 $this = $this|0;
 $__old_cap = $__old_cap|0;
 $__delta_cap = $__delta_cap|0;
 $__old_sz = $__old_sz|0;
 $__n_del = $__n_del|0;
 $__n_add = $__n_add|0;
 $__p_new_stuff = $__p_new_stuff|0;
 var $$sroa$speculated = 0, $0 = 0, $1 = 0, $__cap_$i = 0, $__size_$i = 0, $__size_$i$i = 0, $add = 0, $add$i$i = 0, $add$ptr34 = 0, $add$ptr37 = 0, $add48 = 0, $and$i$i = 0, $arrayidx = 0, $call$i$i$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp23 = 0, $cmp30 = 0, $cmp41 = 0;
 var $cmp5 = 0, $cond$i = 0, $cond40 = 0, $mul = 0, $or$i = 0, $phitmp = 0, $sub2 = 0, $sub28 = 0, $tobool$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $sub2 = (-18 - ($__old_cap))|0;
 $cmp = ($sub2>>>0)<($__delta_cap>>>0);
 if ($cmp) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $__size_$i$i = ((($this)) + 11|0);
 $0 = load1($__size_$i$i);
 $tobool$i$i = ($0<<24>>24)<(0);
 if ($tobool$i$i) {
  $1 = load4($this);
  $cond$i = $1;
 } else {
  $cond$i = $this;
 }
 $cmp5 = ($__old_cap>>>0)<(2147483623);
 if ($cmp5) {
  $add = (($__delta_cap) + ($__old_cap))|0;
  $mul = $__old_cap << 1;
  $cmp$i$i$i = ($add>>>0)<($mul>>>0);
  $$sroa$speculated = $cmp$i$i$i ? $mul : $add;
  $cmp$i = ($$sroa$speculated>>>0)<(11);
  $add$i$i = (($$sroa$speculated) + 16)|0;
  $and$i$i = $add$i$i & -16;
  $phitmp = $cmp$i ? 11 : $and$i$i;
  $cond40 = $phitmp;
 } else {
  $cond40 = -17;
 }
 $call$i$i$i = (__Znwj($cond40)|0);
 $cmp23 = ($__n_add|0)==(0);
 if (!($cmp23)) {
  (__ZNSt3__211char_traitsIcE4copyEPcPKcj($call$i$i$i,$__p_new_stuff,$__n_add)|0);
 }
 $sub28 = (($__old_sz) - ($__n_del))|0;
 $cmp30 = ($sub28|0)==(0);
 if (!($cmp30)) {
  $add$ptr34 = (($call$i$i$i) + ($__n_add)|0);
  $add$ptr37 = (($cond$i) + ($__n_del)|0);
  (__ZNSt3__211char_traitsIcE4copyEPcPKcj($add$ptr34,$add$ptr37,$sub28)|0);
 }
 $cmp41 = ($__old_cap|0)==(10);
 if (!($cmp41)) {
  __ZdlPv($cond$i);
 }
 store4($this,$call$i$i$i);
 $or$i = $cond40 | -2147483648;
 $__cap_$i = ((($this)) + 8|0);
 store4($__cap_$i,$or$i);
 $add48 = (($sub28) + ($__n_add))|0;
 $__size_$i = ((($this)) + 4|0);
 store4($__size_$i,$add48);
 $arrayidx = (($call$i$i$i) + ($add48)|0);
 __ZNSt3__211char_traitsIcE6assignERcRKc($arrayidx,0);
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc($this,$__n) {
 $this = $this|0;
 $__n = $__n|0;
 var $0 = 0, $1 = 0, $2 = 0, $__size_$i$i = 0, $__size_$i3$i = 0, $add$ptr$i = 0, $add$ptr4$i = 0, $cmp = 0, $cond$i = 0, $conv$i$i = 0, $conv$i$i7 = 0, $sub = 0, $tobool$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__size_$i$i = ((($this)) + 11|0);
 $0 = load1($__size_$i$i);
 $tobool$i$i = ($0<<24>>24)<(0);
 $__size_$i3$i = ((($this)) + 4|0);
 if ($tobool$i$i) {
  $1 = load4($__size_$i3$i);
  $cond$i = $1;
 } else {
  $conv$i$i = $0&255;
  $cond$i = $conv$i$i;
 }
 $cmp = ($cond$i>>>0)<($__n>>>0);
 do {
  if ($cmp) {
   $sub = (($__n) - ($cond$i))|0;
   (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEjc($this,$sub)|0);
  } else {
   if ($tobool$i$i) {
    $2 = load4($this);
    $add$ptr$i = (($2) + ($__n)|0);
    __ZNSt3__211char_traitsIcE6assignERcRKc($add$ptr$i,0);
    store4($__size_$i3$i,$__n);
    break;
   } else {
    $add$ptr4$i = (($this) + ($__n)|0);
    __ZNSt3__211char_traitsIcE6assignERcRKc($add$ptr4$i,0);
    $conv$i$i7 = $__n&255;
    store1($__size_$i$i,$conv$i$i7);
    break;
   }
  }
 } while(0);
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEjc($this,$__n) {
 $this = $this|0;
 $__n = $__n|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $__cap_$i$i = 0, $__size_$i$i = 0, $__size_$i3$i = 0, $add = 0, $add$ptr = 0, $and$i$i = 0, $arrayidx = 0, $cmp = 0, $cond$i22 = 0, $cond$i32 = 0, $cond$i34 = 0, $conv$i$i = 0, $conv$i$i26 = 0;
 var $phitmp$i = 0, $sub = 0, $sub4 = 0, $tobool = 0, $tobool$i$i = 0, $tobool$i$i25 = 0, $tobool$i$i29 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($__n|0)==(0);
 if (!($tobool)) {
  $__size_$i$i = ((($this)) + 11|0);
  $0 = load1($__size_$i$i);
  $tobool$i$i = ($0<<24>>24)<(0);
  $__size_$i3$i = ((($this)) + 4|0);
  if ($tobool$i$i) {
   $__cap_$i$i = ((($this)) + 8|0);
   $1 = load4($__cap_$i$i);
   $and$i$i = $1 & 2147483647;
   $phitmp$i = (($and$i$i) + -1)|0;
   $2 = load4($__size_$i3$i);
   $cond$i22 = $2;$cond$i34 = $phitmp$i;
  } else {
   $conv$i$i = $0&255;
   $cond$i22 = $conv$i$i;$cond$i34 = 10;
  }
  $sub = (($cond$i34) - ($cond$i22))|0;
  $cmp = ($sub>>>0)<($__n>>>0);
  $add = (($cond$i22) + ($__n))|0;
  if ($cmp) {
   $sub4 = (($add) - ($cond$i34))|0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj($this,$cond$i34,$sub4,$cond$i22,$cond$i22);
   $$pre = load1($__size_$i$i);
   $3 = $$pre;
  } else {
   $3 = $0;
  }
  $tobool$i$i29 = ($3<<24>>24)<(0);
  if ($tobool$i$i29) {
   $4 = load4($this);
   $cond$i32 = $4;
  } else {
   $cond$i32 = $this;
  }
  $add$ptr = (($cond$i32) + ($cond$i22)|0);
  (__ZNSt3__211char_traitsIcE6assignEPcjc($add$ptr,$__n)|0);
  $5 = load1($__size_$i$i);
  $tobool$i$i25 = ($5<<24>>24)<(0);
  if ($tobool$i$i25) {
   store4($__size_$i3$i,$add);
  } else {
   $conv$i$i26 = $add&255;
   store1($__size_$i$i,$conv$i$i26);
  }
  $arrayidx = (($cond$i32) + ($add)|0);
  __ZNSt3__211char_traitsIcE6assignERcRKc($arrayidx,0);
 }
 return ($this|0);
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj($this,$__old_cap,$__delta_cap,$__old_sz,$__n_copy) {
 $this = $this|0;
 $__old_cap = $__old_cap|0;
 $__delta_cap = $__delta_cap|0;
 $__old_sz = $__old_sz|0;
 $__n_copy = $__n_copy|0;
 var $$sroa$speculated = 0, $0 = 0, $1 = 0, $__cap_$i = 0, $__size_$i$i = 0, $add = 0, $add$i$i = 0, $add$ptr = 0, $add$ptr29 = 0, $and$i$i = 0, $call$i$i$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp16 = 0, $cmp24 = 0, $cmp34 = 0, $cmp4 = 0, $cond$i = 0, $cond30 = 0;
 var $mul = 0, $or$i = 0, $phitmp = 0, $sub = 0, $sub23 = 0, $tobool$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $sub = (-17 - ($__old_cap))|0;
 $cmp = ($sub>>>0)<($__delta_cap>>>0);
 if ($cmp) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $__size_$i$i = ((($this)) + 11|0);
 $0 = load1($__size_$i$i);
 $tobool$i$i = ($0<<24>>24)<(0);
 if ($tobool$i$i) {
  $1 = load4($this);
  $cond$i = $1;
 } else {
  $cond$i = $this;
 }
 $cmp4 = ($__old_cap>>>0)<(2147483623);
 if ($cmp4) {
  $add = (($__delta_cap) + ($__old_cap))|0;
  $mul = $__old_cap << 1;
  $cmp$i$i$i = ($add>>>0)<($mul>>>0);
  $$sroa$speculated = $cmp$i$i$i ? $mul : $add;
  $cmp$i = ($$sroa$speculated>>>0)<(11);
  $add$i$i = (($$sroa$speculated) + 16)|0;
  $and$i$i = $add$i$i & -16;
  $phitmp = $cmp$i ? 11 : $and$i$i;
  $cond30 = $phitmp;
 } else {
  $cond30 = -17;
 }
 $call$i$i$i = (__Znwj($cond30)|0);
 $cmp16 = ($__n_copy|0)==(0);
 if (!($cmp16)) {
  (__ZNSt3__211char_traitsIcE4copyEPcPKcj($call$i$i$i,$cond$i,$__n_copy)|0);
 }
 $sub23 = (($__old_sz) - ($__n_copy))|0;
 $cmp24 = ($sub23|0)==(0);
 if (!($cmp24)) {
  $add$ptr = (($call$i$i$i) + ($__n_copy)|0);
  $add$ptr29 = (($cond$i) + ($__n_copy)|0);
  (__ZNSt3__211char_traitsIcE4copyEPcPKcj($add$ptr,$add$ptr29,$sub23)|0);
 }
 $cmp34 = ($__old_cap|0)==(10);
 if (!($cmp34)) {
  __ZdlPv($cond$i);
 }
 store4($this,$call$i$i$i);
 $or$i = $cond30 | -2147483648;
 $__cap_$i = ((($this)) + 8|0);
 store4($__cap_$i,$or$i);
 return;
}
function __ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj($this,$__s,$__n2) {
 $this = $this|0;
 $__s = $__s|0;
 $__n2 = $__n2|0;
 var $$$call6 = 0, $$call6 = 0, $$sroa$speculated15 = 0, $0 = 0, $1 = 0, $2 = 0, $__size_$i$i = 0, $__size_$i3$i = 0, $call6 = 0, $cmp$i$i$i7 = 0, $cmp2 = 0, $cmp7 = 0, $cmp9 = 0, $cond$i = 0, $cond$i$i = 0, $conv$i$i = 0, $tobool$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__size_$i$i = ((($this)) + 11|0);
 $0 = load1($__size_$i$i);
 $tobool$i$i = ($0<<24>>24)<(0);
 if ($tobool$i$i) {
  $__size_$i3$i = ((($this)) + 4|0);
  $1 = load4($__size_$i3$i);
  $cond$i = $1;
 } else {
  $conv$i$i = $0&255;
  $cond$i = $conv$i$i;
 }
 $cmp2 = ($__n2|0)==(-1);
 if ($cmp2) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_out_of_rangeEv();
  // unreachable;
 }
 if ($tobool$i$i) {
  $2 = load4($this);
  $cond$i$i = $2;
 } else {
  $cond$i$i = $this;
 }
 $cmp$i$i$i7 = ($cond$i>>>0)>($__n2>>>0);
 $$sroa$speculated15 = $cmp$i$i$i7 ? $__n2 : $cond$i;
 $call6 = (__ZNSt3__211char_traitsIcE7compareEPKcS3_j($cond$i$i,$__s,$$sroa$speculated15)|0);
 $cmp7 = ($call6|0)==(0);
 if ($cmp7) {
  $cmp9 = ($cond$i>>>0)<($__n2>>>0);
  $$call6 = $cmp$i$i$i7&1;
  $$$call6 = $cmp9 ? -1 : $$call6;
  return ($$$call6|0);
 } else {
  return ($call6|0);
 }
 return (0)|0;
}
function __ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc($this,$__s) {
 $this = $this|0;
 $__s = $__s|0;
 var $call = 0, $call2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZNSt3__211char_traitsIcE6lengthEPKc($__s)|0);
 $call2 = (__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEjjPKcj($this,$__s,$call)|0);
 return ($call2|0);
}
function __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6__initEPKwj($this,$__s,$__sz) {
 $this = $this|0;
 $__s = $__s|0;
 $__sz = $__sz|0;
 var $__cap_$i = 0, $__p$0 = 0, $__size_$i = 0, $__size_$i12 = 0, $add$i$i = 0, $and$i$i = 0, $arrayidx = 0, $call$i$i$i = 0, $cmp = 0, $cmp$i$i = 0, $cmp2 = 0, $conv$i = 0, $mul$i$i = 0, $or$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__sz>>>0)>(1073741807);
 $__cap_$i = ((($this)) + 8|0);
 if ($cmp) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv();
  // unreachable;
 }
 $cmp2 = ($__sz>>>0)<(2);
 do {
  if ($cmp2) {
   $conv$i = $__sz&255;
   $__size_$i = ((($__cap_$i)) + 3|0);
   store1($__size_$i,$conv$i);
   $__p$0 = $this;
  } else {
   $add$i$i = (($__sz) + 4)|0;
   $and$i$i = $add$i$i & -4;
   $cmp$i$i = ($and$i$i>>>0)>(1073741823);
   if ($cmp$i$i) {
    ___assert_fail((9662|0),(9699|0),1734,(9796|0));
    // unreachable;
   } else {
    $mul$i$i = $and$i$i << 2;
    $call$i$i$i = (__Znwj($mul$i$i)|0);
    store4($this,$call$i$i$i);
    $or$i = $and$i$i | -2147483648;
    store4($__cap_$i,$or$i);
    $__size_$i12 = ((($this)) + 4|0);
    store4($__size_$i12,$__sz);
    $__p$0 = $call$i$i$i;
    break;
   }
  }
 } while(0);
 __ZNSt3__211char_traitsIwE4copyEPwPKwj($__p$0,$__s,$__sz);
 $arrayidx = (($__p$0) + ($__sz<<2)|0);
 __ZNSt3__211char_traitsIwE6assignERwRKw($arrayidx,0);
 return;
}
function __ZNSt3__211char_traitsIwE4copyEPwPKwj($__s1,$__s2,$__n) {
 $__s1 = $__s1|0;
 $__s2 = $__s2|0;
 $__n = $__n|0;
 var $cmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__n|0)==(0);
 if (!($cmp)) {
  (_wmemcpy($__s1,$__s2,$__n)|0);
 }
 return;
}
function __ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $__size_$i = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 8|0);
 $__size_$i = ((($0)) + 3|0);
 $1 = load1($__size_$i);
 $tobool$i = ($1<<24>>24)<(0);
 if ($tobool$i) {
  $2 = load4($this);
  __ZdlPv($2);
 }
 return;
}
function __ZL25default_terminate_handlerv() {
 var $0 = 0, $1 = i64(), $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $__type_name$i = 0, $add$ptr = 0, $and = i64(), $call = 0, $call10 = 0, $call14 = 0, $cmp = 0, $cmp7 = 0, $cond = 0, $exception_class = 0, $primaryException = 0, $thrown_object = 0, $tobool = 0;
 var $tobool1 = 0, $vararg_buffer = 0, $vararg_buffer10 = 0, $vararg_buffer3 = 0, $vararg_buffer7 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vfn13 = 0, $vtable12 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer10 = sp + 32|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $thrown_object = sp + 36|0;
 $call = (___cxa_get_globals_fast()|0);
 $tobool = ($call|0)==(0|0);
 if (!($tobool)) {
  $0 = load4($call);
  $tobool1 = ($0|0)==(0|0);
  if (!($tobool1)) {
   $add$ptr = ((($0)) + 80|0);
   $exception_class = ((($0)) + 48|0);
   $1 = load8($exception_class);
   $and = i64_and($1,i64_const(4294967040,4294967295));
   $cmp = i64_eq($and,i64_const(1126902528,1129074247));
   if (!($cmp)) {
    store4($vararg_buffer7,9941);
    _abort_message(9891,$vararg_buffer7);
    // unreachable;
   }
   $cmp7 = i64_eq($1,i64_const(1126902529,1129074247));
   if ($cmp7) {
    $primaryException = ((($0)) + 44|0);
    $2 = load4($primaryException);
    $cond = $2;
   } else {
    $cond = $add$ptr;
   }
   store4($thrown_object,$cond);
   $3 = load4($0);
   $__type_name$i = ((($3)) + 4|0);
   $4 = load4($__type_name$i);
   $call10 = (__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv(1448,$3,$thrown_object)|0);
   if ($call10) {
    $5 = load4($thrown_object);
    $vtable12 = load4($5);
    $vfn13 = ((($vtable12)) + 8|0);
    $6 = load4($vfn13);
    $call14 = (FUNCTION_TABLE_ii[$6 & 31]($5)|0);
    store4($vararg_buffer,9941);
    $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
    store4($vararg_ptr1,$4);
    $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
    store4($vararg_ptr2,$call14);
    _abort_message(9805,$vararg_buffer);
    // unreachable;
   } else {
    store4($vararg_buffer3,9941);
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    store4($vararg_ptr6,$4);
    _abort_message(9850,$vararg_buffer3);
    // unreachable;
   }
  }
 }
 _abort_message(9929,$vararg_buffer10);
 // unreachable;
}
function ___cxa_get_globals_fast() {
 var $0 = 0, $call = 0, $call1 = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $call = (_pthread_once((11312|0),(2|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  $0 = load4(11316);
  $call1 = (_pthread_getspecific(($0|0))|0);
  STACKTOP = sp;return ($call1|0);
 } else {
  _abort_message(10080,$vararg_buffer);
  // unreachable;
 }
 return (0)|0;
}
function _abort_message($format,$varargs) {
 $format = $format|0;
 $varargs = $varargs|0;
 var $list = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $list = sp;
 store4($list,$varargs);
 _vfprintf($format,$list);
 _fputc();
 _abort();
 // unreachable;
}
function __ZN10__cxxabiv116__shim_type_infoD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv117__class_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop1Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv($this,$thrown_type,$adjustedPtr) {
 $this = $this|0;
 $thrown_type = $thrown_type|0;
 $adjustedPtr = $adjustedPtr|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $call = 0, $cmp = 0, $cmp4 = 0, $dst_ptr_leading_to_static_ptr = 0, $info = 0, $number_of_dst_type = 0, $path_dst_ptr_to_static_ptr = 0, $retval$0 = 0, $retval$2 = 0, $src2dst_offset = 0, $static_type = 0, $vfn = 0, $vtable = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $info = sp;
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$thrown_type)|0);
 if ($call) {
  $retval$2 = 1;
 } else {
  $0 = ($thrown_type|0)==(0|0);
  if ($0) {
   $retval$2 = 0;
  } else {
   $1 = (___dynamic_cast($thrown_type,1456)|0);
   $cmp = ($1|0)==(0|0);
   if ($cmp) {
    $retval$2 = 0;
   } else {
    $2 = ((($info)) + 4|0);
    ; store8($2,i64_const(0,0),4); store8($2+8|0,i64_const(0,0),4); store8($2+16|0,i64_const(0,0),4); store8($2+24|0,i64_const(0,0),4); store8($2+32|0,i64_const(0,0),4); store8($2+40|0,i64_const(0,0),4); store4($2+48|0,0,4);
    store4($info,$1);
    $static_type = ((($info)) + 8|0);
    store4($static_type,$this);
    $src2dst_offset = ((($info)) + 12|0);
    store4($src2dst_offset,-1);
    $number_of_dst_type = ((($info)) + 48|0);
    store4($number_of_dst_type,1);
    $vtable = load4($1);
    $vfn = ((($vtable)) + 28|0);
    $3 = load4($vfn);
    $4 = load4($adjustedPtr);
    FUNCTION_TABLE_viiii[$3 & 7]($1,$info,$4,1);
    $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
    $5 = load4($path_dst_ptr_to_static_ptr);
    $cmp4 = ($5|0)==(1);
    if ($cmp4) {
     $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
     $6 = load4($dst_ptr_leading_to_static_ptr);
     store4($adjustedPtr,$6);
     $retval$0 = 1;
    } else {
     $retval$0 = 0;
    }
    $retval$2 = $retval$0;
   }
  }
 }
 STACKTOP = sp;return ($retval$2|0);
}
function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $call = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 if ($call) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($info,$dst_ptr,$current_ptr,$path_below);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $add = 0, $call = 0, $call3 = 0, $cmp = 0, $cmp12 = 0, $cmp13 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $is_dst_type_derived_from_static_type = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0;
 var $path_dst_ptr_to_static_ptr = 0, $path_dynamic_ptr_to_dst_ptr = 0, $search_done = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 do {
  if ($call) {
   __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi($info,$current_ptr,$path_below);
  } else {
   $1 = load4($info);
   $call3 = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$1)|0);
   if ($call3) {
    $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
    $2 = load4($dst_ptr_leading_to_static_ptr);
    $cmp = ($2|0)==($current_ptr|0);
    $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
    if (!($cmp)) {
     $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
     $3 = load4($dst_ptr_not_leading_to_static_ptr);
     $cmp5 = ($3|0)==($current_ptr|0);
     if (!($cmp5)) {
      store4($path_dynamic_ptr_to_dst_ptr,$path_below);
      store4($dst_ptr_not_leading_to_static_ptr,$current_ptr);
      $number_to_dst_ptr = ((($info)) + 40|0);
      $4 = load4($number_to_dst_ptr);
      $add = (($4) + 1)|0;
      store4($number_to_dst_ptr,$add);
      $number_to_static_ptr = ((($info)) + 36|0);
      $5 = load4($number_to_static_ptr);
      $cmp12 = ($5|0)==(1);
      if ($cmp12) {
       $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
       $6 = load4($path_dst_ptr_to_static_ptr);
       $cmp13 = ($6|0)==(2);
       if ($cmp13) {
        $search_done = ((($info)) + 54|0);
        store1($search_done,1);
       }
      }
      $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
      store4($is_dst_type_derived_from_static_type,4);
      break;
     }
    }
    $cmp7 = ($path_below|0)==(1);
    if ($cmp7) {
     store4($path_dynamic_ptr_to_dst_ptr,1);
    }
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $call = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 if ($call) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($info,$adjustedPtr,$path_below);
 }
 return;
}
function __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($x,$y) {
 $x = $x|0;
 $y = $y|0;
 var $cmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($x|0)==($y|0);
 return ($cmp|0);
}
function __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($info,$adjustedPtr,$path_below) {
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $add = 0, $cmp = 0, $cmp4 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $number_to_static_ptr = 0, $path_dst_ptr_to_static_ptr = 0, $search_done = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
 $0 = load4($dst_ptr_leading_to_static_ptr);
 $cmp = ($0|0)==(0|0);
 $number_to_static_ptr = ((($info)) + 36|0);
 $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
 do {
  if ($cmp) {
   store4($dst_ptr_leading_to_static_ptr,$adjustedPtr);
   store4($path_dst_ptr_to_static_ptr,$path_below);
   store4($number_to_static_ptr,1);
  } else {
   $cmp4 = ($0|0)==($adjustedPtr|0);
   if (!($cmp4)) {
    $2 = load4($number_to_static_ptr);
    $add = (($2) + 1)|0;
    store4($number_to_static_ptr,$add);
    store4($path_dst_ptr_to_static_ptr,2);
    $search_done = ((($info)) + 54|0);
    store1($search_done,1);
    break;
   }
   $1 = load4($path_dst_ptr_to_static_ptr);
   $cmp7 = ($1|0)==(2);
   if ($cmp7) {
    store4($path_dst_ptr_to_static_ptr,$path_below);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi($info,$current_ptr,$path_below) {
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $cmp = 0, $cmp2 = 0, $path_dynamic_ptr_to_static_ptr = 0, $static_ptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_ptr = ((($info)) + 4|0);
 $0 = load4($static_ptr);
 $cmp = ($0|0)==($current_ptr|0);
 if ($cmp) {
  $path_dynamic_ptr_to_static_ptr = ((($info)) + 28|0);
  $1 = load4($path_dynamic_ptr_to_static_ptr);
  $cmp2 = ($1|0)==(1);
  if (!($cmp2)) {
   store4($path_dynamic_ptr_to_static_ptr,$path_below);
  }
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($info,$dst_ptr,$current_ptr,$path_below) {
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $add = 0, $cmp = 0, $cmp10 = 0, $cmp13 = 0, $cmp18 = 0, $cmp2 = 0, $cmp21 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $found_any_static_type = 0, $found_our_static_ptr = 0, $number_of_dst_type = 0;
 var $number_to_static_ptr = 0, $or$cond = 0, $or$cond19 = 0, $path_dst_ptr_to_static_ptr = 0, $search_done = 0, $static_ptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $found_any_static_type = ((($info)) + 53|0);
 store1($found_any_static_type,1);
 $static_ptr = ((($info)) + 4|0);
 $0 = load4($static_ptr);
 $cmp = ($0|0)==($current_ptr|0);
 do {
  if ($cmp) {
   $found_our_static_ptr = ((($info)) + 52|0);
   store1($found_our_static_ptr,1);
   $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
   $1 = load4($dst_ptr_leading_to_static_ptr);
   $cmp2 = ($1|0)==(0|0);
   $search_done = ((($info)) + 54|0);
   $number_of_dst_type = ((($info)) + 48|0);
   $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
   $number_to_static_ptr = ((($info)) + 36|0);
   if ($cmp2) {
    store4($dst_ptr_leading_to_static_ptr,$dst_ptr);
    store4($path_dst_ptr_to_static_ptr,$path_below);
    store4($number_to_static_ptr,1);
    $2 = load4($number_of_dst_type);
    $cmp5 = ($2|0)==(1);
    $cmp7 = ($path_below|0)==(1);
    $or$cond = $cmp7 & $cmp5;
    if (!($or$cond)) {
     break;
    }
    store1($search_done,1);
    break;
   }
   $cmp10 = ($1|0)==($dst_ptr|0);
   if (!($cmp10)) {
    $6 = load4($number_to_static_ptr);
    $add = (($6) + 1)|0;
    store4($number_to_static_ptr,$add);
    store1($search_done,1);
    break;
   }
   $3 = load4($path_dst_ptr_to_static_ptr);
   $cmp13 = ($3|0)==(2);
   if ($cmp13) {
    store4($path_dst_ptr_to_static_ptr,$path_below);
    $5 = $path_below;
   } else {
    $5 = $3;
   }
   $4 = load4($number_of_dst_type);
   $cmp18 = ($4|0)==(1);
   $cmp21 = ($5|0)==(1);
   $or$cond19 = $cmp21 & $cmp18;
   if ($or$cond19) {
    store1($search_done,1);
   }
  }
 } while(0);
 return;
}
function ___dynamic_cast($static_ptr,$dst_type) {
 $static_ptr = $static_ptr|0;
 $dst_type = $dst_type|0;
 var $$ = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr = 0, $add$ptr$ = 0, $arrayidx = 0;
 var $arrayidx1 = 0, $call = 0, $cmp = 0, $cmp14 = 0, $cmp16 = 0, $cmp19 = 0, $cmp25 = 0, $cmp27 = 0, $cmp30 = 0, $cmp33 = 0, $dst_ptr$0 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $info = 0, $number_of_dst_type = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $or$cond = 0, $or$cond15 = 0, $or$cond16 = 0;
 var $or$cond17 = 0, $path_dst_ptr_to_static_ptr = 0, $path_dynamic_ptr_to_dst_ptr = 0, $path_dynamic_ptr_to_static_ptr = 0, $src2dst_offset5 = 0, $static_ptr3 = 0, $static_type4 = 0, $vfn = 0, $vfn11 = 0, $vtable10 = 0, $vtable7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $info = sp;
 $0 = load4($static_ptr);
 $arrayidx = ((($0)) + -8|0);
 $1 = load4($arrayidx);
 $add$ptr = (($static_ptr) + ($1)|0);
 $arrayidx1 = ((($0)) + -4|0);
 $2 = load4($arrayidx1);
 store4($info,$dst_type);
 $static_ptr3 = ((($info)) + 4|0);
 store4($static_ptr3,$static_ptr);
 $static_type4 = ((($info)) + 8|0);
 store4($static_type4,1472);
 $src2dst_offset5 = ((($info)) + 12|0);
 $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
 $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
 $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
 $path_dynamic_ptr_to_static_ptr = ((($info)) + 28|0);
 $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
 $number_to_dst_ptr = ((($info)) + 40|0);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($2,$dst_type)|0);
 ; store8($src2dst_offset5,i64_const(0,0),4); store8($src2dst_offset5+8|0,i64_const(0,0),4); store8($src2dst_offset5+16|0,i64_const(0,0),4); store8($src2dst_offset5+24|0,i64_const(0,0),4); store8($src2dst_offset5+32|0,i64_const(0,0),4); store2($src2dst_offset5+40|0,0,2); store1($src2dst_offset5+42|0,0,1);
 L1: do {
  if ($call) {
   $number_of_dst_type = ((($info)) + 48|0);
   store4($number_of_dst_type,1);
   $vtable7 = load4($2);
   $vfn = ((($vtable7)) + 20|0);
   $3 = load4($vfn);
   FUNCTION_TABLE_viiiiii[$3 & 3]($2,$info,$add$ptr,$add$ptr,1,0);
   $4 = load4($path_dst_ptr_to_static_ptr);
   $cmp = ($4|0)==(1);
   $add$ptr$ = $cmp ? $add$ptr : 0;
   $dst_ptr$0 = $add$ptr$;
  } else {
   $number_to_static_ptr = ((($info)) + 36|0);
   $vtable10 = load4($2);
   $vfn11 = ((($vtable10)) + 24|0);
   $5 = load4($vfn11);
   FUNCTION_TABLE_viiiii[$5 & 3]($2,$info,$add$ptr,1,0);
   $6 = load4($number_to_static_ptr);
   switch ($6|0) {
   case 0:  {
    $7 = load4($number_to_dst_ptr);
    $cmp14 = ($7|0)==(1);
    $8 = load4($path_dynamic_ptr_to_static_ptr);
    $cmp16 = ($8|0)==(1);
    $or$cond = $cmp14 & $cmp16;
    $9 = load4($path_dynamic_ptr_to_dst_ptr);
    $cmp19 = ($9|0)==(1);
    $or$cond15 = $or$cond & $cmp19;
    $10 = load4($dst_ptr_not_leading_to_static_ptr);
    $$ = $or$cond15 ? $10 : 0;
    $dst_ptr$0 = $$;
    break L1;
    break;
   }
   case 1:  {
    break;
   }
   default: {
    $dst_ptr$0 = 0;
    break L1;
   }
   }
   $11 = load4($path_dst_ptr_to_static_ptr);
   $cmp25 = ($11|0)==(1);
   if (!($cmp25)) {
    $12 = load4($number_to_dst_ptr);
    $cmp27 = ($12|0)==(0);
    $13 = load4($path_dynamic_ptr_to_static_ptr);
    $cmp30 = ($13|0)==(1);
    $or$cond16 = $cmp27 & $cmp30;
    $14 = load4($path_dynamic_ptr_to_dst_ptr);
    $cmp33 = ($14|0)==(1);
    $or$cond17 = $or$cond16 & $cmp33;
    if (!($or$cond17)) {
     $dst_ptr$0 = 0;
     break;
    }
   }
   $15 = load4($dst_ptr_leading_to_static_ptr);
   $dst_ptr$0 = $15;
  }
 } while(0);
 STACKTOP = sp;return ($dst_ptr$0|0);
}
function __ZN10__cxxabiv120__si_class_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $__base_type = 0, $call = 0, $static_type = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 if ($call) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($info,$dst_ptr,$current_ptr,$path_below);
 } else {
  $__base_type = ((($this)) + 8|0);
  $1 = load4($__base_type);
  $vtable = load4($1);
  $vfn = ((($vtable)) + 20|0);
  $2 = load4($vfn);
  FUNCTION_TABLE_viiiiii[$2 & 3]($1,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp);
 }
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__base_type = 0, $add = 0, $call = 0, $call3 = 0, $cmp = 0, $cmp11 = 0;
 var $cmp26 = 0, $cmp27 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $found_any_static_type = 0, $found_our_static_ptr = 0, $is_dst_type_derived_from_static_type = 0, $is_dst_type_derived_from_static_type13$0$off032 = 0, $is_dst_type_derived_from_static_type13$0$off033 = 0, $not$tobool19 = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $path_dst_ptr_to_static_ptr = 0, $path_dynamic_ptr_to_dst_ptr = 0, $search_done = 0, $static_type = 0, $tobool16 = 0, $vfn = 0;
 var $vfn42 = 0, $vtable = 0, $vtable41 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 do {
  if ($call) {
   __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi($info,$current_ptr,$path_below);
  } else {
   $1 = load4($info);
   $call3 = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$1)|0);
   $__base_type = ((($this)) + 8|0);
   if (!($call3)) {
    $12 = load4($__base_type);
    $vtable41 = load4($12);
    $vfn42 = ((($vtable41)) + 24|0);
    $13 = load4($vfn42);
    FUNCTION_TABLE_viiiii[$13 & 3]($12,$info,$current_ptr,$path_below,$use_strcmp);
    break;
   }
   $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
   $2 = load4($dst_ptr_leading_to_static_ptr);
   $cmp = ($2|0)==($current_ptr|0);
   $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
   if (!($cmp)) {
    $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
    $3 = load4($dst_ptr_not_leading_to_static_ptr);
    $cmp5 = ($3|0)==($current_ptr|0);
    if (!($cmp5)) {
     store4($path_dynamic_ptr_to_dst_ptr,$path_below);
     $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
     $4 = load4($is_dst_type_derived_from_static_type);
     $cmp11 = ($4|0)==(4);
     if ($cmp11) {
      break;
     }
     $found_our_static_ptr = ((($info)) + 52|0);
     store1($found_our_static_ptr,0);
     $found_any_static_type = ((($info)) + 53|0);
     store1($found_any_static_type,0);
     $5 = load4($__base_type);
     $vtable = load4($5);
     $vfn = ((($vtable)) + 20|0);
     $6 = load4($vfn);
     FUNCTION_TABLE_viiiiii[$6 & 3]($5,$info,$current_ptr,$current_ptr,1,$use_strcmp);
     $7 = load1($found_any_static_type);
     $tobool16 = ($7<<24>>24)==(0);
     if ($tobool16) {
      $is_dst_type_derived_from_static_type13$0$off032 = 4;
      label = 11;
     } else {
      $8 = load1($found_our_static_ptr);
      $not$tobool19 = ($8<<24>>24)==(0);
      if ($not$tobool19) {
       $is_dst_type_derived_from_static_type13$0$off032 = 3;
       label = 11;
      } else {
       $is_dst_type_derived_from_static_type13$0$off033 = 3;
      }
     }
     if ((label|0) == 11) {
      store4($dst_ptr_not_leading_to_static_ptr,$current_ptr);
      $number_to_dst_ptr = ((($info)) + 40|0);
      $9 = load4($number_to_dst_ptr);
      $add = (($9) + 1)|0;
      store4($number_to_dst_ptr,$add);
      $number_to_static_ptr = ((($info)) + 36|0);
      $10 = load4($number_to_static_ptr);
      $cmp26 = ($10|0)==(1);
      if ($cmp26) {
       $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
       $11 = load4($path_dst_ptr_to_static_ptr);
       $cmp27 = ($11|0)==(2);
       if ($cmp27) {
        $search_done = ((($info)) + 54|0);
        store1($search_done,1);
        $is_dst_type_derived_from_static_type13$0$off033 = $is_dst_type_derived_from_static_type13$0$off032;
       } else {
        $is_dst_type_derived_from_static_type13$0$off033 = $is_dst_type_derived_from_static_type13$0$off032;
       }
      } else {
       $is_dst_type_derived_from_static_type13$0$off033 = $is_dst_type_derived_from_static_type13$0$off032;
      }
     }
     store4($is_dst_type_derived_from_static_type,$is_dst_type_derived_from_static_type13$0$off033);
     break;
    }
   }
   $cmp7 = ($path_below|0)==(1);
   if ($cmp7) {
    store4($path_dynamic_ptr_to_dst_ptr,1);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $__base_type = 0, $call = 0, $static_type = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 if ($call) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($info,$adjustedPtr,$path_below);
 } else {
  $__base_type = ((($this)) + 8|0);
  $1 = load4($__base_type);
  $vtable = load4($1);
  $vfn = ((($vtable)) + 28|0);
  $2 = load4($vfn);
  FUNCTION_TABLE_viiii[$2 & 7]($1,$info,$adjustedPtr,$path_below);
 }
 return;
}
function __ZN10__cxxabiv112_GLOBAL__N_110construct_Ev() {
 var $call = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $call = (_pthread_key_create((11316|0),(26|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  STACKTOP = sp;return;
 } else {
  _abort_message(10129,$vararg_buffer);
  // unreachable;
 }
}
function __ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv($p) {
 $p = $p|0;
 var $0 = 0, $call = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 _free($p);
 $0 = load4(11316);
 $call = (_pthread_setspecific(($0|0),(0|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  STACKTOP = sp;return;
 } else {
  _abort_message(10179,$vararg_buffer);
  // unreachable;
 }
}
function __ZSt9terminatev() {
 var $0 = 0, $1 = i64(), $2 = 0, $and = i64(), $call = 0, $call8 = 0, $cmp = 0, $exception_class = 0, $terminateHandler = 0, $tobool = 0, $tobool1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___cxa_get_globals_fast()|0);
 $tobool = ($call|0)==(0|0);
 if (!($tobool)) {
  $0 = load4($call);
  $tobool1 = ($0|0)==(0|0);
  if (!($tobool1)) {
   $exception_class = ((($0)) + 48|0);
   $1 = load8($exception_class);
   $and = i64_and($1,i64_const(4294967040,4294967295));
   $cmp = i64_eq($and,i64_const(1126902528,1129074247));
   if ($cmp) {
    $terminateHandler = ((($0)) + 12|0);
    $2 = load4($terminateHandler);
    __ZSt11__terminatePFvvE($2);
    // unreachable;
   }
  }
 }
 $call8 = (__ZSt13get_terminatev()|0);
 __ZSt11__terminatePFvvE($call8);
 // unreachable;
}
function __ZSt11__terminatePFvvE($func) {
 $func = $func|0;
 var $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 FUNCTION_TABLE_v[$func & 3]();
 _abort_message(10232,$vararg_buffer);
 // unreachable;
}
function __ZSt13get_terminatev() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(2584);
 $1 = (($0) + 0)|0;
 store4(2584,$1);
 $2 = $0;
 return ($2|0);
}
function __ZNSt9bad_allocD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt9bad_allocD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNKSt9bad_alloc4whatEv($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (10272|0);
}
function __ZNSt9exceptionD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNKSt9exception4whatEv($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (10300|0);
}
function __ZNSt11logic_errorD2Ev($this) {
 $this = $this|0;
 var $__imp_ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(2696));
 $__imp_ = ((($this)) + 4|0);
 __ZN12_GLOBAL__N_114__libcpp_nmstrD2Ev($__imp_);
 return;
}
function __ZNSt11logic_errorD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt11logic_errorD2Ev($this);
 __ZdlPv($this);
 return;
}
function __ZNKSt11logic_error4whatEv($this) {
 $this = $this|0;
 var $__imp_$idx = 0, $__imp_$idx$val = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__imp_$idx = ((($this)) + 4|0);
 $__imp_$idx$val = load4($__imp_$idx);
 $call = (__ZNK12_GLOBAL__N_114__libcpp_nmstr5c_strEv($__imp_$idx$val)|0);
 return ($call|0);
}
function __ZNK12_GLOBAL__N_114__libcpp_nmstr5c_strEv($this$0$0$val) {
 $this$0$0$val = $this$0$0$val|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return ($this$0$0$val|0);
}
function __ZN12_GLOBAL__N_114__libcpp_nmstrD2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $add$ptr = 0, $call = 0, $cmp = 0, $this$idx$val = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $this$idx$val = load4($this);
 $call = (__ZNK12_GLOBAL__N_114__libcpp_nmstr5countEv($this$idx$val)|0);
 $0 = load4($call);
 $1 = (($0) + -1)|0;
 store4($call,$1);
 $2 = (($0) + -1)|0;
 $cmp = ($2|0)<(0);
 if ($cmp) {
  $3 = load4($this);
  $add$ptr = ((($3)) + -12|0);
  __ZdlPv($add$ptr);
 }
 return;
}
function __ZNK12_GLOBAL__N_114__libcpp_nmstr5countEv($this$0$0$val) {
 $this$0$0$val = $this$0$0$val|0;
 var $count = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $count = ((($this$0$0$val)) + -4|0);
 return ($count|0);
}
function __ZNSt13runtime_errorD2Ev($this) {
 $this = $this|0;
 var $__imp_ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(2716));
 $__imp_ = ((($this)) + 4|0);
 __ZN12_GLOBAL__N_114__libcpp_nmstrD2Ev($__imp_);
 return;
}
function __ZNSt13runtime_errorD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt13runtime_errorD2Ev($this);
 __ZdlPv($this);
 return;
}
function __ZNKSt13runtime_error4whatEv($this) {
 $this = $this|0;
 var $__imp_$idx = 0, $__imp_$idx$val = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__imp_$idx = ((($this)) + 4|0);
 $__imp_$idx$val = load4($__imp_$idx);
 $call = (__ZNK12_GLOBAL__N_114__libcpp_nmstr5c_strEv($__imp_$idx$val)|0);
 return ($call|0);
}
function __ZNSt12out_of_rangeD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt11logic_errorD2Ev($this);
 __ZdlPv($this);
 return;
}
function __ZNSt11range_errorD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt13runtime_errorD2Ev($this);
 __ZdlPv($this);
 return;
}
function __ZN10__cxxabiv123__fundamental_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv($this,$thrown_type,$0) {
 $this = $this|0;
 $thrown_type = $thrown_type|0;
 $0 = $0|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$thrown_type)|0);
 return ($call|0);
}
function __ZN10__cxxabiv119__pointer_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv($this,$thrown_type,$adjustedPtr) {
 $this = $this|0;
 $thrown_type = $thrown_type|0;
 $adjustedPtr = $adjustedPtr|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__flags = 0, $__flags4 = 0;
 var $__pointee = 0, $__pointee7 = 0, $and = 0, $call = 0, $call12 = 0, $call8 = 0, $cmp = 0, $cmp19 = 0, $cmp26 = 0, $cmp29 = 0, $dst_ptr_leading_to_static_ptr = 0, $info = 0, $neg = 0, $number_of_dst_type = 0, $path_dst_ptr_to_static_ptr = 0, $retval$0 = 0, $retval$4 = 0, $src2dst_offset = 0, $static_type = 0, $tobool = 0;
 var $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $info = sp;
 $0 = load4($adjustedPtr);
 $1 = load4($0);
 store4($adjustedPtr,$1);
 $call = (__ZNK10__cxxabiv117__pbase_type_info9can_catchEPKNS_16__shim_type_infoERPv($this,$thrown_type)|0);
 if ($call) {
  $retval$4 = 1;
 } else {
  $2 = ($thrown_type|0)==(0|0);
  if ($2) {
   $retval$4 = 0;
  } else {
   $3 = (___dynamic_cast($thrown_type,1608)|0);
   $cmp = ($3|0)==(0|0);
   if ($cmp) {
    $retval$4 = 0;
   } else {
    $__flags = ((($3)) + 8|0);
    $4 = load4($__flags);
    $__flags4 = ((($this)) + 8|0);
    $5 = load4($__flags4);
    $neg = $5 ^ -1;
    $and = $4 & $neg;
    $tobool = ($and|0)==(0);
    if ($tobool) {
     $__pointee = ((($this)) + 12|0);
     $6 = load4($__pointee);
     $__pointee7 = ((($3)) + 12|0);
     $7 = load4($__pointee7);
     $call8 = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($6,$7)|0);
     if ($call8) {
      $retval$4 = 1;
     } else {
      $call12 = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($6,1640)|0);
      if ($call12) {
       $retval$4 = 1;
      } else {
       $8 = ($6|0)==(0|0);
       if ($8) {
        $retval$4 = 0;
       } else {
        $9 = (___dynamic_cast($6,1456)|0);
        $cmp19 = ($9|0)==(0|0);
        if ($cmp19) {
         $retval$4 = 0;
        } else {
         $10 = load4($__pointee7);
         $11 = ($10|0)==(0|0);
         if ($11) {
          $retval$4 = 0;
         } else {
          $12 = (___dynamic_cast($10,1456)|0);
          $cmp26 = ($12|0)==(0|0);
          if ($cmp26) {
           $retval$4 = 0;
          } else {
           $13 = ((($info)) + 4|0);
           ; store8($13,i64_const(0,0),4); store8($13+8|0,i64_const(0,0),4); store8($13+16|0,i64_const(0,0),4); store8($13+24|0,i64_const(0,0),4); store8($13+32|0,i64_const(0,0),4); store8($13+40|0,i64_const(0,0),4); store4($13+48|0,0,4);
           store4($info,$12);
           $static_type = ((($info)) + 8|0);
           store4($static_type,$9);
           $src2dst_offset = ((($info)) + 12|0);
           store4($src2dst_offset,-1);
           $number_of_dst_type = ((($info)) + 48|0);
           store4($number_of_dst_type,1);
           $vtable = load4($12);
           $vfn = ((($vtable)) + 28|0);
           $14 = load4($vfn);
           $15 = load4($adjustedPtr);
           FUNCTION_TABLE_viiii[$14 & 7]($12,$info,$15,1);
           $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
           $16 = load4($path_dst_ptr_to_static_ptr);
           $cmp29 = ($16|0)==(1);
           if ($cmp29) {
            $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
            $17 = load4($dst_ptr_leading_to_static_ptr);
            store4($adjustedPtr,$17);
            $retval$0 = 1;
           } else {
            $retval$0 = 0;
           }
           $retval$4 = $retval$0;
          }
         }
        }
       }
      }
     }
    } else {
     $retval$4 = 0;
    }
   }
  }
 }
 STACKTOP = sp;return ($retval$4|0);
}
function __ZNK10__cxxabiv117__pbase_type_info9can_catchEPKNS_16__shim_type_infoERPv($this,$thrown_type) {
 $this = $this|0;
 $thrown_type = $thrown_type|0;
 var $call = 0, $call2 = 0, $retval$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$thrown_type)|0);
 if ($call) {
  $retval$0 = 1;
 } else {
  $call2 = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($thrown_type,1648)|0);
  $retval$0 = $call2;
 }
 return ($retval$0|0);
}
function __ZN10__cxxabiv121__vmi_class_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__base_count = 0, $__flags = 0, $add$ptr = 0, $and = 0, $and30 = 0, $arraydecay = 0, $call = 0, $cmp = 0, $cmp19 = 0, $cmp40 = 0;
 var $found_any_static_type5 = 0, $found_our_static_ptr2 = 0, $incdec$ptr = 0, $incdec$ptr39 = 0, $p$0 = 0, $path_dst_ptr_to_static_ptr = 0, $search_done = 0, $static_type = 0, $tobool14 = 0, $tobool17 = 0, $tobool22 = 0, $tobool27 = 0, $tobool31 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 if ($call) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($info,$dst_ptr,$current_ptr,$path_below);
 } else {
  $found_our_static_ptr2 = ((($info)) + 52|0);
  $1 = load1($found_our_static_ptr2);
  $found_any_static_type5 = ((($info)) + 53|0);
  $2 = load1($found_any_static_type5);
  $arraydecay = ((($this)) + 16|0);
  $__base_count = ((($this)) + 12|0);
  $3 = load4($__base_count);
  $add$ptr = (((($this)) + 16|0) + ($3<<3)|0);
  store1($found_our_static_ptr2,0);
  store1($found_any_static_type5,0);
  __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($arraydecay,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp);
  $cmp = ($3|0)>(1);
  L4: do {
   if ($cmp) {
    $incdec$ptr = ((($this)) + 24|0);
    $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
    $search_done = ((($info)) + 54|0);
    $__flags = ((($this)) + 8|0);
    $p$0 = $incdec$ptr;
    while(1) {
     $4 = load1($search_done);
     $tobool14 = ($4<<24>>24)==(0);
     if (!($tobool14)) {
      break L4;
     }
     $5 = load1($found_our_static_ptr2);
     $tobool17 = ($5<<24>>24)==(0);
     if ($tobool17) {
      $8 = load1($found_any_static_type5);
      $tobool27 = ($8<<24>>24)==(0);
      if (!($tobool27)) {
       $9 = load4($__flags);
       $and30 = $9 & 1;
       $tobool31 = ($and30|0)==(0);
       if ($tobool31) {
        break L4;
       }
      }
     } else {
      $6 = load4($path_dst_ptr_to_static_ptr);
      $cmp19 = ($6|0)==(1);
      if ($cmp19) {
       break L4;
      }
      $7 = load4($__flags);
      $and = $7 & 2;
      $tobool22 = ($and|0)==(0);
      if ($tobool22) {
       break L4;
      }
     }
     store1($found_our_static_ptr2,0);
     store1($found_any_static_type5,0);
     __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($p$0,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp);
     $incdec$ptr39 = ((($p$0)) + 8|0);
     $cmp40 = ($incdec$ptr39>>>0)<($add$ptr>>>0);
     if ($cmp40) {
      $p$0 = $incdec$ptr39;
     } else {
      break;
     }
    }
   }
  } while(0);
  store1($found_our_static_ptr2,$1);
  store1($found_any_static_type5,$2);
 }
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__base_count = 0, $__flags = 0, $add = 0, $add$ptr = 0, $add$ptr64 = 0, $and = 0, $and35 = 0, $and73 = 0, $and88 = 0, $arraydecay = 0, $call = 0, $call3 = 0, $cmp = 0, $cmp100 = 0, $cmp106 = 0;
 var $cmp11 = 0, $cmp115 = 0, $cmp121 = 0, $cmp16 = 0, $cmp164 = 0, $cmp27 = 0, $cmp44 = 0, $cmp46 = 0, $cmp5 = 0, $cmp7 = 0, $cmp70 = 0, $cmp77 = 0, $cmp85 = 0, $cmp97 = 0, $does_dst_type_point_to_our_static_type$0$off0$lcssa = 0, $does_dst_type_point_to_our_static_type$0$off05 = 0, $does_dst_type_point_to_our_static_type$1$off0 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $found_any_static_type = 0;
 var $found_our_static_ptr = 0, $incdec$ptr = 0, $incdec$ptr105 = 0, $incdec$ptr120 = 0, $incdec$ptr69 = 0, $incdec$ptr84 = 0, $is_dst_type_derived_from_static_type = 0, $is_dst_type_derived_from_static_type13$0$off07 = 0, $is_dst_type_derived_from_static_type13$1$off0 = 0, $is_dst_type_derived_from_static_type13$2$off0 = 0, $is_dst_type_derived_from_static_type13$2$off015 = 0, $is_dst_type_derived_from_static_type13$2$off016 = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $p$06 = 0, $p65$0 = 0, $p65$1 = 0, $p65$2 = 0, $path_dst_ptr_to_static_ptr45 = 0, $path_dynamic_ptr_to_dst_ptr = 0;
 var $search_done48 = 0, $static_type = 0, $tobool111 = 0, $tobool18 = 0, $tobool22 = 0, $tobool25 = 0, $tobool30 = 0, $tobool36 = 0, $tobool74 = 0, $tobool80 = 0, $tobool89 = 0, $tobool93 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 L1: do {
  if ($call) {
   __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi($info,$current_ptr,$path_below);
  } else {
   $1 = load4($info);
   $call3 = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$1)|0);
   $__base_count = ((($this)) + 12|0);
   $path_dst_ptr_to_static_ptr45 = ((($info)) + 24|0);
   $number_to_static_ptr = ((($info)) + 36|0);
   $search_done48 = ((($info)) + 54|0);
   $__flags = ((($this)) + 8|0);
   $arraydecay = ((($this)) + 16|0);
   if (!($call3)) {
    $16 = load4($__base_count);
    $add$ptr64 = (((($this)) + 16|0) + ($16<<3)|0);
    __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($arraydecay,$info,$current_ptr,$path_below,$use_strcmp);
    $incdec$ptr69 = ((($this)) + 24|0);
    $cmp70 = ($16|0)>(1);
    if (!($cmp70)) {
     break;
    }
    $17 = load4($__flags);
    $and73 = $17 & 2;
    $tobool74 = ($and73|0)==(0);
    if ($tobool74) {
     $18 = load4($number_to_static_ptr);
     $cmp77 = ($18|0)==(1);
     if ($cmp77) {
      $p65$0 = $incdec$ptr69;
     } else {
      $and88 = $17 & 1;
      $tobool89 = ($and88|0)==(0);
      if ($tobool89) {
       $p65$2 = $incdec$ptr69;
       while(1) {
        $23 = load1($search_done48);
        $tobool111 = ($23<<24>>24)==(0);
        if (!($tobool111)) {
         break L1;
        }
        $24 = load4($number_to_static_ptr);
        $cmp115 = ($24|0)==(1);
        if ($cmp115) {
         break L1;
        }
        __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($p65$2,$info,$current_ptr,$path_below,$use_strcmp);
        $incdec$ptr120 = ((($p65$2)) + 8|0);
        $cmp121 = ($incdec$ptr120>>>0)<($add$ptr64>>>0);
        if ($cmp121) {
         $p65$2 = $incdec$ptr120;
        } else {
         break L1;
        }
       }
      } else {
       $p65$1 = $incdec$ptr69;
      }
      while(1) {
       $20 = load1($search_done48);
       $tobool93 = ($20<<24>>24)==(0);
       if (!($tobool93)) {
        break L1;
       }
       $21 = load4($number_to_static_ptr);
       $cmp97 = ($21|0)==(1);
       if ($cmp97) {
        $22 = load4($path_dst_ptr_to_static_ptr45);
        $cmp100 = ($22|0)==(1);
        if ($cmp100) {
         break L1;
        }
       }
       __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($p65$1,$info,$current_ptr,$path_below,$use_strcmp);
       $incdec$ptr105 = ((($p65$1)) + 8|0);
       $cmp106 = ($incdec$ptr105>>>0)<($add$ptr64>>>0);
       if ($cmp106) {
        $p65$1 = $incdec$ptr105;
       } else {
        break L1;
       }
      }
     }
    } else {
     $p65$0 = $incdec$ptr69;
    }
    while(1) {
     $19 = load1($search_done48);
     $tobool80 = ($19<<24>>24)==(0);
     if (!($tobool80)) {
      break L1;
     }
     __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($p65$0,$info,$current_ptr,$path_below,$use_strcmp);
     $incdec$ptr84 = ((($p65$0)) + 8|0);
     $cmp85 = ($incdec$ptr84>>>0)<($add$ptr64>>>0);
     if ($cmp85) {
      $p65$0 = $incdec$ptr84;
     } else {
      break L1;
     }
    }
   }
   $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
   $2 = load4($dst_ptr_leading_to_static_ptr);
   $cmp = ($2|0)==($current_ptr|0);
   $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
   if (!($cmp)) {
    $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
    $3 = load4($dst_ptr_not_leading_to_static_ptr);
    $cmp5 = ($3|0)==($current_ptr|0);
    if (!($cmp5)) {
     store4($path_dynamic_ptr_to_dst_ptr,$path_below);
     $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
     $4 = load4($is_dst_type_derived_from_static_type);
     $cmp11 = ($4|0)==(4);
     if ($cmp11) {
      break;
     }
     $5 = load4($__base_count);
     $add$ptr = (((($this)) + 16|0) + ($5<<3)|0);
     $found_our_static_ptr = ((($info)) + 52|0);
     $found_any_static_type = ((($info)) + 53|0);
     $cmp164 = ($5|0)>(0);
     L29: do {
      if ($cmp164) {
       $does_dst_type_point_to_our_static_type$0$off05 = 0;$is_dst_type_derived_from_static_type13$0$off07 = 0;$p$06 = $arraydecay;
       L30: while(1) {
        store1($found_our_static_ptr,0);
        store1($found_any_static_type,0);
        __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($p$06,$info,$current_ptr,$current_ptr,1,$use_strcmp);
        $6 = load1($search_done48);
        $tobool18 = ($6<<24>>24)==(0);
        if (!($tobool18)) {
         $does_dst_type_point_to_our_static_type$0$off0$lcssa = $does_dst_type_point_to_our_static_type$0$off05;$is_dst_type_derived_from_static_type13$2$off0 = $is_dst_type_derived_from_static_type13$0$off07;
         break;
        }
        $7 = load1($found_any_static_type);
        $tobool22 = ($7<<24>>24)==(0);
        do {
         if ($tobool22) {
          $does_dst_type_point_to_our_static_type$1$off0 = $does_dst_type_point_to_our_static_type$0$off05;$is_dst_type_derived_from_static_type13$1$off0 = $is_dst_type_derived_from_static_type13$0$off07;
         } else {
          $8 = load1($found_our_static_ptr);
          $tobool25 = ($8<<24>>24)==(0);
          if ($tobool25) {
           $11 = load4($__flags);
           $and35 = $11 & 1;
           $tobool36 = ($and35|0)==(0);
           if ($tobool36) {
            $does_dst_type_point_to_our_static_type$0$off0$lcssa = $does_dst_type_point_to_our_static_type$0$off05;$is_dst_type_derived_from_static_type13$2$off0 = 1;
            break L30;
           } else {
            $does_dst_type_point_to_our_static_type$1$off0 = $does_dst_type_point_to_our_static_type$0$off05;$is_dst_type_derived_from_static_type13$1$off0 = 1;
            break;
           }
          }
          $9 = load4($path_dst_ptr_to_static_ptr45);
          $cmp27 = ($9|0)==(1);
          if ($cmp27) {
           label = 22;
           break L29;
          }
          $10 = load4($__flags);
          $and = $10 & 2;
          $tobool30 = ($and|0)==(0);
          if ($tobool30) {
           label = 22;
           break L29;
          } else {
           $does_dst_type_point_to_our_static_type$1$off0 = 1;$is_dst_type_derived_from_static_type13$1$off0 = 1;
          }
         }
        } while(0);
        $incdec$ptr = ((($p$06)) + 8|0);
        $cmp16 = ($incdec$ptr>>>0)<($add$ptr>>>0);
        if ($cmp16) {
         $does_dst_type_point_to_our_static_type$0$off05 = $does_dst_type_point_to_our_static_type$1$off0;$is_dst_type_derived_from_static_type13$0$off07 = $is_dst_type_derived_from_static_type13$1$off0;$p$06 = $incdec$ptr;
        } else {
         $does_dst_type_point_to_our_static_type$0$off0$lcssa = $does_dst_type_point_to_our_static_type$1$off0;$is_dst_type_derived_from_static_type13$2$off0 = $is_dst_type_derived_from_static_type13$1$off0;
         break;
        }
       }
       if ($does_dst_type_point_to_our_static_type$0$off0$lcssa) {
        $is_dst_type_derived_from_static_type13$2$off016 = $is_dst_type_derived_from_static_type13$2$off0;
        label = 21;
       } else {
        $is_dst_type_derived_from_static_type13$2$off015 = $is_dst_type_derived_from_static_type13$2$off0;
        label = 18;
       }
      } else {
       $is_dst_type_derived_from_static_type13$2$off015 = 0;
       label = 18;
      }
     } while(0);
     if ((label|0) == 18) {
      store4($dst_ptr_not_leading_to_static_ptr,$current_ptr);
      $number_to_dst_ptr = ((($info)) + 40|0);
      $12 = load4($number_to_dst_ptr);
      $add = (($12) + 1)|0;
      store4($number_to_dst_ptr,$add);
      $13 = load4($number_to_static_ptr);
      $cmp44 = ($13|0)==(1);
      if ($cmp44) {
       $14 = load4($path_dst_ptr_to_static_ptr45);
       $cmp46 = ($14|0)==(2);
       if ($cmp46) {
        store1($search_done48,1);
        if ($is_dst_type_derived_from_static_type13$2$off015) {
         label = 22;
        } else {
         $15 = 4;
        }
       } else {
        $is_dst_type_derived_from_static_type13$2$off016 = $is_dst_type_derived_from_static_type13$2$off015;
        label = 21;
       }
      } else {
       $is_dst_type_derived_from_static_type13$2$off016 = $is_dst_type_derived_from_static_type13$2$off015;
       label = 21;
      }
     }
     if ((label|0) == 21) {
      if ($is_dst_type_derived_from_static_type13$2$off016) {
       label = 22;
      } else {
       $15 = 4;
      }
     }
     if ((label|0) == 22) {
      $15 = 3;
     }
     store4($is_dst_type_derived_from_static_type,$15);
     break;
    }
   }
   $cmp7 = ($path_below|0)==(1);
   if ($cmp7) {
    store4($path_dynamic_ptr_to_dst_ptr,1);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $__base_count = 0, $add$ptr = 0, $arraydecay = 0, $call = 0, $cmp = 0, $cmp7 = 0, $incdec$ptr = 0, $incdec$ptr6 = 0, $p$0 = 0, $search_done = 0, $static_type = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0)|0);
 L1: do {
  if ($call) {
   __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($info,$adjustedPtr,$path_below);
  } else {
   $arraydecay = ((($this)) + 16|0);
   $__base_count = ((($this)) + 12|0);
   $1 = load4($__base_count);
   $add$ptr = (((($this)) + 16|0) + ($1<<3)|0);
   __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($arraydecay,$info,$adjustedPtr,$path_below);
   $cmp = ($1|0)>(1);
   if ($cmp) {
    $incdec$ptr = ((($this)) + 24|0);
    $search_done = ((($info)) + 54|0);
    $p$0 = $incdec$ptr;
    while(1) {
     __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($p$0,$info,$adjustedPtr,$path_below);
     $2 = load1($search_done);
     $tobool = ($2<<24>>24)==(0);
     if (!($tobool)) {
      break L1;
     }
     $incdec$ptr6 = ((($p$0)) + 8|0);
     $cmp7 = ($incdec$ptr6>>>0)<($add$ptr>>>0);
     if ($cmp7) {
      $p$0 = $incdec$ptr6;
     } else {
      break;
     }
    }
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $__offset_flags = 0, $add$ptr = 0, $add$ptr4 = 0, $and = 0, $and6 = 0, $cond = 0, $offset_to_base$0 = 0, $shr = 0, $tobool = 0, $tobool7 = 0, $vfn = 0, $vtable3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__offset_flags = ((($this)) + 4|0);
 $0 = load4($__offset_flags);
 $shr = $0 >> 8;
 $and = $0 & 1;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $offset_to_base$0 = $shr;
 } else {
  $1 = load4($adjustedPtr);
  $add$ptr = (($1) + ($shr)|0);
  $2 = load4($add$ptr);
  $offset_to_base$0 = $2;
 }
 $3 = load4($this);
 $vtable3 = load4($3);
 $vfn = ((($vtable3)) + 28|0);
 $4 = load4($vfn);
 $add$ptr4 = (($adjustedPtr) + ($offset_to_base$0)|0);
 $and6 = $0 & 2;
 $tobool7 = ($and6|0)!=(0);
 $cond = $tobool7 ? $path_below : 2;
 FUNCTION_TABLE_viiii[$4 & 7]($3,$info,$add$ptr4,$cond);
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $__offset_flags = 0, $add$ptr = 0, $add$ptr4 = 0, $and = 0, $and6 = 0, $cond = 0, $offset_to_base$0 = 0, $shr = 0, $tobool = 0, $tobool7 = 0, $vfn = 0, $vtable3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__offset_flags = ((($this)) + 4|0);
 $0 = load4($__offset_flags);
 $shr = $0 >> 8;
 $and = $0 & 1;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $offset_to_base$0 = $shr;
 } else {
  $1 = load4($current_ptr);
  $add$ptr = (($1) + ($shr)|0);
  $2 = load4($add$ptr);
  $offset_to_base$0 = $2;
 }
 $3 = load4($this);
 $vtable3 = load4($3);
 $vfn = ((($vtable3)) + 20|0);
 $4 = load4($vfn);
 $add$ptr4 = (($current_ptr) + ($offset_to_base$0)|0);
 $and6 = $0 & 2;
 $tobool7 = ($and6|0)!=(0);
 $cond = $tobool7 ? $path_below : 2;
 FUNCTION_TABLE_viiiiii[$4 & 3]($3,$info,$dst_ptr,$add$ptr4,$cond,$use_strcmp);
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $__offset_flags = 0, $add$ptr = 0, $add$ptr4 = 0, $and = 0, $and6 = 0, $cond = 0, $offset_to_base$0 = 0, $shr = 0, $tobool = 0, $tobool7 = 0, $vfn = 0, $vtable3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__offset_flags = ((($this)) + 4|0);
 $0 = load4($__offset_flags);
 $shr = $0 >> 8;
 $and = $0 & 1;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $offset_to_base$0 = $shr;
 } else {
  $1 = load4($current_ptr);
  $add$ptr = (($1) + ($shr)|0);
  $2 = load4($add$ptr);
  $offset_to_base$0 = $2;
 }
 $3 = load4($this);
 $vtable3 = load4($3);
 $vfn = ((($vtable3)) + 24|0);
 $4 = load4($vfn);
 $add$ptr4 = (($current_ptr) + ($offset_to_base$0)|0);
 $and6 = $0 & 2;
 $tobool7 = ($and6|0)!=(0);
 $cond = $tobool7 ? $path_below : 2;
 FUNCTION_TABLE_viiiii[$4 & 3]($3,$info,$add$ptr4,$cond,$use_strcmp);
 return;
}
function ___cxa_guard_acquire() {
 var $0 = 0, $cmp = 0, $retval$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load1(10688);
 $cmp = ($0<<24>>24)==(1);
 if ($cmp) {
  $retval$0 = 0;
 } else {
  store1(10688,1);
  $retval$0 = 1;
 }
 return ($retval$0|0);
}
function __ZNSt9bad_allocC2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(2676));
 return;
}
function __ZSt15get_new_handlerv() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(11320);
 $1 = (($0) + 0)|0;
 store4(11320,$1);
 $2 = $0;
 return ($2|0);
}
function ___cxa_can_catch($catchType,$excpType,$thrown) {
 $catchType = $catchType|0;
 $excpType = $excpType|0;
 $thrown = $thrown|0;
 var $0 = 0, $1 = 0, $2 = 0, $call = 0, $conv = 0, $temp = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $temp = sp;
 $0 = load4($thrown);
 store4($temp,$0);
 $vtable = load4($catchType);
 $vfn = ((($vtable)) + 16|0);
 $1 = load4($vfn);
 $call = (FUNCTION_TABLE_iiii[$1 & 31]($catchType,$excpType,$temp)|0);
 $conv = $call&1;
 if ($call) {
  $2 = load4($temp);
  store4($thrown,$2);
 }
 STACKTOP = sp;return ($conv|0);
}
function ___cxa_is_pointer_type($type) {
 $type = $type|0;
 var $0 = 0, $1 = 0, $2 = 0, $conv = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($type|0)==(0|0);
 if ($0) {
  $2 = 0;
 } else {
  $1 = (___dynamic_cast($type,1608)|0);
  $phitmp = ($1|0)!=(0|0);
  $2 = $phitmp;
 }
 $conv = $2&1;
 return ($conv|0);
}
function runPostSets() {
}
function _memset(ptr, value, num) {
    ptr = ptr|0; value = value|0; num = num|0;
    var end = 0, aligned_end = 0, block_aligned_end = 0, value4 = 0;
    end = (ptr + num)|0;

    value = value & 0xff;
    if ((num|0) >= 67 /* 64 bytes for an unrolled loop + 3 bytes for unaligned head*/) {
      while ((ptr&3) != 0) {
        HEAP8[((ptr)>>0)]=value;
        ptr = (ptr+1)|0;
      }

      aligned_end = (end & -4)|0;
      block_aligned_end = (aligned_end - 64)|0;
      value4 = value | (value << 8) | (value << 16) | (value << 24);

      while((ptr|0) <= (block_aligned_end|0)) {
        HEAP32[((ptr)>>2)]=value4;
        HEAP32[(((ptr)+(4))>>2)]=value4;
        HEAP32[(((ptr)+(8))>>2)]=value4;
        HEAP32[(((ptr)+(12))>>2)]=value4;
        HEAP32[(((ptr)+(16))>>2)]=value4;
        HEAP32[(((ptr)+(20))>>2)]=value4;
        HEAP32[(((ptr)+(24))>>2)]=value4;
        HEAP32[(((ptr)+(28))>>2)]=value4;
        HEAP32[(((ptr)+(32))>>2)]=value4;
        HEAP32[(((ptr)+(36))>>2)]=value4;
        HEAP32[(((ptr)+(40))>>2)]=value4;
        HEAP32[(((ptr)+(44))>>2)]=value4;
        HEAP32[(((ptr)+(48))>>2)]=value4;
        HEAP32[(((ptr)+(52))>>2)]=value4;
        HEAP32[(((ptr)+(56))>>2)]=value4;
        HEAP32[(((ptr)+(60))>>2)]=value4;
        ptr = (ptr + 64)|0;
      }

      while ((ptr|0) < (aligned_end|0) ) {
        HEAP32[((ptr)>>2)]=value4;
        ptr = (ptr+4)|0;
      }
    }
    // The remaining bytes.
    while ((ptr|0) < (end|0)) {
      HEAP8[((ptr)>>0)]=value;
      ptr = (ptr+1)|0;
    }
    return (end-num)|0;
}
function _memcpy(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    var aligned_dest_end = 0;
    var block_aligned_dest_end = 0;
    var dest_end = 0;
    // Test against a benchmarked cutoff limit for when HEAPU8.set() becomes faster to use.
    if ((num|0) >=
      8192
    ) {
      return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
    }

    ret = dest|0;
    dest_end = (dest + num)|0;
    if ((dest&3) == (src&3)) {
      // The initial unaligned < 4-byte front.
      while (dest & 3) {
        if ((num|0) == 0) return ret|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      aligned_dest_end = (dest_end & -4)|0;
      block_aligned_dest_end = (aligned_dest_end - 64)|0;
      while ((dest|0) <= (block_aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        HEAP32[(((dest)+(4))>>2)]=((HEAP32[(((src)+(4))>>2)])|0);
        HEAP32[(((dest)+(8))>>2)]=((HEAP32[(((src)+(8))>>2)])|0);
        HEAP32[(((dest)+(12))>>2)]=((HEAP32[(((src)+(12))>>2)])|0);
        HEAP32[(((dest)+(16))>>2)]=((HEAP32[(((src)+(16))>>2)])|0);
        HEAP32[(((dest)+(20))>>2)]=((HEAP32[(((src)+(20))>>2)])|0);
        HEAP32[(((dest)+(24))>>2)]=((HEAP32[(((src)+(24))>>2)])|0);
        HEAP32[(((dest)+(28))>>2)]=((HEAP32[(((src)+(28))>>2)])|0);
        HEAP32[(((dest)+(32))>>2)]=((HEAP32[(((src)+(32))>>2)])|0);
        HEAP32[(((dest)+(36))>>2)]=((HEAP32[(((src)+(36))>>2)])|0);
        HEAP32[(((dest)+(40))>>2)]=((HEAP32[(((src)+(40))>>2)])|0);
        HEAP32[(((dest)+(44))>>2)]=((HEAP32[(((src)+(44))>>2)])|0);
        HEAP32[(((dest)+(48))>>2)]=((HEAP32[(((src)+(48))>>2)])|0);
        HEAP32[(((dest)+(52))>>2)]=((HEAP32[(((src)+(52))>>2)])|0);
        HEAP32[(((dest)+(56))>>2)]=((HEAP32[(((src)+(56))>>2)])|0);
        HEAP32[(((dest)+(60))>>2)]=((HEAP32[(((src)+(60))>>2)])|0);
        dest = (dest+64)|0;
        src = (src+64)|0;
      }
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    } else {
      // In the unaligned copy case, unroll a bit as well.
      aligned_dest_end = (dest_end - 4)|0;
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        HEAP8[(((dest)+(1))>>0)]=((HEAP8[(((src)+(1))>>0)])|0);
        HEAP8[(((dest)+(2))>>0)]=((HEAP8[(((src)+(2))>>0)])|0);
        HEAP8[(((dest)+(3))>>0)]=((HEAP8[(((src)+(3))>>0)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    }
    // The remaining unaligned < 4 byte tail.
    while ((dest|0) < (dest_end|0)) {
      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      dest = (dest+1)|0;
      src = (src+1)|0;
    }
    return ret|0;
}
function _sbrk(increment) {
    increment = increment|0;
    var oldDynamicTop = 0;
    var oldDynamicTopOnChange = 0;
    var newDynamicTop = 0;
    var totalMemory = 0;
    increment = ((increment + 15) & -16)|0;
    oldDynamicTop = HEAP32[DYNAMICTOP_PTR>>2]|0;
    newDynamicTop = oldDynamicTop + increment | 0;

    if (((increment|0) > 0 & (newDynamicTop|0) < (oldDynamicTop|0)) // Detect and fail if we would wrap around signed 32-bit int.
      | (newDynamicTop|0) < 0) { // Also underflow, sbrk() should be able to be used to subtract.
      abortOnCannotGrowMemory()|0;
      ___setErrNo(12);
      return -1;
    }

    HEAP32[DYNAMICTOP_PTR>>2] = newDynamicTop;
    totalMemory = getTotalMemory()|0;
    if ((newDynamicTop|0) > (totalMemory|0)) {
      if ((enlargeMemory()|0) == 0) {
        HEAP32[DYNAMICTOP_PTR>>2] = oldDynamicTop;
        ___setErrNo(12);
        return -1;
      }
    }
    return oldDynamicTop|0;
}
function _memmove(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    if (((src|0) < (dest|0)) & ((dest|0) < ((src + num)|0))) {
      // Unlikely case: Copy backwards in a safe manner
      ret = dest;
      src = (src + num)|0;
      dest = (dest + num)|0;
      while ((num|0) > 0) {
        dest = (dest - 1)|0;
        src = (src - 1)|0;
        num = (num - 1)|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      }
      dest = ret;
    } else {
      _memcpy(dest, src, num) | 0;
    }
    return dest | 0;
}
function _llvm_bswap_i32(x) {
    x = x|0;
    return (((x&0xff)<<24) | (((x>>8)&0xff)<<16) | (((x>>16)&0xff)<<8) | (x>>>24))|0;
}

  
function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&31](a1|0,a2|0,a3|0)|0;
}


function dynCall_viiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  FUNCTION_TABLE_viiiii[index&3](a1|0,a2|0,a3|0,a4|0,a5|0);
}


function dynCall_i(index) {
  index = index|0;
  
  return FUNCTION_TABLE_i[index&3]()|0;
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&31](a1|0);
}


function dynCall_vii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  FUNCTION_TABLE_vii[index&7](a1|0,a2|0);
}


function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&31](a1|0)|0;
}


function dynCall_viii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  FUNCTION_TABLE_viii[index&7](a1|0,a2|0,a3|0);
}


function dynCall_v(index) {
  index = index|0;
  
  FUNCTION_TABLE_v[index&3]();
}


function dynCall_iiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0; a6=a6|0; a7=a7|0; a8=a8|0;
  return FUNCTION_TABLE_iiiiiiiii[index&7](a1|0,a2|0,a3|0,a4|0,a5|0,a6|0,a7|0,a8|0)|0;
}


function dynCall_iiiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  return FUNCTION_TABLE_iiiii[index&7](a1|0,a2|0,a3|0,a4|0)|0;
}


function dynCall_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0; a6=a6|0;
  FUNCTION_TABLE_viiiiii[index&3](a1|0,a2|0,a3|0,a4|0,a5|0,a6|0);
}


function dynCall_iii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  return FUNCTION_TABLE_iii[index&15](a1|0,a2|0)|0;
}


function dynCall_iiiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  return FUNCTION_TABLE_iiiiii[index&7](a1|0,a2|0,a3|0,a4|0,a5|0)|0;
}


function dynCall_viiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  FUNCTION_TABLE_viiii[index&7](a1|0,a2|0,a3|0,a4|0);
}

function b0(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; abort(0);return 0;
}
function b1(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; abort(1);
}
function b2() {
 ; abort(2);return 0;
}
function b3(p0) {
 p0 = p0|0; abort(3);
}
function b4(p0,p1) {
 p0 = p0|0;p1 = p1|0; abort(4);
}
function b5(p0) {
 p0 = p0|0; abort(5);return 0;
}
function b6(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; abort(6);
}
function b7() {
 ; abort(7);
}
function b8(p0,p1,p2,p3,p4,p5,p6,p7) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0;p5 = p5|0;p6 = p6|0;p7 = p7|0; abort(8);return 0;
}
function b9(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; abort(9);return 0;
}
function b10(p0,p1,p2,p3,p4,p5) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0;p5 = p5|0; abort(10);
}
function b11(p0,p1) {
 p0 = p0|0;p1 = p1|0; abort(11);return 0;
}
function b12(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; abort(12);return 0;
}
function b13(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; abort(13);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiii = [b0,___stdio_write,___stdio_seek,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEbEE6invokeEPFjSA_bEPNS0_11BindingTypeIS8_EUt_Eb,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKjEE6invokeEPFjSA_SC_EPNS0_11BindingTypeIS8_EUt_Ej,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEESA_EE6invokeEPFjSA_SA_EPNS0_11BindingTypeIS8_EUt_ESH_,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEEEE6invokeEPFjSA_SN_EPNS0_11BindingTypeIS8_EUt_EPSL_,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjSA_SF_EPNS0_11BindingTypeIS8_EUt_EPSD_,__Z5h_sdnRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEERKj,__Z5h_sdtRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEES7_,__Z5h_sdcRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEERKNS_6vectorIjNS3_IjEEEE,__Z5h_elmRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEEi,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__23mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEESA_NS3_4lessISA_EENS8_INS3_4pairIKSA_SA_EEEEEERSE_ES2_SJ_JSK_EE6invokeEPSM_PSH_PNS0_11BindingTypeISA_EUt_E,__ZN10emscripten8internal15FunctionInvokerIPFNS_3valERKNSt3__26vectorIjNS3_9allocatorIjEEEEjES2_S9_JjEE6invokeEPSB_PS7_j,__ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3setERS6_jRKj,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0];
var FUNCTION_TABLE_viiiii = [b1,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib];
var FUNCTION_TABLE_i = [b2,__ZN10emscripten8internal12operator_newINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEEEPT_DpOT0_,__ZN10emscripten8internal12operator_newINSt3__26vectorIjNS2_9allocatorIjEEEEJEEEPT_DpOT0_,b2];
var FUNCTION_TABLE_vi = [b3,__ZNSt9exceptionD2Ev,__ZNSt3__217bad_function_callD0Ev,__ZNSt3__27codecvtIwc11__mbstate_tED2Ev,__ZNSt3__212codecvt_utf8IwLm1114111ELNS_12codecvt_modeE0EED0Ev,__ZNSt3__26locale5facet16__on_zero_sharedEv,__ZNSt3__27codecvtIwc11__mbstate_tED0Ev,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,__ZN10__cxxabiv120__si_class_type_infoD0Ev,__ZNSt9bad_allocD2Ev,__ZNSt9bad_allocD0Ev,__ZNSt11logic_errorD2Ev,__ZNSt11logic_errorD0Ev,__ZNSt13runtime_errorD2Ev,__ZNSt13runtime_errorD0Ev,__ZNSt12out_of_rangeD0Ev,__ZNSt11range_errorD0Ev,__ZN10__cxxabiv123__fundamental_type_infoD0Ev,__ZN10__cxxabiv119__pointer_type_infoD0Ev,__ZN10__cxxabiv121__vmi_class_type_infoD0Ev,__ZN10emscripten8internal14raw_destructorINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEvPT_,__ZN10emscripten8internal14raw_destructorINSt3__26vectorIjNS2_9allocatorIjEEEEEEvPT_,__Z14deleteVNodePtrRKj,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv,b3,b3
,b3,b3,b3];
var FUNCTION_TABLE_vii = [b4,__ZNSt3__26vectorIjNS_9allocatorIjEEE9push_backERKj,__ZN10emscripten8internal7InvokerIvJRKjEE6invokeEPFvS3_Ej,__Z14removeChildPtrRKjS0_,__Z8patchPtrRKjS0_,b4,b4,b4];
var FUNCTION_TABLE_ii = [b5,__ZNKSt9exception4whatEv,__ZNKSt3__214__codecvt_utf8IwE11do_encodingEv,__ZNKSt3__214__codecvt_utf8IwE16do_always_noconvEv,__ZNKSt3__214__codecvt_utf8IwE13do_max_lengthEv,___stdio_close,__ZNKSt3__27codecvtIwc11__mbstate_tE11do_encodingEv,__ZNKSt3__27codecvtIwc11__mbstate_tE16do_always_noconvEv,__ZNKSt3__27codecvtIwc11__mbstate_tE13do_max_lengthEv,__ZNKSt9bad_alloc4whatEv,__ZNKSt11logic_error4whatEv,__ZNKSt13runtime_error4whatEv,__Z3h_sRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEE,__ZN10emscripten8internal13getActualTypeINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEJEE6invokeEPFSH_vE,__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES6_NS_4lessIS6_EENS4_INS_4pairIKS6_S6_EEEEE4sizeEv,__ZN10emscripten8internal13getActualTypeINSt3__26vectorIjNS2_9allocatorIjEEEEEEPKvPT_,__ZN10emscripten8internal7InvokerIPNSt3__26vectorIjNS2_9allocatorIjEEEEJEE6invokeEPFS7_vE,__ZNKSt3__26vectorIjNS_9allocatorIjEEE4sizeEv,__Z7getNodeRKj,b5,b5,b5,b5,b5,b5,b5,b5,b5
,b5,b5,b5];
var FUNCTION_TABLE_viii = [b6,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3getERKSG_RSD_,__ZN10emscripten8internal9MapAccessINSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEE3setERSG_RSD_SJ_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvRKjEvPS6_JS8_EE6invokeERKSA_SB_j,__ZNSt3__26vectorIjNS_9allocatorIjEEE6resizeEjRKj,__ZN10emscripten8internal12VectorAccessINSt3__26vectorIjNS2_9allocatorIjEEEEE3getERKS6_j,__ZN10emscripten8internal7InvokerIvJRKjS3_EE6invokeEPFvS3_S3_Ejj,__Z15replaceChildPtrRKjS0_S0_];
var FUNCTION_TABLE_v = [b7,__ZL25default_terminate_handlerv,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b7];
var FUNCTION_TABLE_iiiiiiiii = [b8,__ZNKSt3__214__codecvt_utf8IwE6do_outER11__mbstate_tPKwS5_RS5_PcS7_RS7_,__ZNKSt3__214__codecvt_utf8IwE5do_inER11__mbstate_tPKcS5_RS5_PwS7_RS7_,__ZNKSt3__27codecvtIwc11__mbstate_tE6do_outERS1_PKwS5_RS5_PcS7_RS7_,__ZNKSt3__27codecvtIwc11__mbstate_tE5do_inERS1_PKcS5_RS5_PwS7_RS7_,b8,b8,b8];
var FUNCTION_TABLE_iiiii = [b9,__ZN10emscripten8internal7InvokerINS_3valEJRKjRKNSt3__212basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEES2_EE6invokeEPFS2_S4_SD_S2_EjPNS0_11BindingTypeISB_EUt_EPNS0_7_EM_VALE,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEERKjEE6invokeEPFjSA_SN_SP_EPNS0_11BindingTypeIS8_EUt_EPSL_j,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEESA_EE6invokeEPFjSA_SN_SA_EPNS0_11BindingTypeIS8_EUt_EPSL_SU_,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEERKNS2_6vectorIjNS6_IjEEEEEE6invokeEPFjSA_SN_SS_EPNS0_11BindingTypeIS8_EUt_EPSL_PSQ_,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEERKNS2_3mapINS3_IcNS4_IcEENS6_IcEEEESE_NS2_4lessISE_EENS6_INS2_4pairIKSE_SE_EEEEEEiEE6invokeEPFjSA_SN_iEPNS0_11BindingTypeIS8_EUt_EPSL_i,__ZN10emscripten8internal15FunctionInvokerIPFbRNSt3__26vectorIjNS2_9allocatorIjEEEEjRKjEbS7_JjS9_EE6invokeEPSB_PS6_jj,b9];
var FUNCTION_TABLE_viiiiii = [b10,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib];
var FUNCTION_TABLE_iii = [b11,__ZN10emscripten8internal7InvokerIjJRKNSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEEE6invokeEPFjSA_EPNS0_11BindingTypeIS8_EUt_E,__Z4h_tiRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEEb,__Z4h_snRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKj,__Z4h_stRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEES7_,__Z4h_sdRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_3mapINS0_IcNS1_IcEENS3_IcEEEESB_NS_4lessISB_EENS3_INS_4pairIKSB_SB_EEEEEE,__Z4h_scRKNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEEERKNS_6vectorIjNS3_IjEEEE,__ZN10emscripten8internal13MethodInvokerIMNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEEKFjvEjPKSG_JEE6invokeERKSI_SK_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEKFjvEjPKS6_JEE6invokeERKS8_SA_,__ZN10emscripten8internal7InvokerIiJRKjEE6invokeEPFiS3_Ej,b11,b11,b11,b11,b11,b11];
var FUNCTION_TABLE_iiiiii = [b12,__ZNKSt3__214__codecvt_utf8IwE10do_unshiftER11__mbstate_tPcS4_RS4_,__ZNKSt3__214__codecvt_utf8IwE9do_lengthER11__mbstate_tPKcS5_j,__ZNKSt3__27codecvtIwc11__mbstate_tE10do_unshiftERS1_PcS4_RS4_,__ZNKSt3__27codecvtIwc11__mbstate_tE9do_lengthERS1_PKcS5_j,b12,b12,b12];
var FUNCTION_TABLE_viiii = [b13,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZN6asmdom16functionCallbackERKjRKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEN10emscripten3valE,__ZN10emscripten8internal15FunctionInvokerIPFvRNSt3__23mapINS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEES9_NS2_4lessIS9_EENS7_INS2_4pairIKS9_S9_EEEEEERSD_SI_EvSH_JSI_SI_EE6invokeEPSK_PSG_PNS0_11BindingTypeIS9_EUt_ESR_,__ZN10emscripten8internal13MethodInvokerIMNSt3__26vectorIjNS2_9allocatorIjEEEEFvjRKjEvPS6_JjS8_EE6invokeERKSA_SB_jj,__ZN10emscripten8internal7InvokerIvJRKjS3_S3_EE6invokeEPFvS3_S3_S3_Ejjj];

  return { _llvm_bswap_i32: _llvm_bswap_i32, setThrew: setThrew, ___cxa_is_pointer_type: ___cxa_is_pointer_type, _memset: _memset, _sbrk: _sbrk, _memcpy: _memcpy, stackAlloc: stackAlloc, __GLOBAL__sub_I_asm_dom_cpp: __GLOBAL__sub_I_asm_dom_cpp, getTempRet0: getTempRet0, __GLOBAL__sub_I_bind_cpp: __GLOBAL__sub_I_bind_cpp, setTempRet0: setTempRet0, _emscripten_get_global_libc: _emscripten_get_global_libc, ___getTypeName: ___getTypeName, __GLOBAL__sub_I_index_cpp: __GLOBAL__sub_I_index_cpp, stackSave: stackSave, ___cxa_can_catch: ___cxa_can_catch, _free: _free, runPostSets: runPostSets, establishStackSpace: establishStackSpace, _memmove: _memmove, stackRestore: stackRestore, _malloc: _malloc, _emscripten_replace_memory: _emscripten_replace_memory, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_i: dynCall_i, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiiiiiii: dynCall_iiiiiiiii, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
;