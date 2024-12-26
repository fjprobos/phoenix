import React, { ReactNode, useState } from "react";

import { Dialog, DialogContainer, Text, View } from "@arizeai/components";

import { Button, ExternalLink, Icon, Icons } from "@phoenix/components";
import { CodeLanguage, CodeLanguageRadioGroup } from "@phoenix/components/code";
import { TypeScriptProjectGuide } from "@phoenix/components/project/TypeScriptProjectGuide";

import { PythonProjectGuide } from "../../components/project/PythonProjectGuide";

const PHOENIX_OTEL_DOC_LINK =
  "https://docs.arize.com/phoenix/tracing/how-to-tracing/setup-tracing";

export function NewProjectButton() {
  const [dialog, setDialog] = useState<ReactNode>(null);
  return (
    <div>
      <Button
        icon={<Icon svg={<Icons.GridOutline />} />}
        onPress={() => {
          setDialog(<NewProjectDialog />);
        }}
      >
        New Project
      </Button>
      <DialogContainer
        isDismissable
        type="slideOver"
        onDismiss={() => setDialog(null)}
      >
        {dialog}
      </DialogContainer>
    </div>
  );
}

function NewProjectDialog() {
  const [language, setLanguage] = useState<CodeLanguage>("Python");
  return (
    <Dialog title="Create a New Project" size="L">
      <View padding="size-400" overflow="auto">
        <View paddingBottom="size-200">
          <CodeLanguageRadioGroup language={language} onChange={setLanguage} />
        </View>
        <View paddingBottom="size-100">
          <Text>
            Projects are created when you log your first trace via
            OpenTelemetry. See the{" "}
            <ExternalLink href={PHOENIX_OTEL_DOC_LINK}>
              documentation
            </ExternalLink>{" "}
            for a complete guide.
          </Text>
        </View>
        {language === "Python" ? (
          <PythonProjectGuide />
        ) : (
          <TypeScriptProjectGuide />
        )}
      </View>
    </Dialog>
  );
}
