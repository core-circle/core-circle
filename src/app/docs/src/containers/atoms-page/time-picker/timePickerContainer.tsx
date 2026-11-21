'use client';

import { TimePickerContainerProps } from '../../../interface/containers/atoms/time-picker.types';
import React, { useState } from 'react';
import Link from 'next/link';
import { TimePicker, Breadcrumb, Tabs, Button, Badge, Typography } from '@core-circle/ui';
import { 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Clock, 
  Terminal, 
  Sparkles, 
  Shield, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { TimePickerPlayground } from '../../../components/playground/time-picker/timePickerPlayground';
import { timePickerPageStyles as s } from './time-picker.styles';
import { TIME_PICKER_PROPS_DATA } from '../../../constants/atoms-page/time-picker/timePickerConstants';

export default function TimePickerContainer({
  headerContent,
  breadcrumbItems
}: TimePickerContainerProps) {
  const [flightTime, setFlightTime] = useState('14:45');
  const [cronTime, setCronTime] = useState('02:00:00');

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Flight Departure Schedule */}
          <DocSection
            id="theming-flight-departure"
            title="1. Airline Flight Departure & Gate Time Theme"
            description="High-contrast 24-hour military time picker for international flight itineraries."
          >
            <ComponentPreview
              title="Flight Departure Picker"
              code={`<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-4 w-full">
  <div className="flex items-center justify-between">
    <div>
      <span className="text-xs font-bold text-core-circle-primary uppercase tracking-wider">FLIGHT AF-082</span>
      <h4 className="font-bold text-sm text-slate-900 mt-0.5">JFK $\\rightarrow$ CDG Paris Direct</h4>
    </div>
    <Badge variant="success" size="sm" shape="pill">On Schedule</Badge>
  </div>
  <TimePicker
    label="Estimated Gate Departure (UTC+2)"
    format="24h"
    variant="outline"
    defaultValue="14:45"
  />
</div>`}
            >
              <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-4 w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-core-circle-primary uppercase tracking-wider">FLIGHT AF-082</span>
                    <h4 className="font-bold text-sm text-slate-900 mt-0.5">JFK $\rightarrow$ CDG Paris Direct</h4>
                  </div>
                  <Badge variant="success" size="sm" shape="pill">On Schedule</Badge>
                </div>
                <TimePicker
                  label="Estimated Gate Departure (UTC+2)"
                  format="24h"
                  variant="outline"
                  defaultValue="14:45"
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Telehealth Doctor Booking */}
          <DocSection
            id="theming-telehealth-booking"
            title="2. Telehealth Physician Consultation Slot Theme"
            description="Gradient-styled 12-hour AM/PM time picker with 15-minute appointment slots."
          >
            <ComponentPreview
              title="Doctor Consultation Booking"
              code={`<div className="p-6 bg-gradient-to-br from-purple-50 via-white to-indigo-50 border border-purple-100 rounded-2xl shadow-sm space-y-4 w-full">
  <div>
    <h4 className="font-bold text-sm text-purple-950">Dr. Emily Watson (Cardiology)</h4>
    <p className="text-xs text-purple-700">Select consultation start time (15-min increments)</p>
  </div>
  <TimePicker
    label="Appointment Window"
    format="12h"
    variant="gradient"
    minuteStep={15}
    defaultValue="10:15 AM"
  />
</div>`}
            >
              <div className="p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-100 rounded-2xl shadow-sm space-y-4 w-full">
                <div>
                  <h4 className="font-bold text-sm text-purple-950">Dr. Emily Watson (Cardiology)</h4>
                  <p className="text-xs text-purple-700">Select consultation start time (15-min increments)</p>
                </div>
                <TimePicker
                  label="Appointment Window"
                  format="12h"
                  variant="gradient"
                  minuteStep={15}
                  defaultValue="10:15 AM"
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Server Cron Job Execution */}
          <DocSection
            id="theming-cron-job"
            title="3. DevOps Server Cron Execution Schedule Theme"
            description="Deep cyber slate time picker with precision seconds for background job dispatchers."
          >
            <ComponentPreview
              title="Cron Job Scheduler"
              code={`<div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle space-y-4 w-full">
  <div className="flex items-center justify-between">
    <span className="font-mono text-xs font-bold text-emerald-400">CRON: nightly_db_backup</span>
    <Badge variant="info" size="sm" shape="pill">Daily Trigger</Badge>
  </div>
  <TimePicker
    label="Nightly Snapshot Timestamp (UTC)"
    format="24h"
    variant="glow"
    showSeconds
    defaultValue="02:00:00"
  />
</div>`}
            >
              <div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle space-y-4 w-full">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-emerald-400">CRON: nightly_db_backup</span>
                  <Badge variant="info" size="sm" shape="pill">Daily Trigger</Badge>
                </div>
                <TimePicker
                  label="Nightly Snapshot Timestamp (UTC)"
                  format="24h"
                  variant="glow"
                  showSeconds
                  defaultValue="02:00:00"
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Restaurant Reservation */}
          <DocSection
            id="theming-restaurant-reservation"
            title="4. Fine Dining Table Reservation Theme"
            description="Frosted glass translucent time picker formatted for hospitality concierge systems."
          >
            <ComponentPreview
              title="Dining Table Reservation"
              code={`<div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm space-y-3 w-full">
  <h4 className="font-bold text-sm text-blue-950">Table for 4 Guests (Chef's Tasting Menu)</h4>
  <TimePicker
    label="Seating Time"
    format="12h"
    variant="glassmorphic"
    minuteStep={30}
    defaultValue="07:30 PM"
  />
</div>`}
            >
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm space-y-3 w-full">
                <h4 className="font-bold text-sm text-blue-950">Table for 4 Guests (Chef&apos;s Tasting Menu)</h4>
                <TimePicker
                  label="Seating Time"
                  format="12h"
                  variant="glassmorphic"
                  minuteStep={30}
                  defaultValue="07:30 PM"
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. International Meeting Sync */}
          <DocSection
            id="theming-meeting-sync"
            title="5. Global Distributed Standup Time Sync Theme"
            description="Material design time picker with dual timezone labels."
          >
            <ComponentPreview
              title="Global Standup Scheduler"
              code={`<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
  <h4 className="font-bold text-sm text-slate-900">Engineering All-Hands (Tokyo & London)</h4>
  <TimePicker
    label="Local Time (PST)"
    format="12h"
    variant="material"
    defaultValue="08:00 AM"
    helperText="Synchronizes to 16:00 GMT and 01:00 JST (+1 day)"
  />
</div>`}
            >
              <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
                <h4 className="font-bold text-sm text-slate-900">Engineering All-Hands (Tokyo & London)</h4>
                <TimePicker
                  label="Local Time (PST)"
                  format="12h"
                  variant="material"
                  defaultValue="08:00 AM"
                  helperText="Synchronizes to 16:00 GMT and 01:00 JST (+1 day)"
                />
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Outline, Material & Ghost */}
          <DocSection
            id="time-picker-variants-styles"
            title="1. Form Surface Styles (Outline, Material, Ghost)"
            description="Standard bordered box, animated bottom line, and flat ghost styling."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
              <TimePicker label="Outline" variant="outline" defaultValue="09:00 AM" />
              <TimePicker label="Material" variant="material" defaultValue="11:30 AM" />
              <TimePicker label="Ghost" variant="ghost" defaultValue="02:15 PM" />
            </div>
          </DocSection>

          {/* 2. Glassmorphic, Gradient & Neon Glow */}
          <DocSection
            id="time-picker-variants-glow"
            title="2. Radiant Gradient & Neon Glow Styles"
            description="Translucent glassmorphism, purple gradient rings, and cyber emerald halos."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main w-full">
              <TimePicker label="Glassmorphic" variant="glassmorphic" defaultValue="08:45 AM" />
              <TimePicker label="Gradient" variant="gradient" defaultValue="06:30 PM" />
              <TimePicker label="Neon Glow" variant="glow" defaultValue="23:00" format="24h" />
            </div>
          </DocSection>

          {/* 3. 12h vs 24h Formats */}
          <DocSection
            id="time-picker-variants-formats"
            title="3. Display Standards (12-Hour vs 24-Hour Military)"
            description="Toggle between AM/PM periods or 00-23 hour increments."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main w-full">
              <TimePicker label="12-Hour Format" format="12h" defaultValue="03:45 PM" />
              <TimePicker label="24-Hour Format" format="24h" defaultValue="15:45" />
            </div>
          </DocSection>

          {/* 4. Precision Seconds */}
          <DocSection
            id="time-picker-variants-seconds"
            title="4. Precision Timestamp (With Seconds Slot)"
            description="Detailed hour, minute, second intervals for telemetry timestamps."
          >
            <div className="p-8 bg-white rounded-2xl border border-core-circle-border-main w-full flex justify-center">
              <TimePicker label="High-Precision Server Log Time" format="24h" showSeconds defaultValue="14:32:45" />
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: (
        <DocSection
          id="time-picker-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 variants, 12h/24h formats, seconds visibility, and code generator."
        >
          <TimePickerPlayground />
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="time-picker-mock-section"
            title="Dynamic Reservation Slot Integration"
            description="Pattern for validating scheduled start and end times against remote booking availability."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Schedule Payload"
                code={JSON.stringify({
                  appointmentId: "apt_9821a",
                  doctor: "Dr. Emily Watson",
                  scheduledTime: "10:15 AM",
                  timezone: "America/New_York",
                  durationMinutes: 45
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Booking Component"
                code={`import React, { useState } from 'react';
import { TimePicker, Button } from '@core-circle/ui';

export const ScheduleBookingForm = () => {
  const [selectedTime, setSelectedTime] = useState('10:15 AM');

  const handleConfirm = async () => {
    await fetch('/api/v1/appointments/schedule', {
      method: 'POST',
      body: JSON.stringify({ time: selectedTime })
    });
  };

  return (
    <div className="space-y-4 max-w-sm">
      <TimePicker
        label="Select Appointment Time"
        format="12h"
        minuteStep={15}
        variant="gradient"
        value={selectedTime}
        onChange={(str) => setSelectedTime(str)}
      />
      <Button variant="primary" onClick={handleConfirm}>Confirm Booking</Button>
    </div>
  );
};`}
              />
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="time-picker-overview-intro"
            title="Introduction"
            description="The TimePicker component simplifies time inputs across 12-hour (AM/PM) and 24-hour military formats. It provides 10 visual variants, customizable minute step intervals, optional seconds selection, and comprehensive accessibility keyboard navigation."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { TimePicker } from '@core-circle/ui';

const [time, setTime] = useState('09:30 AM');

<TimePicker
  label="Departure Time"
  format="12h"
  variant="outline"
  value={time}
  onChange={(str) => setTime(str)}
/>`}
              />

              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">
                  Component Props
                </Typography>
                <PropsTable data={TIME_PICKER_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        {breadcrumbItems && (
          <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        )}
        <Typography variant="h1" className={s.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent?.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs
          items={tabItems}
          variant="underline"
          size="lg"
          className="w-full"
        />
      </div>
    </div>
  );
}
