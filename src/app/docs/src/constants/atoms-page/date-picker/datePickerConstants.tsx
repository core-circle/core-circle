'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { DatePicker, Button, Badge, DateRange } from '@core-circle/ui';
import { Shield, Sparkles } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface DatePickerThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface DatePickerVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const DATE_PICKER_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'DatePicker' },
];

export const DATE_PICKER_HEADER_CONTENT = {
  title: 'DatePicker',
  description:
    'An advanced date selection primitive supporting single date, range intervals, inline calendar studio, quick presets, time pickers, and 10 visual variants.',
};

const FlightBookingDemo = () => {
  const [flightRange, setFlightRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
  });

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Flight Route
          </span>
          <h4 className="text-base font-extrabold text-slate-900">
            SFO ➔ LHR (Non-Stop)
          </h4>
        </div>
        <Badge variant="primary" shape="pill" size="sm">
          Economy Flex
        </Badge>
      </div>
      <DatePicker
        mode="range"
        variant="floating"
        label="Departure & Return Dates"
        rangeValue={flightRange}
        onRangeChange={setFlightRange}
        showPresets
      />
      <div className="flex justify-between items-center pt-2 border-t border-slate-100">
        <span className="text-xs text-slate-500">
          10-Day Trip (Includes 2 Checked Bags)
        </span>
        <Button variant="primary" size="sm">
          Search Flights
        </Button>
      </div>
    </div>
  );
};

const MedicalAppointmentDemo = () => {
  const [clinicDate, setClinicDate] = useState<Date | undefined>(new Date());
  const [clinicTime, setClinicTime] = useState('10:30');

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="bg-emerald-100 text-emerald-700 p-2.5 rounded-2xl flex items-center justify-center">
          <Shield size={20} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Dr. Sarah Jenkins, MD</h4>
          <p className="text-xs text-slate-500">
            Cardiology Video Consultation (30 min)
          </p>
        </div>
      </div>
      <DatePicker
        variant="outline"
        label="Select Date & Time"
        value={clinicDate}
        onChange={setClinicDate}
        showTime
        timeValue={clinicTime}
        onTimeChange={setClinicTime}
        minDate={new Date()}
      />
      <Button variant="primary" size="md" fullWidth>
        Confirm Appointment
      </Button>
    </div>
  );
};

const FiscalQuarterDemo = () => {
  const [fiscalRange, setFiscalRange] = useState<DateRange>({
    from: new Date(2026, 0, 1),
    to: new Date(2026, 2, 31),
  });

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="font-bold text-slate-900 text-sm">
          Fiscal Period (FY2026)
        </span>
        <Badge variant="success" shape="pill" size="sm">
          Q1 Audited
        </Badge>
      </div>
      <DatePicker
        mode="range"
        variant="material"
        label="Reporting Window"
        rangeValue={fiscalRange}
        onRangeChange={setFiscalRange}
        showPresets
      />
      <div className="flex justify-between items-center text-xs text-slate-500">
        <span>Format: GAAP Compliant</span>
        <Button variant="outline" size="sm">
          Download CSV
        </Button>
      </div>
    </div>
  );
};

const ConcertEventDemo = () => {
  const [eventDate, setEventDate] = useState<Date | undefined>(
    new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
  );

  return (
    <div className="w-full p-8 bg-gradient-to-r from-purple-100/70 via-indigo-100/50 to-blue-100/70 rounded-3xl flex justify-center">
      <DatePicker
        variant="glassmorphic"
        label="Select Show Performance Date"
        value={eventDate}
        onChange={setEventDate}
        minDate={new Date()}
      />
    </div>
  );
};

const AgileSprintDemo = () => {
  const [sprintRange, setSprintRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
  });

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-core-circle-primary" />
          <span className="font-bold text-slate-900 text-sm">
            Sprint 42 (Core Release)
          </span>
        </div>
        <Badge variant="primary" shape="pill" size="sm">
          2 Weeks
        </Badge>
      </div>
      <DatePicker
        mode="range"
        variant="pill"
        rangeValue={sprintRange}
        onRangeChange={setSprintRange}
      />
      <Button variant="outline" size="sm" fullWidth>
        Sync with Jira & GitHub Milestones
      </Button>
    </div>
  );
};

