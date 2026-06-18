'use client';

import React, { useState } from 'react';
import { Card, Select, Checkbox, Button, TextInput } from '@core-circle/ui';
import { CodeIcon, CopyIcon } from '@core-circle/icons';
import { highlightCode } from '../../../utils/highlight';
import { cardPlaygroundStyles as s } from './cardPlayground.styles';

const SelectField = ({ label, value, options, onChange }: any) => {
  const formattedOptions = Object.entries(options).map(([val, lbl]) => ({
    value: val,
    label: lbl as string,
  }));
  return (
    <Select
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      options={formattedOptions}
      fullWidth
    />
  );
};

export const CardPlayground = () => {
  const [state, setState] = useState({
    variant: 'outline',
    rounded: true,
    hoverable: false,
    showHeader: true,
    showFooter: true,
    headerDivider: true,
    footerDivider: true,
    showClose: false,
    footerAlign: 'end',
    title: 'Card Title',
    body: 'This is the card body content. You can toggle the header and footer to see how the layout adapts.',
  });

  const updateState = (key: string, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const {
      variant,
      rounded,
      hoverable,
      showHeader,
      showFooter,
      headerDivider,
      footerDivider,
      showClose,
      footerAlign,
      title,
      body,
    } = state;
    let code = `<Card variant="${variant}"`;
    if (!rounded) code += ' rounded={false}';
    if (hoverable) code += ' hoverable';
    code += '>\n';

    if (showHeader) {
      code += `  <Card.Header${headerDivider ? ' divider' : ''}${showClose ? ' onClose={() => alert("Close clicked")}' : ''}>\n    <h3 className="font-bold">${title}</h3>\n  </Card.Header>\n`;
    }

    code += `  <Card.Body>\n    <p>${body}</p>\n  </Card.Body>\n`;

    if (showFooter) {
      code += `  <Card.Footer${footerDivider ? ' divider' : ''} align="${footerAlign}">\n    <Button variant="ghost">Cancel</Button>\n    <Button variant="primary">Confirm</Button>\n  </Card.Footer>\n`;
    }

    code += '</Card>';
    return code;
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        {/* Controls */}
        <div className={s.controlsWrapper}>
          <div className={s.gridTwoCols}>
            <SelectField
              label="Variant"
              value={state.variant}
              onChange={(v: string) => updateState('variant', v)}
              options={{
                outline: 'Outline',
                shadow: 'Shadow',
                ghost: 'Ghost',
                flat: 'Flat',
              }}
            />
            <SelectField
              label="Footer Align"
              value={state.footerAlign}
              onChange={(v: string) => updateState('footerAlign', v)}
              options={{
                start: 'Start',
                center: 'Center',
                end: 'End',
                between: 'Between',
              }}
            />

            <div className="flex flex-wrap gap-4 items-end pb-2">
              <Checkbox
                label="Rounded"
                checked={state.rounded}
                onChange={(c) => updateState('rounded', c)}
              />
              <Checkbox
                label="Hoverable"
                checked={state.hoverable}
                onChange={(c) => updateState('hoverable', c)}
              />
              <Checkbox
                label="Show Header"
                checked={state.showHeader}
                onChange={(c) => updateState('showHeader', c)}
              />
              <Checkbox
                label="Show Footer"
                checked={state.showFooter}
                onChange={(c) => updateState('showFooter', c)}
              />
              <Checkbox
                label="Show Close Icon"
                checked={state.showClose}
                onChange={(c) => updateState('showClose', c)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-core-circle-border-main pt-6">
            <TextInput
              label="Header Title"
              value={state.title}
              onChange={(e) => updateState('title', e.target.value)}
              fullWidth
              disabled={!state.showHeader}
            />
            <TextInput
              label="Body Content"
              value={state.body}
              onChange={(e) => updateState('body', e.target.value)}
              fullWidth
            />
          </div>
        </div>

        {/* Preview & Code */}
        <div className={s.previewWrapper}>
          <div className={s.previewArea}>
            <div className="w-full max-w-md">
              <Card
                variant={state.variant as any}
                rounded={state.rounded}
                hoverable={state.hoverable}
              >
                {state.showHeader && (
                  <Card.Header
                    divider={state.headerDivider}
                    onClose={
                      state.showClose ? () => alert('Close clicked') : undefined
                    }
                  >
                    <h3 className="font-bold">{state.title}</h3>
                  </Card.Header>
                )}
                <Card.Body>
                  <p className="text-sm text-slate-600">{state.body}</p>
                </Card.Body>
                {state.showFooter && (
                  <Card.Footer
                    divider={state.footerDivider}
                    align={state.footerAlign as any}
                  >
                    <Button variant="ghost" size="sm">
                      Cancel
                    </Button>
                    <Button variant="primary" size="sm">
                      Confirm
                    </Button>
                  </Card.Footer>
                )}
              </Card>
            </div>
          </div>

          <div className={s.codeSection}>
            <div className={s.codeHeader}>
              <span className={s.codeTitle}>
                <CodeIcon className="w-3.5 h-3.5" />
                Live Code
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className={s.copyButton}
                startIcon={<CopyIcon className="w-3.5 h-3.5" />}
              >
                Copy Snippet
              </Button>
            </div>
            <pre className={s.codeBlock}>
              <code
                dangerouslySetInnerHTML={{
                  __html: highlightCode(generateCode()),
                }}
              />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
