import type { ReactNode } from 'react';
import { TimePicker, Badge } from '@core-circle/ui';
import { PropItem } from '../../../interface/components/props-table.types';

export interface TimePickerThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface TimePickerVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const TIME_PICKER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'TimePicker' },
];

export const TIME_PICKER_HEADER_CONTENT = {
  title: 'TimePicker',
  description:
    'An interactive time selection input supporting 12h/24h formats, minute/second step dials, AM/PM switching, and 10 styling variants.',
};

export const TIME_PICKER_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description:
      'Production-grade time picker themes for airline flight departures, telehealth bookings, server cron schedules, and international meeting planners.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description:
      'Explore 10 surface styling variants from material animated to cyber neon glow.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description:
      'Interactive time picker playground with live 12h/24h toggle, seconds support, and code generator.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description:
      'Dynamic reservation scheduling payload integration example.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const FlightDepartureDemo = () => (
  <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-4 w-full">
    <div className="flex items-center justify-between">
      <div>
        <span className="text-xs font-bold text-core-circle-primary uppercase tracking-wider">
          FLIGHT AF-082
        </span>
        <h4 className="font-bold text-sm text-slate-900 mt-0.5">
          JFK ➔ CDG Paris Direct
        </h4>
      </div>
      <Badge variant="success" size="sm" shape="pill">
        On Schedule
      </Badge>
    </div>
    <TimePicker
      label="Estimated Gate Departure (UTC+2)"
      format="24h"
      variant="outline"
      defaultValue="14:45"
    />
  </div>
);

const TelehealthBookingDemo = () => (
  <div className="p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-100 rounded-2xl shadow-sm space-y-4 w-full">
    <div>
      <h4 className="font-bold text-sm text-purple-950">
        Dr. Emily Watson (Cardiology)
      </h4>
      <p className="text-xs text-purple-700">
        Select consultation start time (15-min increments)
      </p>
    </div>
    <TimePicker
      label="Appointment Window"
      format="12h"
      variant="gradient"
      minuteStep={15}
      defaultValue="10:15 AM"
    />
  </div>
);

const CronJobDemo = () => (
  <div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle space-y-4 w-full">
    <div className="flex items-center justify-between">
      <span className="font-mono text-xs font-bold text-emerald-400">
        CRON: nightly_db_backup
      </span>
      <Badge variant="info" size="sm" shape="pill">
        Daily Trigger
      </Badge>
    </div>
    <TimePicker
      label="Nightly Snapshot Timestamp (UTC)"
      format="24h"
      variant="glow"
      showSeconds
      defaultValue="02:00:00"
    />
  </div>
);

const RestaurantReservationDemo = () => (
  <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm space-y-3 w-full">
    <h4 className="font-bold text-sm text-blue-950">
      {"Table for 4 Guests (Chef's Tasting Menu)"}
    </h4>
    <TimePicker
      label="Seating Time"
      format="12h"
      variant="glassmorphic"
      minuteStep={30}
      defaultValue="07:30 PM"
    />
  </div>
);

const MeetingSyncDemo = () => (
  <div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
    <h4 className="font-bold text-sm text-slate-900">
      Engineering All-Hands (Tokyo & London)
    </h4>
    <TimePicker
      label="Local Time (PST)"
      format="12h"
      variant="material"
      defaultValue="08:00 AM"
      helperText="Synchronizes to 16:00 GMT and 01:00 JST (+1 day)"
    />
  </div>
);