export const DATE_PICKER_THEME_CONFIGS: DatePickerThemeConfig[] = [
  {
    id: 'theming-flight-booking',
    sectionTitle: '1. Global Flight & Travel Booking Interval Theme',
    description:
      'Dual-date range picker with quick vacation presets and luggage check flags.',
    previewTitle: 'Round-Trip Flight Interval Selector',
    render: () => <FlightBookingDemo />,
    code: `<div className="w-full max-w-lg p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <div>
      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Flight Route</span>
      <h4 className="text-base font-extrabold text-slate-900">SFO ➔ LHR (Non-Stop)</h4>
    </div>
    <Badge variant="primary" shape="pill" size="sm">Economy Flex</Badge>
  </div>
  <DatePicker
    mode="range"
    variant="floating"
    label="Departure & Return Dates"
    rangeValue={flightRange}
    onRangeChange={setFlightRange}
    showPresets
  />
  <div className="flex justify-between items-center pt-2 border-t border-slate-100">
    <span className="text-xs text-slate-500">10-Day Trip (Includes 2 Checked Bags)</span>
    <Button variant="primary" size="sm">Search Flights</Button>
  </div>
</div>`,
  },
  {
    id: 'theming-medical-appointment',
    sectionTitle: '2. Clinical Appointment & Consultation Theme',
    description:
      'Single date selection combined with integrated time selector for doctor consultations.',
    previewTitle: 'Telehealth Specialist Scheduler',
    render: () => <MedicalAppointmentDemo />,
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex items-center gap-3">
    <div className="bg-emerald-100 text-emerald-700 p-2.5 rounded-2xl flex items-center justify-center">
      <Shield size={20} />
    </div>
    <div>
      <h4 className="font-bold text-slate-900">Dr. Sarah Jenkins, MD</h4>
      <p className="text-xs text-slate-500">Cardiology Video Consultation (30 min)</p>
    </div>
  </div>
  <DatePicker
    variant="outline"
    label="Select Date & Time"
    value={clinicDate}
    onChange={setClinicDate}
    showTime
    timeValue="10:30"
    onTimeChange={setClinicTime}
    minDate={new Date()}
  />
  <Button variant="primary" size="md" fullWidth>
    Confirm Appointment
  </Button>
</div>`,
  },
  {
    id: 'theming-fiscal-quarter',
    sectionTitle: '3. Financial Fiscal Quarter & Tax Period Theme',
    description:
      'Pre-configured reporting period filters for accounting dashboards.',
    previewTitle: 'Audit & Tax Reporting Interval',
    render: () => <FiscalQuarterDemo />,
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <span className="font-bold text-slate-900 text-sm">Fiscal Period (FY2026)</span>
    <Badge variant="success" shape="pill" size="sm">Q1 Audited</Badge>
  </div>
  <DatePicker
    mode="range"
    variant="material"
    label="Reporting Window"
    rangeValue={fiscalRange}
    onRangeChange={setFiscalRange}
    showPresets
  />
  <div className="flex justify-between items-center text-xs text-slate-500">
    <span>Format: GAAP Compliant</span>
    <Button variant="outline" size="sm">Download CSV</Button>
  </div>
</div>`,
  },
  {
    id: 'theming-concert-event',
    sectionTitle: '4. Glassmorphic Concert Ticket & Event Booking Theme',
    description:
      'Translucent event scheduler with VIP countdown banner on radiant backdrop.',
    previewTitle: 'VIP World Tour Date Selection',
    render: () => <ConcertEventDemo />,
    code: `<DatePicker
  variant="glassmorphic"
  label="Select Show Performance Date"
  value={eventDate}
  onChange={setEventDate}
  minDate={new Date()}
/>`,
  },
  {
    id: 'theming-agile-sprint',
    sectionTitle: '5. Agile Sprint Timeline & Milestone Theme',
    description:
      'Sprint planning date range with 14-day duration pill and deployment triggers.',
    previewTitle: 'Sprint 42 Milestone Window',
    render: () => <AgileSprintDemo />,
    code: `<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <Sparkles size={16} className="text-core-circle-primary" />
      <span className="font-bold text-slate-900 text-sm">Sprint 42 (Core Release)</span>
    </div>
    <Badge variant="primary" shape="pill" size="sm">2 Weeks</Badge>
  </div>
  <DatePicker
    mode="range"
    variant="pill"
    rangeValue={sprintRange}
    onRangeChange={setSprintRange}
  />
  <Button variant="outline" size="sm" fullWidth>
    Sync with Jira & GitHub Milestones
  </Button>
</div>`,
  },
];

export const DATE_PICKER_VARIANT_GROUPS: DatePickerVariantGroup[] = [
  {
    id: 'datepicker-variants-styles',
    title: '1. Trigger & Popover Styles (10 Variants)',
    description:
      'Outline, filled, floating, glassmorphic, pill, material, gradient, compact, and ghost styles.',
    render: () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        <DatePicker variant="outline" label="Outline" defaultValue={new Date()} />
        <DatePicker variant="filled" label="Filled" defaultValue={new Date()} />
        <DatePicker variant="floating" label="Floating" defaultValue={new Date()} />
        <DatePicker variant="glassmorphic" label="Glassmorphic" defaultValue={new Date()} />
        <DatePicker variant="pill" label="Pill Capsule" defaultValue={new Date()} />
        <DatePicker variant="material" label="Material" defaultValue={new Date()} />
        <DatePicker variant="gradient" label="Gradient Glow" defaultValue={new Date()} />
        <DatePicker variant="compact" label="Compact" defaultValue={new Date()} />
        <DatePicker variant="ghost" label="Ghost Minimal" defaultValue={new Date()} />
      </div>
    ),
  },
  {
    id: 'datepicker-variants-modes',
    title: '2. Date Selection Modes',
    description:
      'Single date, date range intervals, and always-open inline calendar widgets.',
    render: () => (
      <div className="flex flex-wrap gap-8 items-start w-full">
        <DatePicker
          mode="single"
          label="Single Date Picker"
          defaultValue={new Date()}
        />
        <DatePicker
          mode="range"
          label="Date Range Picker"
          defaultRangeValue={{
            from: new Date(),
            to: new Date(Date.now() + 86400000 * 7),
          }}
        />
        <DatePicker
          mode="inline"
          variant="calendar-card"
          label="Embedded Inline Calendar"
          defaultValue={new Date()}
        />
      </div>
    ),
  },
];

