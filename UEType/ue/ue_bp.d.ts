/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: 9FA413A240D8605756307DB3CCEE61E4
    namespace Game.TopDown.Blueprints.BP_TopDownCharacter {
        class BP_TopDownCharacter_C extends UE.MelancholyEchoCharacter {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_TopDownCharacter_C;
            static Load(InName: string): BP_TopDownCharacter_C;
        
            __tid_BP_TopDownCharacter_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1C959A324E3A2875566047BE6A35E5BA
    namespace Game.TopDown.Blueprints.BP_TopDownPlayerController {
        class BP_TopDownPlayerController_C extends UE.MelancholyEchoPlayerController {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_TopDownPlayerController_C;
            static Load(InName: string): BP_TopDownPlayerController_C;
        
            __tid_BP_TopDownPlayerController_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7B7D15D645E3A2E94B557BBACCFA9D39
    namespace Game.Characters.Mannequins.Animations.ABP_Manny {
        class AnimBlueprintGeneratedMutableData extends UE.AnimBlueprintMutableData {
            constructor();
            constructor(__FloatProperty: number);
            __FloatProperty: number;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedMutableData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7B7D15D645E3A2E94B557BBACCFA9D39
    namespace Game.Characters.Mannequins.Animations.ABP_Manny {
        class ABP_Manny_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            __AnimBlueprintMutables: UE.Game.Characters.Mannequins.Animations.ABP_Manny.AnimBlueprintGeneratedMutableData;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_TransitionResult_7: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_6: UE.AnimNode_TransitionResult;
            AnimGraphNode_BlendSpacePlayer: UE.AnimNode_BlendSpacePlayer;
            AnimGraphNode_StateResult_5: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_3: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_4: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine_1: UE.AnimNode_StateMachine;
            AnimGraphNode_SaveCachedPose: UE.AnimNode_SaveCachedPose;
            AnimGraphNode_TransitionResult_5: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_4: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_3: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_2: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_1: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult: UE.AnimNode_TransitionResult;
            AnimGraphNode_ApplyAdditive: UE.AnimNode_ApplyAdditive;
            AnimGraphNode_UseCachedPose_1: UE.AnimNode_UseCachedPose;
            AnimGraphNode_SequencePlayer_2: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_3: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_1: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_2: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_1: UE.AnimNode_StateResult;
            AnimGraphNode_UseCachedPose: UE.AnimNode_UseCachedPose;
            AnimGraphNode_StateResult: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine: UE.AnimNode_StateMachine;
            AnimGraphNode_Slot: UE.AnimNode_Slot;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            __CustomProperty_ShouldDoIKTrace_385011E94C94F6DE70691192D3E0622C: boolean;
            Character: UE.Character;
            MovementComponent: UE.CharacterMovementComponent;
            Velocity: UE.Vector;
            GroundSpeed: number;
            ShouldMove: boolean;
            IsFalling: boolean;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            BlueprintInitializeAnimation() : void;
            BlueprintUpdateAnimation(DeltaTimeX: number) : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Manny_AnimGraphNode_TransitionResult_305F37BB4A5AD886760B8E99A5C561E1() : void;
            ExecuteUbergraph_ABP_Manny(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Manny_C;
            static Load(InName: string): ABP_Manny_C;
        
            __tid_ABP_Manny_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7B7D15D645E3A2E94B557BBACCFA9D39
    namespace Game.Characters.Mannequins.Animations.ABP_Manny {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_131: string, __NameProperty_132: string, __NameProperty_133: string, __NameProperty_134: string, __IntProperty_135: number, __FloatProperty_136: number, __NameProperty_137: string, __IntProperty_138: number, __BoolProperty_139: boolean, __FloatProperty_140: number, __StructProperty_141: UE.InputScaleBiasClampConstants, __FloatProperty_142: number, __BoolProperty_143: boolean, __EnumProperty_144: UE.EAnimSyncMethod, __ByteProperty_145: UE.EAnimGroupRole, __NameProperty_146: string, __IntProperty_147: number, __NameProperty_148: string, __NameProperty_149: string, __IntProperty_150: number, __StructProperty_151: UE.AnimNodeFunctionRef, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base);
            __NameProperty_131: string;
            __NameProperty_132: string;
            __NameProperty_133: string;
            __NameProperty_134: string;
            __IntProperty_135: number;
            __FloatProperty_136: number;
            __NameProperty_137: string;
            __IntProperty_138: number;
            __BoolProperty_139: boolean;
            __FloatProperty_140: number;
            __StructProperty_141: UE.InputScaleBiasClampConstants;
            __FloatProperty_142: number;
            __BoolProperty_143: boolean;
            __EnumProperty_144: UE.EAnimSyncMethod;
            __ByteProperty_145: UE.EAnimGroupRole;
            __NameProperty_146: string;
            __IntProperty_147: number;
            __NameProperty_148: string;
            __NameProperty_149: string;
            __IntProperty_150: number;
            __StructProperty_151: UE.AnimNodeFunctionRef;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CEF0A70148D95DDBBC354F85E2B4BB63
    namespace Game.Characters.Mannequins.Animations.ABP_Quinn {
        class ABP_Quinn_C extends UE.Game.Characters.Mannequins.Animations.ABP_Manny.ABP_Manny_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ExecuteUbergraph_ABP_Quinn(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Quinn_C;
            static Load(InName: string): ABP_Quinn_C;
        
            __tid_ABP_Quinn_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CEF0A70148D95DDBBC354F85E2B4BB63
    namespace Game.Characters.Mannequins.Animations.ABP_Quinn {
        class AnimBlueprintGeneratedConstantData extends UE.Game.Characters.Mannequins.Animations.ABP_Manny.AnimBlueprintGeneratedConstantData {
            constructor();
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_1__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F7C7AAA74586C76563A785A0FC324944
    namespace Game.Characters.Mannequins.Rigs.ABP_Quinn_PostProcess {
        class ABP_Quinn_PostProcess_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            AnimGraphNode_PoseDriver_13: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_12: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_11: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_10: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_9: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_8: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_7: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_6: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_5: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_4: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_3: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_2: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_1: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver: UE.AnimNode_PoseDriver;
            AnimGraph(InPose: UE.PoseLink, AnimGraph: $Ref<UE.PoseLink>) : void;
            ExecuteUbergraph_ABP_Quinn_PostProcess(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Quinn_PostProcess_C;
            static Load(InName: string): ABP_Quinn_PostProcess_C;
        
            __tid_ABP_Quinn_PostProcess_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F7C7AAA74586C76563A785A0FC324944
    namespace Game.Characters.Mannequins.Rigs.ABP_Quinn_PostProcess {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_49: string, __NameProperty_50: string, __StructProperty_51: UE.AnimNodeFunctionRef, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base);
            __NameProperty_49: string;
            __NameProperty_50: string;
            __StructProperty_51: UE.AnimNodeFunctionRef;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BCA382AF41A385E6A0A542867C8059AA
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_BasicFootIK {
        class CR_Mannequin_BasicFootIK_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ZOffset_L_Target: number;
            ZOffset_R_Target: number;
            ZOffset_L: number;
            ZOffset_R: number;
            ZOffset_Pelvis: number;
            ShouldDoIKTrace: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_BasicFootIK_C;
            static Load(InName: string): CR_Mannequin_BasicFootIK_C;
        
            __tid_CR_Mannequin_BasicFootIK_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BCA382AF41A385E6A0A542867C8059AA
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_BasicFootIK {
        class RigVMMemory_Literal extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            LocalVariableDefault__FootTrace_AnimatedFloorLocation__Const: UE.Vector;
            RigVMModel___FootTrace_MathVectorAdd_A__Const: UE.Vector;
            RigVMModel___FootTrace_GetTransform_Item__Const: UE.RigElementKey;
            RigVMModel___FootTrace_GetTransform_Space__Const: UE.EBoneGetterSetterMode;
            RigVMModel___FootTrace_GetTransform_bInitial__Const: boolean;
            RigVMModel___FootTrace_MathFloatAdd_B__Const: number;
            RigVMModel___FootTrace_GetTransform_1_Item__Const: UE.RigElementKey;
            RigVMModel___FootTrace_MathVectorAdd_B__Const: UE.Vector;
            RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_bEnabled__Const: boolean;
            RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Color__Const: UE.LinearColor;
            RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Thickness__Const: number;
            RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Scale__Const: number;
            RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Space__Const: UE.RigElementKey;
            RigVMModel___FootTrace_MathVectorSub_B__Const: UE.Vector;
            RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_2_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            RigVMModel___FootTrace_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            RigVMModel___FootTrace_SphereTraceByTraceChannel_Radius__Const: number;
            RigVMModel___FootTrace_RigUnit_VisualDebugVectorItemSpace_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            RigVMModel___FootTrace_1_GetTransform_Item__Const: UE.RigElementKey;
            RigVMModel___FootTrace_1_RigUnit_VisualDebugVectorItemSpace_1_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            RigVMModel___FootTrace_1_RigUnit_VisualDebugVectorItemSpace_2_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            RigVMModel___FootTrace_1_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            RigVMModel___FootTrace_1_RigUnit_VisualDebugVectorItemSpace_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            RigVMModel___VariableNode_9_Value__Const: number;
            RigVMModel___AlphaInterp_Bias__Const: number;
            RigVMModel___AlphaInterp_InRange__Const: UE.InputRange;
            RigVMModel___AlphaInterp_InterpSpeedIncreasing__Const: number;
            RigVMModel___ModifyTransforms_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_Mode__Const: UE.EControlRigModifyBoneMode;
            RigVMModel___ModifyTransforms_1_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_1_1_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___PBIK_Root__Const: string;
            RigVMModel___PBIK_Effectors__Const: TArray<UE.PBIKEffector>;
            RigVMModel___PBIK_BoneSettings__Const: TArray<UE.PBIKBoneSetting>;
            RigVMModel___PBIK_ExcludedBones__Const: TArray<string>;
            RigVMModel___PBIK_Settings__Const: UE.PBIKSolverSettings;
            RigVMModel___PBIK_Debug__Const: UE.PBIKDebug;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Literal;
            static Load(InName: string): RigVMMemory_Literal;
        
            __tid_RigVMMemory_Literal_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BCA382AF41A385E6A0A542867C8059AA
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_BasicFootIK {
        class RigVMMemory_Work extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ExecuteContext_: UE.ControlRigExecuteContext;
            RigVMModel___FootTrace_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            RigVMModel___FootTrace_MathVectorAdd_Result: UE.Vector;
            RigVMModel___FootTrace_GetTransform_Transform: UE.Transform;
            RigVMModel___FootTrace_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___FootTrace_MathFloatAdd_Result: number;
            RigVMModel___FootTrace_MathFloatAdd_A: number;
            RigVMModel___FootTrace_GetTransform_1_Transform: UE.Transform;
            RigVMModel___FootTrace_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___FootTrace_MathVectorAdd_A__IO: UE.Vector;
            RigVMModel___FootTrace_MathVectorSub_Result: UE.Vector;
            RigVMModel___FootTrace_MathVectorSub_A__IO: UE.Vector;
            RigVMModel___FootTrace_SphereTraceByTraceChannel_bHit: boolean;
            RigVMModel___FootTrace_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            RigVMModel___FootTrace_1_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            RigVMModel___FootTrace_1_MathVectorAdd_Result: UE.Vector;
            RigVMModel___FootTrace_1_GetTransform_Transform: UE.Transform;
            RigVMModel___FootTrace_1_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___FootTrace_1_MathFloatAdd_Result: number;
            RigVMModel___FootTrace_1_MathFloatAdd_A: number;
            RigVMModel___FootTrace_1_GetTransform_1_Transform: UE.Transform;
            RigVMModel___FootTrace_1_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___FootTrace_1_MathVectorAdd_A__IO: UE.Vector;
            RigVMModel___FootTrace_1_MathVectorSub_Result: UE.Vector;
            RigVMModel___FootTrace_1_MathVectorSub_A__IO: UE.Vector;
            RigVMModel___FootTrace_1_SphereTraceByTraceChannel_bHit: boolean;
            RigVMModel___FootTrace_1_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            RigVMModel___AlphaInterp_Result: number;
            RigVMModel___AlphaInterp_Value: number;
            RigVMModel___AlphaInterp_ScaleBiasClamp: TArray<UE.InputScaleBiasClamp>;
            RigVMModel___AlphaInterp_1_Result: number;
            RigVMModel___AlphaInterp_1_Value: number;
            RigVMModel___AlphaInterp_1_ScaleBiasClamp: TArray<UE.InputScaleBiasClamp>;
            RigVMModel___If_Result: number;
            RigVMModel___MathFloatLess_Result: boolean;
            RigVMModel___MathFloatLess_A: number;
            RigVMModel___MathFloatLess_B: number;
            RigVMModel___If_True: number;
            RigVMModel___If_False: number;
            RigVMModel___ModifyTransforms_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            RigVMModel___ModifyTransforms_1_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_1_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            RigVMModel___ModifyTransforms_1_1_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_1_1_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            RigVMModel___GetTransform_Transform: UE.Transform;
            RigVMModel___GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___PBIK_Effectors__IO: TArray<UE.PBIKEffector>;
            RigVMModel___PBIK_EffectorSolverIndices: TArray<TArray<number>>;
            RigVMModel___PBIK_BoneSettingToSolverBoneIndex: TArray<TArray<number>>;
            RigVMModel___PBIK_SolverBoneToElementIndex: TArray<TArray<number>>;
            RigVMModel___PBIK_Solver: TArray<UE.PBIKSolver>;
            RigVMModel___PBIK_bNeedsInit: TArray<boolean>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Work;
            static Load(InName: string): RigVMMemory_Work;
        
            __tid_RigVMMemory_Work_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4AC5A9F94641E5CE0D39F98028C9CF48
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Procedural {
        class CR_Mannequin_Procedural_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_Procedural_C;
            static Load(InName: string): CR_Mannequin_Procedural_C;
        
            __tid_CR_Mannequin_Procedural_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4AC5A9F94641E5CE0D39F98028C9CF48
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Procedural {
        class RigVMMemory_Literal extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___SetRotation_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_Space__Const: UE.EBoneGetterSetterMode;
            RigVMModel___SetRotation_2_bInitial__Const: boolean;
            RigVMModel___GetTransform_6_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_1_bInitial__Const: boolean;
            RigVMModel___MathQuaternionSwingTwist_TwistAxis__Const: UE.Vector;
            RigVMModel___MathQuaternionSlerp_2_B__Const: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_T__Const: number;
            RigVMModel___SetRotation_2_Weight__Const: number;
            RigVMModel___SetRotation_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_T__Const: number;
            RigVMModel___SetTranslation_Space__Const: UE.EBoneGetterSetterMode;
            RigVMModel___GetTransform_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathTransformLerp_T__Const: number;
            RigVMModel___SetRotation_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_1_T__Const: number;
            RigVMModel___MathTransformLerp_1_T__Const: number;
            RigVMModel___SetRotation_2_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_2_3_T__Const: number;
            RigVMModel___SetRotation_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_5_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_4_T__Const: number;
            RigVMModel___SetRotation_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_5_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_2_2_T__Const: number;
            RigVMModel___SetRotation_2_1_3_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_5_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetTranslation_4_1_2_Item__Const: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Literal;
            static Load(InName: string): RigVMMemory_Literal;
        
            __tid_RigVMMemory_Literal_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4AC5A9F94641E5CE0D39F98028C9CF48
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Procedural {
        class RigVMMemory_Work extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ExecuteContext_: UE.ControlRigExecuteContext;
            RigVMModel___MathQuaternionMul_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_Local: UE.Transform;
            RigVMModel___GetTransform_6_Transform: UE.Transform;
            RigVMModel___GetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_Result: UE.Transform;
            RigVMModel___GetTransform_Transform: UE.Transform;
            RigVMModel___GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_Value: UE.Vector;
            RigVMModel___SetTranslation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_Result: UE.Transform;
            RigVMModel___SetTranslation_1_Value: UE.Vector;
            RigVMModel___SetTranslation_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_3_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_3_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_4_Local: UE.Transform;
            RigVMModel___GetTransform_6_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_4_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_3_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_4_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_4_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_3_Local: UE.Transform;
            RigVMModel___GetTransform_5_1_Transform: UE.Transform;
            RigVMModel___GetTransform_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_5_Transform: UE.Transform;
            RigVMModel___GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_3_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_Swing: UE.Quat;
            RigVMModel___SetRotation_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_3_Result: UE.Transform;
            RigVMModel___GetTransform_4_Transform: UE.Transform;
            RigVMModel___GetTransform_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_5_Value: UE.Vector;
            RigVMModel___SetTranslation_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_Result: UE.Quat;
            RigVMModel___SetRotation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_4_Result: UE.Transform;
            RigVMModel___SetTranslation_5_1_Value: UE.Vector;
            RigVMModel___SetTranslation_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_3_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_2_Result: UE.Transform;
            RigVMModel___GetTransform_2_Transform: UE.Transform;
            RigVMModel___GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_2_Value: UE.Vector;
            RigVMModel___SetTranslation_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_1_Result: UE.Transform;
            RigVMModel___SetTranslation_2_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_4_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_4_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_4_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_1_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_3_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_3_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_1_Swing: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_3_1_Result: UE.Transform;
            RigVMModel___GetTransform_4_1_Transform: UE.Transform;
            RigVMModel___GetTransform_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_2_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_4_1_Result: UE.Transform;
            RigVMModel___SetTranslation_2_1_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_Result: UE.Transform;
            RigVMModel___GetTransform_3_Transform: UE.Transform;
            RigVMModel___GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_3_Value: UE.Vector;
            RigVMModel___SetTranslation_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_2_Result: UE.Quat;
            RigVMModel___SetRotation_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_Result: UE.Transform;
            RigVMModel___SetTranslation_3_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_2_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Swing: UE.Quat;
            RigVMModel___SetRotation_2_1_3_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_2_Result: UE.Transform;
            RigVMModel___GetTransform_3_2_Transform: UE.Transform;
            RigVMModel___GetTransform_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_2_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_3_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_2_Result: UE.Transform;
            RigVMModel___SetTranslation_3_1_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_1_Result: UE.Transform;
            RigVMModel___GetTransform_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_4_Value: UE.Vector;
            RigVMModel___SetTranslation_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_1_Result: UE.Transform;
            RigVMModel___SetTranslation_4_1_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_2_2_2_1_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_1_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Swing: UE.Quat;
            RigVMModel___SetRotation_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_2_1_Result: UE.Transform;
            RigVMModel___GetTransform_3_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_4_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_3_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_2_1_Result: UE.Transform;
            RigVMModel___SetTranslation_4_1_2_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Work;
            static Load(InName: string): RigVMMemory_Work;
        
            __tid_RigVMMemory_Work_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 32D949864AD588EA6612C69B65C3A997
    namespace Game.Characters.Mannequins.Rigs.ABP_Manny_PostProcess {
        class ABP_Manny_PostProcess_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            AnimGraphNode_PoseDriver_13: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_12: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_11: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_10: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_9: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_8: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_7: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_6: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_5: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_4: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_3: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_2: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_1: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver: UE.AnimNode_PoseDriver;
            AnimGraph(InPose: UE.PoseLink, AnimGraph: $Ref<UE.PoseLink>) : void;
            ExecuteUbergraph_ABP_Manny_PostProcess(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Manny_PostProcess_C;
            static Load(InName: string): ABP_Manny_PostProcess_C;
        
            __tid_ABP_Manny_PostProcess_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: D15053F14F3F1ACE6E557BA7F613C721
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Body {
        class CR_Mannequin_Body_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["L Arm IK Mode"]: boolean;
            ["R Arm IK Mode"]: boolean;
            ["L Leg IK Mode "]: boolean;
            ["R Leg IK Mode"]: boolean;
            ["Spine IK Mode"]: boolean;
            ["Neck IK Mode"]: boolean;
            ["Spine Offsets"]: TArray<UE.Transform>;
            ["Spine Length"]: number;
            ["Neck Length"]: number;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_Body_C;
            static Load(InName: string): CR_Mannequin_Body_C;
        
            __tid_CR_Mannequin_Body_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
}