export const TIME_PICKER_THEME_CONFIGS: TimePickerThemeConfig[] = [
  {
    id: 'theming-flight-departure',
    sectionTitle: '1. Airline Flight Departure & Gate Time Theme',
    description:
      'High-contrast 24-hour military time picker for international flight itineraries.',
    previewTitle: 'Flight Departure Picker',
    render: () => <FlightDepartureDemo />,
    code: `<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-4 w-full">
  <div className="flex items-center justify-between">
    <div>
      <span className="text-xs font-bold text-core-circle-primary uppercase tracking-wider">FLIGHT AF-082</span>
      <h4 className="font-bold text-sm text-slate-900 mt-0.5">JFK ➔ CDG Paris Direct</h4>
    </div>
    <Badge variant="success" size="sm" shape="pill">On Schedule</Badge>
  </div>
  <TimePicker
    label="Estimated Gate Departure (UTC+2)"
    format="24h"
    variant="outline"
    defaultValue="14:45"
  />
</div>`,
  },
  {
    id: 'theming-telehealth-booking',
    sectionTitle: '2. Telehealth Physician Consultation Slot Theme',
    description:
      'Gradient-styled 12-hour AM/PM time picker with 15-minute appointment slots.',
    previewTitle: 'Doctor Consultation Booking',
    render: () => <TelehealthBookingDemo />,
    code: `<div className="p-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-100 rounded-2xl shadow-sm space-y-4 w-full">
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
</div>`,
  },
  {
    id: 'theming-cron-job',
    sectionTitle: '3. DevOps Server Cron Execution Schedule Theme',
    description:
      'Deep cyber slate time picker with precision seconds for background job dispatchers.',
    previewTitle: 'Cron Job Scheduler',
    render: () => <CronJobDemo />,
    code: `<div className="p-6 bg-white text-core-circle-text-main rounded-core-circle-xl border border-core-circle-border-main shadow-core-circle-subtle space-y-4 w-full">
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
</div>`,
  },
  {
    id: 'theming-restaurant-reservation',
    sectionTitle: '4. Fine Dining Table Reservation Theme',
    description:
      'Frosted glass translucent time picker formatted for hospitality concierge systems.',
    previewTitle: 'Dining Table Reservation',
    render: () => <RestaurantReservationDemo />,
    code: `<div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-sm space-y-3 w-full">
  <h4 className="font-bold text-sm text-blue-950">Table for 4 Guests (Chef's Tasting Menu)</h4>
  <TimePicker
    label="Seating Time"
    format="12h"
    variant="glassmorphic"
    minuteStep={30}
    defaultValue="07:30 PM"
  />
</div>`,
  },
  {
    id: 'theming-meeting-sync',
    sectionTitle: '5. Global Distributed Standup Time Sync Theme',
    description:
      'Material design time picker with dual timezone labels.',
    previewTitle: 'Global Standup Scheduler',
    render: () => <MeetingSyncDemo />,
    code: `<div className="p-6 bg-white border border-core-circle-border-main rounded-2xl shadow-sm space-y-3 w-full">
  <h4 className="font-bold text-sm text-slate-900">Engineering All-Hands (Tokyo & London)</h4>
  <TimePicker
    label="Local Time (PST)"
    format="12h"
    variant="material"
    defaultValue="08:00 AM"
    helperText="Synchronizes to 16:00 GMT and 01:00 JST (+1 day)"
  />
</div>`,
  },
];

export const TIME_PICKER_VARIANT_GROUPS: TimePickerVariantGroup[] = [
  {
    id: 'time-picker-variants-styles',
    title: '1. Form Surface Styles (Outline, Material, Ghost)',
    description:
      'Standard bordered box, animated bottom line, and flat ghost styling.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white rounded-2xl border border-core-circle-border-main w-full">
        <TimePicker label="Outline" variant="outline" defaultValue="09:00 AM" />
        <TimePicker label="Material" variant="material" defaultValue="11:30 AM" />
        <TimePicker label="Ghost" variant="ghost" defaultValue="02:15 PM" />
      </div>
    ),
  },
  {
    id: 'time-picker-variants-glow',
    title: '2. Radiant Gradient & Neon Glow Styles',
    description:
      'Translucent glassmorphism, purple gradient rings, and cyber emerald halos.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-core-circle-bg-surface rounded-core-circle-xl border border-core-circle-border-main w-full">
        <TimePicker label="Glassmorphic" variant="glassmorphic" defaultValue="08:45 AM" />
        <TimePicker label="Gradient" variant="gradient" defaultValue="06:30 PM" />
        <TimePicker label="Neon Glow" variant="glow" defaultValue="23:00" format="24h" />
      </div>
    ),
  },
  {
    id: 'time-picker-variants-formats',
    title: '3. Display Standards (12-Hour vs 24-Hour Military)',
    description:
      'Toggle between AM/PM periods or 00-23 hour increments.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-slate-50 rounded-2xl border border-core-circle-border-main w-full">
        <TimePicker label="12-Hour Format" format="12h" defaultValue="03:45 PM" />
        <TimePicker label="24-Hour Format" format="24h" defaultValue="15:45" />
      </div>
    ),
  },
  {
    id: 'time-picker-variants-seconds',
    title: '4. Precision Timestamp (With Seconds Slot)',
    description:
      'Detailed hour, minute, second intervals for telemetry timestamps.',
    render: () => (
      <div className="p-8 bg-white rounded-2xl border border-core-circle-border-main w-full flex justify-center">
        <TimePicker label="High-Precision Server Log Time" format="24h" showSeconds defaultValue="14:32:45" />
      </div>
    ),
  },
];