export const DATE_PICKER_PLAYGROUND_SECTION = {
  id: 'datepicker-playground-section',
  title: 'Interactive Playground',
  description:
    'Experiment with 10 visual variants, single/range/inline modes, presets, and time pickers.',
};

export const DATE_PICKER_MOCK_SECTION = {
  id: 'datepicker-mock',
  title: 'Dynamic Reservation & Booking Integration',
  description:
    'Persist chosen appointment or vacation dates with remote API mutations.',
  snippets: [
    {
      label: 'Sample Backend Booking API Payload',
      code: JSON.stringify(
        {
          booking_id: 'bk_9824',
          customer_id: 'cust_314',
          reservation_dates: {
            check_in: '2026-09-12',
            check_out: '2026-09-19',
          },
          appointment_time: '14:30',
          status: 'confirmed',
        },
        null,
        2
      ),
    },
    {
      label: 'Dynamic Consumer Component',
      code: `import React, { useState } from 'react';
import { DatePicker, Button, DateRange } from '@core-circle/ui';

export const FlightBookingScheduler = () => {
  const [range, setRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 86400000)
  });

  const handleBook = async () => {
    await fetch('/api/v1/flights/reserve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        departure: range.from?.toISOString(),
        return: range.to?.toISOString()
      })
    });
  };

  return (
    <div className="space-y-4">
      <DatePicker
        mode="range"
        variant="floating"
        label="Trip Duration"
        rangeValue={range}
        onRangeChange={setRange}
        showPresets
      />
      <Button variant="primary" onClick={handleBook}>
        Confirm Reservation
      </Button>
    </div>
  );
};`,
    },
  ],
};

export const DATE_PICKER_OVERVIEW_SECTION = {
  id: 'datepicker-usage',
  title: 'Introduction',
  description:
    'The DatePicker atom enables fast, accessible date and range selections with built-in navigation, presets, and time pickers.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { DatePicker } from '@core-circle/ui';

const [date, setDate] = useState(new Date());

<DatePicker
  label="Schedule Date"
  value={date}
  onChange={setDate}
  showPresets
/>`,
  },
  propsTableTitle: 'Component Props',
};

export const DATE_PICKER_PROPS_DATA: PropItem[] = [
  {
    name: 'value',
    type: 'Date',
    defaultValue: '-',
    description: 'The selected date in single mode.',
  },
  {
    name: 'rangeValue',
    type: '{ from?: Date; to?: Date }',
    defaultValue: '-',
    description: 'The selected date range in range mode.',
  },
  {
    name: 'mode',
    type: "'single' | 'range' | 'inline'",
    defaultValue: "'single'",
    description:
      'Selection mode: single date, interval range, or embedded calendar.',
  },
  {
    name: 'variant',
    type: "'outline' | 'filled' | 'floating' | 'glassmorphic' | 'pill' | 'material' | 'gradient' | 'compact' | 'calendar-card' | 'ghost'",
    defaultValue: "'outline'",
    description:
      'The visual style variant of the input trigger and popover (10 options).',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size scale of the input trigger and date cells.',
  },
  {
    name: 'label',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'Optional label displayed above the picker.',
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultValue: "'Select date'",
    description: 'Placeholder text when no date is selected.',
  },
  {
    name: 'showPresets',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'Whether to display quick-pick shortcuts (Today, Last 7 Days, Next 14 Days, This Month).',
  },
  {
    name: 'showTime',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether to display an integrated time picker (HH:MM).',
  },
  {
    name: 'showToday',
    type: 'boolean',
    defaultValue: 'true',
    description:
      'Whether to display the Today quick jump button in the calendar footer.',
  },
  {
    name: 'showClear',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to display the Clear button to reset selection.',
  },
  {
    name: 'minDate',
    type: 'Date',
    defaultValue: '-',
    description: 'Minimum selectable date boundary.',
  },
  {
    name: 'maxDate',
    type: 'Date',
    defaultValue: '-',
    description: 'Maximum selectable date boundary.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the picker occupies full width of its container.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the date picker is disabled.',
  },
  {
    name: 'onChange',
    type: '(date: Date) => void',
    defaultValue: '-',
    description: 'Callback triggered when a single date is selected.',
  },
  {
    name: 'onRangeChange',
    type: '(range: DateRange) => void',
    defaultValue: '-',
    description: 'Callback triggered when a date range is selected.',
  },
];
