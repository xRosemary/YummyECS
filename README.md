# YummyECS

适用于Puerts的ECS框架

还在开发过程中...

## TODO
- 统一 TS 和 UE 原生组件的管理
- 考虑加一层 Group 用于缓存，加快查找速度

## 使用示例
``` typescript
import * as UE from 'ue'
import { argv } from 'puerts';
import { C, D, F } from "yummyecs";

console.error("------- puerts init -------");

let gameInstance = (argv.getByName("GameInstance") as UE.GameInstance);
F.World.getInstance().init(gameInstance, new F.PoolSystem());

console.error("------- yummyecs init -------");

//////////////////////////// 常规的System和Action ////////////////////
class TestAction extends F.Action {
    constructor(public str: string) {
        super();
    }
}

class TestSystem extends F.System {
    @D.listen(TestAction)
    protected onTestAction(action: TestAction) {
        this.debug(action.str);
    }
}

F.CreateSystemAction.do(TestSystem);
TestAction.do("123456789");

//////////////////////////// GM指令 //////////////////////////////////
F.CreateSystemAction.do(F.GmSystem);

function testGMCommand(str: string) {
    console.error(str);
}

F.registerGMCommand(testGMCommand, [String]);

`
// 要注意此时的F.World有没有被销毁
class TSGameMode extends UE.GameModeBase {
    @UE.set_flags(UE.FunctionFlags.FUNC_Exec)
    public GM(funcName: string, params: string):void {
        let paramArr = params.split(" ");
        console.error(funcName, paramArr);
        F.GmAction.do(funcName, paramArr);
    }
}
`

//////////////////////////// 读取表格文件 /////////////////////////////
F.CreateSystemAction.do(F.SheetLoadSystem);

@D.table("Tab/test.tab")
class TestTable {
    constructor(public id: number, public text: string, public strs: string[], public ns: number[]) {}
}

let testTables = F.LoadSheetAction.do<TestTable[]>(TestTable);

testTables.forEach((v) => {
    console.error(v.id, v.ns, v.strs, v.text);
})

//////////////////////////// UI系统和回调函数绑定 //////////////////////
F.CreateSystemAction.do(F.UISystem);

const UMG_NAME = "W_TestWidget";

class TestUISystem extends F.System {
    @D.ui(UMG_NAME, "btnTest", "OnClicked")
    public testCallback(widget: UE.UserWidget) {
        console.error(widget.GetName())
        console.error("testCallback");
    }
}
F.CreateSystemAction.do(TestUISystem);
F.OpenUMG.do(UMG_NAME);

//////////////////////////// 单例类 ///////////////////////////////////

class TestSingleton extends C.Singleton {}
console.error(TestSingleton.getInstance() === TestSingleton.getInstance());
```

## 安装
### 安装npm包
打包后在项目目录输入cmd指令
npm install yummyecs-1.0.0.tgz

### 编写相关c++扩展
``` c++
// TSGameInstance.h
#pragma once

#include "CoreMinimal.h"
#include "JsEnv.h"
#include "Engine/GameInstance.h"
#include "TSGameInstance.generated.h"

UCLASS()
class TPS_API UTSGameInstance : public UGameInstance
{
	GENERATED_BODY()
	virtual void OnStart() override;
	virtual void Shutdown() override;
private:
	TSharedPtr<puerts::FJsEnv> GameScript;
};

// TSGameInstance.cpp
#include "TSGameInstance.h"

void UTSGameInstance::OnStart()
{
    GameScript = MakeShared<puerts::FJsEnv>(
        std::make_unique<puerts::DefaultJSModuleLoader>(
            TEXT("JavaScript")
        ),
        std::make_shared<puerts::FDefaultLogger>(),
        8080 // 指定调试websocket server所用的端口，即视为要打开调试server
    );
    TArray<TPair<FString, UObject*>> Arguments;
    Arguments.Add(TPair<FString, UObject*>(TEXT("GameInstance"), this));
    GameScript->Start("GameStart", Arguments);
}

void UTSGameInstance::Shutdown()
{
    GameScript.Reset();
}
```

``` c++
// TSExtensionMethods.h
#pragma once

#include "CoreMinimal.h"
#include "ExtensionMethods.h"
#include "GameFramework/Actor.h"
#include "Components/ActorComponent.h"
#include "TSGameInstance.h"
#include "EnhancedInputSubsystems.h"
#include "Misc/Paths.h"
#include "Engine/GameInstance.h"
#include "Blueprint/UserWidget.h"
#include "TSExtensionMethods.generated.h"

UCLASS()
class TPS_API UTSExtensionMethods : public UExtensionMethods
{
	GENERATED_BODY()
	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static AActor* SpawnActor(UWorld* World, UClass* Class, const FTransform& Transform, ESpawnActorCollisionHandlingMethod SpawnCollisionHandlingOverride, AActor* Owner, APawn* Instigator);

	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static AGameStateBase* GetGameState(UWorld* World);

	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static void DestroyComponent(UActorComponent* comp, bool bPromoteChildren = false);

	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static bool Destroy(AActor* Actor, bool bNetForce = false, bool bShouldModifyLevel = true);

	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static UEnhancedInputLocalPlayerSubsystem* GetEnhancedInputSubsystem(APlayerController* PlayerController);

	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static FString GetContentDir(UGameInstance* gameInstance);

	UFUNCTION(BlueprintCallable, BlueprintCosmetic, Category = "WorldExtension")
	static UUserWidget* CreateWidget(UWorld* World, UClass* Class);
};

// TSExtensionMethods.cpp
#include "TSExtensionMethods.h"

AActor* UTSExtensionMethods::SpawnActor(UWorld* World, UClass* Class, const FTransform& Transform, ESpawnActorCollisionHandlingMethod SpawnCollisionHandlingOverride, AActor* Owner, APawn* Instigator)
{
    FActorSpawnParameters SpawnParameters;
    SpawnParameters.SpawnCollisionHandlingOverride = SpawnCollisionHandlingOverride;

    SpawnParameters.Owner = Owner;
    SpawnParameters.Instigator = Instigator;

    return World->SpawnActor<AActor>(Class, Transform, SpawnParameters);
}

AGameStateBase* UTSExtensionMethods::GetGameState(UWorld* World)
{
    AGameStateBase* state = World->GetGameState();
    if (state) {
        UE_LOG(LogTemp, Error, TEXT("GetGameState"));
    }
    else {
        UE_LOG(LogTemp, Error, TEXT("UN GetGameState"));
    }
    return state;
}

void UTSExtensionMethods::DestroyComponent(UActorComponent* comp, bool bPromoteChildren)
{
    comp->DestroyComponent(bPromoteChildren);
}

bool UTSExtensionMethods::Destroy(AActor* Actor, bool bNetForce, bool bShouldModifyLevel)
{
    return Actor->Destroy(bNetForce, bShouldModifyLevel);
}

UEnhancedInputLocalPlayerSubsystem* UTSExtensionMethods::GetEnhancedInputSubsystem(APlayerController* PlayerController)
{
    return ULocalPlayer::GetSubsystem<UEnhancedInputLocalPlayerSubsystem>(PlayerController->GetLocalPlayer());
}

FString UTSExtensionMethods::GetContentDir(UGameInstance* gameInstance)
{
    return FPaths::ProjectContentDir();
}

UUserWidget* UTSExtensionMethods::CreateWidget(UWorld* World, UClass* Class)
{
    return ::CreateWidget<UUserWidget>(World, Class);
}
```