export const TIME_PICKER_PLAYGROUND_SECTION = {
  id: 'time-picker-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 10 variants, 12h/24h formats, seconds visibility, and code generator.',
};

export const TIME_PICKER_MOCK_SECTION = {
  id: 'time-picker-mock-section',
  title: 'Dynamic Reservation Slot Integration',
  description:
    'Pattern for validating scheduled start and end times against remote booking availability.',
  snippets: [
    {
      label: 'Sample Schedule Payload',
      code: JSON.stringify(
        {
          appointmentId: 'apt_9821a',
          doctor: 'Dr. Emily Watson',
          scheduledTime: '10:15 AM',
          timezone: 'America/New_York',
          durationMinutes: 45,
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Booking Component',
      code: `import React, { useState } from 'react';
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
};`,
    },
  ],
};

export const TIME_PICKER_OVERVIEW_SECTION = {
  id: 'time-picker-overview-intro',
  title: 'Introduction',
  description:
    'The TimePicker component simplifies time inputs across 12-hour (AM/PM) and 24-hour military formats. It provides 10 visual variants, customizable minute step intervals, optional seconds selection, and comprehensive accessibility keyboard navigation.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { TimePicker } from '@core-circle/ui';

const [time, setTime] = useState('09:30 AM');

<TimePicker
  label="Departure Time"
  format="12h"
  variant="outline"
  value={time}
  onChange={(str) => setTime(str)}
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const TIME_PICKER_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'string | TimeValue',
    defaultValue: '-',
    description:
      'Controlled time value (e.g. "09:30 AM" or { hours: 9, minutes: 30 }).',
  },
  {
    name: 'defaultValue',
    type: 'string | TimeValue',
    defaultValue: '-',
    description: 'Default initial time in uncontrolled mode.',
  },
  {
    name: 'format',
    type: "'12h' | '24h'",
    defaultValue: "'12h'",
    description: 'Time display format standard.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Dimensional height and font scale.',
  },
  {
    name: 'variant',
    type: "'outline' | 'material' | 'ghost' | 'standard' | 'filled' | 'glassmorphic' | 'gradient' | 'glow' | 'accent' | 'dark'",
    defaultValue: "'outline'",
    description: 'Input container surface styling aesthetic.',
  },
  {
    name: 'label',
    type: 'string',
    defaultValue: '-',
    description: 'Label text positioned above the input.',
  },
  {
    name: 'helperText',
    type: 'string',
    defaultValue: '-',
    description: 'Subtle guidance caption below the input.',
  },
  {
    name: 'showSeconds',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display the seconds selection segment.',
  },
  {
    name: 'minuteStep',
    type: 'number',
    defaultValue: '1',
    description: 'Interval step between minute options (e.g. 5, 15, 30).',
  },
  {
    name: 'onChange',
    type: '(timeString: string, timeObj: TimeValue) => void',
    defaultValue: '-',
    description:
      'Callback triggered whenever hours, minutes, seconds, or AM/PM change.',
  },
];
